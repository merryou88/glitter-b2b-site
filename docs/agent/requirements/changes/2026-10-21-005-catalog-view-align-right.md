---
change_id: CHG-20261021-005-catalog-view-align-right
date: 2026-10-21
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - product-catalog
  - site-shell
---

# 产品目录视图操作靠右

## 变更原因
用户要求去除数量后 Grid / List 切换仍靠右。
## 变更前
移除数量后操作组成为 flex 容器唯一元素，位于左侧。
## 变更后
操作组 margin-left: auto，将 Grid / List 推至右侧。
## 验收条件
桌面切换控件右对齐，原视图切换行为保留。
## 影响范围与兼容性
仅操作组布局，移动端既有隐藏规则保留。
## 实现位置
`src/pages/products.astro`
## 验证结果
npm run build 通过，产品与 SEO/内链校验通过；源码确认 flex 操作组设置 margin-left: auto。
## 来源
用户本轮要求。
