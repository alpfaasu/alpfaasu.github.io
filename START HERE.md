# ALPFA at ASU website

This folder is the whole website. Everything about it is here.

**Live at: https://alpfaasu.github.io/**

---

## The four buttons

Double-click these. You never need the Terminal.

| | |
| --- | --- |
| **Open Website.command** | Preview the site on this computer. Changes are not live until you publish. |
| **Update Photos.command** | Run after adding photos. Crops and shrinks them for you. |
| **Publish Changes.command** | Puts your changes on the live website. Asks what you changed, then does the rest. |
| **Continue with Claude.command** | Picks the project back up in a new Claude session. Opens in the right folder so it already knows everything. |

---

## To change anything on the site

Open **`data.js`** in TextEdit or any code editor. Everything the website shows
comes out of that one file: the chapter info, the officers, the internships,
the sponsors, the events, the photos.

Edit it, save it, double-click **Open Website.command** to check it,
then double-click **Publish Changes.command** when you are happy.

You never need to touch the HTML or the CSS.

---

## What is in this folder

| | |
| --- | --- |
| `data.js` | **All the content.** The only file you normally edit. |
| `index.html` | The front page |
| `internships.html` | The internship board |
| `program.html` | All nine program pages, built from one file |
| `sponsors.html` | Sponsorship tiers |
| `site.css`, `site.js` | Styling and behavior. Leave these alone. |
| `photos/` | Every photo. `board/` officers, `gallery/` big images, `programs/` program pages |
| `logos/` | The chapter logo and the partner company logos |
| `guide/` | How to do everything, step by step. Start with 01. |
| `tools/` | Scripts and the offline copy. You do not need to open this. |

---

## The guide

Numbered so you can read them in order, or jump to the one you need.

1. **How to edit the site** - adding officers, internships, events, sponsors, photos
2. **How to publish changes** - getting your edits onto the live site
3. **How the GitHub organization was set up** - what was done and why, so it can be handed over
4. **Accounts and logins** - what exists, who controls it, what is still missing
5. **What still needs finishing** - the open list
6. **Continuing in a new terminal** - how to pick this back up later

---

## Three things to know

**The site is public but hidden from Google.** Anyone with the link can open it.
Search engines are told to skip it while it is a draft. See guide 05 for how to
turn that off when the board approves.

**Nothing costs money.** Hosting is free and stays free. The only thing you would
ever pay for is a custom domain name, around $11 a year. See guide 04.

**To continue later,** double-click **Continue with Claude.command** and say what
you want changed. It starts in this folder, which is what makes Claude load
`CLAUDE.md` and already know the design rules, the positioning, and what is
unfinished. Starting anywhere else and it knows nothing. Full steps in guide 06.
