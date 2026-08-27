#!/bin/zsh
# Double-click to preview the site on this computer.
# This is your LOCAL copy. Changes here are not live until you publish.
cd "$(dirname "$0")" || exit 1
open "index.html"
