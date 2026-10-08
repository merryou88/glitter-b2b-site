const applicationTitles = {
  "foil-fabric-for-stage-costumes": "Foil Fabric for Stage & Dancewear",
  "custom-foil-fabric-development": "Custom Foil Fabric Development",
  "holographic-fabric-wholesale": "Holographic Fabric Wholesale",
  "dancewear-fabric-supplier": "Dancewear Fabric Supplier",
  "swimwear-fabric-supplier": "Iridescent Swimwear Fabric",
  "cheerleading-performance-costume-fabric": "Cheerleading & Performance Costume Fabric",
};

// Product-to-application links make the product and application pages a reciprocal topic cluster.
const productApplicationSlugs = {
  "rainbow-stripe-foil-4-way-stretch-fabric": [
    "foil-fabric-for-stage-costumes",
    "dancewear-fabric-supplier",
    "cheerleading-performance-costume-fabric",
  ],
  "plain-iridescent-laser-spandex-4-way-stretch": [
    "custom-foil-fabric-development",
    "holographic-fabric-wholesale",
    "dancewear-fabric-supplier",
    "cheerleading-performance-costume-fabric",
  ],
  "rainbow-iridescent-laser-foil-nylon-spandex-fabric": [
    "holographic-fabric-wholesale",
    "dancewear-fabric-supplier",
    "swimwear-fabric-supplier",
  ],
  "gradient-rainbow-dot-foil-knit-fabric": [
    "foil-fabric-for-stage-costumes",
    "dancewear-fabric-supplier",
  ],
  "rainbow-fingerprint-dot-foil-ice-silk-fabric": [
    "foil-fabric-for-stage-costumes",
    "dancewear-fabric-supplier",
  ],
  "holographic-mermaid-scale-milk-silk-stretch-fabric": [
    "foil-fabric-for-stage-costumes",
    "holographic-fabric-wholesale",
    "dancewear-fabric-supplier",
  ],
  "full-print-hot-stamping-spandex-milk-silk": [
    "custom-foil-fabric-development",
    "foil-fabric-for-stage-costumes",
    "dancewear-fabric-supplier",
    "cheerleading-performance-costume-fabric",
  ],
  "double-layer-pleated-foil-knit-fabric": [
    "foil-fabric-for-stage-costumes",
    "dancewear-fabric-supplier",
  ],
  "shiny-foil-4-way-stretch-knit-fabric": [
    "foil-fabric-for-stage-costumes",
    "dancewear-fabric-supplier",
    "cheerleading-performance-costume-fabric",
  ],
  "dense-dot-foil-suede-look-fabric": ["foil-fabric-for-stage-costumes"],
  "iridescent-laser-hot-stamping-stretch-ice-silk": [
    "foil-fabric-for-stage-costumes",
    "holographic-fabric-wholesale",
    "dancewear-fabric-supplier",
    "cheerleading-performance-costume-fabric",
  ],
  "iridescent-gradient-laser-ice-silk": [
    "custom-foil-fabric-development",
    "holographic-fabric-wholesale",
    "dancewear-fabric-supplier",
    "cheerleading-performance-costume-fabric",
  ],
  "rainbow-dot-laser-foil-knit-fabric": [
    "foil-fabric-for-stage-costumes",
    "dancewear-fabric-supplier",
    "cheerleading-performance-costume-fabric",
  ],
  "blue-purple-gradient-laser-foil-spandex-fabric": [
    "foil-fabric-for-stage-costumes",
    "holographic-fabric-wholesale",
    "dancewear-fabric-supplier",
    "cheerleading-performance-costume-fabric",
  ],
  "holographic-snakeskin-stretch-fabric": [
    "custom-foil-fabric-development",
    "holographic-fabric-wholesale",
    "dancewear-fabric-supplier",
    "swimwear-fabric-supplier",
    "cheerleading-performance-costume-fabric",
  ],
  "gold-rainbow-gradient-metallic-foil-4-way-stretch-fabric": ["swimwear-fabric-supplier"],
  "iridescent-mystic-metallic-foil-nylon-spandex-fabric": ["swimwear-fabric-supplier"],
  "shattered-glass-metallic-foil-dot-4-way-stretch-nylon-spandex-fabric": ["swimwear-fabric-supplier"],
};

export const getApplicationClustersForProduct = (productSlug) =>
  (productApplicationSlugs[productSlug] ?? []).map((slug) => ({
    slug,
    title: applicationTitles[slug],
  }));
