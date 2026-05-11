# CV Portfolio Digital Identity Upgrade

## Added Dependencies

The site stays fully static and GitHub Pages friendly. Dependencies are loaded by CDN in `index.html`:

- GSAP `3.12.5`
- GSAP ScrollTrigger `3.12.5`
- Google Fonts: Inter, Noto Sans SC, Press Start 2P

No npm install, backend, build step, or server runtime is required.

## Animation Architecture

- `assets/js/main.js`
  - language switching
  - mobile navigation
  - native anchor navigation
  - project card to case-section scrolling

- `assets/js/animations.js`
  - `initHeroMotion()` cinematic hero entrance, name stagger, motto typewriter
  - `initScrollStories()` lightweight section reveals

The animation layer is defensive: if GSAP, ScrollTrigger, or reduced-motion settings are unavailable, the page still renders and remains usable.

## Emergency Bugfix

- External smooth scrolling was removed to restore native mouse-wheel scrolling.
- Custom pointer effects and hover attraction were removed to avoid click interference.
- Body scroll locking was removed; the page remains scrollable in the default state.
- Project cards use native `scrollIntoView()` to jump to in-page case sections.

## Round 2 Fixes

- Project cards no longer use orb/glass sphere visuals; they are HUD-style digital archive cards.
- Theme tokens were consolidated around deep black and pink, with blue/cyan/violet accents removed.
- Case content includes Role, Tools, Timeline, Outcome, and a project link when available.

## Round 3 Fixes

- Removed the fullscreen project viewer entirely as the primary image browsing path.
- Added in-page case sections: `#case-esg`, `#case-design`, and `#case-loreal`.
- Project cards now scroll to the matching case section instead of opening an overlay.
- Project images are displayed in natural page flow with a responsive grid and single-column mobile layout.
- Removed the hero portrait status label and its related CSS/translation key.

## GitHub Pages Notes

- Keep `index.html` in the repository root.
- Keep `assets/css/styles.css`, `assets/js/main.js`, and `assets/js/animations.js` in the same relative paths.
- Keep the existing `images/` folder in the repository root because the new files continue to reference the original image paths.
- GitHub Pages can deploy directly from the root or `/docs` depending on repository settings; no build command is needed.

## Mobile Performance Notes

- Extra particles are hidden on mobile.
- Scroll and reveal animations respect `prefers-reduced-motion`.
- Most motion uses `transform` and `opacity` to avoid layout jank.
- Mouse parallax is throttled through `requestAnimationFrame`.
