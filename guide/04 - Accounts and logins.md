# 04 - Accounts and logins

What exists, who controls it, and what is still missing.

**No passwords are written down in this folder, and none should ever be.**
Put them in the chapter password manager or a shared vault.

---

## What the site depends on

| Thing | Where | Who controls it | Cost |
| --- | --- | --- | --- |
| GitHub organization | github.com/alpfaasu | Renārs (`renarsm88`) | Free |
| Repository and hosting | `alpfaasu/alpfaasu.github.io` | Same | Free |
| Org contact email | `renars.melnikovs@gmail.com` | Renārs | - |

That is the entire list. If GitHub is reachable, the site is up.

---

## The chapter domain

**`alpfaatasu.org` is registered and paid for through 17 July 2027.**

Checked against WHOIS on 26 August 2026: renewed 12 August 2026, registrar
GoDaddy, currently parked on a placeholder page.

This matters. The chapter is almost certainly already paying for this domain and
somebody on a past board has the GoDaddy login. Finding that person costs nothing
and gets the real chapter address instead of a github.io one.

**Ask about this at the next board meeting.** It is the single highest-value
loose end on the whole project.

### If you find the login

Two small steps and it is done:

1. In GoDaddy DNS, add these records:
   - `A` records for `@` pointing at `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - a `CNAME` for `www` pointing at `alpfaasu.github.io`
2. In the repo, add a file called `CNAME` containing one line: `alpfaatasu.org`

GitHub issues the HTTPS certificate automatically. Give it an hour.

### If you cannot find the login

Buying a new one costs roughly **$11 a year**, not per month. Cloudflare Registrar
sells at cost with no markup and no renewal price jumps.

Free when last checked: `alpfaasu.org`, `alpfaasu.com`, `asualpfa.org`,
`alpfaatasu.com`.

`.org` is the better choice. ALPFA National is `alpfa.org`, the FIU chapter is
`alpfafiu.org`, and `.org` reads as a student organization rather than a business.

---

## Things this site does NOT depend on

Worth knowing so nobody worries about them:

- No hosting bill, ever
- No website builder subscription, no Wix or Squarespace account
- No database, no server, no backend
- No plugins that can break or need updating

It is plain HTML, CSS and JavaScript. That is deliberate. A chapter site should
not die because a subscription lapsed after the person paying for it graduated.

---

## Where the content came from

- **Chapter photos** are from the chapter Instagram, `@alpfaasu`
- **Chapter numbers** (380 members, 74 events, 15 officers, chartered 2015) are
  from the Sun Devil Central page. Confirm them each semester.
- **Company logos** came from Wikimedia Commons and Simple Icons.
  These are trademarks. "Firms that recruit out of this chapter" is fine to say.
  Do not move a company onto the sponsors page until it has actually signed.
- **Internship links** were researched and every URL was checked as working on
  26 August 2026. They will need re-checking each recruiting season.
