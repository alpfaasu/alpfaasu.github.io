#!/bin/zsh
# Double-click to pick this project back up in a new Claude Code session.
# Opens in the right folder, so CLAUDE.md loads automatically and Claude
# already knows the design rules, the positioning and what is unfinished.
export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.local/bin:$PATH"
cd "$(dirname "$0")" || exit 1

echo "ALPFA at ASU"
echo "Live: https://alpfaasu.github.io/"
echo ""

if ! command -v claude >/dev/null 2>&1; then
  echo "Claude Code is not on the PATH in this window."
  echo "Open Terminal yourself and run:"
  echo ""
  echo "   cd \"$(pwd)\""
  echo "   claude"
  echo ""
  echo "Press any key to close."
  read -k 1
  exit 1
fi

# pull first so the local copy is not behind anything edited on GitHub.com
if [[ -d .git ]]; then
  echo "Checking for changes made elsewhere..."
  # Name origin explicitly. That is the live site, and it is where anyone else
  # working on the chapter publishes to.
  if git pull --quiet --rebase origin main 2>/dev/null; then
    echo "Up to date with the live site."
  else
    echo "Could not pull cleanly. Ask Claude to merge origin/main before you publish."
  fi
  echo ""
fi

echo "Starting Claude. Type what you want to change, or /exit to quit."
echo ""
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

exec claude
