# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML/CSS/JS — user's explicit choice. No build step, no framework, no
package manager. Deploys to any static host (GitHub Pages, Netlify, Cloudflare Pages).
Chosen so the owner can swap placeholder content for real data by editing files
directly, without a toolchain.

## Users

**Primary:** engineering managers and tech leads evaluating the owner for a senior
mobile role. They arrive from a résumé link, a GitHub profile, or a recruiter forward.
Their job is judging technical depth — not just *what* was shipped, but *how* decisions
were made: architecture choices, state management, code quality, tradeoff reasoning.
They read code. They skim marketing.

**Secondary (unconfirmed as a design target):** recruiters doing a first-pass fit check,
and peers arriving from community links. Design for the primary; do not degrade for these.

## Product Purpose

A personal portfolio site for a **Senior Mobile App Developer** working across native
Android and Flutter. It exists to convert a technical evaluator's skim into a
qualified conversation — by demonstrating engineering judgment rather than asserting it.

Success = a tech lead finishes a pass through the site able to describe, unprompted,
how the owner structures a mobile application and why.

## Positioning

Cross-platform mobile competence held **at senior depth on both sides**: native
Android (Kotlin, Jetpack Compose) *and* Flutter — not one specialty with the other
listed as a familiarity. A neighboring portfolio can claim "cross-platform"; the
differentiator here is showing real architecture from both ecosystems side by side
and being explicit about when each is the correct choice.

## Operating Context

The evaluator's real scene:

- Reviewing many candidates in sequence, on a laptop, often with a phone check later.
- Frequently a second or third tab, opened from a résumé PDF or an ATS link.
- Wants to reach a verdict fast, then either grab a résumé/contact path or leave.
- Comfortable with code, terminals, IDEs, and architecture diagrams — this audience is
  *not* served by hiding technical substance behind marketing abstraction.

## Capabilities and Constraints

**Scope (static site, single owner, no backend):**

- Sections established by the reference: about, projects, skills/tech stack, experience,
  blog, contact.
- Contact must work without a server: `mailto:` and direct profile links. No form
  endpoint exists.
- Résumé is a static PDF download.
- GitHub statistics, if shown, are placeholder values until real ones are supplied.
  They must never be presented as verified figures while placeholder.

**Constraints:**

- No build step, no npm dependencies, no framework runtime.
- Self-hosted fonts and assets only — no third-party CDN or tracking script.
- Must be fully readable and navigable on a phone despite a desktop-IDE visual concept.
- Content is placeholder at draft stage and will be replaced by the owner; every
  placeholder must be obvious and greppable rather than plausible-looking filler.

**Undecided (do not invent):**

- Owner's real name, photo, location, and contact addresses.
- Real employers, job titles, dates, and project names.
- Whether a blog will actually be written, or the section will link out.
- Domain and deploy target.

## Brand Commitments

- **`inspiration.png` is a binding reference**, supplied by the user with "follow this."
  Its terminal/IDE developer-environment concept, dark phosphor-on-black treatment, and
  monospace-led typography are committed direction, not a suggestion. Deviating toward a
  softer or more conventional portfolio look would violate the brief.
- No existing name, logo, voice guide, or prior site to preserve. This is the first
  visual identity for the property.
- Voice implied by the reference and confirmed by audience: engineer-to-engineer. Direct,
  technically literal, dry. No recruiter-speak, no "passionate about," no exclamation marks.

## Evidence on Hand

**None.** Confirmed explicitly by the owner: no GitHub data, no résumé, no photo, no
project write-ups are available yet.

Consequences that all future work must respect:

- Every metric, employer, project, testimonial, and date in the draft is a placeholder.
- Nothing may be fabricated into a claim that reads as true — no invented company names,
  no invented commit counts presented as real, no fake testimonials.
- Placeholders must be visibly marked and easy to find and replace.
- A no-photo hero must work, since no portrait exists yet, while leaving a defined slot
  for one.

## Product Principles

1. **Show the work, don't summarize it.** For this audience, real code, real architecture,
   and stated tradeoffs outperform adjectives about skill.
2. **Placeholder honesty.** Draft content is unmistakably draft. Never let filler
   masquerade as verified fact — a fabricated metric on a hiring site is a credibility
   failure, not a design placeholder.
3. **Both ecosystems, equal weight.** Android and Flutter are presented as peer
   competencies with an explicit point of view on choosing between them.
4. **Verdict in one viewport, depth on demand.** A skimming lead gets role, stack, and
   proof immediately; the substance rewards anyone who scrolls.
5. **Editable by hand, forever.** Content lives in obvious, well-labeled markup a
   non-frontend developer can confidently edit a year from now.

## Accessibility & Inclusion

No owner-specific standard was established. Baseline requirement for this build, given
a dark high-contrast concept and a technical audience:

- WCAG 2.1 AA contrast on all text, including on the dark ground and inside code blocks.
- Full keyboard operability with visible focus states.
- Monospace body copy must stay at a readable size and measure — the aesthetic may not
  cost legibility.
- `prefers-reduced-motion` respected for all animation.
- Semantic landmarks and headings; decorative terminal ornament hidden from assistive tech.
