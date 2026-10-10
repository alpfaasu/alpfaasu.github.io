# 05 - What still needs finishing

The structure, the design and most of the content are done. Last trued up
against the site on 2026-10-06. If something below looks finished on the live
site, trust the site and fix this file.

---

## Needed from people, not from code

**Officer profiles.** All fourteen officers are on the board with name, role,
major, grad year, a headshot from the board photo shoot, LinkedIn and a
Calendly. Still each officer's own to give: past experience, the one-line
statement, the story, who should book a coffee chat, and up to four personal
photos. Complete so far: Nathan Olvera and Fernanda Elias (everything, 2026-10-09). Partial:
Ray Sanchez (everything but photos, which he is sending separately),
Antonio Avila (role line and three photos; no story, experience or coffee chat line),
Nicolas Romero-Mesa (experience, coffee chat line and photos, no statement or
story), Rafael Molina (one role from his LinkedIn). Each officer has a ClickUp
task due 2026-10-09 asking them to send this on Slack. Open any officer's
Read more and the empty slots say what goes there. The request message is
`board-request-message.md` in this folder.

**The sponsorship packet.** Pricing is already off the page. The perks in
`TIERS` are still placeholders and the page says so above the grid. The board
agrees the real packet, then it goes in and `TIERS_STATUS` comes out.

**The alumni page** carries 22 people: two added 2026-10-08, two 2026-10-09, and 18 from the chapter's "Alumni Contact
and Companies" sheet, with email and LinkedIn (2026-10-06). Still theirs to
give: grad year, major, chapter role, photo, a line in their own words. New
alumni go on the sheet first, then into `ALUMNI` in data.js. Email contact
only, never a booking link; that rule is in CLAUDE.md. The ask message is
`alumni-request-message.md` in this folder.

**Confirmation of the chapter numbers.** 380 members and 74 events are from
Sun Devil Central. Still right? (14 board members and the 2012/13 start are
confirmed, 2026-10-06.)

**The GoDaddy login for `alpfaatasu.org`.** See guide 04.

---

## Photos still owed

All nine program walls, About Us and the hero slideshow are filled from
the chapter's own photos. Still empty: none.

- The last three walls (Career fairs, General meetings, National
  Convention) were filled 2026-10-08: the Sep 30 career fair and the Oct 6
  LPL Financial general meeting from the Drive folder, and the convention
  from Rafa's "ALPFA 2026 Convention" Google Photos album, linked in the
  Drive doc "Other pictures".

## Company logos

Every firm on the alumni wall (51) and every employer on the internship board
(58) draws a logo, 2026-10-07. Sources and rights lines are in
`logos/SOURCES.md`. Two Commons files are CC BY-SA and want attribution (ADOT,
St. Mary's Food Bank); SOURCES.md is that attribution. Worth a human glance:
Branch is assumed to be branch.co, ASU Venture Devils shows the ASU logo,
Price Kong is now Aprio, Credit Suisse no longer exists.

## The event archive

`PAST_EVENTS` in `data.js` is empty. Every event that has happened goes in
there with its programme key, and it shows on that programme's page with its
photos, the link the QR on the flyer pointed to, and the professionals who
came. The comment above the list in `data.js` is the whole shape. Nothing is
seeded: an event without photos, a link or guests is just a dated title, so
add them as the material comes in.

---

## Runs by itself, check it rather than do it

- **Calendar**: synced from ClickUp twice a day. Events are edited in ClickUp,
  never in data.js. E-Board meetings are excluded. A blank `Location/Venue:`
  line in ClickUp shows as no venue on the site, so fill those in there.
- **Links**: checked every Monday, including the certificates. It reports to
  one GitHub issue and never deletes a row.
- **Deploys**: a watchdog every six hours re-queues a stuck GitHub Pages build.
  A failed scheduled run is retried once automatically.

If any of those shows red in the Actions tab two runs in a row, that is the
thing to look at first.

A failure email is only real if it came from `alpfaasu/alpfaasu.github.io`.
The backup repo has Actions switched off and every job is guarded to the
live repo, so it should never send one again (fixed 2026-10-06).

---

## When the board approves it

Three things flip the site from draft to public. Ask before doing them.

1. Delete the `<div class="draft">` line from all **six** HTML files.
2. Delete `<meta name="robots" content="noindex, nofollow">` from the same six,
   and delete `robots.txt`.
3. Publish.

After that the site is findable on Google. Only do this once the officer
profiles and the sponsorship perks are real, because that is the version the
world sees.

---

## Each semester

Swap the officer list after elections, confirm the chapter numbers, archive
last semester's program photos and add this semester's. The calendar takes
care of itself.
