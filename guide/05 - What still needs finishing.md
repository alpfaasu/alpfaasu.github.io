# 05 - What still needs finishing

The structure and the design are done. What is left is content.

---

## Needed from the board

**Seven officer profiles.** Only the VP of External Outreach is filled in, as a
worked example of what a complete one looks like. For each of the other seven:
name, role, major, grad year, a headshot, a LinkedIn URL, one or two sentences
for the card, three to five for the Read more panel, and up to four personal
photos. See guide 01.

**The real sponsorship packet.** The tiers and prices on `sponsors.html` right now
were invented as placeholders. Presenting $5,000, Gold $2,500, Silver $1,000,
Community in kind. **Replace these before any company sees that page.**

**Confirmation of the chapter numbers.** 380 members, 74 events, 15 officers,
chartered 2015, taken from Sun Devil Central. Still right?

**The GoDaddy login for `alpfaatasu.org`.** See guide 04. Free chapter domain if
somebody can find it.

---

## Nice to have

**Photos on the program pages.** All nine have an empty photo wall waiting.
Save the relevant posts from the chapter Instagram, drop them in
`photos/programs/`, run Update Photos, then list them under that program in
`data.js` with the post caption.

**About Us photos.** Three empty slots, set through `ABOUT.photos` in `data.js`.

**Two more partner logos.** Vanguard and Northern Trust had no usable logo file
and currently draw as text. Any SVG or PNG dropped in `logos/` fixes it.

**A second GitHub owner.** So the chapter is not locked out when Renārs
graduates. See guide 03.

---

## When the board approves it

Three things flip the site from draft to public. Ask before doing them.

**1. Remove the draft banner.** Delete the line starting `<div class="draft">`
from all four HTML files: `index.html`, `internships.html`, `program.html`,
`sponsors.html`.

**2. Let search engines find it.** In those same four files, delete the line:
```html
<meta name="robots" content="noindex, nofollow">
```
and delete `robots.txt` from the main folder.

**3. Publish.** Double-click Publish Changes.command.

After that the site is findable on Google. Only do this once the officer profiles
and the sponsorship pricing are real, because that is the version the world sees.

---

## Maintenance, roughly

**Each semester:** update `EVENTS`, confirm the chapter numbers, swap the officer
list after elections.

**Each recruiting season, around August:** re-check the internship links. Job
postings expire. The company `careersUrl` links are durable and will keep working,
but individual role links rot. Freeport in particular posts in September and fills
by January, so that one is worth checking early.

**Whenever there is a good photo:** add it to `HERO_SLIDES`. The slideshow adapts
to however many you give it.
