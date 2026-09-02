/* ============================================================
   ALPFA at ASU - shared behavior
   You should not need to edit this file. Edit data.js instead.
   ============================================================ */

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- brand icons (Simple Icons paths) ---- */
const ICON = {
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>',
};

/* ---- scroll reveal (IntersectionObserver, no scroll listeners) ---- */
function initReveal(root) {
  const items = (root || document).querySelectorAll(".reveal:not(.in)");
  if (REDUCED) { items.forEach(function (el) { el.classList.add("in"); }); return; }

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const delay = Number(entry.target.dataset.delay || 0);
      setTimeout(function () { entry.target.classList.add("in"); }, delay);
      io.unobserve(entry.target);
    });
  }, {
    // Fire slightly BEFORE an element scrolls into view. The old settings waited
    // until it was 60px inside the viewport, which is what made sections feel
    // like they loaded late when you jumped to them.
    threshold: 0.01,
    rootMargin: "0px 0px 140px 0px"
  });

  items.forEach(function (el) { io.observe(el); });
}

/* ---- count-up stats ---- */
function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      io.unobserve(el);

      if (REDUCED || el.dataset.raw === "true") { el.textContent = String(target); return; }

      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });

  nums.forEach(function (el) { io.observe(el); });
}

/* ---- initials for people and companies with no image yet ---- */
function initials(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* ---- swap in a real logo/photo if the file exists, else keep the fallback ---- */
function tryImage(container, src, alt) {
  if (!src) return;
  const img = new Image();
  img.onload = function () {
    container.innerHTML = "";
    img.alt = alt || "";
    container.appendChild(img);
    container.classList.add("has-img");
  };
  img.src = src;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

/* ---- look up a company's logo file from COMPANIES ---- */
function logoFor(company) {
  const hit = COMPANIES.filter(function (c) { return c.name === company; })[0];
  return hit ? (hit.logo || "") : "";
}

/* ---- shared chrome: nav socials, footer links, year ---- */
function initChrome() {
  const right = document.querySelector("[data-nav-social]");
  if (right) {
    right.insertAdjacentHTML("afterbegin",
      '<a class="social" href="' + CHAPTER.instagram + '" target="_blank" rel="noopener" aria-label="ALPFA at ASU on Instagram">' + ICON.instagram + "</a>" +
      '<a class="social" href="' + CHAPTER.linkedin + '" target="_blank" rel="noopener" aria-label="ALPFA at ASU on LinkedIn">' + ICON.linkedin + "</a>");
  }

  document.querySelectorAll("[data-join]").forEach(function (a) { a.href = CHAPTER.joinLink; });
  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.href = "mailto:" + CHAPTER.email;
    if (a.dataset.email === "text") a.textContent = CHAPTER.email;
  });
  document.querySelectorAll("[data-ig]").forEach(function (a) { a.href = CHAPTER.instagram; });
  document.querySelectorAll("[data-li]").forEach(function (a) { a.href = CHAPTER.linkedin; });
  document.querySelectorAll("[data-sds]").forEach(function (a) { a.href = CHAPTER.sunDevilSync; });

  /* small-screen menu: mirror the inline nav links into a toggleable panel */
  const navLinks = document.querySelector(".nav-links");
  const navRight = document.querySelector(".nav-right");
  if (navLinks && navRight) {
    const btn = document.createElement("button");
    btn.className = "nav-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Menu");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = "<span></span>";
    navRight.appendChild(btn);

    const panel = document.createElement("nav");
    panel.className = "nav-panel";
    panel.setAttribute("aria-label", "Menu");
    panel.innerHTML = navLinks.innerHTML;
    document.body.appendChild(panel);

    function place() {
      const nav = document.querySelector(".nav");
      panel.style.top = nav.getBoundingClientRect().bottom + "px";
    }
    function close() { panel.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }

    btn.addEventListener("click", function () {
      const open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      if (open) place();
    });
    panel.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
    window.addEventListener("resize", function () { close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
}

/* ---- section jumps at a fixed speed ----
   The browser's native smooth scroll gets slower the further it travels, so a
   jump from the nav to the bottom of the page crawled. This is a flat 420ms
   whatever the distance. */
function initAnchorScroll() {
  const NAV = 84;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function scrollTo(target) {
    const top = target.getBoundingClientRect().top + window.pageYOffset - NAV;
    if (REDUCED) { window.scrollTo(0, top); return; }

    const from = window.pageYOffset;
    const dist = top - from;
    if (Math.abs(dist) < 2) return;

    const duration = 420;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      window.scrollTo(0, from + dist * easeInOutCubic(p));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.addEventListener("click", function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    scrollTo(target);
    history.replaceState(null, "", id);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initChrome();
  initAnchorScroll();
  initReveal();
  initCounters();
});
