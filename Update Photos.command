#!/bin/zsh
# Double-click after adding photos to photos/board, photos/gallery or photos/programs.
# Crops headshots square and shrinks big images. Your originals are kept.
# A double-clicked .command runs a NON-interactive zsh, which does not read
# ~/.zshrc. That is where $HOME/.local/bin is added, and that is where the
# claude binary lives, so without this line double-clicking fails with
# "command not found" even though it works fine in a normal Terminal.
export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")" || exit 1

# Pick a python that actually HAS Pillow, rather than whichever one is first on
# PATH. On this Mac /opt/homebrew/bin/python3 comes first and has no Pillow,
# while /usr/local/bin/python3 does, so plain "python3 tools/build.py" died on
# "Pillow is not installed" every single time it was double-clicked.
PY=""
for candidate in python3 /usr/local/bin/python3 /opt/homebrew/bin/python3 /usr/bin/python3; do
  if command -v "$candidate" >/dev/null 2>&1 && "$candidate" -c "import PIL" >/dev/null 2>&1; then
    PY="$candidate"
    break
  fi
done

if [ -z "$PY" ]; then
  echo "Could not find a Python with Pillow installed."
  echo ""
  echo "Fix it with one line, then run this again:"
  echo "   /usr/local/bin/python3 -m pip install Pillow pillow-heif"
  echo ""
  echo "Press any key to close."
  read -k 1
  exit 1
fi

echo "Preparing photos..."
echo ""
"$PY" tools/build.py
echo ""
echo "Press any key to close."
read -k 1
