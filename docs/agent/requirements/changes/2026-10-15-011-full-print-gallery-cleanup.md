---
change_id: CHG-20261015-011-full-print-gallery-cleanup
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 清理已删除主图引用
## 变更原因
用户已删除主图6、7，配置仍保留引用导致浏览器显示缺图占位。
## 变更前
imageList和galleryImages均引用主图1至7。
## 变更后
两处列表仅保留主图1至5，不恢复已删除文件。
## 验收条件
生成页面不再引用主图6、7，保留主图1至5。
## 影响范围
仅目标产品主图库配置，详情图不变。
## 兼容性
替代此前保留图6、7配置的规则，解决历史记录中的缺图校验问题。
## 实现位置
src/data/allProducts.js
## 验证结果
完整站点构建通过；18个产品校验通过；58个HTML页面与55个站点地图URL的SEO校验通过；生成HTML确认仅引用主图1至5，git diff --check通过。
## 来源
用户反馈已删除图片仍显示占位。
