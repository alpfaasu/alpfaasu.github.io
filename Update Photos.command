#!/bin/zsh
# Double-click after adding photos to photos/board, photos/gallery or photos/programs.
# Crops headshots square and shrinks big images. Originals are never changed.
# A double-clicked .command runs a NON-interactive zsh, which does not read
# ~/.zshrc. That is where $HOME/.local/bin is added, and that is where the
# claude binary lives, so without this line double-clicking fails with
# "command not found" even though it works fine in a normal Terminal.
export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")" || exit 1
echo "Preparing photos..."
echo ""
python3 tools/build.py
echo ""
echo "Press any key to close."
read -k 1
