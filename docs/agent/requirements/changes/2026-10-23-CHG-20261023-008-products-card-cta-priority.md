---
change_id: CHG-20261023-008-products-card-cta-priority
date: 2026-10-23
status: superseded
requirements:
  - REQ-PRODUCT-022
modules:
  - product-catalog
---

# 产品卡片优先展示样品报价按钮

## 变更原因
用户要求产品列表卡片先展示索取样品及报价入口，View Details 改为文字超链接。
## 变更前
卡片先显示描边 View Details 按钮，再显示金色 Request Sample / Quote 按钮。
## 变更后
金色 Request Sample / Quote 按钮排在前面，View Details 排在后面并使用下划线文字链接，无按钮背景、边框和按钮内边距；保留既有移动端单列排列断点。
## 验收条件
所有产品卡片询盘按钮在前、详情链接在后；文字详情链接点击进入对应产品；询盘继续携带产品上下文打开现有 RFQ 弹窗。
## 影响范围
仅 src/pages/products.astro 卡片操作区和局部样式；模块职责及调用路径不变。
## 兼容性
询盘文案、产品 SKU、回退地址、筛选及产品数据不变；链接保留键盘访问能力。
## 实现位置
src/pages/products.astro 的 product-card__actions、product-card__details-link。
## 验证结果
`npm run build` 通过：59 个页面、18 个产品和 56 个 sitemap URL 的 SEO/内链校验通过。生成 HTML 检查确认全部 18 张卡片均先询盘按钮、后文字详情链接，询盘 SKU 和产品详情地址保留。`git diff --check` 通过。未进行浏览器视觉或真实询盘提交验证。
## 来源
用户当前要求与产品卡片截图。

## 后续变更
CHG-20261024-001-product-led-catalog 更新首屏定位、卡片和筛选规则；原 RFQ 与卡片 CTA 顺序继续保留。
