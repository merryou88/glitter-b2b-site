---
change_id: CHG-20261017-002-fabric-swim-cap-guide
date: 2026-10-17
status: implemented
requirements:
  - REQ-BLOG-018
modules:
  - blog-knowledge
  - content-data
---

# 布泳帽面料采购指南

## 变更原因
用户要求优先撰写布泳帽选料主题，承接泳衣与泳帽主推场景。
## 变更前
22 篇公开博客，已有泳装指南，无布泳帽专门指南。
## 变更后
新增英文布泳帽采购指南，提供选料、样帽、测试、放行表和 RFQ；关联满版烫金产品。列表 Applications 分组收录，详情应用入口优先泳装。
## 验收条件
文章与列表生成成功；图片和产品存在；无未经验证的防水、耐氯或 UV 承诺；日期与 Schema 一致。
## 影响范围
博客数据、列表、详情应用排序及文档。
## 兼容性
保留既有文章、URL、产品和页面结构。
## 实现位置
`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`。
## 验证结果
`npm run build` 通过，18 个产品与 59 个 HTML 页 SEO/全部站内链接校验通过；新文章的列表入口、图片、真实产品关联与日期 Schema 检查通过。另提供 `docs/content/fabric-swim-cap-sourcing-guide.md` 供正文审阅。尚未部署线上。
## 来源
用户在当前对话要求今天优先写第一个主题。
