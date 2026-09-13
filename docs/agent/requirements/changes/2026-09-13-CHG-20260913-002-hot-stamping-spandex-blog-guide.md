---
change_id: CHG-20260913-002-hot-stamping-spandex-blog-guide
date: 2026-09-13
status: implemented
requirements:
  - REQ-BLOG-001
  - REQ-BLOG-002
  - REQ-BLOG-004
  - REQ-BLOG-005
modules:
  - blog-knowledge
  - content-data
  - product-catalog
---

# Add Hot-Stamping Spandex Fabric Blog Guide

## Change reason
The user approved writing the first recommended blog topic for `Full-Print Hot-Stamping Spandex Milk-Silk Fabric`.

## Before
The public blog included general hot-stamping foil and compliance guides, but did not have a product-focused sourcing guide for full-print hot-stamping spandex fabric used in dancewear and stage costumes.

## After
Added a public sourcing guide titled `How to Choose Hot-Stamping Spandex Fabric for Dancewear and Stage Costumes`. The article explains garment use, hot-stamping spandex construction, stretch and recovery checks, stage lighting review, 22 stock color sample review, specifications, suitable applications, sample testing and RFQ details. It links to the target product and related stretch/foil products.

## Acceptance criteria
- `/blog/` lists the new article.
- `/blog/how-to-choose-hot-stamping-spandex-fabric-for-dancewear-stage-costumes/` builds successfully.
- The article links to valid product slugs.
- The article does not promote glitter-focused content.
- The article includes sample, quotation and pre-bulk testing guidance.

## Impact
`src/data/blogArticles.js`

## Implementation location
`src/data/blogArticles.js`

## Verification
`npm run build` to be run after implementation.

## Source
User instruction: write the first blog article based on the approved outline for `Full-Print Hot-Stamping Spandex Milk-Silk Fabric`.
