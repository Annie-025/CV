# CV Portfolio Digital Identity Upgrade

## Added Dependencies

The site stays fully static and GitHub Pages friendly. Dependencies are loaded by CDN in `index.html`:

- GSAP `3.12.5`
- GSAP ScrollTrigger `3.12.5`
- Lenis `1.0.42`
- Google Fonts: Inter, Noto Sans SC, Press Start 2P

No npm install, backend, build step, or server runtime is required.

## Animation Architecture

- `assets/js/main.js`
  - language switching
  - mobile navigation
  - project case study data
  - fullscreen project viewer
  - keyboard close and scroll-state handling

- `assets/js/animations.js`
  - `initLenis()` smooth inertial scrolling
  - `initHeroMotion()` cinematic hero entrance, name stagger, motto typewriter
  - `initScrollStories()` section reveals, card stagger, floating project motion
  - `initProjectViewerMotion()` fullscreen case-study transition
  - `initCursor()` custom cursor and cursor glow
  - `initMagnetic()` subtle magnetic hover feedback

The animation layer is defensive: if GSAP, ScrollTrigger, Lenis, or reduced-motion settings are unavailable, the page still renders and remains usable.

## GitHub Pages Notes

- Keep `index.html` in the repository root.
- Keep `assets/css/styles.css`, `assets/js/main.js`, and `assets/js/animations.js` in the same relative paths.
- Keep the existing `images/` folder in the repository root because the new files continue to reference the original image paths.
- GitHub Pages can deploy directly from the root or `/docs` depending on repository settings; no build command is needed.

## Mobile Performance Notes

- Cursor and magnetic hover are disabled on touch devices.
- Extra particles are hidden on mobile.
- Scroll and reveal animations respect `prefers-reduced-motion`.
- Most motion uses `transform` and `opacity` to avoid layout jank.
- Mouse parallax is throttled through `requestAnimationFrame`.
