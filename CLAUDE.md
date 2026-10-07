# ALPFA at ASU website

Renārs is **VP of External Outreach** for the ALPFA student chapter at Arizona State
University. This is the chapter website, built as a draft to send to the chapter
president for feedback. It IS live at https://alpfaasu.github.io/, but every page
carries a draft banner and a noindex tag, so it is reachable by link and not by
search.

## Read this first

The site is plain HTML, CSS, and JavaScript. No framework, no build step, no npm.
Open `index.html` in a browser and it works.

**All content lives in `data.js`.** Never hardcode chapter content into the HTML.
If something needs to change on the page, it changes in `data.js`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Front page. Full-bleed hero SLIDESHOW (HERO_SLIDES in data.js, autoplay 6s, arrows + dots, pauses on hover and when the tab is hidden, no autoplay under prefers-reduced-motion), stats, About Us, core values, three pillars, board, alumni firm wall (twelve firms from ALUMNI, each a link to `alumni.html?firm=`), semester list + compact month calendar, internship band, CTA. Page-specific CSS is in its `<style>` block. |
| `internships.html` | Internship board. Three group squares (SECTOR_GROUPS) that open the nine field cards, then a QUIZ for people who do not know what field they want, then a filter bar (sector + year filter, major ranks), then one card per EMPLOYER. With no filter set a card shows ONE role and a "+N more" row; any filter shows every role. Every card ends with the firm's own "All internships at X" hub. |
| `sponsors.html` | Sponsorship tiers ranked by level, each with perks and a partner wall. No pricing. |
| `alumni.html` | Where our members end up. A directory BY FIRM built from `ALUMNI`: one tile per company anyone has worked at, tap it for the people (there now / was there, with the roles held there), email and LinkedIn buttons per person, an Everyone view, search. `?firm=Name` opens a firm on load, which is what the homepage wall links to. Honest when empty. |
| `opportunities.html` | Four tabs: Scholarships, Research, Campus jobs, Certificates. Filtered by eligibility. Renders `SCHOLARSHIPS`, `RESEARCH`, `CAMPUS`, `CERTIFICATES`. |
| `program.html` | One page that renders any of the nine programs from `PROGRAMS` in data.js, chosen by `?p=` in the URL. Each has a lede, detail blocks, a photo wall, and the archive of that programme's past events from `PAST_EVENTS` (photos, the QR link, who came). |
| `data.js` | **Every piece of content.** CHAPTER, ABOUT, VALUES, STATS, PILLARS, PROGRAMS, BOARD, SECTORS, YEARS, MAJORS, QUIZ, EMPLOYERS, COMPANIES, TIERS, EVENTS. |
| `site.css` | Shared tokens, nav, buttons, footer. |
| `site.js` | Scroll reveal, count-up stats, image fallbacks. |
| `START HERE.md` | The human entry point. Points at the guide. |
| `guide/01..06` | Step-by-step docs: editing, publishing, how the GitHub org was set up, accounts, open items, resuming in a new terminal. |
| `tools/build.py` | Resizes photos. Run by Update Photos.command. Lives in tools/, looks one level up. |
| `tools/build_share.py` | Packs everything into `tools/offline-copy/alpfa-asu-offline.html`. |
| `Open Website.command` | Preview locally. |
| `Update Photos.command` | Run after adding photos. |
| `Publish Changes.command` | Rebuilds the offline copy, commits, pushes. Prompts for a message. |
| `Continue with Claude.command` | Opens a new Claude session in this folder after a `git pull`. |
| `Take Over.command` | Hands the project to a fresh session. Runs a health check, prints the real state read out of data.js, then starts Claude with a briefing and tells it to report before touching anything. |
| `README.md` | The full state of the project in one file. Start here when picking it back up. |

Layout rule: the six HTML files, `data.js`, `site.css`, `site.js`, `photos/` and
`logos/` MUST stay at the repo root because GitHub Pages serves from root.
Only docs (`guide/`) and scripts (`tools/`) may be nested.

## Positioning (settled 2026-08-27, this drives all copy)

The chapter is **not** a business or professional club. It is a community defined
by the pursuit of excellence. Career outcomes are something it PRODUCES, not the
reason it exists. Any copy that sells the chapter as a recruiting pipeline is wrong
and should be rewritten.

The charter is written INTO the existing sections as prose. It is not its own
section, and it must not become one. `ABOUT.paragraphs` carries who we are, who we
are for, and who you become. `MISSION` plus `VALUES` (the six principles) fill the
one values section. Everything else on the site should sound like it came from there.

**Do not add sections for this material.** An earlier pass split it into five
separate sections (who we aren't, who we are for, mission, principles, who you
become) and it was rejected. Rewrite existing copy instead of adding blocks.

`NOT_US_INTERNAL` in data.js is **never rendered**. It is the set of beliefs the
rest of the copy is written against. Check new copy against those four lines before
publishing. Do not add a "who we aren't" section back to the site, it was removed
deliberately: those beliefs shape the tone, they are not public-facing content.

Load-bearing lines that ARE published, do not soften them:
- "If a member goes through us and is unchanged, we have failed."
- Open to everyone, built for the person in pursuit of excellence.
- "Our job is to meet people where they are and move them up." 

## Design rules (settled, do not drift)

Renārs rejected the first version as looking "too much like AI style." The current
direction is deliberate. Keep it.

- **Background is light.** Set once by `--paper` in site.css (currently `#F1F0EE`);
  `--paper-2` is the alternating band. Change those two tokens and the whole site
  moves. True black was tried and rejected as too heavy; ASU maroon before that.
- **No gradients anywhere.**
- **Palette comes from the chapter's own Instagram graphics**, which are navy-led:
  navy `#172A5E` (brand surface), red `#D5372E` (accent), gold `#E9B949` (sparingly),
  on a light ground `#F4F3F1`. ASU gold `#FFC627` was tried and rejected as mustard.
  Navy carries the weight: stats band, footer, teaser, pillar one, sponsor blocks.
- Stat numbers are **white on navy with a red rule**, never yellow.
- The three pillar panels are duotones: a desaturated chapter photo under a
  brand-coloured wash. All three carry **white text**. The gold wash is deepened
  to `--gold-deep #8F6913` specifically so white clears WCAG AA (5.0:1) on it.
  Bright `--gold #E9B949` stays for accents on dark grounds only.
- **Section padding is 80px** (56 on a phone), set once by `.section` in site.css.
  It was 112 until 2026-10-06, when Renārs pointed at the 224px of empty band
  between the board and the partners and said "too much space". Do not creep it
  back up per page; change the one rule.
- **Square corners** on cards and panels. Only buttons and filter chips are pill-shaped.
- Structure comes from **hairline rules and 1px grid gaps**, not from bordered rounded cards.
- Flat color blocks: the pillar row is solid black, solid red, solid yellow, butted together.
- Type is **Archivo** (display uppercase, heavy) plus **JetBrains Mono** for numbers,
  labels, and metadata. Section headlines stay sentence case; the hero is uppercase.
- Photos render grayscale and go color on hover.
- **Motion rules, set after chapter feedback.** Reveals are .38s with a 14px rise
  and fire 140px BEFORE an element enters view, so content is settled by the time
  you arrive. Staggers must be one continuous wave (`i * ms`), never `(i % cols)`,
  which restarts on each row and reads as flicker. Keep any grid's total stagger
  under ~300ms.
- **Section jumps are JS, not CSS.** `initAnchorScroll` in site.js runs a flat
  420ms scroll for any distance. Native `scroll-behavior: smooth` scales with
  distance, which made long jumps crawl. Do not put it back.
- **No em-dashes anywhere in visible text.** Use a period, a comma, or a hyphen.
- **No "real" or "really" as emphasis** (Renārs, 2026-10-07: "stop using the word
  real all the time"). About forty were rewritten that day. Use the precise word
  ("official page", "binding", "a named person") or drop it.
- Nav has 6 items needing ~1057px, so it collapses at 1140px into a toggle menu
  built by `site.js` (one place, all six pages get it). Every page carries the
  same six nav items, so the collapse threshold stays correct.

The logo is dark-on-white artwork. On the light ground it needs no chip, just
`mix-blend-mode: multiply`. Company logos use the same treatment.

## The quiz and the filters on internships.html

Two things drive the board, both fed entirely by data.js.

**The filter bar** (sticky, under the sector cards) has three controls and they
do NOT all behave the same way:

- **Sector** and **Year** filter. They narrow what is on screen.
- **Major** RANKS. It re-orders the four field groups by that major's `fit`,
  tags each group head with "Usual route" / "Common route" / "Less common
  route", and prints the major's note once under the best-fit group.
  **It never hides a field.** The role count stays at the full total whichever major
  is picked, and that is the test: if choosing a major ever drops the count,
  somebody has turned a ranking into a wall, which contradicts the positioning.
- `YEARS[].levels` maps a year to the role `level` values it should see. A
  junior sees `Junior` and `Any`, not just `Junior`. This replaced raw
  single-level chips, which used to hide every role marked `Any`.
- `MAJORS[].fit` is 1 to 3 per sector key. 3 renders as "Usual route", 1 as
  "Less common route". Nothing here is ever a no.

**A field-plus-year-plus-major summary panel was built and then cut on
2026-09-14.** It duplicated what the filter bar already does. Do not rebuild it.
The orphaned copy it used (`SECTORS[].typical`, `YEARS[].focus`, `.timing`,
`.move`) is still in data.js and marked as not rendered.

**The quiz** is 12 questions in `QUIZ`. It picks a JOB FIELD, never a major.
Its primary action goes straight to the jobs: one click filters the board to
that field and scrolls to it. Do not put the roles behind another form, the
point of the quiz is that someone who knows nothing about themselves still
lands on real postings.

Each option carries weights across the sector keys. A sector scores as a share
of *the most it could have scored on these questions*, not as a raw total, so a
field cannot win just by appearing as a secondary weight more often. Check this
after editing:

- Every sector's denominator should land within a point or two of the others.
- Random answers should win roughly 25% each. If one field drifts past about 30%
  it is collecting secondary weights it has not earned. Finance did exactly this
  on the first pass and the fix was deleting its `+1`s from options whose real
  answer was another field.
- Someone who answers consistently for one field should score 100%.

Add or remove questions freely, the scoring adapts. Keep the options honest.
Nothing in there should read like a horoscope.

## Link checking, and why it never deletes

`tools/check_links.py` fetches every `careersUrl` and every role `link` in
`EMPLOYERS` and writes `link-status.json`. The weekly GitHub Action in
`.github/workflows/check-links.yml` runs it 13:00 UTC Mondays, commits the
status file, and keeps ONE issue open that it comments on rather than opening a
fresh issue every week.

**It reports. It never removes a role.** Job boards lie: vanguardjobs.com
returns a 502 roughly one try in three and is fine on the retry. A checker that
deleted on first failure would silently strip working opportunities off the
board. So a link has to fail THREE attempts, with a pause between, before it is
even called dead, and then the page falls back to the employer's careers hub
while the role stays visible. A human decides whether it is really gone.

Two bugs this project already hit, both guarded in the script, do not
reintroduce them:

- **A 200 does not mean the link works.** In September 2026 all 49 links
  returned 200 while three were dead ends: Northern Trust pointed at intern
  testimonials with nothing to apply to, and Freeport's fcx.com pages were
  healthy brochures carrying no jobs at all, because every requisition had moved
  to `talent.fmjobs.com`. Always check the page title, and for a JS job board
  check the rendered result count.
- **Match the FIRST `<title>`, never the last.** A greedy regex grabs the final
  `<title>` in the document, which on these sites is an inline SVG icon label.
  That is how an earlier pass concluded Honeywell's careers page was called
  "Instagram" and Northern Trust's was "Client Login".

Oracle job boards fuzzy-match, so `keyword=intern` returns "Internal Auditor".
Use `keyword=Summer Intern`. Always prefer a stable program page to a job
requisition URL, which expires every cycle.

## A role can override its employer's sector

`EMPLOYERS` groups by company, but a company is not one sector. Intel sits under
Technology for its business roles and under Engineering for its silicon ones,
off ONE card. The rule is in `roleSector()` in internships.html:

    role.sector || employer.sector

So a role with no `sector` of its own inherits the employer's, which is why
adding the fifth sector needed no edits to the other employers. Do NOT solve
this by adding a second Intel entry: the company name, location, logo and
careersUrl would exist twice and drift apart the first time somebody updates
only one of them.

The test that this still works: the role count in the filter bar must stay at
the full total no matter which sector or major is selected, because major ranks
and never filters, and every role must appear under exactly one sector group.

**Engineering & Semiconductor** was added 2026-09-15 as the fifth sector, 12
employers and 40 roles, nearly all of them inside the Phoenix metro, which is
the opposite of the business sectors. Aerospace and defense roles are gated on
US person status under export control and the notes say so plainly, because
that is law rather than preference and a student should not find out at the end
of an application.

Adding a sector means four things, not one: a SECTORS entry with `steps` and
`quizResult`, an `engineering` key in EVERY major's `fit` in MAJORS, a fifth
option carrying that sector's weight on EVERY question in QUIZ, and then a
rebalance. The first pass had engineering winning only 15.7 percent of random
answers because it appeared solely as a lone weight of 3 and never as a
secondary, so mixed answers never drifted toward it. Adding real secondary
affinities brought all five fields to between 19.5 and 20.7 percent.

## No sponsorship pricing on the site

`TIERS` has no `price` field and sponsors.html does not render one. The numbers
that used to sit there were invented placeholders. Pricing is settled with the
board and discussed with a company directly. Do not put a price back on that
page without the real packet.

The PERKS are still placeholders even though the pricing is gone, and the link
can reach a company before the board has settled them. So `TIERS_STATUS` in
data.js renders a notice ABOVE the grid saying the levels are a draft and not an
offer. It sits above the tiers on purpose: the footnote that used to sit under
the grid was read after four authoritative looking tiers, and it still said
"tiers and pricing" on a page that shows no pricing. Delete `TIERS_STATUS` once
the real packet is in `TIERS` and the block removes itself, the render is guarded
on the constant existing.

## The packet email is written for them

"Request the packet" used to open a bare `mailto:`, which hands a company rep an
empty window and makes them invent the framing. `PACKET_EMAIL` in data.js now
carries the whole message and `packetHref()` in sponsors.html builds the link.
Same reasoning as `coffeeChatHref()` below: the barrier is not willingness, it
is writing the first message.

The blanks are in `[square brackets]` deliberately. They survive every mail
client, they read as "fill me in", and they do not look like a merge field that
failed. Do not switch them to `{{curly}}`, which reads as broken software.

`{level}` is the one substitution. **Every tier carries its own "Ask about X"
link under its perks**, which is the moment a company knows which level it
wants, so the level fills itself in. The closing CTA has no tier to work from
and uses `PACKET_EMAIL.levelFallback` instead. That is why the CTA button lost
its `data-email` attribute: site.js overwrites `[data-email]` with a bare
mailto, so the button is `id="packet-cta"` and the inline script sets it. The
footer's `data-email="text"` link is untouched and still prints the address.

## Upcoming and past are two tabs, split on the local date

The homepage events list is headed "Upcoming events" and carries two pill tabs
in the board's chip style: Upcoming (last day of the event is today or later,
soonest first) and Past events (everything else, most recent first, so looking
back starts with what just happened rather than with 2023). `TODAY` is built
from the LOCAL date in index.html, never from UTC, or the list would flip a day
early every evening in Phoenix. The compact calendar opens on the first month
that has an upcoming event, falling back to the current month, so it never
opens on August in November. An event with no venue renders kind only; the
meta line joins the non-empty parts rather than printing a leading slash.

## Certificates replaced Pipelines, and the data was archived, not deleted

The fourth tab on opportunities.html was Pipelines, 57 multi-year programmes.
Renārs replaced it with **Certificates** on 2026-10-06: twelve credentials a
member can earn, every link fetched and its first `<title>` read that day. The
pipeline data lives in `tools/research/pipelines.archive.js`, not served; the
file header says how to bring the tab back.

`CERTIFICATES` uses the same group shape as the other three tabs. `costShort`
is the card headline and `cost` the full sentence, which is the `amountShort`
rule again: a money figure is set by hand from the provider's page, never
derived from prose. Where a page did not state a price the headline says "Exam
fee" or "See portal" rather than a number nobody verified. Tableau and
QuickBooks are deliberately absent because both sites refuse every scripted
and headless request, so the weekly checker could never watch them.

The weekly link check now covers the certificate links too: `check_links.py`
folds each one in as an employer-shaped row under sector `certificates`, so the
rest of the checker and the issue report needed no second code path.

## Picking the project up from inside Claude

`/alpfa` is a user-level command (`~/.claude/commands/alpfa.md`). From any
session in any folder it does what `Take Over.command` does: pull, run
`~/.local/bin/alpfa status`, read CLAUDE.md then README then guide 05, check
the Actions, report state and the best next step, then stop. The three routes
(`/alpfa` in Claude, `alpfa` in a terminal, the Spotlight app) all end at the
same health check, so keep `Take Over.command` reading the constants that
actually exist; when PIPELINES went it broke that check until updated.

## The calendar syncs from ClickUp, and the site never depends on it

`EVENTS` in data.js is the hand written list. `events.js` is GENERATED by
`tools/sync_events.py`, which `.github/workflows/sync-events.yml` runs daily at
05:00 Phoenix on GitHub's servers, so nobody has to log in anywhere. It sets
`window.EVENTS_LIVE`, and index.html defines `const EV` as the live list when it
is non empty and `EVENTS` otherwise. Every calendar and list on the homepage
reads `EV`. So: no token, no run, no network, the site still shows a calendar.

Why a second file rather than rewriting data.js: a bot regex-editing the one
file every piece of content lives in is how a stray bracket takes the whole
site down at 5am. The generated file is its own thing, is marked as such at the
top, and can be deleted at any time.

Events live in the ClickUp space "Events Pipeline", workspace `90132880215`,
one list per kind; the list ids and the kind each one maps to are the `LISTS`
table at the top of the script. "ASU Calendar Dates" is deliberately not in it,
those are university dates, not chapter events. A task's date and time are its
own Start and Due. The venue is read ONLY from the `Location/Venue:` line that
the event template puts in every description, and an event without that line
gets an empty venue rather than a guessed one, per the rule above about facts
from prose. Cancelled tasks are dropped. Nothing else is filtered.

E-Board is NOT on the public calendar, decided 2026-10-05: the E-Board Events
list is left out of `LISTS`, and `INTERNAL_TITLE` also drops any task whose
title contains "E-Board" or "Eboard" wherever it was filed.

**The syncs are self-healing, and this is why.** On 2026-10-05 a GitHub Actions
incident cancelled the weekly link check fifteen minutes in, and a Pages build
sat in "building" for over an hour so the site served a stale calendar all day
while every run showed green. Nobody was watching. Four things now stop that:

- `sync-events.yml` runs twice a day (05:00 and 17:00 Phoenix), and after it
  pushes it WAITS for Pages and confirms the live `events.js` matches, re-queuing
  the Pages build itself if not. A green push says nothing about what is served.
- `retry-failed.yml` re-runs a first attempt of either scheduled job that ends
  cancelled, failed or timed out, exactly once. `run_attempt == 1` is what stops
  it looping on a real bug.
- `pages-watchdog.yml` runs every six hours, compares live index.html, data.js
  and events.js to HEAD, and re-queues Pages when they differ.
- GitHub disables a scheduled workflow after 60 days without a commit, which a
  quiet summer would trigger. The sync commits a `.heartbeat` when the last
  commit is older than 45 days. Do not "tidy" that file away.

The one secret is `CLICKUP_TOKEN` in the repo's Actions secrets. The script
exits 0 with a message when it is missing, so a run before setup is not a red X.

**The failure emails were never the live repo (found 2026-10-06).** Renārs
kept getting "sync failed" emails and assumed the ClickUp token was set up
wrong. It was not: the live repo's runs were green all along. The backup
mirror `renarsm88/alpfa-asu-backup` receives the same `.github/workflows/`
on every backup push, has no secrets and no Pages, so its scheduled sync,
watchdog and link check failed and emailed him. Two fixes, both in place:
Actions are DISABLED on the backup repo, and every job carries
`if: github.repository == 'alpfaasu/alpfaasu.github.io'` so a mirror can
never run them even if Actions is switched back on. If failure emails ever
come back, first check WHICH repo sent them before touching the token.

**Both bots rebase before they push** (2026-10-07). A link check that runs
for ten minutes can be overtaken by a publish or a calendar sync; its bare
`git push` was then rejected ("fetch first") and the run went red although
the check itself had worked. `check-links.yml` and `sync-events.yml` now
`git pull --rebase` and retry the push up to five times. Each bot only
writes its own file, so the rebase never conflicts.

## The photo script keeps originals, and why that took three tries

`tools/build.py` is run by `Update Photos.command`. The folder you drop into is
the folder the site serves from, so the first version read a `.jpg` and wrote the
resized result over the same path. Three things followed, all found 2026-10-01
while preparing for a bulk Drive import, and all fixed:

- **It destroyed originals.** A dropped `.jpg` was overwritten by its own
  quality-86 re-encode. Worse, that rewrite changed the file's mtime, which was
  exactly what the cache keyed on, so every `.jpg` was re-encoded on **every**
  run and lost quality each time. The on-disk sizes had already drifted from the
  cache by the time anyone noticed.
- **The launcher could not run.** Its PATH put `/opt/homebrew/bin` (no Pillow)
  ahead of `/usr/local/bin` (Pillow), so double-clicking died on "Pillow is not
  installed" and the remedy that error printed was wrong for the same reason.
- **iPhone photos failed in silence.** `pillow_heif` was missing and the import
  was wrapped in a bare `pass`, so a folder of `.HEIC` produced a wall of "cannot
  identify image file" that looked like corrupt files.

The design now: every drop is **swept into `_originals/`** inside that folder
before anything reads it, and the served `.jpg` is built **from** `_originals/`.
Originals are never written to, so their signatures are stable and the cache
works: a second run processes zero. `_originals/` is gitignored, since full phone
photos would bloat a repo GitHub Pages serves, and Drive or the phone is the real
backup.

Two rules that are easy to break:

- **The sweep matches on the stem, not the filename.** `maria.heic` builds
  `maria.jpg`, and that `maria.jpg` is our output, not a new drop. Matching on the
  full name made the script move its own output into `_originals/` and rebuild it
  forever. To replace a photo, delete it from `_originals/` first.
- **Square mode never upscales.** `ImageOps.fit` happily enlarges a 600px source
  to 900px; it gains no detail and costs a third more bytes. `side = min(size,
  w, h)` is load bearing.

The launcher now loops over candidate interpreters and picks the first one that
can `import PIL`, rather than trusting PATH order.

## Coffee chats, and the two different rules

Both the board and the alumni page carry a `coffeeChat` field, and
`coffeeChatHref()` on each page turns it into a link:

- a value starting `http` is used as a booking URL, for example Calendly
- a value containing `@` becomes a `mailto:` with a SUBJECT and a BODY already
  written, because the real barrier is not permission, it is a student not
  knowing how to introduce themselves
- anything else renders no button at all, rather than a dead one

**The two groups are deliberately different, decided 2026-09-15.** The E-board
may use a booking link. **Alumni are email only.** Working adults should not be
asked to keep a public booking calendar for a student chapter, and an alum who
finds one on their name will simply ask to come off the page.

`ALUMNI` holds the **18 people from the chapter's own "Alumni Contact and
Companies" Google Sheet** (tab "Company Advice and Contacts"), read 2026-10-06
through Renārs's logged-in Chrome because the sheet is private. Name, email,
current role and company, and past companies with the roles held there are
the sheet's; LinkedIn was found per person in LinkedIn's own search the same
day; "Chowdbury" became Chowdhury because that is how his own profile spells
it. The comment above the constant is the full provenance. **Do not add
anyone who is not on that sheet or has not asked to be added.** A made up
name that a student actually emails is far worse than an honest empty page.

**Emails render as the coffee chat button, decided by Renārs 2026-10-06.**
The earlier rule was consent-per-person; he decided the chapter's contact
sheet is that consent, and the page is noindex. If anyone asks to come off,
delete the row, nothing else references it.

**The page is a company directory, decided the same day.** A person appears
under every firm in their `past` as well as under `company`, because the
useful question is "who has been inside Deloitte", not "who is there this
month". Firms come from the data at render time (`FIRMS` in alumni.html),
never from a typed list. **The homepage "Where our members end up" wall is
the same fold** (`ALUMNI_FIRMS` in index.html): the twelve firms the most
alumni have worked at, each tile a link to `alumni.html?firm=Name`, which
opens that firm's people on load. `COMPANIES` is no longer what the homepage
wall shows; it still feeds `logoFor()` and the sponsors page. A firm with
nobody behind it does not belong on the wall, that is the whole point of
making the logos the way in.

`COMPANIES` grew from 12 to 47 on 2026-10-06, and to 100 on 2026-10-07 when every internship board employer got a logo (Vanguard and Northern Trust included, taken from Wikipedia once Renārs okayed company-sourced logos) so the alumni firms draw real
logos. It is a LOGO LOOKUP ONLY, read by `logoFor()` and nothing else; being
in it does not make a firm a partner. Every new file's source and licence
line is in `logos/SOURCES.md`; add a row there whenever a logo is added.
Small firms with no file online are found from their own site, an og:image,
a LinkedIn company image or a Wayback copy, converted to PNG with `sips`.

**Logos fill a fixed box, centred** (2026-10-06, after TYR showed as a speck).
The homepage wall, the alumni firm tiles and the internship employer cards all
size logos with `width/height: 100%; object-fit: contain` inside a fixed box,
and the box is `display: block`, not grid: inside a grid cell the image's
`height: 100%` did not resolve and square logos overflowed and were clipped.
Logo files are cropped tight to their artwork; a small-looking logo almost
always means empty margin in the file, fix the file, not the CSS. A tall
stacked logo (TYR) needs the firm's horizontal version instead.

## The board is a skim until you choose something (2026-10-06)

Two folds, both asked for by Renārs after seeing nine sector cards and every
role on every employer stacked before the first job.

**Three squares, not nine.** `SECTOR_GROUPS` in data.js folds the nine
SECTORS into three summaries (business careers, engineering and AI, where
else people hire). The role count on a square is summed from its fields at
render time, never typed. Tapping a square opens only that group's field
cards; "Show all nine fields" opens the lot; tapping the open square again
folds it. On a phone the squares stack, so `openGroup()` moves the `#sectors`
element to sit directly under the tapped square (`in-grid`), otherwise the
fields opened under the third square and the tap looked like nothing happened.
At desktop width it goes back under the row. Every SECTORS key must appear in
exactly one group, checked by hand when either list changes.

**One role per employer until a filter is set.** `browsing()` is true when
sector, year, major and search are all at their defaults. Then `employerCard`
renders the first role, hides the rest with `hidden`, and adds a "+N more at X"
row that unfolds that one card in place. The moment any filter is set every
matching role shows, because at that point the person has said what they want
and hiding it would be a wall. The count line always reads the full filtered
total, not the visible rows, so "180 of 180" stays true while cards are folded.

Gotcha that bit on the first pass: `.sector-card` and the role rows set an
author `display`, which beats the user agent's `[hidden] { display: none }`.
Both have an explicit `[hidden] { display: none }` rule now. If a hidden thing
ever shows, look there first.

## Three pillars, three programmes each, and the event archive (2026-10-06)

The pillar panels on the homepage are 3x3x3 by decision, not by accident.
Getting there meant three content changes, all in data.js:

- **Excel and data analytics is gone.** Renārs: "we really don't even have
  Excel." It was never run, so it had no photos and no events. Removed, not
  archived; git has it if anyone ever wants the copy.
- **Socials and nights-out merged** into `socials` (Socials, intramurals and
  trips). Six photos picked from the twelve, the other six still sit in
  `photos/programs/` unreferenced, which is fine. `nights-out` no longer
  exists as a key; a link to it 404s to the index.
- **Two new programmes under The work:** `career-fairs` (Career fairs and
  employer sessions: Lunch and Learns, coffee chats, the chapter's own fair)
  and `general-meetings`. The firms named in their copy are the ones on the
  ClickUp calendar for Fall 2026, nothing else. Both walls are empty until
  photos are picked.

`PAST_EVENTS` is the archive, so a member can look up any event after it
happened: date, title, venue, a summary, photos, the link the QR on the flyer
pointed to, and the professionals who came with a LinkedIn each. Every event
names a `program` key and renders on that programme page under the photo
wall, newest first, via `pastMarkup()` in program.html. A programme with no
past events renders no archive section at all. It ships EMPTY with one
commented example by decision: nothing was seeded from the calendar because
an event row without photos or guests is just a date, and the point is the
material. Guests are real people who were actually there; never fill that
list from a flyer or a guess, and never type a LinkedIn URL that was not
opened.

## The quiz is collapsed on purpose

It is one navy row until somebody opens it. It used to be a full section with a
headline and a paragraph, which everybody who already knew what they wanted had
to scroll past to reach the board. Do not expand it back out.

## Never let a data field set a layout width

`SCHOLARSHIPS[].amount` and `RESEARCH[].paid` hold whole sentences, up to 270
characters, because that is what the providers actually say. The cards were
styled as if those fields held "$5,000", with `white-space: nowrap`, and a
270 character unbreakable line set the width of the entire grid column and
pushed the page off screen.

Two rules came out of it:

- Every card carries a SHORT `amountShort` or `paidShort` set by hand from the
  provider's own words, and that is what the header shows. The long field is
  rendered in the facts list where it is allowed to wrap, so no detail is lost.
- Deriving the short value from the prose with a regex was tried and produced
  "$2,000 to $1,000" for LULAC, "$1.3" for W. P. Carey's $1.3 million, and
  "Up to $6,000" for a $33,000 award. **A wrong number about money is worse
  than a long one.** `shortMoney()` survives only as a fallback for a newly
  added row that nobody has given a short value yet.

This is the third time on this project that pattern matching prose to produce
a factual claim has been wrong, after the DACA filter and the 403 check. If a
fact matters, put it in the data as its own field.

Grid children default to `min-width: auto` and refuse to shrink below their
content, so `.cards > * { min-width: 0 }` is load bearing, not decoration.

## Nine sectors, and why the quiz only scores five

The board carries nine. The original five (consulting, accounting, finance,
tech, engineering) are WAYS OF WORKING. The four added 2026-09-16 (ai, health,
public, startups) are EMPLOYER TYPES, and they cut across all five: an AI role
can be consulting work, a government role can be accounting work.

So the quiz scores only the five. `scoredSectors()` filters on
`QUIZ_MAX[key] > 0`, and a sector no question scores has a denominator of zero.
The first version divided by it and rendered four `NaN%` bars. The result panel
now prints a line naming the four cross cutting fields and their role count, so
nobody concludes the board is only what the quiz named.

If you add a sector, decide which kind it is. A way of working needs an option
on every QUIZ question and a rebalance. An employer type needs neither, and must
NOT get quiz weights or it will break the denominators.

Every major needs a `fit` for EVERY sector or the ranking sorts on undefined.

## Acting on the weekly check (first done 2026-10-06)

The checker never deletes; a human does, after looking. The first cleanup:
nine flagged rows were each searched for a re-post under a new requisition.
One was: EY Assurance Data and Intelligence Delivery moved off
usearlycareers.ey.com onto EY's Yello system under the same posting ID, so
its link was swapped and "360 Careers" dropped from the title to match. The
other eight were removed because the firm had deleted or closed them with
nothing replacing them: three Deloitte Consultative Offerings Data & AI roles,
EY Technology Consulting and Risk Technology interns, and three PwC roles past
their 26 Sep 2026 deadline. Note PwC moved jobs to jobs-us.pwc.com (Workday);
jobs.us.pwc.com no longer resolves. Removing beats leaving a dead row: the
board's promise is that every role on it can be applied to.

## What the weekly check actually catches

Two things now, not one:

1. **Dead links.** Three attempts before anything is called dead. A 401, 403 or
   429 is "blocked", not dead, because the page loads fine in a browser. A TLS
   chain this machine cannot verify is also "blocked": cityyear.org serves a
   chain urllib rejects and curl accepts, and calling it dead opened an issue
   about a working page.
2. **Passed deadlines.** A link can be alive on a row whose date went weeks ago.
   `passed_deadline()` only counts a date presented as a CLOSING date. The first
   version read "Posted 17 August 2026, rolling" as expired and produced six
   false alarms, so the rule is now: whichever cue sits closest to the date
   wins, posted or closing. A bare ISO date stands alone; anything else needs a
   closing word. There are 17 cases in the test block at the bottom of this
   section's history, all passing.

It still only VERIFIES. It cannot discover a newly opened posting, because that
needs judgement. The board drifts toward stale over months and says loudly which
rows have gone off rather than quietly serving them.

## Current state

Structure and design are done. Content is placeholder in places:

- Board: the fourteen officers on the chapter's own Instagram cards, each with
  name, role, major, grad year, headshot, LinkedIn and a Calendly coffee chat
  (all verified 2026-10-06). Still each officer's own to give: `coffeeChatFor`,
  `experience`, `statement`, `story` and up to four personal `photos`. "Read more"
  opens a dialog with all of that. Renārs is NOT on the board by his own
  decision (2026-10-06): his seat is not one of the chapter's officer cards. The
  grid is eight tracks with cards spanning two so the two left over on the last
  row sit centred; see the comment above `.board-grid` in index.html.
- Sponsor TIERS perks are placeholders, and the page now says so above the grid via
  `TIERS_STATUS`. The PRICING is gone entirely: `TIERS` has no `price` field and
  sponsors.html renders none. See the pricing section above.
- `EMPLOYERS` in data.js holds 58 firms and 172 roles across 9 sectors (eight removed
  2026-10-06, see below), every link
  verified 2026-09-16 and re-checked weekly by the Action. Prefer STABLE PROGRAM
  PAGES over job-req URLs, which expire each cycle. `careersUrl` is the durable
  fallback per firm.
  Known fragile: vanguardjobs.com intermittently 502s (transient CDN, retries fine);
  onsemi.com, microchip.com and srpnet.com return 403 to any script and are fine in
  a browser, which is why the checker has a "blocked" state distinct from "dead".
  Honeywell and Honeywell Aerospace are deliberately SEPARATE cards, because
  Aerospace spun off into its own company with its own job system. That is the one
  allowed exception to the one-card-per-company rule.
- `EVENTS` entries use ISO dates (`"2026-09-04"`, optional `end:` for multi-day) so the
  calendar can place them. Dates are parsed as LOCAL, never UTC, or the day shifts.
  The calendar opens on the first month that has an event, not the current month.
- About Us has its three photos (`ABOUT.photos`), the first a wide banner of the whole chapter.
- Vanguard and Northern Trust now HAVE logos (2026-10-07, see logos/SOURCES.md). The
  note below is history. Re-checked
  2026-09-19: Wikimedia Commons carries Vanguard Healthcare, a Call of Duty title and a
  Florida school, none of them The Vanguard Group, and Simple Icons 404s on both names.
  There is no freely licensed file to add, and the `.mark` wordmark cell in site.css is
  the designed fallback, not a broken state. Do not go looking a third time.
- Six of nine program walls carry six photos each, picked by eye from the chapter's
  Drive folder `Brand & Content F26` (shared with Renārs, 2,211 photos, 2026-10-01).
  Empty on purpose: Career fairs and employer sessions, General meetings (both new
  2026-10-06, photos not picked yet) and National Convention (its photos are in a
  Google Photos album a viewer cannot bulk download; ask the owner to drop them in
  Drive). `PROGRAMS[].photos` entries are OBJECTS `{ src }`, not strings; a bare
  string renders a silent blank. When wiring them, anchor on the PROGRAMS keys: the
  same slugs appear earlier in PILLARS links, and matching those once shifted every
  wall down by one while every count passed. The hero slideshow is five slides from
  the same set. Hero captions are facts: hero-4 was captioned
  "Case competition winners" until Renārs pointed out the four people wear
  JUDGE ribbons (fixed 2026-10-07). Caption only what the photo shows. Captions are just the event or
  subject, no description after a comma (Renārs, 2026-10-07): "The chapter",
  "Goldman Sachs on campus", "ALPFASADO", "Case competition", "Career fair".
- The black "Working draft" bar at the top of all SIX pages is intentional. Remove
  the `<div class="draft">` line from each file when content is ready.
- 275 verified opportunities sit in `tools/research/*.json`, researched 2026-09-15 and
  NOT yet on the site. That is the largest open thread. The counts and the open
  structural decision are in `.alpfa-manifest.json` under the `research` category.

## Facts worth not re-deriving

- **alpfaatasu.org is registered, not expired.** WHOIS on 2026-08-26: renewed
  2026-08-12, expires 2027-07-17, registrar GoDaddy, currently parked at a lander.
  The chapter very likely still owns it. Whoever has the GoDaddy login can point it
  at the Pages site with a CNAME. An earlier assumption that it had lapsed was wrong.
- Chapter numbers: 380 members and 74 events come from the Sun Devil Central
  page. **The chapter started in the 2012/13 academic year (the site shows "2012") and has 14 board
  members**, both from Renārs on 2026-10-06, overriding Sun Devil Central's
  "chartered 2015" and "15 officers" (that count included him; he is not on the
  public board). Confirm the members and events figures each semester.
- Reference chapter sites used for direction: utalpfa.com (UT Austin, source of the
  read-more board and core values ideas), alpfaatuic.org (UIC, source of the
  sector-grouped internship view), alpfafiu.org (FIU). Full list in
  `ALPFA Chapter Website References.docx`.
- Company logos in `logos/` were pulled from Wikimedia Commons and Simple Icons.
  Vanguard and Northern Trust had no usable file and fall back to monograms.
  These are trademarks: the "firms that recruit out of this chapter" framing is fine,
  but do not present a company as a sponsor until it actually is one.
- **Live at https://alpfaasu.github.io/** (GitHub Pages, repo
  `alpfaasu/alpfaasu.github.io`, branch main, root). To update: commit and `git push`,
  Pages rebuilds in about a minute. A `.nojekyll` file is present so Jekyll does
  not swallow anything.
- Also published as an Artifact for private review:
  https://claude.ai/code/artifact/5c75b274-8fbf-4ed2-aa5d-dd85d6acdedc
  Republish by rebuilding `tools/offline-copy/alpfa-asu-offline.html` (Publish
  Changes.command does it) and passing that same URL.

**Every page loads its shared files with a content stamp** (2026-10-07):
`data.js?v=e3b2efc6`. Browsers cached data.js hard and Renārs kept seeing
the old site after a publish. `tools/stamp_assets.py` sets each ?v= to the
first eight characters of the file's MD5, so it changes exactly when the file
does. `Publish Changes.command` runs it before committing; a publish done by
hand (git commit + push) must run `python3 tools/stamp_assets.py` first or the
change will hide behind the cache. `events.js` is loaded with an hourly stamp
from a one-line document.write in index.html, because the ClickUp bot rewrites
it without touching the HTML.

## Conventions

**Docs move with the code, every time** (Renārs, 2026-10-06). Anything new
or changed on the site gets, in the same pass and the same commit: its
decision and the reason in this file, its current state in `README.md`, and
any open follow-up in `guide/05`. A change that is not written down here will
be undone by the next session that does not know why it exists.

**Review locally before publishing.** Renārs looks at changes on his own Mac
first. Edit, serve with a no-cache server, `open` the page for him, test at
390px by measuring `scrollWidth`, and publish only when he says publish.

Every project here must be startable by double-click, so any new entry point gets a
`.command` launcher with `#!/bin/zsh` and `chmod +x`. Python is for build and image
scripts only, never for serving.

This project IS in the `REPOS` array in `~/Desktop/Backup Projects.command`,
pinned to the `backup` remote (private `renarsm88/alpfa-asu-backup`). That pin
is load bearing: `origin` is `alpfaasu/alpfaasu.github.io`, the live public
site, so a backup run that defaulted to origin would publish unreviewed work.
Backing up and publishing are separate acts. Publishing is
`Publish Changes.command`, which pushes to origin on purpose.
