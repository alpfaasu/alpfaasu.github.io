# 05 - What still needs finishing

The structure, the design and most of the content are done. Last trued up
against the site on 2026-10-06. If something below looks finished on the live
site, trust the site and fix this file.

---

## Needed from people, not from code

**Officer profiles.** All fifteen officers are on the board with name, role,
major, grad year and a headshot cropped from the chapter Instagram. Still each
officer's own to give: past experience, LinkedIn (six are in), the one-line
statement, the story, a coffee chat contact and who should book it, and up to
four personal photos. Open any officer's Read more and the empty slots say what
goes there. The request message is `board-request-message.md` in this folder.

**Real headshots.** The current ones are crops of Instagram graphics. Whoever
shot the board photos has the originals.

**The sponsorship packet.** Pricing is already off the page. The perks in
`TIERS` are still placeholders and the page says so above the grid. The board
agrees the real packet, then it goes in and `TIERS_STATUS` comes out.

**Past board members for the alumni page.** One-to-one asks only, with consent.
The message is `alumni-request-message.md` in this folder. Email contact only,
never a booking link; that rule is in CLAUDE.md.

**Confirmation of the chapter numbers.** 380 members, 74 events, 15 officers,
chartered 2015. Still right?

**The GoDaddy login for `alpfaatasu.org`.** See guide 04.

---

## Photos still owed

Six of the nine program walls, About Us and the hero slideshow are filled from
the chapter's Drive folder `Brand & Content F26`. Still empty on purpose:

- **Excel and data analytics**: photos due mid-October 2026.
- **The ALPFA National Convention**: the photos are in a Google Photos album a
  viewer cannot bulk-download. Ask the album owner to drop them into Drive.

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
