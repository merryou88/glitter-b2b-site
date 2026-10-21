---
change_id: CHG-20261021-004-remove-catalog-count
date: 2026-10-21
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - product-catalog
  - site-shell
---

# 移除产品目录数量提示

## 变更原因
用户要求去掉 Showing 18 products。
## 变更前
目录显示产品数量，筛选后更新数量。
## 变更后
移除数量元素及对应样式、脚本更新。桌面和移动端均不显示数量提示。
## 验收条件
产物无 Showing N products 提示；筛选、排序、视图切换、清除筛选及空结果提示保留。
## 影响范围与兼容性
仅产品列表页；visible 计数仍用于空结果提示。
## 实现位置
`src/pages/products.astro`
## 验证结果
npm run build 通过（18 个产品、59 个页面及内链校验）；产物检查确认数量提示已移除，视图切换和清除筛选按钮保留；源码检查确认筛选排序函数与空结果逻辑保留。
## 来源
用户当前要求。
