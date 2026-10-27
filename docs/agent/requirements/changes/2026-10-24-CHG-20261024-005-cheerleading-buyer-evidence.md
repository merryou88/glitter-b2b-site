---
change_id: CHG-20261024-005-cheerleading-buyer-evidence
date: 2026-10-24
status: implemented
requirements:
  - REQ-PRODUCT-058
modules:
  - product-catalog
  - inquiry-forms
---

# 啦啦队面料应用页采购证据与按款询盘

## 变更原因
用户确认按此前 SEO 分析优化现有页面；小样本 GSC 仅作为观察信号，不作为产品性能或转化保证。
## 变更前
通用 shortlist 缺少幅宽与款号；现有产品网格与按款询价路径分离。
## 变更后
Hero 后提供四款实时目录规格对比与主图/细节图；按款 sample/quote 复用现有 RFQ，补应用和款号等信息提示，保留已编辑草稿。明确样品费用、运费及需要正式报价确认的事项。不制作或冒充拉伸、逆面或成衣测试图片。隐藏该页重复通用表格及产品网格。
## 验收条件
见 REQ-PRODUCT-058。其他应用页及当前标题/H1/canonical 保持不变。
## 影响范围
仅目标应用页及其专用组件。无表单接口、邮件或共享表单字段变更。
## 兼容性
使用既有 data-rfq-open、产品名与 sample/quote 意图；无 JS 时产品链接及 contact 入口仍可访问。
## 实现位置
src/components/CheerleadingBuyerGuide.astro；src/pages/applications/[slug].astro。
## 验证结果
npm run build 通过：18 款公开产品校验、59 个 HTML 页面及 56 个 sitemap URL 和内部链接校验通过。Chrome 本地预览检查 1440px / 390px：无页面横向溢出，4 张产品卡片、图片均正常，无脚本错误；按款样品与报价意图、款号模板切换、已编辑草稿保留通过。title 与 canonical 核对保持不变。未提交真实询盘、未发布。
## 来源
用户在当前会话明确要求实施此前建议。产品规格与样品政策以当前 allProducts.js 为准。
