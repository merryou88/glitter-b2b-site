---
change_id: CHG-20261011-009-products-catalog-compact-spacing
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# Products 页目录间距收紧

## 变更原因
减少 `/products/` Hero 到搜索筛选区的空白，让首屏露出更多产品卡片。

## 变更后
- 桌面端 `#catalog` 顶部内边距从 `var(--space-2xl)` 收紧为 `var(--space-md)`。
- 移动端 `#catalog` 顶部内边距收紧为 `var(--space-sm)`。
- 目录结果统计行下方间距从 `var(--space-lg)` 收紧为 `var(--space-sm)`。
- 产品卡片自身样式未修改。

## 验收条件
- Hero 下方更快出现搜索筛选区。
- 搜索筛选区下方更快出现产品卡片。
- 桌面和移动端均保持产品卡片样式不变。
- 首页和其他页面不受影响。

## 实现位置
- `src/pages/products.astro`

## 验证结果
待执行构建、产品校验和 SEO 校验。
