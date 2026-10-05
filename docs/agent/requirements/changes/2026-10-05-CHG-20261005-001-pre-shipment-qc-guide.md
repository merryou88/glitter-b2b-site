---
change_id: CHG-20261005-001-pre-shipment-qc-guide
date: 2026-10-05
status: implemented
requirements:
  - REQ-BLOG-009
modules:
  - blog-knowledge
  - content-data
---

# Pre-Shipment Foil Stretch Fabric QC Guide

## 变更原因
用户要求将 `Pre-Shipment Quality Control Checklist for Foil Stretch Fabric` 扩展为面向采购经理的专业、详细、可执行文章。

## 变更前
文章标题已指向出货前质检，但正文仍保留 RFQ 主题表述，只有四个简短段落，缺少完整检查顺序、抽查方法、异常记录和放行判断。

## 变更后
为文章使用独立 URL，重写摘要、导语、采购摘要和正文结构。`/blog/what-to-include-in-a-custom-fabric-rfq/` 恢复给 RFQ 主题文章。QC 文章现在按检查流程覆盖：
- 检查资料与 approved sample 准备
- 颜色、foil 表面和卷内一致性
- usable width 与基础规格
- 拉伸、手感和缝制抽查
- 数量、卷况、标签与包装
- 发票、装箱单和测试文件核对
- 异常记录、hold、conditional release、rework 和 reject 判断

正文新增两张实操检查表、检查清单和采购经理常见 FAQ，并保留真实产品推荐和 RFQ CTA。

## 验收条件
- QC 文章使用独立 URL `/blog/pre-shipment-quality-control-checklist-foil-stretch-fabric/`。
- RFQ 文章继续使用 `/blog/what-to-include-in-a-custom-fabric-rfq/`。
- 标题、Meta 描述和正文主题一致。
- 文章内容适合美国 B2B 面料采购经理阅读。
- 不虚构认证、检测结果、绝对质量承诺或统一验货标准。
- `npm run build` 通过。

## 影响范围
`src/data/blogArticles.js`

## 兼容性
RFQ 原有 URL 保持不变；新增 QC URL 不覆盖现有 RFQ 页面。

## 实现位置
`src/data/blogArticles.js` 中 `what-to-include-in-a-custom-fabric-rfq` 文章对象。

## 验证结果
文章数据检查通过：7 个正文小节、2 个实操表格、4 个 FAQ，约 1,792 个英文词；`npm run validate:products` 通过，15 个公开产品校验通过。`npm run build` 已完成 Astro 页面生成，但在最终清理产物时被项目中已有的缺失图片路径 `public/images/products/H2015030101/detail/sku-1-` 阻断；该路径不属于本次文章修改。

## 来源
用户关于扩展 Pre-Shipment Quality Control Checklist 文章的要求。
