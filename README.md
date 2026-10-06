# OnSight Climbing website prototype

A local, responsive React prototype built with Vite. It has no backend, analytics, form integration or external product destination.

## Preview

From this directory, run:

```sh
npm install
npm run dev -- --port 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). The page uses system fonts and makes no third-party network requests.

## Prototype notes

- Product and staff workflows are presented as concepts or under development; the abstract drawings are not product screenshots.
- Motion is limited to an optional SVG route trace, one-shot section/step reveals and a staff-panel accent. Content remains visible by default and motion is disabled for reduced-motion preferences or without `IntersectionObserver`.
- The local pages are `/`, `/app`, `/gyms` and `/vision`; navigation stays on this site. Page calls to action use local routes or in-page anchors. There is no download, contact, waitlist, form or analytics integration.
- Before public use, the CMO should accept or revise the draft copy and the product owner should verify release status and destinations.

## Motion approach

The home route draws its conceptual route in; the app page settles its three step icons into place; the gym page reveals the labeled staff stages vertically; and the direction page traces an abstract SVG route. Each is a short, one-shot CSS motion with a visible static endpoint. CSS plus the existing `IntersectionObserver` remains a better fit than adding Anime.js or GSAP for these small two-dimensional cues; Three.js would add a rendering stack without a three-dimensional story to tell. All route data is inline SVG, and reduced-motion, unsupported-observer, and no-JavaScript states keep the complete content visible.
