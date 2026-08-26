#!/usr/bin/env python3
"""
Packs all three pages into ONE self-contained HTML file you can email or
host anywhere, with the images baked in. Nothing external is needed.

Output: share/alpfa-asu-draft.html
"""

import base64
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
PAGES = ["index.html", "program.html", "internships.html", "sponsors.html"]


def read(rel):
    with open(os.path.join(HERE, rel), encoding="utf-8") as f:
        return f.read()


def data_uri(rel):
    path = os.path.join(HERE, rel)
    if not os.path.exists(path):
        return ""
    ext = os.path.splitext(path)[1].lower()
    mime = {".png": "image/png", ".svg": "image/svg+xml",
            ".jpg": "image/jpeg", ".jpeg": "image/jpeg"}.get(ext, "image/jpeg")
    with open(path, "rb") as f:
        return "data:" + mime + ";base64," + base64.b64encode(f.read()).decode("ascii")


def grab(html, tag):
    m = re.search(r"<" + tag + r"[^>]*>(.*?)</" + tag + r">", html, re.S)
    return m.group(1) if m else ""


def last_script(html):
    blocks = re.findall(r"<script>(.*?)</script>", html, re.S)
    return blocks[-1] if blocks else ""


def main():
    pages = {p: read(p) for p in PAGES}

    # ---- collect every local image the pages reference, as data URIs ----
    assets = {}
    for folder in ("logos", "photos/gallery", "photos/programs", "photos/board"):
        d = os.path.join(HERE, folder)
        if not os.path.isdir(d):
            continue
        for name in sorted(os.listdir(d)):
            if not name.lower().endswith((".svg", ".png", ".jpg", ".jpeg")):
                continue
            rel = folder + "/" + name
            uri = data_uri(rel)
            if uri:
                assets[rel] = uri

    def bake(s):
        for rel, uri in assets.items():
            s = s.replace('"' + rel + '"', '"' + uri + '"')
            s = s.replace("src=" + rel, "src=" + uri)
            s = s.replace('src="' + rel + '"', 'src="' + uri + '"')
        return s

    # ---- one nav for the whole document, pointing at anchors ----
    nav = grab(pages["index.html"], "header")
    foot = grab(pages["index.html"], "footer")

    def relink(s):
        s = re.sub(r'href="program\.html\?p=([a-z0-9-]+)"', r'href="#program-\1"', s)
        return (s.replace('href="internships.html"', 'href="#internships"')
                 .replace('href="sponsors.html"', 'href="#sponsors-page"')
                 .replace('href="program.html"', 'href="#programs-page"')
                 .replace('href="index.html#', 'href="#')
                 .replace('href="index.html"', 'href="#top"'))

    # ---- page bodies ----
    bodies = []
    bodies.append(grab(pages["index.html"], "main"))
    # program.html renders itself into #page from data.js, in merged mode
    bodies.append('<div id="programs-page"><main id="page"></main></div>')
    bodies.append('<div id="internships">' + grab(pages["internships.html"], "main") + "</div>")
    bodies.append('<div id="sponsors-page">' + grab(pages["sponsors.html"], "main") + "</div>")

    # the member dialog lives outside <main> on the index page
    dialog = re.search(r'<dialog class="sheet".*?</dialog>', pages["index.html"], re.S)
    dialog_html = dialog.group(0) if dialog else ""

    styles = "\n".join(grab(pages[p], "style") for p in PAGES)
    scripts = [last_script(pages[p]) for p in PAGES]

    data_js = read("data.js")
    site_js = read("site.js")

    fonts = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
             '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
             '<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900'
             '&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">')

    merged_fixups = """
/* merged single-page build: one nav, so anchors clear it */
#internships, #sponsors-page, #programs-page { scroll-margin-top: 72px; }
.controls { top: 72px; }
/* only the first page keeps a full-height hero */
#internships .head, #sponsors-page .head { padding-top: 96px; border-top: 1px solid var(--line); }
"""

    out = "\n".join([
        "<title>ALPFA at ASU</title>",
        fonts,
        "<style>", styles, merged_fixups, "</style>",
        '<div class="draft">Working draft for chapter review. Content in progress.</div>',
        '<span id="top"></span>',
        "<header class=\"nav\">" + relink(nav) + "</header>",
        "<main>", "\n".join(relink(b) for b in bodies), "</main>",
        dialog_html,
        "<footer class=\"foot\">" + relink(foot) + "</footer>",
        "<script>window.ALPFA_MERGED = true;</script>",
        "<script>", data_js, "</script>",
        "<script>", site_js, "</script>",
    ] + sum([["<script>", s, "</script>"] for s in scripts], []))

    # Some hrefs are built at runtime by JS string concatenation, so a plain
    # text replace catches both the static markup and the generated links.
    out = out.replace('href="program.html?p=', 'href="#program-')
    out = out.replace('href="program.html"', 'href="#programs-page"')
    out = bake(out)

    os.makedirs(os.path.join(HERE, "share"), exist_ok=True)
    out_path = os.path.join(HERE, "share", "alpfa-asu-draft.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(out)

    kb = os.path.getsize(out_path) / 1024.0
    print("Wrote share/alpfa-asu-draft.html  (" + str(round(kb)) + " KB)")
    print("Baked in " + str(len(assets)) + " image(s).")
    print("That one file is the whole site. Email it, or drop it on any host.")


if __name__ == "__main__":
    main()
