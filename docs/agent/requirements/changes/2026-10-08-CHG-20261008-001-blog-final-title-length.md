---
change_id: CHG-20261008-001-blog-final-title-length
date: 2026-10-08
status: implemented
requirements:
  - REQ-BLOG-012
modules:
  - blog-knowledge
  - site-shell
---

# 两篇 Blog 最终标题长度修正

## 变更原因
两篇新增 Blog 的数据字段本身接近长度阈值，但 Layout 自动追加品牌名后，最终生成的 HTML title 分别达到 73 和 70 个字符。

## 变更内容
- 将 Metallic / Iridescent / Holographic 对比文章的最终 title 压缩为 `Metallic vs Iridescent vs Holographic | Nixia Fabric`。
- 将 Swimwear / Bikinis 文章的最终 title 压缩为 `Foil Fabric for Swimwear & Bikinis | Nixia Fabric`。
- URL、canonical、H1、正文、图片和页面布局保持不变。

## 验收条件
- 两篇文章的最终生成 title 分别为 52 和 49 个字符。
- 所有公开 Blog 页面的最终 title 不超过 60 个字符。
- 构建和产品校验通过。

## 实现位置
- `src/data/blogArticles.js`
- `src/layouts/Layout.astro`
