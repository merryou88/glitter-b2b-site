---
change_id: CHG-20261011-034-mobile-swatch-note-style
status: active
---

# 统一移动端产品卡片库存提示样式

## 变更前

移动端产品列表卡片中的 `Free swatch card available` 使用独立的较小字号和较轻字重，与 `In-Stock` 不一致。

## 变更后

移动端库存提示继承产品卡片 meta 区域的字号、行高和字重，与 `In-Stock` 保持一致。桌面端样式和颜色保持不变。

## 验收标准

- 移动端 `Free swatch card available` 与 `In-Stock` 使用相同字体尺寸和字重。
- 产品卡片布局、库存提示颜色及桌面端显示不受影响。

## 影响与实现

- 影响模块：`product-catalog`
- 实现位置：`src/pages/products.astro`

## 验证结果

待运行 `npm run build`，并手动检查产品列表页移动端卡片。
