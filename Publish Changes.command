#!/bin/zsh
# Double-click to put your changes on the live website.
# Live at https://alpfaasu.github.io/ - takes about a minute to update.
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")" || exit 1

echo "Rebuilding the offline copy..."
python3 tools/build_share.py
echo ""

if [[ -z "$(git status --porcelain)" ]]; then
  echo "Nothing has changed. Nothing to publish."
  echo ""
  echo "Press any key to close."
  read -k 1
  exit 0
fi

echo "About to publish these changes:"
git status --short
echo ""
echo -n "Type a short note about what you changed: "
read note
[[ -z "$note" ]] && note="Update site content"

git add -A
git commit -q -m "$note"
echo ""
echo "Publishing..."
if git push -q origin main; then
  echo ""
  echo "Done. The live site updates in about a minute:"
  echo "   https://alpfaasu.github.io/"
else
  echo ""
  echo "Push failed. You may need to run: git pull"
fi
echo ""
echo "Press any key to close."
read -k 1
