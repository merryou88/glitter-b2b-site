---
change_id: CHG-20261008-009-applications-navigation-entry
date: 2026-10-08
status: implemented
requirements:
  - REQ-SHELL-016
modules:
  - site-shell
---

# Applications 全站导航入口

## 变更原因
应用页已升级为商业主题中心，需要从全站主导航获得稳定入口。桌面导航同时保留 Contact 文字链接和询盘按钮会重复占用空间。

## 变更内容
- 桌面主导航在 Products 后增加 Applications，并移除重复的 Contact 文字项。
- 移动导航增加 Applications，继续保留 Contact 和询盘按钮。
- Footer Company 分组增加 Applications。
- Applications 索引页和详情页共用 active 状态。

## 验收结果
- 全站共享 Header 和 Footer 均可到达 `/applications/`。
- 不引入下拉菜单，不改变现有导航视觉样式。

## 实现位置
- `src/components/Header.astro`
- `src/components/Footer.astro`
