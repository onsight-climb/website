# ONS-33 — OnSight motion story and SVG handoff

**Status:** design handoff for local prototype implementation  
**Source of truth:** [CMO brief, evidence matrix and acceptance criteria](/ONS/issues/ONS-32#document-brief)  
**Audience:** climbers first; setters and gym managers second  
**Product truth:** concept illustrations and product preview only; availability is unverified. No app UI screenshots, release promises, customer outcomes, external CTA, tracking, or production publish.

## Design direction

Use a quiet editorial climbing journal: warm paper and ink provide a stable reading canvas; forest green marks the staff side; lime traces a route; orange identifies a destination or point of attention. Existing tokens in `styles.css` are the system: `--paper`, `--paper-deep`, `--ink`, `--muted`, `--green`, `--lime`, `--orange`, `--line`, and `--sans` / `--display` / `--mono`. Reuse `.section-wrap`, `.eyebrow`, `.button`, `.text-link`, `.product-maturity`, `.concept-note`, and the current focus treatment. Keep spacing on the existing 8px rhythm; avoid one-off color, type, radius or shadow values.

The visual story has three readable beats: (1) a climber's route resolves from first hold to final hold; (2) that route becomes a three-step personal record; (3) a separate staff panel groups the wall's inventory, search, and editing actions. The staff section should retain the current dark-green region and light paper card so the audience shift is obvious before reading. Labels stay visible throughout. **Gestalt—Similarity and Common Region** group each workflow; **Cognitive Load—Chunking** limits the climber sequence to three numbered steps; **Information Scent** keeps the verbs Find, Log, Revisit and Inventory, Find a route, Create or edit explicit; **Recognition over Recall** labels every diagram step; **WCAG POUR** keeps all meaning in text and does not encode state by color alone.

## Copy placement and page composition

### Desktop: 1440px viewport

- Header: existing wordmark left, native anchor links centered (`The app`, `For gyms`, `Our direction`), `Explore the app` on right. Keep its 44px minimum target.
- Hero: centered in the existing 1120px `.section-wrap`, two columns. Left column contains eyebrow `OnSight Climbing`; H1 `See your climbing journey more clearly.`; body `Explore how OnSight connects route discovery, climb logging and session history, with route tools for gym teams.`; primary anchor `Explore the app` → `#app`; secondary `See the vision` → `#vision`.
- Hero SVG: right column, about 520 × 500px, inside existing pale sage block. Always show `Concept illustration.` at top-left, legend `Route from first hold to finish` at bottom-left, and `01 / 03` at bottom-right. Provide SVG title/description for assistive tech; duplicate the concept label in visible HTML outside the SVG.
- App journey: existing `.section-grid`; left column heading `From the wall to your climbing record.` then `Follow a route from discovery to a record you can revisit.` and the adjacent label `Product preview · availability unverified.` Right column is a single paper panel. Top row `APP FLOWS TO EXPLORE` / `Concept illustration.` Three ordered rows `Find`, `Log`, `Revisit`, with one-sentence explanation and simple line icon. Bottom note `Concept illustration — not a product screenshot.`
- Staff workflow: full-width forest-green band. Left: `For climbing teams`, heading `A clearer view of the wall for your team.`, body `Explore a staff workflow for route inventory, finding a route, and creating or editing route details.` Maturity label `Product preview · availability unverified.` Right: distinct pale paper card headed `THE WALL, AT A GLANCE` with concept label. Show three linked stages `Inventory → Find a route → Create or edit`; footer `Staff route tools are under development. Release readiness and access are still being verified.`
- Vision follows the staff band and remains separately labeled `Our direction`. Future ideas keep the existing `Exploring next` tag.

### Mobile: 390 × 844px

- Preserve the existing content order and in-page anchor links; no horizontal carousel or pinned scene. Header may wrap/compact, but primary CTA remains at least 44px high and keyboard accessible.
- Hero becomes one column: eyebrow, H1, body and both links first; SVG panel follows. Keep body width to the viewport minus 40px and give the SVG panel at least 280px height. Do not place copy inside or over the illustration.
- App section stacks intro before journey panel. Each step uses a two-column row: icon/number at left and verb + supporting sentence at right; hide the desktop-only status pill if needed rather than shrinking explanatory copy. Keep 16px minimum body text and 44px tap targets for links.
- Staff section remains a green band with heading/body/maturity label above its paper card. Stack the workflow as three rows with vertical connectors, not squeezed horizontal cards. Keep each stage title on one or two short lines. Card padding 16px; no decorative grid behind text if it reduces contrast.
- Keep native document scrolling. Section links are ordinary anchors with visible focus; no menu or animation may move focus.

At 390px and desktop, the three workflows must be recognizable without waiting for motion. The Find/Log/Revisit card has a single enclosing boundary; the staff card is visually separate and introduced by `For climbing teams`. **Proximity** and **Uniform Connectedness** make the steps read as sequences; separate surfaces and green context prevent climber/staff workflows from blending.

## SVG asset specification

Use one small inline SVG per illustration; no raster product mockups, external assets, filters, masks, embedded fonts, or 3D canvas. Keep strokes and geometry simple enough to edit in JSX and style with existing CSS tokens. Decorative SVGs use `aria-hidden="true"` and `focusable="false"` when the nearby visible HTML already gives their full meaning; otherwise give `role="img"`, `<title>`, and `<desc>`.

### 1. Hero route / hold sequence

`viewBox="0 0 560 500"`, `preserveAspectRatio="xMidYMid meet"`.

Layer order and class hooks:

1. `wall-plane`: muted sage plane, 1px outline; no faux app chrome.
2. `wall-grid`: sparse 1px panel seams (decorative only).
3. `hold-field`: 8–10 organic hold shapes in muted green, orange, and ochre; no grade/rating marks.
4. `route-underlay`: faint neutral path so the composition remains legible if accent styling fails.
5. `route-trace`: single lime path from lower-left `start-hold` to upper-right `finish-hold`; 4px stroke, round joins/caps.
6. `start-marker`: lime circle with ink outline and adjacent text label `START` in HTML or SVG text.
7. `finish-marker`: orange circle with light outline plus a small arrowhead. Shape and position distinguish it even for color-vision deficiency.
8. Optional `route-label`: static `One route, from start to finish` outside the SVG at mobile sizes.

Static endpoint: complete route remains fully drawn; start and finish markers are visible. This is also the failed-JS and reduced-motion design. Do not draw a climber or show a grade, gym name, result, or fabricated performance metric.

### 2. Find → Log → Revisit journey panel

No fake app frames. Use three SVG line icons (map pin/route marker, check/record mark, stacked session path) aligned with semantic ordered-list content in HTML. SVG lines use `currentColor` and 1.75px stroke; icon bounds 24 × 24. A thin connector behind rows may visually connect the steps. Put full labels/explanations in HTML, never SVG-only.

### 3. Staff inventory / search / edit flow

A separate inline SVG diagram in the light card, `viewBox="0 0 720 220"`. Reusable groups: `inventory-stack` (three route-hold tags, no fabricated database values), `search-lens` (simple magnifying glass over one highlighted tag), `edit-card` (pencil and one neutral route line, no populated form fields). Connect groups with a thin ink line and numbered badges 01–03. In mobile layout switch to a vertical stack by using the same HTML ordered list plus icons; do not scale the wide diagram until labels become illegible. Visible labels and descriptions are HTML: `Inventory`, `Find a route`, `Create or edit`.

## Motion contract

Implementation recommendation: inline SVG + CSS keyframes/transitions + existing `IntersectionObserver`. No additional library is needed for these three short, one-shot 2D reveals. Do not add Anime.js, GSAP/ScrollTrigger, or Three.js for this scope. If the engineer finds CSS/observer insufficient, return with the actual blocker/timeline for joint review before introducing a dependency. **Occam's Razor** and **Doherty Threshold** favor a fast, local response; motion should be brief and not delay access to copy.

| Beat | Trigger / scroll relationship | Start → endpoint | Timing and reason | Input, interruption, replay |
| --- | --- | --- | --- | --- |
| Hero route | On initial page load after text is already painted; no scroll coupling | Route is fully visible in 760ms; markers stay static | `760ms`, `80ms` delay, `cubic-bezier(.2,.75,.25,1)`; draws the path to show direction/start-to-finish | Play once; no hover trigger. If tab is backgrounded or animation is interrupted, CSS fill mode lands on the complete route. Never replay on scroll. |
| Journey connector | When app panel first reaches 15% viewport intersection | Neutral line → green connector at full opacity | `360ms`, no delay, same ease; shows the relationship between steps | One-shot and unobserved after trigger. No scrub/pin. Touch sees same result without input. |
| Journey rows | Same app-panel observer; labels are already visible before observer setup | `translateY(8px), opacity 0` → `translateY(0), opacity 1` staggered by 70ms per row | `320ms` each, 0/70/140ms delays, same ease; suggests sequence while keeping total reveal under 500ms | One-shot. If user scrolls past during motion, finish immediately; never reverse on scroll-out. In mobile, same trigger; no touch gesture required. |
| Staff relationship accent | Staff panel first reaches 15% intersection | Thin neutral connectors → green connectors, stages remain visible | `360ms`, no delay, same ease; connects three staff actions without animating a fake screen | One-shot, no pin/scrub; if hidden/backgrounded, resolve to endpoint on return. |

Shared motion rules:

- **Text-first:** server-rendered/static HTML text exists and is visible before JavaScript adds a motion class. JavaScript may opt into motion only after confirming `prefers-reduced-motion: no-preference` and `IntersectionObserver` support. Never apply hidden opacity as the base style.
- **Reduced motion:** no route draw or stagger. Render the complete endpoint immediately; optionally use a 100ms color change only for direct interaction feedback. Respect live preference changes where practical.
- **Failed JavaScript / unsupported observer / SVG failure:** all copy, links, labels and step rows remain visible. SVG has the corresponding visible legend and numbered text sequence. Avoid CSS rules that leave essential information transparent when JS is absent.
- **Keyboard/focus:** diagrams are not controls. Links remain native anchors with existing 3px orange `:focus-visible` outline and 5px offset. Never move focus, hijack PageDown, or require hover/animation to learn the sequence.
- **Loading fallback:** inline vector renders with the page; no network asset dependency. If SVG cannot render, adjacent copy/ordered list supplies the same meaning.
- **Performance:** animate only SVG `stroke-dashoffset`, `opacity`, and `transform`; no layout properties, continuous loops, canvas, scroll listeners per frame, or forced GPU layers. Observer unobserves a target after reveal.

## Feasibility and component reuse

The current implementation already has `.route-path` route drawing, `.journey-step` one-shot reveal, `.reveal`, `.wall-card`, focus-visible links, and reduced-motion handling in `src/App.jsx`/`styles.css`. Extend these patterns rather than forking parallel variants. Current token palette and system fonts are sufficient. Existing CSS + observer matches the storyboard complexity; the brief itself recommends that baseline and says Three.js is unjustified for a 2D route story.

**Handoff to Senior Web Frontend Engineer:** keep the simple inline SVG/CSS/observer stack; reuse existing tokens and classes; implement the responsive staff stage stack; verify static, reduced-motion, no-JS, SVG fallback and keyboard states; then return an inspectable local preview at 390px and desktop. Ask CMO to accept final on-page copy/claim labels after implementation. Product availability and any external destination remain a separate evidence-owner decision.

## Acceptance checklist

- At 390px and desktop, a first-time visitor can identify all three stories at a glance; text labels stand without motion.
- Each flow has a complete static endpoint that matches the last animated frame.
- Hero copy precedes art; app copy precedes app diagram; staff introduction precedes its diagram.
- Climber and staff areas are visually distinct and explicitly named.
- `Product preview · availability unverified` sits adjacent to both product illustrations; each illustration also says `Concept illustration.`
- All copy follows the brief; no release claim or fake product screen.
- Native anchor navigation, keyboard focus, touch usability and reduced-motion preference remain intact; failed JS/observer/SVG leaves a coherent page.
- Desktop and mobile have no horizontal overflow; mobile staff diagram stacks without shrinking labels.
- Engineering confirms feasible scope/library choice; no dependency is added without a concrete need.

## Rationale trace

- **Cognitive Load / Chunking:** three simple sequential verbs keep the climber story easy to retain.
- **Gestalt—Proximity / Uniform Connectedness:** connector and shared panel make each numbered sequence read as one flow.
- **Information Scent / Plain Language:** action verbs lead each cluster; support lines explain product potential with no jargon.
- **Recognition over Recall:** visible labels and persistent maturity tags identify every diagram without relying on animation memory.
- **WCAG POUR / color-independence:** text duplicates diagram meaning; marker shape and labels complement color; motion has static equivalent.
- **Fitts's Law / motor accessibility:** native text links retain existing 44px+ target heights and visible keyboard focus.
- **Motion and perceived performance:** short one-shot reveals reinforce direction/progression and settle in a useful static endpoint; no ambient movement competes with reading.
