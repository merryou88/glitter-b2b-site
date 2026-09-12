change_id: CHG-20260912-022-home-capability-cards-full-width
date: 2026-09-12
status: implemented
requirements:
  - REQ-SHELL-009
modules:
  - site-shell
---

# 首页制造能力卡片铺满整行

## 变更原因
首页 `In-House Production, Full Control` 区块只有 4 个卡片，但桌面网格设置为 5 列，导致卡片没有占满整行。

## 变更前
制造能力卡片使用 5 列桌面网格，4 个卡片后存在空列。

## 变更后
制造能力卡片改为 4 列等宽桌面网格，四张卡片均匀铺满内容区域；平板和移动端继续使用现有响应式列数。

## 验收条件
- 桌面端四张卡片均匀占满整行。
- 平板端和移动端卡片布局正常。

## 影响范围
仅调整首页制造能力卡片的桌面网格列数。

## 实现位置
`src/pages/index.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求拉开四个卡片宽度并占满整行。
