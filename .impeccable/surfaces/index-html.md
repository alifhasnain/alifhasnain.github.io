---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

## Scope

Single-page portfolio site (`index.html`) — the whole property. All sections live on
one scroll: hero/terminal, about, projects, skills, experience, github, notes, contact.

## Visitor mode

**Experience**, with a standing Persuade obligation. The engineering work leads from
the first viewport; the interface is a workspace the visitor looks *into*. But the
résumé link and the contact path must stay unmissable at every scroll position,
because the surface only succeeds if a tech lead acts.

## Audience & job

Engineering managers / tech leads, mid-evaluation, laptop, often a third tab opened
from a résumé. Job: decide within a minute whether this candidate has senior depth
across native Android and Flutter, then either reach out or leave. They read code.

## Action

Primary: `get_in_touch()` / copy email. Secondary: `resume.pdf`. Tertiary: GitHub.
All three are reachable from the fixed top bar at any scroll depth.

## Proof & content

Content is **draft**. Two honesty classes, held apart on purpose:

- **Identity and claims** — name, employers, titles, dates, city, contacts, counts,
  résumé filename — ship as bracket tokens (`[YOUR_NAME]`, `[COMPANY_A]`, `[N]`).
  Bracket tokens read as template variables inside a dev-environment world, so the
  placeholder grammar is native to the design instead of looking broken.
- **Demonstration material** — code samples, architecture diagrams, dependency
  blocks, decision tables — is authored at production fidelity and marked
  `// sample`. A portfolio cannot show what it looks like with the code removed.

No metric is presented as verified. The GitHub panel carries a `SAMPLE DATA` chip.

## Constraints

Static HTML/CSS/JS, no build, no CDN, no tracking. Self-hosted woff2. Every icon
authored SVG. No photo exists — hero portrait slot ships as an authored placeholder
frame that reads as intentional, with the swap documented.

## Direction

Pinned by the brief: `inspiration.png` + "follow this." The portfolio as a working
developer environment — IDE window chrome, activity rail, gutters and line numbers,
status bars, `//` section markers, a live terminal prompt in the footer, circuit
traces behind the hero. Phosphor green on near-black. Concept roll skipped, and the
image is treated as the comp.

## Memorable moment

The page **boots**. Once, on load: circuit traces draw in, the `<h1>` compiles
through a scanline wipe, the language-share meters sweep up from zero, the footer
prompt types a command and leaves a blinking caret. One orchestrated sequence, fully
gated on `prefers-reduced-motion` — never a per-section entrance.

## Unresolved

- Real content of every bracket token (owner supplies).
- Whether the notes section will hold written posts or link out.
- Deploy target and domain; résumé PDF does not exist yet.
