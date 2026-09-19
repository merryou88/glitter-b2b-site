---
change_id: CHG-20260918-003-blog-content-seo-internal-links
date: 2026-09-18
status: implemented
requirements:
  - REQ-BLOG-001
  - REQ-BLOG-002
  - REQ-BLOG-003
  - REQ-BLOG-004
  - REQ-BLOG-006
  - REQ-BLOG-007
modules:
  - blog-knowledge
  - content-data
  - product-catalog
---

# Blog Content Clusters and Internal Links

## Change reason
The user requested implementing the five Blog optimization priorities: clean off-position public content, add topic grouping, strengthen internal links, standardize article structure and improve SEO focus.

## Before
The Blog index listed guides without task-based content clusters. Article detail pages had recommended products but no related-guide internal links or fixed sample/RFQ next-step module. A useful foil RFQ template was hidden with duplicate/off-position articles.

## After
The Blog index groups public articles by sourcing task: Fabric Selection, Applications, Sample & RFQ, and Testing & Compliance. Article detail pages include Sample & RFQ Next Steps plus automatic Related Buyer Guides based on category, tags and shared product links. The public collection keeps high-intent foil/stretch sourcing content while excluding glitter/shoes/bags topics and the duplicate RFQ article. The quality-control article title and metadata now match its actual QC checklist content.

## Acceptance criteria
- Public Blog routes exclude glitter/shoes/bags-focused articles.
- Blog index shows four sourcing-task groups.
- Article pages show recommended products and related buyer guides.
- Article pages include a fixed sample/RFQ next-step module.
- Build completes successfully.

## Impact
`src/data/blogArticles.js`, `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`

## Implementation location
`src/data/blogArticles.js`, `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`

## Verification
Passed with `npm run build` on 2026-09-18.

## Source
User instruction: implement the five recommended Blog content, structure, internal linking and SEO improvements.
