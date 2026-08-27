# 01 - How to edit the site

Everything lives in **`data.js`** in the main folder. Open it in TextEdit
(right-click, Open With, TextEdit) or any code editor.

Rules that will save you a broken page:

- Keep the quote marks and the commas exactly where they are
- Anything after `//` is a note to you, not website text
- Save, then refresh the browser to see it

If the page ever goes blank, you deleted a comma or a quote mark. Undo and try again.

---

## Add an officer

Find their role in the `BOARD` section and fill in the blanks:

```js
{
  name: "Maria Delgado",
  role: "President",
  major: "Accountancy",
  gradYear: "2027",
  photo: "photos/board/maria.jpg",
  linkedin: "https://www.linkedin.com/in/mariadelgado",
  statement: "One or two sentences shown on the card.",
  story: "The longer version, shown when someone clicks Read more. Three to five sentences.",
  photos: [
    "photos/board/maria-1.jpg",
    "photos/board/maria-2.jpg",
    "photos/board/maria-3.jpg",
  ],
},
```

- No `statement` and no `story` means no Read more button. That is fine.
- No `photo` shows their initials instead, which still looks intentional.
- No `linkedin` greys out the Connect button.
- `photos` takes up to four personal shots.

Renārs' entry is filled in as a working example of all of it.

---

## Add photos

1. Drop the image files into the right folder:
   - `photos/board/` officer headshots and their personal photos
   - `photos/gallery/` big images: the hero slideshow, About Us, the pillars
   - `photos/programs/` photos for the nine program pages
2. Double-click **Update Photos.command**. It crops headshots square and shrinks
   large files so the site loads fast. Your originals are never modified.
3. Point at the file in `data.js`, for example `photo: "photos/board/maria.jpg"`

iPhone `.HEIC` files work.

---

## Change the hero slideshow

`HERO_SLIDES` near the top of `data.js`. Add or remove slides freely, the arrows
and dots adapt on their own.

```js
{ photo: "photos/gallery/chapter-group.jpg", caption: "The chapter, spring general meeting" },
```

The caption is the small line bottom-left. Leave it as `""` for no caption.

---

## Add an internship

Internships are grouped by employer under `EMPLOYERS`. Find the company and add
a role to its list:

```js
{ role: "Audit Summer Intern", level: "Junior", season: "Summer 2027",
  deadline: "Opens August",
  link: "https://...",
  note: "One line the posting itself would not tell you." }
```

- `level` is `Freshman`, `Sophomore`, `Junior`, `Senior` or `Any`
- `link` empty still shows the role, just without a link
- `note` is the most valuable field. Insider timing, who recruits where, what they screen for.

**Prefer a stable program page over a job posting link.** Job postings expire every
recruiting cycle. Program pages last years.

To add a whole new company, copy an existing block and change it. `sector` must
match one of the keys in `SECTORS` above: `consulting`, `accounting`, `finance`, `tech`.

Every company card also has a `careersUrl`. That is the "All internships at X"
button, and it is what keeps the card useful when individual postings close.

---

## Add a company logo

Drop an SVG or PNG in `logos/`, then point at it in the `COMPANIES` list.
If the file is missing, the site draws the company name in a clean box instead,
so it never looks broken.

---

## Add an event

`EVENTS` at the bottom of `data.js`:

```js
{ date: "2026-09-04", title: "First General Meeting", where: "BA 116", kind: "Meeting" },
```

Dates must be `YYYY-MM-DD` so the calendar can place them. For a multi-day event
add `end: "2027-08-13"`. The calendar opens on the first month that has something
in it, and `kind` can be Meeting, Professional, Social, Service or Convention.

---

## Change the sponsorship tiers

`TIERS` in `data.js`. Rename them, change the prices, edit the perks.
Add a company name to a tier's `partners` list and its logo appears automatically.

**The tiers and prices in there now are placeholders that were invented.**
Replace them with the real packet before any company sees that page.

---

## Change the colors or the background

`site.css`, at the very top. The whole palette is a handful of lines.
`--paper` is the page background and there are four suggested values in a comment.
Change that one line and the entire site moves with it.
