---
change_id: CHG-20260912-015-blog-remove-glitter-content
date: 2026-09-12
status: implemented
requirements:
  - REQ-BLOG-001
  - REQ-BLOG-003
modules:
  - blog-knowledge
  - content-data
---

# Remove Glitter-Focused Blog Content

## Change reason
The public blog should no longer promote or publish glitter-focused content.

## Before
The blog exposed six articles, including dedicated glitter material, glitter-versus-foil, glitter leather, and CNAS glitter product guides. Blog metadata also used glitter keywords.

## After
The public blog exposes only foil, iridescent, stretch and compliance-focused articles. Glitter-focused articles are excluded from the exported public article collection. Remaining compliance copy and page metadata no longer use glitter terminology. Retired article URLs redirect to `/blog/`.

## Acceptance criteria
- `/blog/` shows only non-glitter-focused articles.
- Static routes are generated only for the public article collection.
- Blog index and article metadata do not inject glitter keywords.
- Retired glitter article paths redirect to `/blog/`.

## Impact
`src/data/blogArticles.js`, `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`, `public/_redirects`

## Verification
`npm run build` to be run after implementation.

## Source
User instruction: remove glitter-related content from the blog page.
