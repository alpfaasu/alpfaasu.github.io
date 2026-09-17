#!/bin/zsh
# Double-click to put your changes on the live website.
# Live at https://alpfaasu.github.io/ - takes about a minute to update.
# A double-clicked .command runs a NON-interactive zsh, which does not read
# ~/.zshrc. That is where $HOME/.local/bin is added, and that is where the
# claude binary lives, so without this line double-clicking fails with
# "command not found" even though it works fine in a normal Terminal.
export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")" || exit 1

# Someone else may have published while you were working. Check the LIVE repo,
# not the backup one, because this branch tracks backup and a plain "git pull"
# would not see their work at all.
echo "Checking the live site for other people's changes..."
git fetch -q origin main 2>/dev/null
BEHIND=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo 0)
if [[ "$BEHIND" != "0" ]]; then
  echo "Someone else published $BEHIND change(s) since you last synced:"
  git log --oneline HEAD..origin/main | sed 's/^/   /'
  echo ""
fi

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

if [[ "$BEHIND" != "0" ]]; then
  echo ""
  echo "Merging their changes in first..."
  if git pull -q --rebase origin main; then
    echo "Merged cleanly. Rebuilding the offline copy on top..."
    python3 tools/build_share.py >/dev/null
    if [[ -n "$(git status --porcelain)" ]]; then
      git add -A
      git commit -q -m "Rebuild offline copy after merge"
    fi
  else
    git rebase --abort 2>/dev/null
    echo ""
    echo "You and somebody else changed the same lines, so this needs a human."
    echo "Nothing was lost. Your work is committed here, theirs is on the live site."
    echo ""
    echo "Double-click Continue with Claude.command and say:"
    echo "   merge the changes from origin/main into my branch"
    echo ""
    echo "Press any key to close."
    read -k 1
    exit 1
  fi
fi

echo ""
echo "Publishing..."
if git push -q origin main; then
  echo ""
  echo "Done. The live site updates in about a minute:"
  echo "   https://alpfaasu.github.io/"
else
  echo ""
  echo "Push failed. Somebody may have published in the last few seconds."
  echo "Run this again, and it will pick their changes up."
fi
echo ""
echo "Press any key to close."
read -k 1
