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
| `claude` | Fresh session. Reads `CLAUDE.md`, no memory of past chats. **Use this.** |
| `claude --continue` | Picks up the most recent conversation **started in that same folder**. |
| `claude --resume` | Lists past conversations **from that same folder** to pick from. |

### The catch with --continue and --resume

Both are scoped to the folder you launch from. Claude Code files conversations by
the directory they started in, under `~/.claude/projects/`.

The long session that built this site was started from the **home folder**, not
from the project folder. So running `claude --resume` inside
`~/Desktop/Projects/alpfa-asu` will show **nothing**, because no conversation has
ever been started there.

To reach that original conversation:

```
cd ~
claude --resume
```

then pick it from the list.

### But you almost never need it

`CLAUDE.md` exists so the history does not matter. It already carries the design
rules, the positioning, the layout constraints and the open items. A fresh
`claude` in the project folder knows everything that is worth knowing, and it
starts with a clean, fast context instead of dragging a very long transcript
behind it.

**Recommended:** plain `claude` in the project folder. That is what the
Continue with Claude button does.

### Two windows at once

Do not resume the same conversation in a second terminal while it is still open
in a first one. Both windows write to the same transcript file and they will
tread on each other. Close the old window first, or just start a fresh session.

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
