change_id: CHG-20261011-019-home-mobile-hero-trust-label-nowrap
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-027
modules:
  - site-shell
---

# 首页 Hero 特点说明移动端单行显示

## 变更原因
移动端 Hero 下方四个特点的说明文字被限制为较窄字符宽度，导致出现换行。

## 变更前
移动端说明文字设置了 `max-width: 12ch`，并允许自然换行。

## 变更后
移动端取消字符宽度限制，使用较小的响应式字号、紧凑行高和 `white-space: nowrap`，让每个特点说明保持单行。

## 验收条件
- 375px、390px 和 768px 视口下，四个说明文字保持单行。
- 说明文字不重叠、不溢出两列网格。
- 桌面端说明文字样式保持不变。

## 影响范围
仅调整首页 Hero 特点说明的移动端排版。

## 实现位置
`src/pages/index.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求首页 Hero 下四个特点的小字描述不换行。
