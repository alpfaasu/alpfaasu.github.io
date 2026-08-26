# ALPFA at ASU website

A working draft. Nothing here is live on the internet yet.

## Open it

Double-click **`Open Website.command`**. It opens in your browser.

That is it. No installing, no accounts, no internet needed.

## The two pages

| Page | What it is |
| --- | --- |
| `index.html` | The main page. Hero, chapter numbers, what members get, the board, partner companies, events. |
| `internships.html` | The internship board. Search box plus filters by field and class year. |

## Change anything on the site

Open **`data.js`** in TextEdit (right-click, Open With, TextEdit) or any code editor.
Everything the site shows comes from that one file. Edit it, save it, refresh the browser.

You never need to touch the HTML or CSS.

### The parts of data.js

- `CHAPTER` - name, email, social links, the intro paragraph
- `STATS` - the four big numbers in the maroon band
- `PILLARS` - the three tiles under "what membership actually gets you"
- `BOARD` - every officer, their role, their photo, their statement
- `COMPANIES` - the partner logo wall
- `INTERNSHIPS` - every role on the internship board
- `EVENTS` - this semester's calendar

### Adding an officer

Find their role in `BOARD` and fill in the blanks:

```js
{
  name: "Maria Delgado",
  role: "President",
  major: "Accountancy",
  gradYear: "2027",
  photo: "photos/board/maria.jpg",
  linkedin: "",
  statement: "Two or three sentences in their own words about why they took the role.",
},
```

A card with no `statement` is not clickable. A card with no `photo` shows their
initials instead, which looks intentional, so it is fine to ship half-filled.

### Adding photos

1. Drop the image files into `photos/board/` (headshots) or `photos/gallery/` (everything else).
2. Double-click **`Update Photos.command`**. It crops headshots square and shrinks
   large images so the site loads fast. Your originals are never changed.
3. Point at the file in `data.js`, for example `photo: "photos/board/maria.jpg"`.

iPhone `.HEIC` files work too.

### The hero image

The big panel on the right of the front page is a placeholder right now.
Put a wide chapter group photo at `photos/gallery/hero.jpg` and it appears
automatically. Nothing else to change.

### Partner logos

Drop each company's logo into `logos/` and name it to match `data.js`,
for example `logos/deloitte.svg`. Until a file is there the site draws
the company name in a clean box instead, so the wall never looks broken.

Logos are shown in white, so plain SVG or PNG works best.

## Still to do

- [ ] Officer names, majors, grad years, headshots, statements
- [ ] Real hero group photo
- [ ] Real partner logo files
- [ ] Real application links on the internship board (`link:` in each entry)
- [ ] Confirm the chapter numbers in `STATS` are current
- [ ] Confirm the Instagram handle in `CHAPTER` is right
- [ ] Decide on a domain. The old `alpfaatasu.org` lapsed and is now a parked
      GoDaddy page, so it would have to be re-registered.

## Notes

- Colors are taken from the chapter logo itself: red `#D8433F` (the triangle),
  yellow `#FFC627` (the "ASU"), and white, on a true black ground. No gradients anywhere.
- The whole site is plain HTML, CSS, and JavaScript. No build step, no
  framework, no monthly fee. It can be dropped on GitHub Pages or Netlify for free.
- The red "Working draft" bar at the top is there on purpose. Delete the
  `<div class="draft">` line in both HTML files when the content is ready.
