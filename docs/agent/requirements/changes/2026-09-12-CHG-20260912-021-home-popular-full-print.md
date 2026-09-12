change_id: CHG-20260912-021-home-popular-full-print
date: 2026-09-12
status: implemented
requirements:
  - REQ-SHELL-004
modules:
  - site-shell
---

# 首页加入 Full-Print 产品

## 变更原因
用户要求将 Full-Print Hot-Stamping Spandex Milk-Silk Fabric 加入首页 Popular Products。

## 变更前
首页 Popular Products 展示 3 个表演服装面料产品，不包含 Full-Print 产品。

## 变更后
首页 Popular Products 新增 Full-Print Hot-Stamping Spandex Milk-Silk Fabric 卡片，链接到其产品详情页，并复用产品数据中的主图和 WebP 图片。

## 验收条件
- 首页 Popular Products 显示 Full-Print Hot-Stamping Spandex Milk-Silk Fabric。
- 卡片链接指向 `/products/full-print-hot-stamping-spandex-milk-silk/`。
- 产品主图可正常加载。

## 影响范围
仅增加首页产品推荐卡片，不改变产品详情页或产品目录规则。

## 实现位置
`src/pages/index.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求将该产品加入首页 Popular Products。
