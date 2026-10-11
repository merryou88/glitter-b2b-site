---
change_id: CHG-20261011-010-mobile-nav-collapse
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-003
modules:
  - site-shell
---

# 修复移动导航收起残留

## 变更原因
移动端汉堡菜单收起后，菜单中的 `Products` 项仍可能残留在 Header 下方。

## 变更后
- 收起状态清除移动菜单的 padding 和顶部边框。
- 收起状态设置 `visibility: hidden` 和 `pointer-events: none`。
- 展开状态恢复菜单间距、边框、可见性和点击能力。
- 桌面端导航不变。

## 验收条件
- 移动端打开菜单后可以正常看到导航项。
- 点击汉堡按钮收起后，Header 下方不再显示 `Products` 或其他菜单项。
- 收起后菜单项不可点击。
- 桌面导航和页面内容不受影响。

## 实现位置
- `src/components/Header.astro`

## 验证结果
待执行构建、产品校验和 SEO 校验。
