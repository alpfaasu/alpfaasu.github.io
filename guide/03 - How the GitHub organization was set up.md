# 03 - How the GitHub organization was set up

Written down so the next VP can take this over, and so nobody has to guess how
it works if the person who built it is unreachable.

---

## What exists

| | |
| --- | --- |
| **GitHub organization** | `alpfaasu` -> github.com/alpfaasu |
| **Repository** | `alpfaasu/alpfaasu.github.io` |
| **Live website** | https://alpfaasu.github.io/ |
| **Owner** | Renārs Melnikovs (personal account `renarsm88`) |
| **Cost** | Nothing. Free plan, free hosting, no expiry. |

---

## Why an organization and not a personal account

The site was first published at `renarsm88.github.io/alpfa-asu`. That works, but
the URL carries a personal username, which is wrong for a chapter that will
outlive any one member.

An organization fixes both problems:

- The URL becomes the chapter, not a person
- Multiple people can be owners, so it survives graduations

**The naming trick:** a repository named exactly `<orgname>.github.io` gets served
at the bare `https://<orgname>.github.io/` with no path after it. That is why the
repo is called `alpfaasu.github.io` rather than something like `website`.

`alpfaatasu` was the first choice but that name was already taken on GitHub.
`alpfaasu` was free and matches the chapter Instagram handle.

---

## The steps that were taken

1. **Created the organization.** github.com/account/organizations/new, Free plan,
   name `alpfaasu`, contact email `renars.melnikovs@gmail.com`, belongs to a
   personal account. Terms accepted by Renārs.
2. **Transferred the repository** from `renarsm88` into the `alpfaasu` org.
3. **Renamed it** to `alpfaasu.github.io` so it serves at the bare domain.
4. **Enabled GitHub Pages** on the `main` branch, root folder.
5. **Added `.nojekyll`** so GitHub does not run Jekyll and swallow files whose
   names begin with an underscore.
6. **Added `noindex` and `robots.txt`** so search engines skip the draft.

Every step above was done through the GitHub website and the `gh` command line
tool. Nothing custom, nothing that needs maintaining.

---

## To add another owner

Do this before you graduate. It takes a minute.

1. Go to **github.com/orgs/alpfaasu/people**
2. **Invite member**, enter their GitHub username or email
3. Once they accept, change their role to **Owner**

An Owner can do everything, including adding the next person. Two owners is the
minimum so the chapter is never locked out.

Also worth changing at handover: the organization contact email, currently a
personal Gmail. A shared chapter inbox is the right answer there.
Settings are at **github.com/organizations/alpfaasu/settings/profile**.

---

## If the site ever needs to move

Everything the website is lives in this folder. It is plain HTML, CSS and
JavaScript with no build step and no dependencies. It will run on any host, or
straight off a USB stick.

To move it: copy the folder, drop it on the new host, done.
Nothing is locked to GitHub.
