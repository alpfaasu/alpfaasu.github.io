# 06 - Continuing in a new terminal

How to pick this project back up in a fresh Claude Code session, days or months
from now, without re-explaining anything.

---

## The short version

Double-click **`Continue with Claude.command`** in the main folder.

It opens in the right place, pulls down anything changed on GitHub, and starts
Claude. Then just say what you want.

---

## The manual version

If you would rather type it:

1. Open **Terminal** (Cmd+Space, type Terminal, Enter)
2. Go to the project:
   ```
   cd ~/Desktop/Projects/alpfa-asu
   ```
3. Make sure you have anything edited elsewhere:
   ```
   git pull
   ```
4. Start Claude:
   ```
   claude
   ```
5. Say what you want. For example:
   > add the officer photos I just dropped in photos/board

**Step 2 matters.** Claude Code reads `CLAUDE.md` from whatever folder you start
in. Start somewhere else and it knows nothing about this project.

---

## Why you do not have to explain anything

`CLAUDE.md` sits in the main folder and loads automatically. It already contains:

- What the site is and who it is for
- The **positioning**: a community defined by the pursuit of excellence, not a
  career club. Career outcomes are produced, not the reason it exists.
- The **design rules**: the palette, no gradients, square corners, no em-dashes,
  the motion timings
- The **layout rule**: HTML and assets must stay at the root for GitHub Pages
- Where everything lives and what is still unfinished

So "continue on the ALPFA site" is enough to get going.

---

## Three commands worth knowing

| | |
| --- | --- |
| `claude` | Fresh session. Reads `CLAUDE.md`, no memory of past chats. |
| `claude --continue` | Picks up the most recent conversation in this folder. |
| `claude --resume` | Shows a list of past conversations to choose from. |

Use `--continue` if you were mid-task and closed the window.
Use plain `claude` for anything new.

---

## Good first things to say

Copy any of these:

> Add these officers to data.js, I have the photos in photos/board

> The sponsorship tiers are placeholders. Here is the real packet: [paste it]

> Re-check every internship link on the board and tell me which ones died

> Add photos to the program pages, pull them from our Instagram

> The board approved it. Remove the draft banner and let Google index it.

That last one is the real launch switch. See guide 05.

---

## If something looks wrong

Tell Claude what you see and where. It can open the site in your browser, take
screenshots, and check the live version, so "the values section looks broken on
my phone" is enough to work with.

To undo a bad change:

```
git log --oneline        see the history
git revert <the id>      undo that one change
git push origin main     publish the undo
```

Nothing is ever really lost. Every version is recoverable.
