---
change_id: CHG-20261011-035-mobile-products-hero-facts-grid
status: active
---

# 产品页移动端 Hero 优点改为两列

## 变更前

产品列表页移动端 Hero 下方的四个采购优点使用单列布局，依次排列为四行。

## 变更后

移动端改为两列两行展示；桌面端继续保留原有横向 flex 布局。

## 验收标准

- 移动端同一行显示两个优点。
- 四项文案完整显示。
- 桌面端 Hero 布局不受影响。

## 影响与实现

- 影响模块：`product-catalog`
- 实现位置：`src/pages/products.astro`

## 验证结果

待运行 `npm run build`，并手动检查 `/products/` 移动端页面。
