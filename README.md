# ALPFA at ASU

The chapter website. Plain HTML, CSS and JavaScript. No framework, no build
step, no npm. Open `index.html` in a browser and it works.

**Live at https://alpfaasu.github.io/**

It is public but hidden from search: every page carries a "Working draft" banner
and a `noindex` tag, and `robots.txt` blocks crawlers. Anyone you send the link
to can read it. Google cannot find it. That stays until the officer profiles and
the sponsorship packet are real.

---

## What is on it right now

Last verified 2026-09-17.

| | |
| --- | --- |
| Internship roles | **180** across **58 employers** and **9 sectors** |
| Scholarships | **31** |
| Research programmes | **27** |
| Campus jobs | **26** |
| Career pipeline programmes | **57** |
| **Total opportunities** | **321** |
| Unique URLs, all verified | **318** |

Link health as of the last run: **0 dead, 0 expired deadlines, 7 blocked**
(blocked means a CDN refuses scripted requests; those pages work fine in a
browser). See `link-status.json`, rewritten by the weekly check.

---

## The six pages

| File | What it is |
| --- | --- |
| `index.html` | Front page. Hero slideshow, stats, About Us, values, three pillars, the board with coffee chats, partner wall, semester calendar, CTA. |
| `internships.html` | The board. Sector chooser, a collapsed quiz, a sticky filter bar, then one card per employer. |
| `opportunities.html` | Four tabs: Scholarships, Research, Campus jobs, Pipelines. Filtered by eligibility rather than by category. |
| `alumni.html` | Where our members end up. Empty on purpose until real alumni agree to be listed. |
| `program.html` | Renders any of the nine programmes from `?p=` in the URL. |
| `sponsors.html` | Sponsorship tiers. **No pricing**, deliberately. |

`data.js` holds every piece of content. `site.css` and `site.js` are shared.
Nothing else needs editing to change what the site says.

---

## Everything lives in data.js

`CHAPTER`, `HERO_SLIDES`, `ABOUT`, `NOT_US_INTERNAL`, `MISSION`, `VALUES`,
`STATS`, `PILLARS`, `PROGRAMS`, `BOARD`, `SECTORS`, `YEARS`, `MAJORS`, `QUIZ`,
`EMPLOYERS`, `SCHOLARSHIPS`, `RESEARCH`, `CAMPUS`, `PIPELINES`, `ALUMNI`,
`COMPANIES`, `TIERS`, `EVENTS`.

Three that are easy to get wrong:

- **`NOT_US_INTERNAL` is never rendered.** It is the set of beliefs the rest of
  the copy is written against. Check new copy against it. Do not put it on a page.
- **`ALUMNI` ships empty.** Do not invent alumni to fill the page. A made up name
  that a student actually emails is worse than an honest empty page, and the page
  already says so in its own words.
- **`TIERS` has no `price` field.** The old figures were invented placeholders.
  Pricing is agreed with the board and discussed with a company directly.

---

## Rules that were learned the hard way

Each of these came from a real bug that reached the working site.

**Do not read a fact out of prose with a pattern.** This went wrong three times
in one day:

- A DACA filter matched the word "DACA" and flagged scholarships whose text said
  "**Not** open to DACA" as open. It marked 21 of 31 as open when 11 are.
- Money parsing produced "$2,000 to $1,000" for LULAC, "$1.3" for W. P. Carey's
  $1.3 million, and "Up to $6,000" for a $33,000 award.
- Deadline parsing read "Posted 17 August 2026, rolling" as an expired deadline.

If a fact matters, it gets its own field in `data.js`, set by hand from the
provider's own words. `daca`, `amountShort`, `paidShort` and
`openWithoutCitizenship` all exist for this reason.

**A 200 status does not mean a link works.** On 2026-09-15 all 49 links returned
200 while three were dead ends: Northern Trust pointed at intern testimonials
with nothing to apply to, and Freeport's pages were healthy brochures carrying
no jobs, because every requisition had moved to `talent.fmjobs.com`. Always check
the page title, and for a JavaScript job board check the rendered result count.

**A 403 usually means a CDN blocking scripts, not a dead page.** onsemi.com,
microchip.com and srpnet.com all do it. So does an unverifiable TLS chain, which
is why cityyear.org was wrongly called dead. Both are now a "blocked" state.

**Match the FIRST `<title>`, never the last.** A greedy regex grabs the final
`<title>` in the document, which on these sites is an inline SVG icon label.
That is how a pass once concluded Honeywell's careers page was called "Instagram".

**Never write a URL you have not fetched.** Three Axon links were typed from
memory during a merge instead of copied from the verified research, and all
three 404'd.

---

## Nine sectors, and why the quiz scores five

The original five (`consulting`, `accounting`, `finance`, `tech`, `engineering`)
are **ways of working**. The four added later (`ai`, `health`, `public`,
`startups`) are **employer types** and cut across all five: an AI role can be
consulting work, a government role can be accounting work.

So the quiz scores only the five. `scoredSectors()` filters on
`QUIZ_MAX[key] > 0`. A sector no question scores has a denominator of zero, and
dividing by it rendered `NaN%` bars. The result panel names the four
cross-cutting fields instead.

Adding a sector means deciding which kind it is. A way of working needs an option
on **every** QUIZ question plus a rebalance. An employer type needs neither and
must not get quiz weights. Either way, **every major needs a `fit` for every
sector** or the ranking sorts on undefined.

**A role can override its employer's sector**: `role.sector || employer.sector`.
Intel appears under both Technology and Engineering from one card, so its name,
location, logo and careersUrl are never duplicated. Do not solve this with a
second card.

---

## The filter bar: two behaviours, on purpose

- **Sector** and **Year** filter. They narrow what is shown.
- **Major** ranks. It reorders the fields by fit, labels each one, and **never
  hides anything.** The role count stays at the full total whichever major is
  picked. If choosing a major ever drops that count, somebody has turned a
  ranking into a wall, which contradicts the chapter's positioning.

`YEARS[].levels` maps a year to the role levels it should see, so a junior sees
roles marked `Junior` **and** `Any`.

---

## What runs by itself

`.github/workflows/check-links.yml` runs every Monday at 13:00 UTC on GitHub's
servers. No laptop, no terminal, and it keeps working after whoever set it up
graduates. It runs `tools/check_links.py`, commits `link-status.json`, and keeps
**one** reusable issue rather than opening a new one weekly.

It checks two things:

1. **Dead links.** Three attempts with a pause before anything is called dead,
   because vanguardjobs.com 502s about one try in three and is fine on retry.
2. **Passed deadlines.** A link can be alive on a row whose date went weeks ago.
   Only a date presented as a *closing* date counts; whichever cue sits closest
   to the date wins.

**It never deletes.** A dead link means the student is sent to the employer's
careers hub and the role stays visible. A human decides whether it is really gone.

**It verifies, it does not discover.** It cannot find a newly opened posting,
because that needs judgement. The board drifts toward stale over months and says
loudly which rows have gone off rather than quietly serving them.

---

## Design rules, settled, do not drift

- Background is light, set once by `--paper` in site.css. **No gradients.**
- Palette from the chapter's own Instagram: navy `#172A5E`, red `#D5372E`, gold
  `#E9B949` sparingly, on `#F4F3F1`. ASU gold and true black were both rejected.
- **Square corners.** Only buttons and filter chips are pill-shaped.
- Structure from hairline rules and 1px grid gaps, not bordered rounded cards.
- Type is **Archivo** plus **JetBrains Mono** for numbers and labels.
- Photos render grayscale, colour on hover.
- **No em dashes or en dashes anywhere in visible text.**
- Nav carries the same six items on every page so the 1140px collapse holds.
- Never let a data field set a layout width. `.cards > * { min-width: 0 }` is
  load bearing.

---

## The four buttons

Double-click these. You never need the Terminal.

| | |
| --- | --- |
| `Open Website.command` | Preview locally. |
| `Update Photos.command` | Run after adding photos. |
| `Publish Changes.command` | Puts changes on the live site. |
| `Continue with Claude.command` | Picks the project back up in a new Claude session. |
| `Take Over.command` | Same, but prints the full state of the site first and briefs the new session. |

**Fastest way in:** Spotlight. Press Cmd+Space, type `alpfa`, press Return.
That runs `~/Applications/ALPFA Takeover.app`, a small wrapper that opens
`Take Over.command` in Terminal. The wrapper holds no logic of its own, so it
never goes stale; if the project folder moves, edit the one path inside it.

A double-clicked `.command` runs a NON-interactive zsh and does not read
`~/.zshrc`, which is the only place `$HOME/.local/bin` is added to PATH and
where the `claude` binary lives. Every launcher sets that PATH itself. Do not
remove those lines or double-clicking silently breaks while Terminal keeps
working.

---

## What is still open

**Waiting on people**

- Seven of eight officer seats are empty. Each needs a name, major, grad year,
  headshot, LinkedIn, a card line, a longer story, up to four hobby photos, and
  a `coffeeChat` value.
- No alumni profiles yet. Nobody goes on that page until they agree to be asked.
- `ABOUT.photos` is empty and all nine programme photo walls are empty.
- Real sponsorship pricing, before any company sees `sponsors.html`.
- Chapter numbers (380 members, 74 events, 15 officers, chartered 2015) came
  from Sun Devil Central and have never been confirmed.
- Vanguard and Northern Trust have no logo file and draw as monograms.

**Waiting on a decision**

- **A second GitHub owner.** The org and the repo both have exactly one owner.
  If that account is lost the chapter loses the site. This is the one that
  matters most long term.
- `alpfaatasu.org` is registered and parked at GoDaddy, renewed 2026-08-12 and
  paid through 2027-07-17, so the chapter very likely still owns it. Somebody
  needs to find the login, then it is a CNAME away.
- The September 4 general meeting has passed and is still on the calendar.

**Research already done, not yet used**

`tools/research/*.json` holds every verified item, including roughly 30
programmes that were **rejected** with evidence, such as Bain BExcel and BCG
Explore, which do not exist under those names, and Meta University, which closed.
Read that before re-researching anything.

---

## Facts worth not re-deriving

- ASU has moved off Handshake to **CareerLink** (12twenty). Older advice is stale.
- Freeport-McMoRan migrated to `talent.fmjobs.com`. The old `jobs.fcx.com`
  internships page is a brochure with no jobs on it.
- Honeywell and **Honeywell Aerospace** are deliberately separate cards, because
  Aerospace spun off into its own company with its own job system. That is the
  one allowed exception to one card per company.
- Oracle job boards fuzzy-match: `keyword=intern` returns "Internal Auditor".
  Use `keyword=Summer Intern`.
- Intel requisitions list a primary site plus others, so a Phoenix role can sit
  at an Oregon web address. Check `additionalLocations` before assuming.
- The chapter Instagram is **@alpfaasu**, login-walled, so it cannot be curled.
