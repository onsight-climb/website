# OnSight Climbing website prototype

A local, single-page website prototype built with semantic HTML, CSS and a small JavaScript module. It has no build step, backend, analytics, form integration or external product destination.

## Preview

From this directory, run:

```sh
PORT=4173 node server.mjs
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). The server uses only Node's built-in modules. The page uses system fonts and makes no third-party network requests.

## Prototype notes

- Product and staff workflows are explicitly presented as concepts or under development; the abstract drawings are not product screenshots.
- Motion is limited to an optional SVG route trace, section/step reveals and a staff-panel accent. Content remains visible by default; motion is disabled for reduced-motion preferences or without `IntersectionObserver`.
- Navigation and calls to action use in-page anchors. There is no download, contact, waitlist, form or analytics integration.
- Before public use, the CMO should accept or revise the draft copy and the product owner should verify release status and destinations.
