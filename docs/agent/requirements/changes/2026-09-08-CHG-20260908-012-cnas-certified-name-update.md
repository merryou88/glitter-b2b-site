---
change_id: CHG-20260908-012-cnas-certified-name-update
date: 2026-09-08
status: implemented
requirements:
  - REQ-PRODUCT-011
modules:
  - product-catalog
---

# Coarse Glitter 产品对外名称修正为 CNAS Certified

## 变更原因
用户确认该产品对外展示不应使用 `CMA Certified`，改为 `CNAS Certified` 更适合外贸场景。

## 变更前
产品标题、首页推荐卡片角标和合规说明中使用 `CMA Certified`。

## 变更后
产品标题、首页推荐卡片角标和合规说明统一使用 `CNAS Certified`，slug 保持不变。

## 验收条件
- 首页、列表页与详情页均显示 `CNAS Certified`
- 相关合规说明不再出现 `CMA Certified`
- 产品详情页仍可正常生成

## 影响范围
`src/data/allProducts.js`、`src/pages/index.astro`

## 兼容性
URL slug 不变，原产品链接继续可用。

## 实现位置
`src/data/allProducts.js`、`src/pages/index.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求将对外名称从 `CMA Certified` 改为 `CNAS Certified`。
