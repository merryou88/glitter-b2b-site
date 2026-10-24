---
change_id: CHG-20261024-002-catalog-remove-dropdowns
date: 2026-10-24
status: implemented
requirements:
  - REQ-PRODUCT-022
  - REQ-PRODUCT-040
  - REQ-PRODUCT-053
modules:
  - product-catalog
---

# 移除产品目录下拉筛选

## 变更原因
用户要求移除截图红框内的Finish、Stretch、More filters区域。
## 变更前
搜索旁展示Finish、Stretch及More filters内Application、Stock、Sort。
## 变更后
移除整块控件及对应脚本、数据属性、局部样式，仅保留搜索、面料效果标签和清除入口，默认推荐顺序不变。
## 验收条件
桌面与手机均无下拉控件；18产品默认显示，搜索及效果标签组合、清除、空结果状态正常；首屏、卡片、RFQ与图片优化保留。
## 影响范围
src/pages/products.astro 与关联需求文档。
## 兼容性
产品数据、路由、SEO、RFQ与之前已批准的首屏/卡片修改保留。
## 实现位置
src/pages/products.astro
## 验证结果
`npm run build` 通过，18产品、59页面、56 sitemap URL及内链校验通过。Chrome本地375/390/768/1024/1440px检查：无横向溢出、目录无select或More filters；默认18项、全息标签3项、搜索/清除/空结果及索样报价弹窗正常，无页面脚本错误。移动390px首张规格顶部从约841px提前到715px。未提交真实询盘或部署。`git diff --check`通过。
## 来源
用户当前截图红框及移除请求。
