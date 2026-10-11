---
change_id: CHG-20261011-016-applications-hero-primary-color
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-020
modules:
  - site-shell
---

# Applications 页 Hero 使用本站主色

## 变更原因
Applications 页 Hero 背景需要稍微加深，并与本站主色保持一致。

## 变更前
- Hero 使用浅色背景。
- 标题和正文使用深色文字。

## 变更后
- Hero 背景改为 `var(--color-primary)`。
- 标题改为白色。
- 正文改为半透明白色。
- eyebrow 使用本站金色强调色。

## 验收条件
- 桌面端和移动端 Hero 均使用本站主色深蓝背景。
- 标题、正文和 eyebrow 在深色背景上清晰可读。
- Hero 高度、宽度和其他页面区域不受影响。

## 影响范围
仅影响 Applications 索引页 Hero 的颜色和文字对比度。

## 实现位置
- `src/pages/applications/index.astro`

## 验证结果
待执行 `npm run build`。

## 来源
用户要求 Applications 页 Hero 背景稍微加深，并使用本站主色深蓝。
