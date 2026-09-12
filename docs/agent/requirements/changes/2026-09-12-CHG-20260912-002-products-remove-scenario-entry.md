---
change_id: CHG-20260912-002-products-remove-scenario-entry
date: 2026-09-12
status: implemented
requirements:
  - REQ-PRODUCT-001
modules:
  - product-catalog
---

# Remove Scenario Entry From Products Page

## 变更原因
后续网站只保留一个场景，产品列表页不再需要应用场景入口。

## 变更前
`/products/` 在产品列表前展示应用场景图片入口，并为场景卡片提供跳转和筛选联动脚本。

## 变更后
`/products/` 直接从页面 Hero 进入产品筛选、排序和产品网格；应用场景卡片、场景数据、场景卡片样式和联动脚本全部移除。

## 验收条件
- `/products/` 不显示应用场景入口或场景图片卡片。
- 产品筛选、排序、数量统计和产品卡片继续正常工作。
- 产品详情页和独立应用页面路由保持不变。

## 影响范围
- `src/pages/products.astro`
- `docs/agent/requirements/current/product-catalog.md`
- `docs/agent/requirements/INDEX.md`

## 兼容性
不删除产品详情页或独立应用页面；仅改变产品列表页的信息架构。

## 实现位置
`src/pages/products.astro` 删除应用场景 collections、渲染区、相关 CSS 和 collection tile 联动逻辑。

## 验证结果
`npm run build` 通过；构建流程内的 `npm run validate:products` 通过，检查 8 个产品。

## 来源
用户指令：products页面场景入口直接去掉吧，后续网站就一个场景，不需要场景入口了。
