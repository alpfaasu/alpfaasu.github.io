#!/usr/bin/env python3
"""
Check every internship link on the board and write link-status.json.

Run it locally with Check Links.command, or let the weekly GitHub Action run it.

WHY THIS DOES NOT DELETE ANYTHING
Job boards lie. vanguardjobs.com returns a 502 roughly one try in three and is
perfectly healthy on the retry, and several of these employers sit behind CDNs
that rate limit a burst of requests from one address. A checker that deleted a
role the first time a request failed would quietly strip working opportunities
off the board, and nobody would notice until a student asked where they went.

So this script only ever REPORTS. It writes a status file. internships.html
reads that file and, for anything marked dead, sends the student to the firm's
own careers hub instead of a broken posting. The role stays on the board. A
human decides whether it is really gone.

A link has to fail THREE separate attempts, with a pause between them, before
it is called dead.

No pip install. Standard library only, so the Action needs no setup step.
"""

import json
import os
import re
import ssl
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import date, datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)            # tools/ lives one level down
DATA = os.path.join(ROOT, "data.js")
OUT = os.path.join(ROOT, "link-status.json")

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/128.0 Safari/537.36")

ATTEMPTS = 3
PAUSE = 4.0          # seconds between retries of the same URL
GAP = 0.6            # seconds between different URLs, to stay polite
TIMEOUT = 30


def read_employers():
    """Pull EMPLOYERS out of data.js by running it in node.

    data.js is plain browser JavaScript with no exports, so the only honest way
    to read it is to let a JS engine do it. Falling back to a regex would give
    wrong counts the moment somebody adds a nested quote.
    """
    script = (
        "const fs=require('fs');"
        "const src=fs.readFileSync(process.argv[1],'utf8');"
        "const {EMPLOYERS}=new Function(src+';return {EMPLOYERS};')();"
        "process.stdout.write(JSON.stringify(EMPLOYERS));"
    )
    try:
        out = subprocess.run(["node", "-e", script, DATA],
                             capture_output=True, text=True, timeout=30)
    except FileNotFoundError:
        sys.exit("node is not installed, so data.js cannot be read. Install Node and retry.")
    if out.returncode != 0:
        sys.exit("could not read data.js:\n" + (out.stderr or "").strip())
    return json.loads(out.stdout)


def first_title(html):
    """The FIRST <title>, not the last.

    A greedy match grabs the final <title> in the document, which on these
    career sites is an inline SVG icon label. That is how an earlier pass
    concluded Honeywell's careers page was called "Instagram".
    """
    m = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    if not m:
        return ""
    return re.sub(r"\s+", " ", m.group(1)).strip()[:120]


def fetch(url):
    """One attempt. Returns (status, title, error)."""
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    })
    ctx = ssl.create_default_context()
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=ctx) as resp:
            raw = resp.read(400_000)
            ctype = resp.headers.get("Content-Type", "")
            title = "" if "pdf" in ctype.lower() else first_title(
                raw.decode("utf-8", errors="ignore"))
            return resp.status, title, ""
    except urllib.error.HTTPError as exc:
        return exc.code, "", f"HTTP {exc.code}"
    except Exception as exc:                      # timeouts, DNS, TLS, resets
        return 0, "", f"{type(exc).__name__}: {exc}"


def is_tls_chain_error(err):
    """A certificate chain this machine cannot verify is NOT a dead page.

    cityyear.org serves a chain urllib rejects and curl accepts. Reporting it
    as dead would open an issue every Monday about a page that works fine for
    every student who clicks it.
    """
    return "CERTIFICATE_VERIFY_FAILED" in err or "SSLCertVerificationError" in err


# Some CDNs refuse any scripted request no matter the User-Agent. onsemi.com and
# microchip.com both do it. A 403 or 429 means the server answered and declined
# to serve a robot, which is NOT the same as the page being gone: both of those
# load perfectly in a real browser. Calling them dead would raise an issue every
# Monday forever and downgrade two working links on the board, so they get their
# own state and are reported separately.
BLOCKED_STATUSES = {401, 403, 429}


def check(url):
    """Three attempts before anything is called dead."""
    last = (0, "", "never attempted")
    for attempt in range(1, ATTEMPTS + 1):
        status, title, err = fetch(url)
        if 200 <= status < 400:
            return {"ok": True, "blocked": False, "status": status,
                    "title": title, "attempts": attempt, "error": ""}
        if is_tls_chain_error(err):
            return {"ok": False, "blocked": True, "status": status, "title": "",
                    "attempts": attempt,
                    "error": "TLS chain this machine cannot verify. The page loads "
                             "in a browser, so this is not a dead link."}
        if status in BLOCKED_STATUSES:
            return {"ok": False, "blocked": True, "status": status, "title": "",
                    "attempts": attempt,
                    "error": f"HTTP {status}, the site blocks scripted requests. "
                             f"Open it in a browser to confirm."}
        last = (status, title, err)
        if attempt < ATTEMPTS:
            time.sleep(PAUSE)
    return {"ok": False, "blocked": False, "status": last[0], "title": last[1],
            "attempts": ATTEMPTS, "error": last[2]}


# A link can be perfectly alive while the row above it is out of date. These
# two checks catch the thing a status code never will: a deadline that has
# already passed, and a season nobody has rolled forward.
DATE_PATTERNS = [
    (re.compile(r"\b([A-Z][a-z]+)\s+(\d{1,2}),?\s+(\d{4})\b"), "month-first"),
    # The agents wrote several rows as "Closes 16 September 2026".
    (re.compile(r"\b(\d{1,2})\s+([A-Z][a-z]+)\s+(\d{4})\b"), "day-first"),
    (re.compile(r"\b(\d{4})-(\d{2})-(\d{2})\b"), "iso"),
]
MONTHS = ("January February March April May June July August September "
          "October November December").split()


# A date in this field is not automatically a deadline. "Posted 17 August 2026,
# rolling" is a posting date on a role that is still open, and reading it as a
# closing date raised six false alarms on the first run. Only count a date that
# is actually presented as a closing date.
CLOSING_WORDS = re.compile(r"\b(clos|due|deadline|apply by|ends|expires|last day|by\s+\d)", re.I)
POSTED_WORD = re.compile(r"\b(posted|opened|opens|open date|live since|updated)\b", re.I)


def passed_deadline(text, today):
    """Return the passed CLOSING date in a deadline string, or None."""
    if not text:
        return None
    # A rolling role has no closing date to miss, whatever dates it mentions.
    if re.search(r"\brolling\b", text, re.I) and not CLOSING_WORDS.search(text):
        return None
    for rx, kind in DATE_PATTERNS:
        for m in rx.finditer(text):
            try:
                if kind == "iso":
                    y, mo, d = int(m.group(1)), int(m.group(2)), int(m.group(3))
                elif kind == "day-first":
                    if m.group(2) not in MONTHS:
                        continue
                    d, mo, y = int(m.group(1)), MONTHS.index(m.group(2)) + 1, int(m.group(3))
                else:
                    if m.group(1) not in MONTHS:
                        continue
                    mo = MONTHS.index(m.group(1)) + 1
                    d, y = int(m.group(2)), int(m.group(3))
                found = date(y, mo, d)
            except (ValueError, IndexError):
                continue
            if found >= today:
                continue
            # Whichever cue sits CLOSEST to the date wins. "Opens February 1,
            # closes March 15, 2026" is a deadline even though it starts with
            # Opens, because "closes" is nearer to the date that matched.
            before = text[:m.start()]
            last_posted = max((mm.end() for mm in POSTED_WORD.finditer(before)), default=-1)
            last_closing = max((mm.end() for mm in CLOSING_WORDS.finditer(before)), default=-1)
            if last_posted > last_closing:
                continue
            # A bare ISO date stands on its own. Anything else needs a closing word.
            if kind != "iso" and last_closing < 0:
                continue
            return found.isoformat()
    return None


def main():
    employers = read_employers()

    targets = []
    for emp in employers:
        if emp.get("careersUrl"):
            targets.append((emp["company"], "careersUrl", emp["careersUrl"]))
        for role in emp.get("roles", []):
            if role.get("link"):
                targets.append((emp["company"], role["role"], role["link"]))

    # The same URL can appear on more than one row. Fetch it once.
    unique = sorted({t[2] for t in targets})
    print(f"Checking {len(unique)} unique URLs across {len(targets)} rows "
          f"and {len(employers)} employers.\n")

    results = {}
    for i, url in enumerate(unique, 1):
        res = check(url)
        results[url] = res
        mark = "ok  " if res["ok"] else ("BLOK" if res.get("blocked") else "DEAD")
        print(f"  [{mark}] {i:>3}/{len(unique)}  {res['status'] or '---':>3}  {url[:88]}")
        if not res["ok"]:
            print(f"           after {res['attempts']} attempts: {res['error']}")
        time.sleep(GAP)

    dead, blocked = [], []
    for company, label, url in targets:
        res = results[url]
        if res["ok"]:
            continue
        row = {"company": company, "role": label, "url": url,
               "status": res["status"], "error": res["error"]}
        (blocked if res.get("blocked") else dead).append(row)

    today = datetime.now(timezone.utc).date()
    expired = []
    for emp in employers:
        for role in emp.get("roles", []):
            gone = passed_deadline(role.get("deadline", ""), today)
            if gone:
                expired.append({"company": emp["company"], "role": role.get("role", ""),
                                "deadline": role.get("deadline", ""), "passed": gone})

    payload = {
        "checked": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "checked_utc": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "total_urls": len(unique),
        "total_rows": len(targets),
        "dead_count": len(dead),
        "dead": dead,
        # Reported but deliberately NOT counted as dead. See BLOCKED_STATUSES.
        "blocked_count": len(blocked),
        "blocked": blocked,
        # A live link on a row whose deadline has already gone.
        "expired_count": len(expired),
        "expired": expired,
        # Only failures are recorded per URL. A file listing every healthy link
        # would churn in git on every run for no benefit.
        "status": {url: {"status": r["status"], "error": r["error"],
                         "blocked": bool(r.get("blocked"))}
                   for url, r in results.items() if not r["ok"]},
    }

    with open(OUT, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, indent=2)
        fh.write("\n")

    print(f"\n{len(unique) - len(results) + sum(1 for r in results.values() if r['ok'])}"
          f" of {len(unique)} URLs are healthy.")
    if dead:
        print(f"{len(dead)} row(s) point at a dead link:\n")
        for d in dead:
            print(f"  {d['company']}: {d['role']}\n    {d['url']}\n    {d['error']}")
        print("\nNothing was deleted. The board will send those students to the")
        print("employer's careers hub until somebody fixes or removes the row.")
    else:
        print("No dead links on the board.")

    if blocked:
        print(f"\n{len(blocked)} row(s) sit behind a CDN that refuses scripts.")
        print("These are NOT dead and nothing about them changes on the site.")
        print("Open one in a browser if you want to confirm it:\n")
        for b in blocked:
            print(f"  {b['company']}: {b['role']}\n    {b['url']}")

    if expired:
        print(f"\n{len(expired)} row(s) have a deadline that has already passed:\n")
        for e in expired:
            print(f"  {e['company']}: {e['role']}\n    says {e['deadline'][:70]}")
        print("\nThe links still work. The dates do not. Somebody has to decide")
        print("whether each one reopens or comes off the board.")

    print(f"\nWrote {os.path.relpath(OUT, ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
