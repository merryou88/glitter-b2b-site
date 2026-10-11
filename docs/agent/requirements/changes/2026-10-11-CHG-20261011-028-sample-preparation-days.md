# CHG-20261011-028：产品详情页自定义样品准备时间改为 3-5 days

## 状态
- active

## 背景
用户要求将样品准备时间中的 `3-5 working days` 简化为 `3-5 days`。该变更只针对样品准备时间，不改变批量生产交期、贸易条款、MOQ、库存状态或产品 URL。

## 变更前
- 自定义样品准备时间显示为 `3-5 working days`。
- 批量生产交期已统一显示为 `LEAD TIME`、`7-15 days`、`production`。

## 变更后
- 自定义样品准备时间显示为 `3-5 days`。
- 现货样品准备时间、批量生产交期、包装和贸易条款保持原规则。
- 产品原始数据中的历史 Bulk Lead time 字段不作为本次样品准备时间变更范围。

## 验收条件
- 产品详情组件默认自定义样品政策显示 `preparation in 3-5 days`。
- 产品数据中的自定义样品 `Sample` / `sampleNote` / 自动 FAQ 文案显示 `3-5 days`。
- 产品详情页批量交期仍显示 `LEAD TIME`、`7-15 days`、`production`。
- 不修改博客文章或历史变更记录中的原始引用。

## 影响范围
- `src/components/ProductDetail.astro`
- `src/data/allProducts.js`
- `docs/agent/modules/product-catalog.md`
- `docs/agent/requirements/current/product-catalog.md`

## 验证
- 已运行：`npm run build`，通过；该命令包含 `validate:products` 和 `validate:seo`
- 已检查：`dist/products` 中不再出现样品准备时间 `3-5 working days`
