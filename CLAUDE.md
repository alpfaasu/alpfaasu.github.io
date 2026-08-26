# ALPFA at ASU website

Renārs is **VP of External Outreach** for the ALPFA student chapter at Arizona State
University. This is the chapter website, built as a draft to send to the chapter
president for feedback. Nothing is live on the internet yet.

## Read this first

The site is plain HTML, CSS, and JavaScript. No framework, no build step, no npm.
Open `index.html` in a browser and it works.

**All content lives in `data.js`.** Never hardcode chapter content into the HTML.
If something needs to change on the page, it changes in `data.js`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Front page. Full-bleed hero SLIDESHOW (HERO_SLIDES in data.js, autoplay 6s, arrows + dots, pauses on hover and when the tab is hidden, no autoplay under prefers-reduced-motion), stats, About Us, core values, three pillars, board, partner wall, semester list + compact month calendar, internship band, CTA. Page-specific CSS is in its `<style>` block. |
| `internships.html` | Internship board. Sector chooser at top, then one card per EMPLOYER with its roles listed under it, each linked. Every card ends with the firm's own "All internships at X" hub. |
| `sponsors.html` | Sponsorship tiers ranked by level, each with perks and a partner wall. |
| `data.js` | **Every piece of content.** CHAPTER, ABOUT, VALUES, STATS, PILLARS, BOARD, SECTORS, INTERNSHIPS, COMPANIES, TIERS, EVENTS. |
| `site.css` | Shared tokens, nav, buttons, footer. |
| `site.js` | Scroll reveal, count-up stats, image fallbacks. |
| `build.py` | Resizes photos. `photos/board/` to squares, `photos/gallery/` to wide. |
| `build_share.py` | Packs everything into one self-contained `share/alpfa-asu-draft.html` with images inlined. |
| `Open Website.command` | Double-click launcher. |
| `Update Photos.command` | Double-click after adding photos. |

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
- **Square corners** on cards and panels. Only buttons and filter chips are pill-shaped.
- Structure comes from **hairline rules and 1px grid gaps**, not from bordered rounded cards.
- Flat color blocks: the pillar row is solid black, solid red, solid yellow, butted together.
- Type is **Archivo** (display uppercase, heavy) plus **JetBrains Mono** for numbers,
  labels, and metadata. Section headlines stay sentence case; the hero is uppercase.
- Photos render grayscale and go color on hover.
- **No em-dashes anywhere in visible text.** Use a period, a comma, or a hyphen.

The logo is dark-on-white artwork. On the light ground it needs no chip, just
`mix-blend-mode: multiply`. Company logos use the same treatment.

## Current state

Structure and design are done. Content is placeholder in places:

- Board: only Renārs (VP of External Outreach) is filled in. Seven roles are waiting
  on names, majors, grad years, headshots, `statement`, `story`, `linkedin`, and up
  to four personal `photos` each. "Read more" opens a dialog with all of that.
- Sponsor tiers and pricing in `TIERS` are placeholders. Confirm before sharing.
- `EMPLOYERS` in data.js holds 12 firms and 37 roles, all links curl-verified 200 on
  2026-08-26 by three research agents. Prefer STABLE PROGRAM PAGES over job-req URLs,
  which expire each cycle. `careersUrl` is the durable fallback per firm.
  Known fragile: vanguardjobs.com intermittently 502s (transient CDN, retries fine);
  intel.com blocks curl with 403 so Intel links point at its Workday tenant instead.
- `EVENTS` entries use ISO dates (`"2026-09-04"`, optional `end:` for multi-day) so the
  calendar can place them. Dates are parsed as LOCAL, never UTC, or the day shifts.
  The calendar opens on the first month that has an event, not the current month.
- About Us photo slots are empty; add paths to `ABOUT.photos`.
- Vanguard and Northern Trust have no logo file, so they draw as monograms.
- Program photo walls are empty. Instagram is login-walled and cannot be scraped,
  but the Claude in Chrome extension can browse it in a logged-in session; photos
  were captured by screenshotting the post region, not by downloading URLs (the
  harness redacts Instagram CDN srcs).
- The black "Working draft" bar at the top of all three pages is intentional. Remove
  the `<div class="draft">` line from each file when content is ready.

## Facts worth not re-deriving

- The chapter's old domain **alpfaatasu.org expired** and is now a parked GoDaddy
  page. Choosing and registering a domain is still an open decision.
- Chapter numbers come from the Sun Devil Central page: chartered 2015, 380 members,
  74 events, 15 officers. Confirm these each semester.
- Reference chapter sites used for direction: utalpfa.com (UT Austin, source of the
  read-more board and core values ideas), alpfaatuic.org (UIC, source of the
  sector-grouped internship view), alpfafiu.org (FIU). Full list in
  `ALPFA Chapter Website References.docx`.
- Company logos in `logos/` were pulled from Wikimedia Commons and Simple Icons.
  Vanguard and Northern Trust had no usable file and fall back to monograms.
  These are trademarks: the "firms that recruit out of this chapter" framing is fine,
  but do not present a company as a sponsor until it actually is one.
- **Live at https://renarsm88.github.io/alpfa-asu/** (GitHub Pages, repo
  `renarsm88/alpfa-asu`, branch main, root). To update: commit and `git push`,
  Pages rebuilds in about a minute. A `.nojekyll` file is present so Jekyll does
  not swallow anything.
- Also published as an Artifact for private review:
  https://claude.ai/code/artifact/5c75b274-8fbf-4ed2-aa5d-dd85d6acdedc
  Republish by rebuilding `share/alpfa-asu-draft.html` and passing that same URL.
- **alpfaatasu.org is NOT expired.** WHOIS shows it renewed 2026-08-12, expiring
  2027-07-17, registrar GoDaddy, currently parked. The chapter probably still owns
  it. Whoever holds the GoDaddy login can point it at the Pages site with a CNAME.

## Conventions

Every project here must be startable by double-click, so any new entry point gets a
`.command` launcher with `#!/bin/zsh` and `chmod +x`. Python is for build and image
scripts only, never for serving. This project is not yet in the `REPOS` array in
`~/Desktop/Backup Projects.command`.
