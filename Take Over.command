#!/bin/zsh
# Double-click this to hand the project to a fresh Claude session.
#
# Continue with Claude.command just opens Claude in this folder. This one also
# runs a health check first, prints the real state of the site, and then starts
# Claude with a briefing so the new session does not have to be told anything.

# A double-clicked .command runs a NON-interactive zsh, which does not read
# ~/.zshrc. That is where $HOME/.local/bin is added, and that is where the
# claude binary lives, so without this line double-clicking fails with
# "command not found" even though it works fine in a normal Terminal.
export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")" || exit 1

clear
echo "============================================================"
echo "  ALPFA at ASU  ::  handing over to a new session"
echo "============================================================"
echo ""

# ---- 1. make sure we are not about to work on a stale copy ----
if [[ -d .git ]]; then
  echo "Checking the live site for changes made elsewhere..."
  git fetch -q origin main 2>/dev/null
  BEHIND=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo 0)
  AHEAD=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo 0)
  DIRTY=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')

  if [[ "$BEHIND" != "0" ]]; then
    echo "  Someone published $BEHIND change(s) since this copy last synced."
    if git pull -q --rebase origin main 2>/dev/null; then
      echo "  Pulled them in cleanly."
    else
      echo "  Could not merge automatically. Tell Claude to merge origin/main first."
    fi
  else
    echo "  Up to date with the live site."
  fi
  [[ "$AHEAD" != "0" ]] && echo "  $AHEAD commit(s) here are NOT published yet."
  [[ "$DIRTY" != "0" ]] && echo "  $DIRTY file(s) changed and not committed."
  echo ""
fi

# ---- 2. the WHOLE site, read from the data itself rather than from any doc ----
if command -v node >/dev/null 2>&1; then
  node -e '
    const fs = require("fs");
    try {
      const d = new Function(fs.readFileSync("data.js","utf8") +
        ";return {SECTORS,EMPLOYERS,SCHOLARSHIPS,RESEARCH,CAMPUS,PIPELINES,ALUMNI,BOARD," +
        "PROGRAMS,EVENTS,COMPANIES,TIERS,ABOUT,HERO_SLIDES,STATS};")();
      const c = x => x.reduce((a,g) => a + g.items.length, 0);
      const roles = d.EMPLOYERS.reduce((a,e) => a + e.roles.length, 0);
      const opps = c(d.SCHOLARSHIPS) + c(d.RESEARCH) + c(d.CAMPUS) + c(d.PIPELINES);

      console.log("WHAT IS ON THE SITE");
      console.log("  " + roles + " internship roles, " + d.EMPLOYERS.length +
                  " employers, " + d.SECTORS.length + " sectors");
      console.log("  " + opps + " on the opportunities page (" +
                  c(d.SCHOLARSHIPS) + " scholarships, " + c(d.RESEARCH) + " research, " +
                  c(d.CAMPUS) + " campus, " + c(d.PIPELINES) + " pipelines)");
      console.log("  " + (roles + opps) + " opportunities in total");
      console.log("");

      // Anything a human still has to supply. Silence here would be misleading.
      const gaps = [];
      const seats = d.BOARD.filter(b => b.name).length;
      if (seats < d.BOARD.length) gaps.push((d.BOARD.length - seats) + " of " + d.BOARD.length + " officer seats are empty");
      const chats = d.BOARD.filter(b => b.coffeeChat).length;
      if (chats < seats) gaps.push((seats - chats) + " filled officer(s) have no coffee chat contact");
      if (!d.ALUMNI.filter(a => a.name).length) gaps.push("no alumni profiles yet, that page is empty on purpose");
      if (!d.ABOUT.photos.length) gaps.push("About Us has no photos");
      const pk = Object.keys(d.PROGRAMS);
      const withPhotos = pk.filter(k => (d.PROGRAMS[k].photos || []).length).length;
      if (withPhotos < pk.length) gaps.push((pk.length - withPhotos) + " of " + pk.length + " programme photo walls are empty");
      const noLogo = d.COMPANIES.filter(x => !x.logo).length;
      if (noLogo) gaps.push(noLogo + " partner firm(s) have no logo file");
      if (d.TIERS.some(t => "price" in t)) gaps.push("SPONSORSHIP PRICING IS BACK ON THE SITE, it should not be");

      // Events that have already happened but are still listed.
      const today = new Date().toISOString().slice(0,10);
      const past = d.EVENTS.filter(e => (e.end || e.date) < today);
      if (past.length) gaps.push(past.length + " event(s) on the calendar have already passed: " +
        past.map(e => e.date + " " + e.title).join("; "));

      if (gaps.length) {
        console.log("STILL WAITING ON SOMEBODY");
        gaps.forEach(g => console.log("  - " + g));
      } else {
        console.log("STILL WAITING ON SOMEBODY\n  nothing, the content is complete");
      }
      console.log("");
    } catch (e) {
      console.log("  Could not read data.js: " + e.message);
    }
  '
fi

# ---- 2b. is it still a draft, and is the automation in place ----
DRAFT=$(grep -l "class=\"draft\"" *.html 2>/dev/null | wc -l | tr -d " ")
NOINDEX=$(grep -l "noindex" *.html 2>/dev/null | wc -l | tr -d " ")
PAGES=$(ls -1 *.html 2>/dev/null | wc -l | tr -d " ")
echo "PUBLISHING STATE"
if [[ "$DRAFT" == "$PAGES" && "$PAGES" != "0" ]]; then
  echo "  Draft banner on all $PAGES pages, noindex on $NOINDEX. Hidden from Google, reachable by link."
else
  echo "  Draft banner on $DRAFT of $PAGES pages, noindex on $NOINDEX. MIXED STATE, check this."
fi
[[ -f robots.txt ]] && echo "  robots.txt present, so crawlers are blocked." || echo "  robots.txt is GONE, so the site is crawlable."
[[ -f CNAME ]] && echo "  CNAME present, custom domain configured." || echo "  No CNAME, so it serves at alpfaasu.github.io."
[[ -f .github/workflows/check-links.yml ]] && echo "  Weekly link check is installed." || echo "  WEEKLY LINK CHECK IS MISSING."
echo ""

# ---- 3. link health from the last weekly check ----
if [[ -f link-status.json ]] && command -v python3 >/dev/null 2>&1; then
  python3 -c "
import json
try:
    d = json.load(open('link-status.json'))
    print('Link check, last run ' + d['checked'] + ':')
    print('  %d dead, %d expired deadlines, %d blocked by a CDN (those are fine)'
          % (d['dead_count'], d.get('expired_count', 0), d.get('blocked_count', 0)))
    for x in d['dead'][:5]:
        print('    DEAD: %s, %s' % (x['company'], x['role']))
    for x in d.get('expired', [])[:5]:
        print('    EXPIRED: %s, %s (%s)' % (x['company'], x['role'], x['passed']))
except Exception as e:
    print('Could not read link-status.json:', e)
"
  echo ""
fi

echo "------------------------------------------------------------"
echo "Starting Claude. Everything above stays on screen, scroll up to reread."
echo "Ctrl+C now if you did not mean to open this."
echo "------------------------------------------------------------"
echo ""
sleep 2

if ! command -v claude >/dev/null 2>&1; then
  echo ""
  echo "  The 'claude' command could not be found."
  echo ""
  echo "  It is usually at ~/.local/bin/claude. Check with:"
  echo "      ls ~/.local/bin/claude"
  echo ""
  echo "  If it is somewhere else, open this file in TextEdit and add that"
  echo "  folder to the PATH line near the top."
  echo ""
  read -r "?  Press return to close."
  exit 1
fi

exec claude "You are taking over the ALPFA at ASU chapter website in this folder.

Read README.md first, then CLAUDE.md. Between them they carry the full state, the
design rules, and the mistakes that have already been made and must not be
repeated. Do not skim them: several rules exist because a bug reached the live
site, and the reasons are written down.

Then read .alpfa-manifest.json if it is present. It is gitignored working notes
listing every open task, and the Mission Control dashboard reads it.

Before changing anything, tell me:
  1. what state you found the project in, including anything uncommitted or unpushed
  2. anything in the docs that contradicts the actual data, because that has
     happened before and the docs were the thing that was wrong
  3. what you think the most useful next thing to do is, and why

Then stop and wait. Do not start editing, and do not push anything, until I say so.

One standing rule above all others on this project: if a fact matters, it lives in
data.js as its own field, verified from the source. Never infer a fact by pattern
matching prose, and never write a URL you have not fetched yourself."
