---
change_id: CHG-20260916-009-blog-resource-center-layout
date: 2026-09-16
status: implemented
requirements:
  - REQ-BLOG-006
modules:
  - blog-knowledge
  - site-shell
---

# Blog Resource Center Layout

## Change reason
The blog index looked awkward because it used a broad hero, category filter and equal-width article cards even though the page functions as a B2B fabric buying resource center.

## Before
`/blog/` used a dark hero with a guide count, category filter buttons, a two-column article card grid, a mid-page notice CTA and a second bottom CTA. The layout made the page feel sparse and repetitive.

## After
`/blog/` now uses a tighter B2B resource-center layout: compact page intro, one featured buying guide, a factory recommendation panel, a horizontal list of latest buyer guides, buyer-question cards and one final RFQ/sample CTA.

## Acceptance criteria
- One featured guide is visually prioritized.
- Remaining articles are listed in a scan-friendly layout.
- Category filter UI is removed from the index.
- The page keeps a single primary final CTA block.
- Mobile layout collapses to readable single-column sections.

## Impact
`src/pages/blog/index.astro`

## Implementation location
`src/pages/blog/index.astro`

## Verification
`npm run build` to be run after implementation.

## Source
User requested optimizing the current fabric site blog interface based on the B2B procurement-site layout analysis.
