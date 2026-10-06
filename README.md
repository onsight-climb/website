# OnSight Climbing website prototype

A local, responsive React prototype built with Vite. It has no backend, analytics, form integration or external product destination.

## Preview

From this directory, run:

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). Review `/`, `/app`, `/gyms`, and `/vision`; resize to 390px and 320px widths for the mobile compositions. The page uses system fonts and makes no third-party network requests.

## Prototype notes

- Product and staff workflows are presented as concepts or under development; the abstract drawings are not product screenshots.
- Motion is limited to optional SVG traces and waypoint movement when a section first enters view. Content and complete illustration endpoints remain visible by default; motion is disabled for reduced-motion preferences or without `IntersectionObserver`.
- The local pages are `/`, `/app`, `/gyms` and `/vision`; navigation stays on this site. Page calls to action use local routes or in-page anchors. There is no download, contact, waitlist, form or analytics integration.
- Before public use, the CMO should accept or revise the draft copy and the product owner should verify release status and destinations. This preview is local and is not deployed.

## Motion approach

The home route connects its three markers; the app route moves a route marker from discovery to the session endpoint; the gym route moves an accent across three staff stages; and the direction route traces an open-ended SVG path. Each is a short, one-shot CSS motion with a visible static endpoint. The existing `IntersectionObserver` drives these cues. All route drawings are inline SVG, and reduced-motion, unsupported-observer, and no-JavaScript states keep the complete content visible.
