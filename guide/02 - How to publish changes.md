# 02 - How to publish changes

The live site is **https://alpfaasu.github.io/**

Editing files on this computer does **not** change the live site. You have to
publish. That is on purpose, so you can experiment without anyone seeing.

---

## The normal way

1. Edit `data.js`
2. Double-click **Open Website.command** to check it looks right
3. Double-click **Publish Changes.command**
4. It asks what you changed. Type something short like `added officer photos`
5. Wait about a minute, then reload the live site

That is the whole thing.

---

## What that button actually does

Three steps, so you know what to expect and can do them by hand if it ever breaks:

```
python3 tools/build_share.py     rebuilds the offline single-file copy
git add -A && git commit         saves a snapshot of your changes
git push origin main             sends it to GitHub, which republishes the site
```

GitHub takes 30 to 90 seconds to rebuild. If the live site looks unchanged,
wait a moment and hard-refresh with Cmd+Shift+R.

---

## Editing from a phone or another computer

Go to **github.com/alpfaasu/alpfaasu.github.io**, click `data.js`, click the
pencil icon, edit, then Commit changes. It republishes on its own.

**If you do that, run `git pull` before you edit on this computer again**, or you
will end up with two versions fighting each other.

---

## If something goes wrong

**The site went blank after an edit.**
You broke the syntax in `data.js`, almost always a missing comma or quote mark.
Undo, save, refresh.

**You want to undo a published change.**
In Terminal, in this folder:
```
git log --oneline          see the history
git revert <the id>        undo that one change
git push origin main       publish the undo
```

**Publish says the push failed.**
Someone edited on GitHub.com. Run `git pull`, then publish again.

**You deleted half of data.js by accident.**
```
git checkout data.js
```
That restores the last published version. Nothing is ever really lost.

---

## The offline copy

`tools/offline-copy/alpfa-asu-offline.html` is the entire website in one file,
with every image baked in. No internet needed.

Use it to email the site as an attachment, or to hand someone a copy that will
still work in five years regardless of what happens to the hosting.

It rebuilds every time you publish.
