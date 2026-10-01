#!/usr/bin/env python3
"""
ALPFA at ASU - photo prep.

What this does:
  photos/board/    ->  square 900x900 headshots, ready for the officer cards
  photos/gallery/  ->  wide 1800px-max images, ready for the hero and tiles
  photos/programs/ ->  square 1100x1100, ready for the program page photo walls

You do not need to resize or crop anything yourself. Drop the originals
in and double-click "Update Photos.command".

Your originals are KEPT. A dropped-in .jpg would otherwise be overwritten by
its own resized version, because the source folder and the output folder are
the same, so every original is moved into an "_originals" subfolder first and
the processed copy takes its place. Nothing you drop in is ever destroyed.

HEIC files from an iPhone are converted, provided pillow-heif is installed.
"""

import os
import sys
import json
import shutil

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is not installed. Run:  python3 -m pip install Pillow")

try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
    HEIC_OK = True
except ImportError:
    # Only needed for .HEIC straight off an iPhone, which is most event photos.
    # This used to "pass" in silence, so a folder of iPhone photos produced a
    # wall of "cannot identify image file" and looked like corrupt files.
    HEIC_OK = False

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # project root, one level up from tools/
CACHE_PATH = os.path.join(HERE, "photos", ".cache.json")
EXTS = (".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp", ".tif", ".tiff")
ORIGINALS = "_originals"   # untouched copies live here, never served, never scanned

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
        # Never enlarge. A 600px source fitted to 900 gains no detail and costs
        # a third more bytes, it just looks softer. "wide" already refuses to
        # upscale because thumbnail() only ever shrinks; square has to be told.
        side = min(size, im.width, im.height)
        im = ImageOps.fit(im, (side, side), Image.LANCZOS, centering=(0.5, 0.38))
    else:
        im.thumbnail((size, size * 2), Image.LANCZOS)

    im.save(out_path, "JPEG", quality=86, optimize=True, progressive=True)


def main():
    cache = load_cache()
    made = 0
    skipped = 0

    for src_dir, out_dir, mode, size in JOBS:
        out_abs = os.path.join(HERE, out_dir)
        if not os.path.isdir(out_abs):
            continue
        keep_abs = os.path.join(out_abs, ORIGINALS)
        os.makedirs(keep_abs, exist_ok=True)

        # 1. Sweep. Anything dropped into the folder is an original, so it moves
        #    into _originals before anything touches it. The folder you drop into
        #    is also the folder the site serves from, so without this step the
        #    resize would write straight over the file it just read.
        #    Match on the STEM, not the full name: maria.heic builds maria.jpg,
        #    and that maria.jpg is our output, not a new drop.
        have = set(os.path.splitext(n)[0] for n in os.listdir(keep_abs) if not n.startswith("."))
        for name in sorted(os.listdir(out_abs)):
            if name.startswith(".") or name == ORIGINALS:
                continue
            loose = os.path.join(out_abs, name)
            if os.path.isdir(loose) or not name.lower().endswith(EXTS):
                continue
            if os.path.splitext(name)[0] in have:
                # We already hold an original with this stem, so the loose file
                # is the served copy we built from it. Leave it where it is.
                # To replace a photo, delete it from _originals first.
                continue
            shutil.move(loose, os.path.join(keep_abs, name))

        # 2. Build every original into the served folder. Originals are never
        #    written to, so their signatures are stable and the cache actually
        #    works. The first version cached the SOURCE signature and then
        #    overwrote that very source, so every photo was re-encoded on every
        #    run and lost a little more quality each time.
        for name in sorted(os.listdir(keep_abs)):
            if name.startswith("."):
                continue
            src_path = os.path.join(keep_abs, name)
            if os.path.isdir(src_path) or not name.lower().endswith(EXTS):
                continue

            stem = os.path.splitext(name)[0]
            out_path = os.path.join(out_abs, stem + ".jpg")
            sig = str(os.path.getmtime(src_path)) + ":" + str(os.path.getsize(src_path))
            key = os.path.join(out_dir, ORIGINALS, name)

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
    if not HEIC_OK:
        print("")
        print("NOTE: iPhone .HEIC photos cannot be read right now. To turn that on:")
        print("   /usr/local/bin/python3 -m pip install pillow-heif")
    print("")
    print("Your originals are kept in each folder's _originals, untouched.")
    print("")
    print("Now open data.js and point each officer at their file, for example:")
    print('   photo: "photos/board/maria.jpg"')


if __name__ == "__main__":
    main()
