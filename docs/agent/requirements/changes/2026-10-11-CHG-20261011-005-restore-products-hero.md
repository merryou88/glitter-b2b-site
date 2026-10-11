---
change_id: CHG-20261011-005-restore-products-hero
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# 恢复 Products 页 Hero

## 变更原因
用户明确要求 Products 页 Hero 恢复为原来的视觉和内容布局。

## 变更前
- Products 页 Hero 使用激光镭射面料背景和深蓝蒙版。
- 移动端 Hero 下方显示额外 CTA 按钮。

## 变更后
- Products 页 Hero 恢复原有深蓝渐变背景。
- 移除额外的 Hero 移动端 CTA。
- 保留产品卡片移动端成分文字和免费色卡提示修复。
- 首页 Hero 保持不变。

## 验收条件
- Products 页桌面和移动端 Hero 使用原有深蓝渐变背景。
- Products 页 Hero 不显示新增移动端 CTA。
- 产品卡片移动端修复继续生效。
- 首页 Hero 不受影响。

## 实现位置
- `src/pages/products.astro`

## 验证结果
待执行 `npm run build`、产品校验和 SEO 校验。
