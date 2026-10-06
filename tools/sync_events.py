#!/usr/bin/env python3
"""
Pull the chapter's events out of ClickUp and write events.js for the website.

Runs on GitHub's servers once a day (see .github/workflows/sync-events.yml),
so the calendar on the homepage refreshes without anybody logging in anywhere.

Where the events live: the "Events Pipeline" space in the ALPFAatASU workspace,
one list per kind. Each task is one event. Its date and time are the task's own
Start and Due dates. The venue is the "Location/Venue:" line in the description,
which every event task carries because they are all duplicated from one
template task. Cancelled tasks are left out. Nothing else is filtered: a past
event stays in the list, the calendar simply shows it in its month.

Writes events.js, which index.html loads AFTER data.js. It sets
window.EVENTS_LIVE, and the homepage uses that when present and the hand
written EVENTS in data.js when not. So the site keeps working with no token,
no network and no Action, it just shows the hand written list.

Needs CLICKUP_TOKEN in the environment. Without it the script says so and
exits 0 on purpose, so a fresh clone or an Action run before the secret is set
does not produce a red X.
"""
import json, os, sys, re, datetime, urllib.request, urllib.error

TEAM = "90132880215"
LISTS = {                      # ClickUp list id -> the "kind" the site shows
    "901327263715":     "Social",
    "901327263720":     "Professional",
    "901327263869":     "Networking",
    # "1000400000010441" is E-Board Events: internal board meetings, not for members. Left out.
    # "901327627845" is ASU Calendar Dates: university dates, not chapter events. Left out.
}
# Belt to the braces above: if a board meeting is ever filed in a member list by
# mistake, the title still keeps it off the public calendar.
INTERNAL_TITLE = re.compile(r"\be-?board\b", re.I)
PHOENIX = datetime.timezone(datetime.timedelta(hours=-7))   # Arizona never changes clocks
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(HERE, "events.js")


def fetch(list_id, token):
    tasks, page = [], 0
    while True:
        url = f"https://api.clickup.com/api/v2/list/{list_id}/task?include_closed=true&subtasks=false&page={page}"
        req = urllib.request.Request(url, headers={"Authorization": token})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.load(r)
        tasks += data.get("tasks", [])
        if data.get("last_page", True) or not data.get("tasks"):
            break
        page += 1
    return tasks


def day(ms, date_only_marker=False):
    """ClickUp dates are epoch milliseconds. Return the ISO day of the event.

    A task with a real time is a real instant: convert to Phoenix. A task with
    only a date is stored by ClickUp at 04:00:00 UTC on that date, which in
    Phoenix is 21:00 the evening before, so it would print a day early. But
    21:00 Phoenix is ALSO exactly 04:00 UTC, and the socials end at 9pm, so
    the 04:00 signature alone cannot tell the two apart. The caller passes
    date_only_marker=True only when the task has no start date at all, which
    is the one shape the event template never produces for a timed event.
    """
    if not ms:
        return None
    utc = datetime.datetime.fromtimestamp(int(ms) / 1000, datetime.timezone.utc)
    if date_only_marker and (utc.hour, utc.minute, utc.second) == (4, 0, 0):
        return utc.date().isoformat()
    return utc.astimezone(PHOENIX).date().isoformat()


def venue(description):
    """The template puts the venue on a labelled line. Read that line only, and
    give up rather than guess when it is not there. A wrong venue sends a
    student to the wrong building, an empty one sends them to the group chat."""
    if not description:
        return ""
    # Same line only. \s* would cross a newline, so a BLANK venue line used to
    # hand back the next bullet, "Owner (who's running it):", as the venue.
    m = re.search(r"Location[ \t]*/?[ \t]*Venue[ \t]*:[ \t]*(.*)", description, re.I)
    if not m:
        return ""
    v = m.group(1).strip(" -*_\t")
    return "" if v.lower() in ("", "tbd", "tba", "empty") else v


def to_event(task, kind):
    if (task.get("status") or {}).get("status", "").lower() == "cancelled":
        return None
    if INTERNAL_TITLE.search(task.get("name", "")):
        return None
    has_start = bool(task.get("start_date"))
    start = day(task.get("start_date"))
    due = day(task.get("due_date"), date_only_marker=not has_start)
    date = start or due
    if not date:
        return None                     # an event with no date cannot go on a calendar
    ev = {"date": date, "title": task["name"].strip(), "where": venue(task.get("description")), "kind": kind}
    # "end" only for a genuinely multi-day event. A 6pm to 9pm social is one
    # day, even when 9pm Phoenix rolls past midnight UTC.
    if has_start and due and due > date:
        ev["end"] = due
    return ev


def main():
    token = os.environ.get("CLICKUP_TOKEN", "").strip()
    if not token:
        print("CLICKUP_TOKEN is not set. Nothing synced; the site keeps its hand written EVENTS.")
        return 0
    events = []
    for list_id, kind in LISTS.items():
        try:
            tasks = fetch(list_id, token)
        except urllib.error.HTTPError as e:
            print(f"ClickUp returned {e.code} for list {list_id} ({kind}). Skipping it.", file=sys.stderr)
            continue
        for t in tasks:
            ev = to_event(t, kind)
            if ev:
                events.append(ev)
    events.sort(key=lambda e: (e["date"], e["title"]))
    stamp = datetime.datetime.now(PHOENIX).strftime("%Y-%m-%d %H:%M")
    body = "/* GENERATED by tools/sync_events.py from ClickUp on " + stamp + ". Do not edit by hand,\n" \
           "   the next daily run overwrites it. Edit the event in ClickUp instead. */\n" \
           "window.EVENTS_LIVE = " + json.dumps(events, indent=2, ensure_ascii=False) + ";\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(body)
    print(f"Wrote {len(events)} event(s) to events.js")
    return 0


if __name__ == "__main__":
    sys.exit(main())
