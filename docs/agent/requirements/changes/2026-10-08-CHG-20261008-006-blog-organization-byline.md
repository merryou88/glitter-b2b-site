---
change_id: CHG-20261008-006-blog-organization-byline
date: 2026-10-08
status: implemented
requirements:
  - REQ-BLOG-015
modules:
  - blog-knowledge
---

# Blog 统一机构署名

## 变更原因
公开 Blog 需要明确真实内容责任主体，同时避免为了 E-E-A-T 虚构个人作者或独立技术审核人。

## 变更内容
- 所有公开文章标题区显示 `Written by Nixia Fabric Editorial Team`。
- Article Schema 继续使用 `Organization: Nixia Fabric` 作为作者。
- 不添加 `reviewedBy` 或虚构的个人资料。

## 验收结果
- 统一署名由 Blog 公共模板渲染，无需逐篇维护。
- 页面可见署名与结构化数据均指向真实机构主体。

## 实现位置
- `src/pages/blog/[slug].astro`
