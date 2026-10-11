---
change_id: CHG-20261011-015-applications-hero-height
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-020
modules:
  - site-shell
---

# Applications 页 Hero 高度压缩

## 变更原因
Applications 页 Hero 在桌面和移动端占用空间较大，需要进一步压缩首屏高度。

## 变更前
- 桌面端 Hero 上下内边距使用 `var(--space-2xl)`。
- 移动端沿用桌面端 Hero 内边距和标题、正文间距。

## 变更后
- 桌面端 Hero 上下内边距改为 `var(--space-xl)`。
- 移动端 Hero 上下内边距改为 `var(--space-md)`。
- 移动端同步收紧标题间距，正文改用更紧凑的字号和行高。
- Hero 容器宽度、标题内容和正文宽度保持不变。

## 验收条件
- 桌面端和移动端 `/applications/` Hero 高度均较修改前降低。
- 标题、正文不溢出、不重叠。
- 页面头部导航、应用卡片和 SEO 结构不受影响。

## 影响范围
仅影响 Applications 索引页 Hero 的响应式间距和文字行高。

## 实现位置
- `src/pages/applications/index.astro`

## 验证结果
待执行 `npm run build`。

## 来源
用户要求进一步压缩 Applications 页面 Hero 高度，并同步优化桌面端和移动端。
