// Safety check for data.js and events.js. Run: node tools/check_data.js
//
// data.js is the whole site. One stray bracket or quote and every page goes
// blank, because every page reads it. This runs it the way a browser would and
// fails loudly if it does not load, if a section the pages depend on is
// missing or empty, or if it points at a photo or logo that is not in the repo.
//
// It runs in three places (added 2026-10-21):
//   - Publish Changes.command, before anything is committed;
//   - .githooks/pre-commit, so a commit from a Claude session is checked too;
//   - .github/workflows/check-data.yml on every push, which opens an issue if
//     something broken got through anyway.
// Exit code 0 means safe to publish, 1 means do not.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const problems = [];

// Every top-level const in data.js that a page reads. Lists and keyed groups
// must not be empty.
const REQUIRED = {
  objects: ["PROGRAMS", "TEAMS"],
  arrays: ["HERO_SLIDES", "VALUES", "STATS", "PILLARS",
           "BOARD", "SECTORS", "SECTOR_GROUPS", "YEARS", "MAJORS", "EMPLOYERS",
           "SPONSORS", "PARTNER_PHOTOS", "EVENTS"],
  present: ["CHAPTER", "ABOUT", "MISSION", "PAST_EVENTS", "BOARD_BACKDROP",
            "QUIZ", "COMPANIES", "PARTNER_CONTACT", "CAMPUS", "CERTIFICATES",
            "SCHOLARSHIPS", "RESEARCH"],
};

function load(file, names) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const window = {};
  const ret = names.length ? "return {" + names.map(n => `${n}: typeof ${n} === "undefined" ? undefined : ${n}`).join(",") + "};" : "return {};";
  try {
    const out = new Function("window", src + "\n;" + ret)(window);
    return Object.assign(out, { window });
  } catch (e) {
    problems.push(`${file} does not load: ${e.message}`);
    return null;
  }
}

const data = load("data.js", REQUIRED.objects.concat(REQUIRED.arrays, REQUIRED.present));
if (data) {
  for (const n of REQUIRED.arrays) {
    if (!Array.isArray(data[n])) problems.push(`data.js: ${n} is missing or not a list`);
    else if (data[n].length === 0) problems.push(`data.js: ${n} is empty`);
  }
  for (const n of REQUIRED.objects) {
    const v = data[n];
    if (!v || typeof v !== "object" || Array.isArray(v)) problems.push(`data.js: ${n} is missing or not a group`);
    else if (Object.keys(v).length === 0) problems.push(`data.js: ${n} is empty`);
  }
  for (const n of REQUIRED.present) {
    if (data[n] === undefined) problems.push(`data.js: ${n} is missing`);
  }
  for (const [i, p] of (data.BOARD || []).entries()) {
    for (const f of ["name", "role", "photo"]) {
      if (!p || !p[f]) problems.push(`data.js: BOARD entry ${i + 1} (${p && p.name || "no name"}) has no ${f}`);
    }
  }

  // Every local image path anywhere in data.js must exist on disk.
  const seen = new Set();
  const walk = v => {
    if (typeof v === "string") {
      if (/^[\w./ -]+\.(jpe?g|png|webp|gif|svg|avif)$/i.test(v) && !/^https?:/.test(v) && !seen.has(v)) {
        seen.add(v);
        if (!fs.existsSync(path.join(ROOT, v))) problems.push(`data.js points at ${v}, which is not in the repo`);
      }
    } else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  walk(data);
  console.log(`data.js loads. ${(data.BOARD || []).length} board cards, ${(data.EMPLOYERS || []).length} employers, ${seen.size} image paths checked.`);
}

if (fs.existsSync(path.join(ROOT, "events.js"))) {
  const ev = load("events.js", []);
  if (ev && !Array.isArray(ev.window.EVENTS_LIVE)) problems.push("events.js loads but sets no EVENTS_LIVE list");
}

if (problems.length) {
  console.error("\nNOT SAFE TO PUBLISH. Fix these first:");
  for (const p of problems) console.error("  - " + p);
  process.exit(1);
}
console.log("Safe to publish.");
