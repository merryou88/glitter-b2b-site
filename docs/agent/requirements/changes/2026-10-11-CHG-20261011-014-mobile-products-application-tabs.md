---
change_id: CHG-20261011-014-mobile-products-application-tabs
date: 2026-10-11
status: implemented
requirements:
  - REQ-PRODUCT-040
modules:
  - product-catalog
---

# Products 页移动端应用标签过滤

## 变更原因
移动端 Products 页不需要完整的桌面搜索和多条件筛选工具，也不需要在小屏幕上切换 Grid/List 视图。

## 变更前
- 移动端显示搜索框、Finish、Stretch、Application、Stock 和 Sort 控件。
- 移动端显示 Grid/List 视图切换。

## 变更后
- 移动端隐藏搜索、下拉筛选、排序和 Grid/List 切换。
- 移动端保留四个应用标签：`Dancewear`、`Stage Costumes`、`Performance Apparel`、`Swimwear`。
- 点击标签过滤产品卡片；再次点击当前标签恢复全部产品。
- 移动端产品卡固定使用网格布局。
- 桌面端现有目录控件保持不变。

## 验收条件
- 375px、390px、768px 下不显示搜索、下拉筛选或 Grid/List 切换。
- 四个应用标签能正确过滤产品并更新结果数量。
- 移动端产品卡保持网格展示，桌面端功能不受影响。

## 影响范围
仅影响 `/products/` 移动端目录交互与布局。

## 实现位置
- `src/pages/products.astro`

## 验证结果
待执行 `npm run build`、产品校验和 SEO 校验。

## 来源
用户要求移动端 Products 页去掉搜索和筛选，保留四个应用标签过滤，并移除产品卡列表的 Grid/List 切换展示。
