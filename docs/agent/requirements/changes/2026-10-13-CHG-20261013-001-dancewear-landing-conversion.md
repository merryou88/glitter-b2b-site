# CHG-20261013-001：优化 Dancewear 广告应用落地页采购承接

- 状态：active
- 关联需求：REQ-PRODUCT-049

## 变更前

`/applications/dancewear-fabric-supplier/` 首屏以泛化的 dancewear 材料说明为主，产品推荐区一次展示全部关联产品，广告点击后需要较长滚动才能再次看到清晰的采购动作。

## 变更后

- 首屏文案明确 foil、iridescent、holographic stretch fabrics 以及 stage costumes、dancewear 和 performance apparel 的采购范围。
- 首屏增加“Foil & iridescent stretch”“Samples before bulk”“Wholesale & custom options”三个采购事实标签。
- 主 CTA 改为 `Request Samples & Quote`，次 CTA 直接跳转到推荐材料区，减少移动端滚动成本。
- 首屏之后新增“Foil and iridescent fabrics for dance costumes”产品区，直接展示 4 个适合舞蹈服饰的面料选项和规格入口。
- 移除页面顶部可视 Breadcrumb，避免与主菜单重复并释放移动端首屏空间；Schema 中的 BreadcrumbList 保留。
- 该页面的推荐产品首批限制为 8 个，保留规格比较和单品详情入口。

## 验收标准

1. 页面首屏可见广告相关产品范围、采购标签和 RFQ CTA。
2. 点击主 CTA 仍通过现有 `data-rfq-open` 机制打开询盘表单。
3. Dancewear 页面推荐产品数量不超过 8 个，其他应用页面行为不变。
4. 页面构建成功且差异无空白错误。

## 影响与实现位置

- 用户可见行为：应用落地页首屏文案、CTA 和推荐产品数量调整。
- 实现文件：`src/pages/applications/[slug].astro`。
- 未修改 Google Ads 账户设置；关键词、出价、地区和预算需要在广告后台单独评估。

## 验证结果

- 待运行：`npm run build`、`git diff --check`。
