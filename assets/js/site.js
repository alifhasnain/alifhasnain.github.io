/* ══════════════════════════════════════════════════════════════════════════
   [YOUR_NAME] — portfolio behaviour
   Progressive enhancement only. Every section is readable and navigable with
   this file removed; nothing here creates content the markup does not have.
   ══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var root = document.documentElement;

  /* ── 1. boot sequence ──────────────────────────────────────────────────
     CSS keyframes are scoped to html[data-boot="run"], so the page renders
     finished by default. Motion is opt-in and one-shot.                    */
  function boot() {
    if (reduced.matches) {
      root.setAttribute("data-boot", "done");
      return;
    }
    root.setAttribute("data-boot", "run");
    window.setTimeout(function () {
      root.setAttribute("data-boot", "done");
    }, 2400);
  }

  /* ── 2. footer prompt types one command ────────────────────────────── */
  function typePrompt() {
    var el = document.querySelector("[data-type]");
    if (!el) return;
    var text = el.getAttribute("data-type") || "";
    if (reduced.matches) { el.textContent = text; return; }

    var i = 0;
    window.setTimeout(function step() {
      el.textContent = text.slice(0, ++i);
      if (i < text.length) window.setTimeout(step, 42);
    }, 1500);
  }

  /* ── 3. status-bar clock ───────────────────────────────────────────── */
  function clock() {
    var el = document.getElementById("clock");
    if (!el) return;
    var pad = function (n) { return String(n).padStart(2, "0"); };
    var tick = function () {
      var d = new Date();
      el.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    };
    tick();
    window.setInterval(tick, 1000);
  }

  /* ── 4. contribution grid — deterministic sample data ──────────────────
     Seeded so the graphic is identical on every load and screenshot. This is
     placeholder texture, marked "sample data" in the markup, and it is
     aria-hidden: it never claims a real contribution history.             */
  function heatmap() {
    var host = document.getElementById("heat");
    if (!host) return;

    var seed = 0x5f3a91;
    var rand = function () {                    /* mulberry32 */
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    var frag = document.createDocumentFragment();
    for (var w = 0; w < 52; w++) {
      /* mild seasonal swell so the field reads like activity, not noise */
      var season = 0.55 + 0.45 * Math.sin((w / 52) * Math.PI * 2 - 1.1);
      for (var d = 0; d < 7; d++) {
        var weekend = d === 0 || d === 6 ? 0.45 : 1;
        var v = rand() * season * weekend;
        var cell = document.createElement("i");
        var level = v > 0.62 ? 3 : v > 0.42 ? 2 : v > 0.2 ? 1 : 0;
        if (level) cell.setAttribute("data-l", String(level));
        frag.appendChild(cell);
      }
    }
    host.appendChild(frag);
  }

  /* ── 5. active-section tracking for nav + rail ─────────────────────── */
  function scrollspy() {
    var map = [
      { id: "terminal", rail: "top" },
      { id: "about", rail: "about", nav: "#about" },
      { id: "projects", rail: "projects", nav: "#projects" },
      { id: "skills", rail: "skills", nav: "#skills" },
      { id: "experience", rail: "experience", nav: "#experience" },
      { id: "github", rail: "github" },
      { id: "notes", rail: "notes", nav: "#notes" },
      { id: "contact", rail: "contact", nav: "#contact" }
    ];

    var watched = map.filter(function (m) { return document.getElementById(m.id); });
    if (!watched.length || !("IntersectionObserver" in window)) return;

    var ratios = new Map();

    function paint() {
      var best = null, bestRatio = 0;
      ratios.forEach(function (r, id) {
        if (r > bestRatio) { bestRatio = r; best = id; }
      });
      if (!best) return;
      var entry = watched.find(function (m) { return m.id === best; });
      if (!entry) return;

      document.querySelectorAll(".rail a.is-active").forEach(function (a) { a.classList.remove("is-active"); });
      var railLink = document.querySelector('.rail a[data-rail="' + entry.rail + '"]');
      if (railLink) railLink.classList.add("is-active");

      document.querySelectorAll(".nav a.is-active").forEach(function (a) { a.classList.remove("is-active"); });
      if (entry.nav) {
        var navLink = document.querySelector('.nav a[href="' + entry.nav + '"]');
        if (navLink) navLink.classList.add("is-active");
      }
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0); });
      paint();
    }, { rootMargin: "-56px 0px -45% 0px", threshold: [0, 0.15, 0.35, 0.6, 0.9] });

    watched.forEach(function (m) { io.observe(document.getElementById(m.id)); });
  }

  /* ── 6. one settle on entry for content below the fold ─────────────── */
  function reveals() {
    if (reduced.matches || !("IntersectionObserver" in window)) return;

    var targets = [].slice.call(document.querySelectorAll(
      ".band__head, .mosaic > .pane, .grid > .pane, .tri, .contact"
    )).filter(function (el) {
      return el.getBoundingClientRect().top > window.innerHeight * 0.92;
    });
    if (!targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

    targets.forEach(function (el, i) {
      el.classList.add("rv");
      el.style.transitionDelay = (Math.min(i, 4) * 55) + "ms";
      io.observe(el);
    });
  }

  /* ── 7. copy-to-clipboard, with a real failure path ────────────────── */
  function copyEmail() {
    var btn = document.querySelector("[data-copy]");
    if (!btn) return;
    var label = btn.querySelector(".js-copy-label") || btn;
    var original = label.textContent;
    label.setAttribute("aria-live", "polite");
    var timer;

    function say(text, ok) {
      label.textContent = text;
      btn.classList.toggle("is-done", !!ok);
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        label.textContent = original;
        btn.classList.remove("is-done");
      }, 2400);
    }

    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-copy") || "";
      var done = function () { say("copied — " + value, true); };
      var failed = function () { say("copy blocked — select the address above", false); };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(value).then(done, failed);
        return;
      }
      /* file:// and older browsers reach here */
      try {
        var ta = document.createElement("textarea");
        ta.value = value;
        ta.setAttribute("readonly", "");
        ta.style.cssText = "position:fixed;top:-1000px;opacity:0";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        ok ? done() : failed();
      } catch (err) {
        failed();
      }
    });
  }

  /* ── init ──────────────────────────────────────────────────────────── */
  boot();
  clock();
  heatmap();
  scrollspy();
  reveals();
  copyEmail();
  typePrompt();
})();
