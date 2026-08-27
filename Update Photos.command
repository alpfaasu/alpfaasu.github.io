#!/bin/zsh
# Double-click after adding photos to photos/board, photos/gallery or photos/programs.
# Crops headshots square and shrinks big images. Originals are never changed.
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")" || exit 1
echo "Preparing photos..."
echo ""
python3 tools/build.py
echo ""
echo "Press any key to close."
read -k 1
