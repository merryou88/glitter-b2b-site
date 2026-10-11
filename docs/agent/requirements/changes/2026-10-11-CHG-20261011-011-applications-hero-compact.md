---
change_id: CHG-20261011-011-applications-hero-compact
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-020
modules:
  - site-shell
---

# Applications 页 Hero 高度收紧

## 变更原因
Applications 页头部导航已经提供页面入口，Hero 内的 `Home / Applications` 面包屑重复占用空间，需要降低首屏高度。

## 变更前
- Hero 内显示 `Home / Applications` 面包屑。
- Hero 上下内边距使用 `var(--space-3xl)`。

## 变更后
- 移除 Applications 页 Hero 内的面包屑。
- Hero 上下内边距改为 `var(--space-2xl)`。
- 保持容器宽度、标题字号和正文最大宽度不变。

## 验收条件
- `/applications/` Hero 不显示 `Home / Applications`。
- 头部导航仍保留 Applications 入口。
- Hero 内容宽度和文字规格不变，整体高度较原来更紧凑。

## 影响范围
仅影响 `src/pages/applications/index.astro` 的页面展示。

## 兼容性
不改变路由、结构化数据、SEO 文案或应用卡片链接。

## 实现位置
- `src/pages/applications/index.astro`

## 验证结果
待执行 `npm run build`。

## 来源
用户要求移除 Applications 页重复的 Home / Applications 导航，并降低 Hero 高度；后续确认 Hero 宽度无需改变。
