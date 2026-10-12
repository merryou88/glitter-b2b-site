---
change_id: CHG-20261012-005-rfq-sidebar-compact
date: 2026-10-12
status: implemented
requirements:
  - REQ-FORM-008
modules:
  - inquiry-forms
---

# 压缩 RFQ 蓝色侧栏

## 变更原因
用户要求移除左侧 1 Contact Info，移动端节约空间给表单。
## 变更前
侧栏底部含步骤标记及额外间距。
## 变更后
移除步骤 DOM 和样式，保留白色表单 Contact Info 表头；移动端蓝色区上下内边距缩至 1.25rem / 1rem。
## 验收条件
蓝色区域无步骤标记和遗留占位，白色区域保留表头。
## 影响范围
共用询盘弹窗布局。
## 兼容性
不改变表单字段、折叠或提交逻辑。
## 实现位置
`src/components/RFQQuoteModal.astro`
## 验证结果
npm run build 通过（含产品与 SEO 校验）；390×844 本地弹窗视觉检查确认左侧步骤已移除、蓝色区收缩且白色区 Contact Info 表头保留。
## 来源
用户指定仅删除左侧标记，保留右侧表头并压缩移动端蓝色区。
