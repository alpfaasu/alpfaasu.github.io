#!/bin/sh
# Copies ONLY what visitors need into _site/: the pages, the four scripts and
# styles, robots.txt, and the images under logos/ and photos/. Everything else
# in the repo (CLAUDE.md, guide/, tools/, link-status.json, the offline copy)
# stays out of the published site. Added 2026-10-27 after Renars found the
# internal notes were readable at alpfaasu.github.io/CLAUDE.md.
# Used by .github/workflows/deploy.yml; any future host builds with it too.
set -eu
cd "$(dirname "$0")/.."
rm -rf _site && mkdir _site
git ls-files -z -- '*.html' 'data.js' 'events.js' 'site.js' 'site.css' 'robots.txt' \
  'logos/*.svg' 'logos/*.png' 'logos/*.jpg' 'logos/*.jpeg' 'logos/*.webp' \
  'photos/*.jpg' 'photos/*.jpeg' 'photos/*.png' 'photos/*.webp' \
  | grep -zv '^tools/' | xargs -0 -I{} sh -c 'mkdir -p "_site/$(dirname "{}")" && cp "{}" "_site/{}"'
# Belt and braces: refuse to publish anything that is not a page, script, style or image.
bad=$(find _site -type f ! \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name 'robots.txt' \
  -o -name '*.svg' -o -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' -o -name '*.webp' \) -print)
[ -z "$bad" ] || { echo "Refusing to publish: $bad"; exit 1; }
echo "_site: $(find _site -type f | wc -l | tr -d ' ') files"
