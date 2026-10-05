---
change_id: CHG-20261005-002-sample-testing-buyer-guides
date: 2026-10-05
status: implemented
requirements:
  - REQ-BLOG-010
modules:
  - blog-knowledge
  - content-data
  - product-catalog
---

# Sample and Pre-Production Testing Buyer Guides

## 变更原因
用户确认发布三篇面向美国面料采购经理的实操型 blog，主题分别为供应商样品比较、拉伸回复判断和 foil 表面批量前测试。

## 变更前
博客已有样品申请、RFQ、4-way stretch 和出货前质检文章，但缺少一组连续覆盖“比较样品、验证面料、批量前放行”的详细采购指南。

## 变更后
新增三篇公开文章：
- `compare-foil-fabric-samples-from-different-suppliers`
- `stretch-recovery-vs-stretch-amount-fabric-buyers`
- `evaluate-foil-adhesion-before-bulk-production`

每篇包含采购经理可执行的检查步骤、表格或清单、FAQ、真实产品回链和询盘 CTA，并在 Blog 首页按 `Fabric Selection`、`Sample & RFQ`、`Testing & Compliance` 分组展示。

文章明确区分内部样品筛查与正式实验室测试，不承诺绝对性能，不虚构统一行业标准或检测结果。

## 验收条件
- 三篇文章生成独立静态路由。
- 每篇正文结构完整，面向美国 B2B 面料采购场景。
- 推荐产品 slug 均映射到真实公开产品。
- Blog 首页可从采购主题分组进入三篇文章。
- 公开内容不引入 glitter、鞋包或无关行业主题。

## 影响范围
`src/data/blogArticles.js`、`src/pages/blog/index.astro`

## 兼容性
不修改既有文章 URL，不替换既有产品数据和图片；新增文章使用现有产品图片作为文章主图。

## 实现位置
`src/data/blogArticles.js` 中新增三篇文章对象；`src/pages/blog/index.astro` 中增加对应主题入口。

## 验证结果
已通过 `npm run build`、文章数据检查和 `npm run validate:products`。三篇文章均生成独立路由；每篇包含详细正文、表格或清单、FAQ、真实产品回链和询盘 CTA。公开文章总数为 19 篇，17 个公开产品校验通过。

## 来源
用户关于发布三篇采购指南的要求。
