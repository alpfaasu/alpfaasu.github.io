#!/usr/bin/env python3
"""
ALPFA at ASU - photo prep.

What this does:
  photos/board/    ->  square 900x900 headshots, ready for the officer cards
  photos/gallery/  ->  wide 1800px-max images, ready for the hero and tiles
  photos/programs/ ->  square 1100x1100, ready for the program page photo walls

You do not need to resize or crop anything yourself. Drop the originals
in and double-click "Update Photos.command".

Originals are never modified. HEIC files from an iPhone are converted.
"""

import os
import sys
import json

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is not installed. Run:  python3 -m pip install Pillow")

try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass  # only needed if you drop in .HEIC files straight off an iPhone

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE_PATH = os.path.join(HERE, "photos", ".cache.json")
EXTS = (".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp", ".tif", ".tiff")

JOBS = [
    # (source folder,     output folder,   mode,     size)
    ("photos/board",      "photos/board",   "square", 900),
    ("photos/gallery",    "photos/gallery", "wide",   1800),
    ("photos/programs",   "photos/programs", "square", 1100),
]


def load_cache():
    try:
        with open(CACHE_PATH) as f:
            return json.load(f)
    except Exception:
        return {}


def save_cache(cache):
    os.makedirs(os.path.dirname(CACHE_PATH), exist_ok=True)
    with open(CACHE_PATH, "w") as f:
        json.dump(cache, f, indent=1)


def process(src_path, out_path, mode, size):
    im = Image.open(src_path)
    im = ImageOps.exif_transpose(im)      # respect the camera's rotation flag
    im = im.convert("RGB")

    if mode == "square":
        im = ImageOps.fit(im, (size, size), Image.LANCZOS, centering=(0.5, 0.38))
    else:
        im.thumbnail((size, size * 2), Image.LANCZOS)

    im.save(out_path, "JPEG", quality=86, optimize=True, progressive=True)


def main():
    cache = load_cache()
    made = 0
    skipped = 0

    for src_dir, out_dir, mode, size in JOBS:
        src_abs = os.path.join(HERE, src_dir)
        out_abs = os.path.join(HERE, out_dir)
        if not os.path.isdir(src_abs):
            continue
        os.makedirs(out_abs, exist_ok=True)

        for name in sorted(os.listdir(src_abs)):
            if name.startswith("."):
                continue
            low = name.lower()
            if not low.endswith(EXTS):
                continue

            src_path = os.path.join(src_abs, name)
            stem = os.path.splitext(name)[0]
            out_path = os.path.join(out_abs, stem + ".jpg")

            # An already-processed .jpg in the same folder is its own output.
            sig = str(os.path.getmtime(src_path)) + ":" + str(os.path.getsize(src_path))
            key = os.path.join(src_dir, name)
            if cache.get(key) == sig and os.path.exists(out_path):
                skipped += 1
                continue

            try:
                process(src_path, out_path, mode, size)
                cache[key] = sig
                made += 1
                print("  ok   " + os.path.join(out_dir, stem + ".jpg"))
            except Exception as exc:
                print("  skip " + name + "  (" + str(exc) + ")")

    save_cache(cache)
    print("")
    print("Processed " + str(made) + " photo(s). " + str(skipped) + " already up to date.")
    print("")
    print("Now open data.js and point each officer at their file, for example:")
    print('   photo: "photos/board/maria.jpg"')


if __name__ == "__main__":
    main()
