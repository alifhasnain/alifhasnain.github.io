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

  /* ── 4. active-section tracking for nav + rail ───────────────────────
     Elects by scan line, not by intersection ratio. #skills, #experience and
     #opensource are three columns of ONE .triptych grid row: they enter and
     leave the viewport together, so a ratio comparison always returns the same
     member and the other two can never light up. Sections that share a vertical
     range are therefore grouped, and a click pins which member of its group is
     shown — scroll past the row and it falls back to the group's first column. */
  function scrollspy() {
    var map = [
      { id: "terminal", rail: "top" },
      { id: "about", rail: "about", nav: "#about" },
      { id: "projects", rail: "projects", nav: "#projects" },
      { id: "skills", rail: "skills", nav: "#skills" },
      { id: "experience", rail: "experience", nav: "#experience" },
      { id: "opensource", rail: "opensource", nav: "#opensource" },
      { id: "credentials", rail: "credentials", nav: "#credentials" },
      { id: "contact", rail: "contact", nav: "#contact" }
    ];

    var watched = map.filter(function (m) {
      m.el = document.getElementById(m.id);
      return !!m.el;
    });
    if (!watched.length) return;

    var groups = [];
    var pinned = null;   /* the group member a click asked for */
    var lock = 0;        /* held while a click-driven scroll is still travelling */
    var lockTimer, raf = 0;

    function bar() {
      var v = parseFloat(getComputedStyle(root).getPropertyValue("--bar"));
      return isNaN(v) ? 52 : v;
    }

    /* Measured every frame rather than cached: opening a <details> row in the
       projects explorer changes section offsets, and a stale cache would elect
       the wrong section with no visible cause. Eight rects is nothing.
       Kept viewport-relative, never scrollY-relative, so it holds whichever
       element turns out to be the scroll container. */
    function measure() {
      watched.forEach(function (m) {
        var r = m.el.getBoundingClientRect();
        m.top = r.top;
        m.bottom = r.bottom;
      });

      groups = [];
      watched.forEach(function (m) {
        var g = groups[groups.length - 1];
        if (g) {
          var last = g.members[g.members.length - 1];
          var overlap = Math.min(m.bottom, last.bottom) - Math.max(m.top, last.top);
          var shorter = Math.min(m.bottom - m.top, last.bottom - last.top);
          /* Side by side, not stacked: more than 60% of the shorter box shares
             the taller one's vertical range. Collapse the triptych to one
             column on a phone and this stops matching on its own. */
          if (shorter > 0 && overlap > shorter * 0.6) {
            g.members.push(m);
            g.top = Math.min(g.top, m.top);
            g.bottom = Math.max(g.bottom, m.bottom);
            return;
          }
        }
        groups.push({ top: m.top, bottom: m.bottom, members: [m] });
      });
    }

    function pick() {
      if (!groups.length) return null;
      /* The scan line sits just under the fixed bar — the first row of content a
         reader can actually see. Whatever group owns that line is the section
         they are in. */
      var line = bar() + 1;

      var g = groups[0];
      for (var i = 0; i < groups.length; i++) {
        if (groups[i].top <= line) g = groups[i]; else break;
      }

      if (pinned) {
        if (g.members.indexOf(pinned) !== -1) { lock = 0; return pinned; }
        if (lock) return pinned;
        pinned = null;
      }
      return g.members[0];
    }

    function paint() {
      var m = pick();
      if (!m) return;

      document.querySelectorAll(".rail a.is-active").forEach(function (a) { a.classList.remove("is-active"); });
      var railLink = document.querySelector('.rail a[data-rail="' + m.rail + '"]');
      if (railLink) railLink.classList.add("is-active");

      document.querySelectorAll(".nav a.is-active").forEach(function (a) { a.classList.remove("is-active"); });
      if (m.nav) {
        var navLink = document.querySelector('.nav a[href="' + m.nav + '"]');
        if (navLink) navLink.classList.add("is-active");
      }
    }

    function onScroll() {
      if (raf) return;
      raf = window.requestAnimationFrame(function () {
        raf = 0;
        measure();
        paint();
      });
    }

    document.querySelectorAll('.nav a[href^="#"], .rail a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function () {
        var href = a.getAttribute("href");
        var rail = a.getAttribute("data-rail");
        var m = watched.find(function (w) {
          return (w.nav && w.nav === href) || (rail && w.rail === rail);
        });
        if (!m) return;
        pinned = m;
        lock = 1;
        /* The lock must not outlive the journey: click a target, then scroll
           away by hand before arriving, and without this the highlight freezes. */
        window.clearTimeout(lockTimer);
        lockTimer = window.setTimeout(function () { lock = 0; onScroll(); }, 1500);
        measure();
        paint();
      });
    });

    /* Capture phase, not bubble: scroll events do not bubble, so if anything on
       the page ever becomes a nested scroll container again, a bubble-phase
       listener on window goes silent without erroring. Capture reaches window
       for any target. */
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  /* ── 5. one settle on entry for content below the fold ─────────────── */
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

  /* ── 6. copy-to-clipboard, with a real failure path ────────────────── */
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
  scrollspy();
  reveals();
  copyEmail();
  typePrompt();
})();
