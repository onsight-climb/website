# ONS-43 — Four-route extension storyboard and motion handoff

**Audience:** climbers first; setters and gym managers second  
**Source of truth:** [ONS-42 website extension brief](/ONS/issues/ONS-42#document-brief)  
**Status:** implementation handoff; no public deployment  
**Product truth:** product preview with unverified availability. Future directions are ideas, not commitments.

## Direction and system fit

Extend the existing quiet climbing-journal visual system: warm paper and ink for reading, forest green for gym context, lime for route progression, and orange as a secondary marker. Reuse `--paper`, `--paper-deep`, `--ink`, `--muted`, `--green`, `--lime`, `--orange`, `--line`, `--sans`, `--display`, `--mono`, `.section-wrap`, `.eyebrow`, `.button`, `.text-link`, `.product-maturity`, and `.concept-note`. Keep the existing 8px spacing rhythm, squared paper panels, system type, native anchors, 44px minimum link targets, and 3px orange `:focus-visible` outline. No new tokens or components are proposed.

The added sections form a clear editorial sequence: a route has three moments; those moments connect into a session; gym teams manage route details; the vision names two directions still being explored. Use a shared region for each sequence and separate the staff story with the existing green band. **Gestalt—Proximity and Uniform Connectedness** help each numbered story read together; **Cognitive Load—Chunking** keeps each unit to three actions; **Information Scent** keeps verbs and next steps explicit; **Recognition over Recall** labels concept art and product maturity at the point of use.

## Composition by route

All body copy, maturity labels, section headings, and links exist in normal document flow and are visible at first paint. Each illustration is a small inline SVG with a nearby visible label `Concept illustration.` It must not resemble app chrome or imply a verified screen. Use accessible HTML text for meaning and links; decorative SVGs use `aria-hidden="true" focusable="false"`. No raster mockups, 3D, filters, external assets, or fabricated data.

### Home `/` — “One climb, three moments”

**Purpose:** answer “What is the app story?” immediately after the existing three page tiles.

- Intro above art: eyebrow `A route, over time`; H2 `One climb, three moments`; body `A route is more than a moment on the wall. OnSight explores a simple path: find a route, record the climb, then return to your session history. This is a product concept, not a live app screen.`
- Main surface: one pale-paper band with a horizontal three-part story on desktop. Each equal column has a numbered marker, a distinct abstract route object, heading and copy: **Before: Find a route.** “Browse a gym and choose where to climb.” **During: Log the climb.** “Record an ascent in a session.” **After: Revisit the session.** “Look back at what you logged.”
- Place `Product preview · availability unverified.` and `Concept illustration.` visibly above or below the three-part art, not hidden in it. The CTA follows the band: `Explore the app` → `/app#journey`.
- Art concept: one thin route line connecting three larger hold-shaped waypoints; use circle/diamond/square marker differences alongside color. Static end shows whole route, all three waypoints, and labels.

### App `/app` — “Before / during / after”

Add after the existing Find / Log / Revisit journey board, before the existing green CTA panel. Three stacked editorial beats share one heading: H2 `A session, from first choice to looking back.`

1. **Before you climb** — `Start with a route to explore.` Copy: `The product work includes gym and route discovery, with a QR path. This preview illustrates how a climber could move from choosing a route to starting a session.` CTA/anchor: `During your session` → `#during`.
2. **During your session** — `Keep a record of the climb.` Copy: `An ascent can be recorded as part of a session.` CTA/anchor: `After the session` → `#after`.
3. **After the session** — `A session you can return to.` Copy: `Session and history surfaces let the story continue after the climb. Complete lifecycle behavior and availability have not been verified.` Local next action: `See the staff workflow` → `/gyms#workflow`.

Keep `Product preview · availability unverified.` adjacent to this sequence. Art is one route card abstraction (not a faux interface) and three small line symbols; no QR payload, route grade, gym name, completion metric, or populated data. The card's route marker slides a short distance from discovery to session marker, then settles; final composition is complete without motion.

### Gyms `/gyms` — “From wall to route record” and “Shared context”

Add after the existing staff workflow panel, within the same green contextual region or a paper section immediately below it. Start with H2 `From wall to route record`. Supporting copy: `The staff product work shows route inventory, finding a route, and creating or editing route details. This sequence explains how those pieces relate; it is not a product screenshot.` Show the labeled sequence **Inventory → Find a route → Create or edit** and `Product preview · availability unverified.`

Then a distinct secondary paper surface titled **Shared context**: H3 `A useful wall starts with clear route information.` Copy: `Route details are the common thread between a gym team's workflow and a climber's route discovery. The connected experience shown here is a direction for the product, not a verified live integration.` CTA → `/app#journey`.

Art uses an abstract wall with three neutral route tags and one marker traveling between Inventory / Find / Edit; no list rows, filled forms, dates, counts, or fake gym data. On the three static numbered stages, the labels are semantic ordered-list content. The full route line and all three tags remain visible at the endpoint.

### Vision `/vision` — “Guiding principles”

After the current `Exploring next` ideas, add a paper section headed H2 **Guiding principles** and subhead `Useful at the wall. Clear after the session.` Copy: `We are exploring ways to keep route information useful to gym teams and make a climber's record easier to revisit. These ideas need product validation before they become commitments.` Two equal statements: **Clarity at the wall** and **Context across sessions**. Keep `Ideas, not commitments` directly adjacent to this copy. CTA: `Return to the app story` → `/app#journey`.

Art concept: two labeled nodes on an open, incomplete route. One node uses a stacked-tag outline for wall clarity; the other uses a page/loop outline for session context. The endpoint remains visibly open-ended; do not draw a “completed roadmap.”

## Responsive layout checkpoints

Use content-driven breakpoints already in `styles.css` (`900px`, `640px`); do not add breakpoint-specific motion behavior.

| Viewport | Composition and acceptance |
| --- | --- |
| Desktop 1440 × 900 | `.section-wrap` max 1120px. Home three moments use three columns with shared top alignment, large 32–40px headings, 16px body, and generous 32px internal gutters. App beats use a 5/7 text/art split or two-column sequence with clear row boundaries. Gym sequence stays inside green band; Shared context gets its own paper surface. Vision principles appear as two equal cards. No text overlays art. |
| Mobile 390 × 844 | Keep 20px side inset. All route narratives become a single column in reading order: intro, visible labels, art, then CTA. Home story stacks three rows with a continuous vertical line. App sections stack in Before/During/After order. Gym stages stack vertically with 44px minimum action/link areas. Vision principles stack. Body text stays at least 16px; artwork is at most 280px wide and does not displace the heading below the fold unnecessarily. |
| Narrow mobile 320 × 700 | Keep 16px side inset (content width 288px). Let headings wrap naturally; no fixed-width cards, negative margins, side-by-side microcopy, or nowrap labels. Home/app/gym waypoint diagrams reduce to a vertical sequence and may hide decorative wall seams. Buttons and long labels wrap. Ensure focus outline has at least 3px breathing room and page has no horizontal scroll. |

At every size, preserve ordinary page scrolling and source reading order. No sticky scenes, carousels, pinned copy, horizontal drag, scroll hijacking, or animation-dependent labels. Avoid density creep (**Cognitive Load**, **F-pattern scanning**); let headings lead, then short explanation, then diagram.

## Scroll-motion storyboard and contract

**Feasibility agreement:** inspected current `src/App.jsx` and `styles.css`. The site already uses inline SVG, `IntersectionObserver`, CSS transforms, `stroke-dashoffset`, and reduced-motion overrides. The four cues below are feasible with that existing stack and tokens; do not add a motion library or request a new design-system token. Prefer one observer per section, disconnect after first reveal, and animate only `transform`, `opacity`, or SVG stroke. No per-frame scroll listener is needed. This is the agreed implementation ceiling for ONS-44; return to the designer if an effect exceeds it.

| Route / trigger | Affected objects; start → static endpoint | Timing / easing | Scroll, input, interruption, replay |
| --- | --- | --- | --- |
| `/` home moments; first intersection at 15% of the section | Route trace draws from Before to After; three marker objects stay visible and move 6px inward to their final positions. All text is already visible. | 520ms; 40ms delay; `cubic-bezier(.2,.75,.25,1)` | One-shot on section entry; no scroll scrubbing or reversal. If skipped past while in progress, finish at endpoint. No hover/touch action required. No replay on re-entry. |
| `/app` Before/During/After; first intersection at 15% | Small route marker travels along one short, visible line to its final session position; three waypoint symbols settle in order. No fake app panel animates. | Marker 480ms; 0ms delay. Waypoints 260ms each with 60ms stagger; same easing. | One-shot. Same on touch and desktop. If observer is unavailable, show full line and settled marker immediately. No replay; complete if tab is backgrounded mid-transition. |
| `/gyms` Inventory/Find/Edit; first intersection at 15% | Neutral marker moves between three static, fully labeled stages; connector changes from neutral to green. Stage labels and wall tags do not move or appear late. | 540ms marker travel; 60ms delay; same easing. Connector 300ms. | One-shot; no sticky/pinned panel, scroll-linked scrub, or hover trigger. On mobile the marker follows the vertical line with the same duration. Interruption resolves to complete static endpoint; no replay. |
| `/vision` guiding principles; first intersection at 15% | Open SVG path traces from “Clarity at the wall” node toward “Context across sessions”; second node settles 5px into its final open-ended position. Both labels visible before entry. | 620ms; 80ms delay; same easing. | One-shot. No loop or scroll-out reversal. Touch has no special gesture. If interrupted, show full line and final node. Re-entry does not replay. |

Shared motion details:

- **First paint / JavaScript:** baseline CSS is the full static endpoint. Only after script confirms `prefers-reduced-motion: no-preference` and `IntersectionObserver` support may it add an opt-in motion class. Do not set essential copy or SVG opacity to zero in baseline CSS. If script fails or observer is unsupported, retain the complete static artwork and all copy/actions.
- **Reduced motion:** media query skips all travel, path drawing, stagger, smooth scrolling, and transforms. Render static endpoints immediately. Respond to preference changes where practical. Honor reduced motion in browser and OS settings.
- **Keyboard/focus:** SVG objects are not controls. Links remain native anchors with existing visible focus ring; section anchors can be reached by keyboard and must not move focus automatically. Avoid hover-only meaning; no animation controls are introduced.
- **Loading/fallback:** inline SVG has no network wait. If an SVG fails to render, its visible heading, paragraph, ordered-list stage names, and CTA provide the full story. Keep `Concept illustration.` visible in HTML outside SVG. No skeleton or placeholder is needed for inline vector art.
- **Performance:** one short pass per route; no continuous loops, filters, masks, canvas, layout animation, forced GPU layers, JavaScript scroll event sampling, or external dependency. Respect background-tab visibility by resolving to the final state on resume.

These motion choices follow **Motion and perceived performance** (short feedback, stable final frame), **Doherty Threshold** (no delayed access to information), **WCAG POUR** (motion optional and static equivalent), **Norman—Feedback and signifiers** (movement indicates relationship), and **Fitts's Law** (native links remain easy to target).

## Engineer handoff and acceptance

**Handoff to Senior Web Frontend Engineer:** implement the four sections from [ONS-42 website extension brief](/ONS/issues/ONS-42#document-brief) using this storyboard. Keep existing tokens and components. Reuse the current inline SVG + CSS + observer approach and static fallback behavior. Keep all new paragraphs visible from first paint; preserve current anchors, keyboard focus, and native scrolling. Return the routes to rendered desktop, 390px, and 320px review; CMO reviews final rendered copy and evidence labels before closing implementation.

Acceptance:

1. All four route additions appear in the specified order and match the brief's wording and local destinations.
2. Each artwork has a static final frame, visible `Concept illustration.` label, semantic copy, and preview/future label near the illustration.
3. The four motion cues conform to timing, trigger, endpoint, reduced-motion, keyboard, no-JS, and observer fallback contracts above.
4. No fake app UI, unsupported availability/integration claim, invented gym data, result, testimonial, metric, release date, or external CTA.
5. At desktop, 390px and 320px: headings, labels, 16px mobile body text and 44px targets are legible; page has no horizontal overflow; section order is understandable without waiting for motion.
6. Engineer confirms any proposed deviation on [ONS-44 implementation task](/ONS/issues/ONS-44) before adding dependencies or expanding effect scope. CMO reviews the rendered preview before implementation is called complete.

## Tradeoffs and residual risks

The abstract waypoint drawings carry less visual detail than product screenshots, intentionally: source-level capabilities and availability are not verified. Three-column editorial layouts collapse to a longer vertical read on phones; visible section headings and compact diagrams preserve scanability. Exact mobile line breaks depend on the final page copy and browser font metrics, so validate at both requested mobile widths.
