#!/bin/zsh
# Double-click this to hand the project to a fresh Claude session.
#
# Continue with Claude.command just opens Claude in this folder. This one also
# runs a health check first, prints the real state of the site, and then starts
# Claude with a briefing so the new session does not have to be told anything.

export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
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

# ---- 2. what is actually on the site, read from the data itself ----
if command -v node >/dev/null 2>&1; then
  echo "What is on the site:"
  node -e '
    const fs = require("fs");
    try {
      const d = new Function(fs.readFileSync("data.js","utf8") +
        ";return {SECTORS,EMPLOYERS,SCHOLARSHIPS,RESEARCH,CAMPUS,PIPELINES,ALUMNI,BOARD,PROGRAMS,EVENTS};")();
      const c = x => x.reduce((a,g) => a + g.items.length, 0);
      const roles = d.EMPLOYERS.reduce((a,e) => a + e.roles.length, 0);
      const opps = c(d.SCHOLARSHIPS) + c(d.RESEARCH) + c(d.CAMPUS) + c(d.PIPELINES);
      console.log("  " + roles + " internship roles, " + d.EMPLOYERS.length +
                  " employers, " + d.SECTORS.length + " sectors");
      console.log("  " + opps + " on the opportunities page (" +
                  c(d.SCHOLARSHIPS) + " scholarships, " + c(d.RESEARCH) + " research, " +
                  c(d.CAMPUS) + " campus jobs, " + c(d.PIPELINES) + " pipelines)");
      console.log("  " + (roles + opps) + " opportunities in total");
      console.log("");
      console.log("  Officer seats filled: " + d.BOARD.filter(b => b.name).length + " of " + d.BOARD.length);
      console.log("  Alumni profiles:      " + d.ALUMNI.filter(a => a.name).length);
      console.log("  Programmes with photos: " +
        Object.keys(d.PROGRAMS).filter(k => (d.PROGRAMS[k].photos || []).length).length +
        " of " + Object.keys(d.PROGRAMS).length);
    } catch (e) {
      console.log("  Could not read data.js: " + e.message);
    }
  '
  echo ""
fi

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
echo "Starting Claude with a briefing. Then just say what you want."
echo "------------------------------------------------------------"
echo ""

read -r "?Press return to start, or Ctrl+C to cancel. "

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
