"""Stamp the shared files each page loads with a fingerprint of their content.

    <script src="data.js?v=3f9a1c2e"></script>

Browsers cache data.js, site.js and site.css hard, so after a publish people
kept seeing the old site until they hard-refreshed (the founding year showed
2012/13 an hour after it was changed to 2012, 2026-10-07). The ?v= value is
the first eight characters of the file's own MD5, so it changes exactly when
the file changes and a browser has to fetch the new copy; unchanged files
keep their stamp and stay cached.

Run by Publish Changes.command before it commits. Safe to run any time:
it only rewrites the src/href of these three files in the six root pages.
events.js is not stamped here because the ClickUp bot rewrites it twice a
day without touching the HTML; index.html loads it with an hourly stamp.
"""
import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ["data.js", "site.js", "site.css"]
PAGES = ["index.html", "internships.html", "alumni.html", "sponsors.html",
         "program.html", "opportunities.html"]


def stamp(name):
    return hashlib.md5((ROOT / name).read_bytes()).hexdigest()[:8]


def main():
    stamps = {name: stamp(name) for name in ASSETS}
    changed = 0
    for page in PAGES:
        path = ROOT / page
        text = path.read_text(encoding="utf-8")
        new = text
        for name, v in stamps.items():
            pattern = r'((?:src|href)=")' + re.escape(name) + r'(?:\?v=[0-9a-f]+)?(")'
            new = re.sub(pattern, r"\g<1>" + name + "?v=" + v + r"\g<2>", new)
        if new != text:
            path.write_text(new, encoding="utf-8")
            changed += 1
    print("Stamped " + ", ".join(n + "=" + v for n, v in stamps.items()) +
          " in " + str(changed) + " page(s).")


if __name__ == "__main__":
    main()
