# 07 - Setting up as a new editor

For a board member who has been given Write access to the website repo and
wants to publish changes from their own Mac. Three one-time steps, then the
same two guides everyone uses: `01 - How to edit the site.md` and
`02 - How to publish changes.md`.

You need a Mac. On Windows, edit `data.js` in GitHub's web editor instead
(github.com/alpfaasu/alpfaasu.github.io, open data.js, pencil icon, Commit);
it works, but it skips the safety check that stops a typo from blanking the
site, so re-open the live page straight after and look.

---

## 1. Accept the invitation

GitHub emailed you an invitation to `alpfaasu/alpfaasu.github.io`. Click
Accept. If you cannot find the email, sign in to github.com and open
https://github.com/alpfaasu/alpfaasu.github.io/invitations

While you are there, turn on two-factor login: profile picture, Settings,
Password and authentication, Two-factor authentication. Your account can
publish to the chapter's public website, so it should not be a password-only
account.

## 2. Install the two tools the publish script uses

- **Node** from https://nodejs.org (the LTS button). The safety check that
  runs before every publish is a small Node script.
- **Git** comes with Apple's command line tools. Open Terminal (Cmd+Space,
  type Terminal) and run `git --version`; if a dialog offers to install the
  tools, say yes.

Python is already on every Mac.

## 3. Get your own copy of the site

In Terminal:

```
git clone https://github.com/alpfaasu/alpfaasu.github.io.git ~/Desktop/alpfa-asu
```

The first time, GitHub opens a browser window to sign you in. After that the
folder `alpfa-asu` on your Desktop is the whole website.

---

## Every time after that

1. Double-click `Continue with Claude.command` if you want help, or open
   `data.js` in any text editor (TextEdit works; VS Code is nicer).
2. Change the text you need. Read `guide/01 - How to edit the site.md` once;
   the rules that matter are short: everything lives in `data.js`, never
   write a link you have not opened, and never invent a date or an amount.
3. Double-click `Publish Changes.command`. It pulls in anyone else's recent
   changes, runs the safety check, asks you for a one-line note, and
   publishes. The live site updates in about a minute.

If the script says "Nothing was published. Fix the problems above", it found
a broken quote or bracket in `data.js`. Nothing went live. Fix the line it
names and run it again.

## Who can publish

As of 2026-11-15: Renārs (owner, `renarsm88`) and Antonio Avila
(`antoniojavila11-wq`, Write). Renārs adds and removes editors at
github.com/alpfaasu/alpfaasu.github.io/settings/access. Remove an editor
the day they leave the board.
