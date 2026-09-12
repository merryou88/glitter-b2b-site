change_id: CHG-20260912-019-home-remove-applications
date: 2026-09-12
status: implemented
requirements:
  - REQ-SHELL-004
modules:
  - site-shell
---

# 移除首页 Applications 区块

## 变更原因
用户要求首页不再展示 Applications 内容。

## 变更前
首页在 Popular Products 后展示 Applications 区块及两个应用场景卡片。

## 变更后
首页删除 Applications 区块、应用卡片数据和仅供该区块使用的样式；应用详情页和应用目录不受影响。

## 验收条件
- 首页不显示 Applications 标题、应用场景卡片及其图片。
- 首页其余内容顺序和布局正常。
- 应用详情页及应用目录仍可正常生成。

## 影响范围
仅调整首页展示，不删除应用页面或应用素材。

## 实现位置
`src/pages/index.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求去掉首页 Applications。
