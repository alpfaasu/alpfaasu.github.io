# ALPFA at ASU website: handoff

Paste the block at the bottom into a new terminal. Everything else here is for a human.
Last trued up 2026-10-06.

## Links

| What | Where |
| --- | --- |
| Live site | https://alpfaasu.github.io/ |
| Opportunities (Scholarships, Research, Campus jobs, Certificates) | https://alpfaasu.github.io/opportunities.html |
| Internship board | https://alpfaasu.github.io/internships.html |
| Partners | https://alpfaasu.github.io/sponsors.html |
| Alumni | https://alpfaasu.github.io/alumni.html |
| A program page | https://alpfaasu.github.io/program.html?p=socials |
| Code, public | https://github.com/alpfaasu/alpfaasu.github.io |
| Actions (calendar sync, link check, Pages watchdog, retry) | https://github.com/alpfaasu/alpfaasu.github.io/actions |
| Link-check issue the bot keeps open | https://github.com/alpfaasu/alpfaasu.github.io/issues/1 |
| Backup mirror, private | https://github.com/renarsm88/alpfa-asu-backup |
| Photos source, Drive | "Brand & Content F26" in rmelniko@asu.edu, under Shared with me |
| Events source, ClickUp | workspace ALPFAatASU, space "Events Pipeline" |
| Chapter Instagram | https://www.instagram.com/alpfaasu/ |

## Folder map

```
~/Desktop/Projects/alpfa-asu/
  index.html  internships.html  opportunities.html  sponsors.html  alumni.html  program.html
  data.js            every piece of content. Edit this, never the HTML.
  events.js          GENERATED twice daily from ClickUp. Do not edit.
  site.css  site.js
  photos/board|gallery|programs/      served photos; _originals/ inside each keeps what was dropped in
  logos/
  tools/build.py     photo resize, run by Update Photos.command
  tools/check_links.py   weekly, never deletes
  tools/sync_events.py   ClickUp -> events.js
  tools/research/    pipelines.archive.js and the research JSON
  guide/01..06       how-to; 05 is the open-items list
  CLAUDE.md          THE source of truth: rules, decisions, mistakes not to repeat
  README.md          technical state
  HANDOFF.md         this file
  *.command          Open Website, Update Photos, Publish Changes, Continue with Claude, Take Over
```

## How to resume

- Inside any Claude session, any folder: type `/alpfa`
- In a terminal: type `alpfa` (or `alpfa status` for the health check only)
- From the Finder: double-click `Continue with Claude.command` or `Take Over.command`

All three pull, run the health check, and read CLAUDE.md, README and guide 05.

## Runs by itself

Calendar from ClickUp at 5am and 5pm Phoenix (E-Board excluded). Link check
Mondays, including the certificates. Pages watchdog every six hours. A failed
scheduled run is retried once. Secret needed: `CLICKUP_TOKEN` in Actions secrets.

## Still owed, by people not code

Per officer: experience, LinkedIn (6 of 15 in), statement, story, coffee chat
contact and who should book it, up to 4 personal photos. The board: the real
sponsorship packet. Photos: Excel wall (mid-October), National Convention
album. Alumni: one-to-one asks with consent, email only. Then the draft banner
and noindex come off, all six pages plus robots.txt.

## Paste this into a new terminal

```
cd ~/Desktop/Projects/alpfa-asu && git pull --rebase origin main && claude
```
then type `/alpfa`. Or just `alpfa` from anywhere.
