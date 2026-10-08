---
change_id: CHG-20261008-005-blog-content-gap-backlog
date: 2026-10-08
status: implemented
requirements:
  - REQ-BLOG-014
modules:
  - blog-knowledge
  - content-data
  - product-catalog
---

# Blog Content Gap Backlog

## 变更原因
用户要求下一批 Blog 不再泛写主题，而是优先填补真实采购缺口。每篇文章只服务一个搜索意图，并建立清晰的应用页和产品导流关系。

## 变更前
Blog 已有一批采购指南和核心文章深度升级，但下一批内容缺口尚未固定成明确 backlog，容易在写作时混合多个搜索意图或重复链接同一批产品。

## 变更后
记录下一批高优先级选题：
- `Nylon Spandex vs Polyester Spandex for Foil Fabric`
- `90 vs 150 vs 180 vs 200 GSM Performance Fabric`
- `Dot vs Scale vs Snakeskin vs Gradient Foil Finish`
- `How to Test Foil Fabric After Sewing and Stretching`
- `How Much Fabric Is Needed for Dancewear or Costume Production`

每篇必须聚焦一个搜索意图，链接一个应用页和 2–4 个真实相关产品，避免所有 Blog 都链接全部产品。

## 验收条件
- 后续新增文章时逐篇匹配一个主搜索意图。
- 每篇文章只展示一个语义相关应用页。
- 每篇文章推荐 2–4 个真实相关产品。
- 产品导流不得泛化为所有文章推荐同一批产品。
- 正文围绕真实采购判断、测试方法、规格选择或用量估算展开。

## 影响范围
Blog 内容规划与后续 `src/data/blogArticles.js` 新增文章。

## 兼容性
本次只记录下一批内容要求，不新增公开文章、不修改现有 URL。

## 实现位置
`docs/agent/requirements/current/blog.md` 和需求变更记录。

## 验证结果
文档规则已更新；本次未改业务代码，未运行构建。

## 来源
用户 2026-10-08 关于下一批 Blog 真实内容缺口与导流规则的要求。
