#!/bin/zsh
# Double-click this after you drop new photos into photos/board or photos/gallery.
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")" || exit 1
echo "Preparing photos..."
echo ""
python3 build.py
echo ""
echo "Press any key to close."
read -k 1
