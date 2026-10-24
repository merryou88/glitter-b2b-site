---
change_id: CHG-20261021-010-mobile-default-dancewear
date: 2026-10-21
status: superseded
requirements:
  - REQ-PRODUCT-040
modules:
  - product-catalog
---

# 移动端默认 Dancewear 筛选

原先进入页面所有标签均未选中。用户要求通过默认选中 Dancewear 提示标签可筛选。

≤768px 初始化 Dancewear 筛选，同步金色高亮和 aria-pressed，实际仅展示匹配卡片。点击其他标签切换，再次点击选中标签显示全部。进入桌面清除移动筛选，进入移动端恢复默认 Dancewear，避免隐藏条件影响桌面。清除筛选同步重置标签。排序和产品资料不变。

实现：src/pages/products.astro。验收：移动初始高亮与结果一致；标签切换/取消可用；桌面默认全部。
验证：npm run build 通过（18 产品、59 页面及 SEO/内链）；执行页面脚本的模拟 DOM 检查，移动默认、切换、取消、桌面初始状态及断点重置均通过。

## 后续变更
CHG-20261024-001-product-led-catalog 更新首屏定位、卡片和筛选规则；原 RFQ 与卡片 CTA 顺序继续保留。
