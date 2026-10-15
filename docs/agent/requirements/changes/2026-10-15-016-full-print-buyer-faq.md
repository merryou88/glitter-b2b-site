---
change_id: CHG-20261015-016-full-print-buyer-faq
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 补充采购决策FAQ与样品确认流程
## 变更原因
用户希望补充有价值的采购FAQ，并明确确认定制订单先确认样品再生产大货。
## 变更前
FAQ仅有报价问题。
## 变更后
增加抗氯/UV性能、烫金拉伸洗涤表现、定制样品确认3条，共4条。未验证的性能不作承诺；客户确认定制样品后方可开始大货。
## 验收条件
页面与FAQ JSON-LD均包含同样4条；样品确认流程清楚，不新增未经证实的性能等级。
## 影响范围
仅目标产品FAQ，继续跳过通用FAQ补充。
## 兼容性
扩展此前精简FAQ规则，不恢复重复MOQ、现货样品或交期FAQ。
## 实现位置
src/data/allProducts.js
## 验证结果
完整构建、产品校验、SEO校验、页面与FAQ结构化数据一致性检查及git diff --check通过。
## 来源
用户本轮确认的样品流程及前述采购FAQ讨论。
