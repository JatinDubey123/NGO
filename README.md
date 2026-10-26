# Jivan Aahar Foundation

Official website for **Jivan Aahar Foundation** — fighting hunger and restoring dignity through every meal served.

## Stack

- React + Vite
- React Router
- Tailwind CSS v4
- IntersectionObserver + CSS transitions for scroll reveals (no scroll-position library)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Pages

- `/` — Home
- `/about` — About
- `/programs` — Programs (old `/services` redirects here)
- `/gallery` — Gallery
- `/get-involved` — Get involved / Give
- `/contact` — Contact

## Design system

The visual language uses warm cream paper, warm ink, deep forest green and a
marigold accent, with Fraunces for display type and Instrument Sans for UI/body.

Design tokens (colour ramps, fluid type scale, radii, motion easings) live in `src/index.css`
under `@theme`. Content is centralised in `src/data/content.js`; values marked `PLACEHOLDER`
are illustrative and need verifying with the foundation before launch.
