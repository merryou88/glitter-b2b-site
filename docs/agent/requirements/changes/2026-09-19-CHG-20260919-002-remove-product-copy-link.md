---
change_id: CHG-20260919-002-remove-product-copy-link
date: 2026-09-19
status: implemented
requirements:
  - REQ-PRODUCT-025
modules:
  - product-catalog
---

# Remove Copy Product Link From Product Details

## 变更原因
产品详情页的复制链接按钮不是当前采购转化流程的必要操作，用户要求从公共组件中移除，并让后续产品详情页统一遵循该规则。

## 变更前
所有通过 `ProductDetail` 渲染的详情页在 CTA 区域显示 `Copy Product Link`，并加载剪贴板复制、成功提示和相关样式。

## 变更后
公共产品详情组件不再渲染复制链接按钮，也不加载其专属 JavaScript、toast 或 CSS。询盘、样品和 WhatsApp 入口保持不变。

## 验收条件
- 任一公开产品详情页 CTA 区域不出现 `Copy Product Link`。
- 源码中不残留 `copy-product-link`、`rfq-toast` 或 `copy_product_link` 逻辑。
- `Request Sample & Quote`、`Get Sample` 和 `WhatsApp` 继续正常显示。
- 后续新增产品通过公共组件自动沿用该规则。

## 影响范围
仅影响产品详情页 CTA 区域，不改变产品数据、页面 SEO、图片、表单或联系逻辑。

## 兼容性
删除独立的非核心交互，无数据迁移或路由兼容问题。

## 实现位置
- `src/components/ProductDetail.astro`
- `docs/agent/requirements/current/product-catalog.md`
- `docs/agent/requirements/INDEX.md`

## 验证结果
- `npm run build`
- `npm run validate:products`
- `git diff --check`

## 来源
用户于 2026-09-19 要求在公共组件中去掉产品详情页的 `Copy Product Link`，并作为后续详情页统一规则。
