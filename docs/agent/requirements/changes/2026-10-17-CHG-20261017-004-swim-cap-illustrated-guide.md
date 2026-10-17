---
change_id: CHG-20261017-004-swim-cap-illustrated-guide
date: 2026-10-17
status: implemented
requirements:
  - REQ-BLOG-018
  - REQ-BLOG-011
  - REQ-BLOG-007
modules:
  - blog-knowledge
  - content-data
---

# 泳帽指南图文、表格、产品与内链完善

## 变更原因
用户要求符合既有 Blog 图文表、推荐产品和内链编写要求。
## 变更前
正文无插图，仅 2 张表格和 1 个关联产品，相关指南依赖自动匹配，缺少段落资源链接；Markdown 仅含正文。
## 变更后
正文加入 3 张已目视核对的真实面料照片，图注明确用途与证据范围；增加真实产品规格比较表，共 3 张表；推荐满版烫金泳帽打样面料与金彩虹配套泳衣比较面料，卡片附用途说明；按段落加入相关产品、采购指南和样品政策链接，并指定 3 篇相关文章。Markdown 同步含图、表、链接和推荐产品。
## 验收条件
3 张正文图片及图注完整显示，3 张表格可读；2 个产品用途准确；9 条段落链接、3 篇相关文章、1 个主应用入口有效；窄屏无横向溢出，色卡不裁切。
## 影响范围
文章数据及详情模板的可选字段 `sections[].links`、`sections[].imageFit`、`productNotes`、`relatedGuideSlugs`；未配置字段的既有文章沿用原呈现。
## 兼容性
不更改 URL、原始日期、其他产品数据或既有文章文案。
## 实现位置
`src/data/blogArticles.js`、`src/pages/blog/[slug].astro`、`docs/content/fabric-swim-cap-sourcing-guide.md`。
## 验证结果
`npm run build` 通过：18 个产品及 59 页 SEO/全部站内链接检查通过。专项检查确认正文 3 图、3 表、2 个产品用途说明、9 条段落链接、3 篇相关文章及资源存在。已检查 1280px 桌面与 390px 手机宽度，页面无横向溢出；3 张正文图片实际加载成功、完整比例呈现。未配置新字段的泳装旧文章保持原呈现。尚未部署线上。
## 来源
用户本轮明确要求。
