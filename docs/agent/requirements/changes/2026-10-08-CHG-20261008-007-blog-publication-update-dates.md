---
change_id: CHG-20261008-007-blog-publication-update-dates
date: 2026-10-08
status: implemented
requirements:
  - REQ-BLOG-016
modules:
  - blog-knowledge
  - content-data
---

# Blog 发布与更新日期规则

## 变更原因
文章发布日期应反映首次上线时间，更新日期只应反映实质内容变化，避免每次小改动都向搜索引擎发送不准确的新鲜度信号。

## 变更内容
- 保留 `date` 作为首次发布日期。
- 支持可选 `updatedDate` 作为实质更新日期。
- Article Schema 的 `dateModified` 优先使用 `updatedDate`，未设置时回退到 `date`。
- 只有更新日期与发布日期不同时，文章标题区才显示 `Updated`。

## 验收结果
- 既有文章无需补字段，当前发布日期和页面显示保持不变。
- 后续发生实质更新时可逐篇添加 `updatedDate`。

## 实现位置
- `src/pages/blog/[slug].astro`
