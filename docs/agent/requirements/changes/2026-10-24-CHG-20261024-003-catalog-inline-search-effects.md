---
change_id: CHG-20261024-003-catalog-inline-search-effects
date: 2026-10-24
status: implemented
requirements:
  - REQ-PRODUCT-022
  - REQ-PRODUCT-040
modules:
  - product-catalog
---

# 搜索与效果标签同行

## 变更原因
用户要求面料效果标签直接与搜索框在同一行。
## 变更前
搜索工具栏和效果标签分两行。
## 变更后
效果标签移入搜索工具栏，全端单行flex；桌面搜索240px，手机140px；标签独立横向滚动，不产生整页横向溢出；清除入口有条件显示。
## 验收条件
375/390/768/1024/1440px搜索与标签同一行，搜索、标签、清除及RFQ保留。
## 影响范围
仅目录页排版和需求文档；不改产品事实、SEO或表单。
## 兼容性
保留原先产品集合、默认排序和过滤规则。
## 实现位置
src/pages/products.astro
## 验证结果
`npm run build`通过（18产品、59页面、56 sitemap URL与内链）；本地Chrome在375/390/768/1024/1440px验证搜索与标签垂直中心一致、无页面横向溢出，18产品默认、搜索/效果标签/清除/空结果及索样报价弹窗正常，无页面脚本错误。已检查390px截图；未部署。`git diff --check`通过。
## 来源
用户当前同行布局要求。
