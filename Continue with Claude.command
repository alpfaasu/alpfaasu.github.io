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
  git pull --quiet --rebase 2>/dev/null && echo "Up to date." || echo "Could not pull, carrying on."
  echo ""
fi

echo "Starting Claude. Type what you want to change, or /exit to quit."
echo ""
exec claude
