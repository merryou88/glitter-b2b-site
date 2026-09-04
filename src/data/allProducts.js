/**
 * Nixia Fabric — Product Data Source
 * ---------------------------------------------------------------------------
 * Single source of truth for every product page on the B2B site.
 *
 * The ProductDetail.astro component renders ALL products from exactly ONE
 * layout (the plain-iridescent reference). This file holds ONLY business
 * data — no UI, no styles, no layout logic.
 *
 * Each object must contain EVERY field below (a missing field breaks the build).
 *
 * "availableColors": "现货颜色数量，是否支持定制颜色，例：8 stock colors, support custom color；无特殊配置默认：1 standard color"
 *
 * To add a new product (the 7th, 8th ... 100th):
 *   1. Copy one existing object below and paste it into the `allProducts` array.
 *   2. Fill in every field with that product's data (title, slug, images, ...).
 *   3. Save. The static site will automatically generate the new page at
 *      /products/{slug} and add it to the catalog listing — no page file needed.
 */

export const allProducts = [
  {
    slug: "plain-iridescent-laser-spandex-4-way-stretch",
    metaTitle: "Plain Iridescent 4-Way Stretch Foil Fabric | Wholesale Supplier",
    metaDesc:
      "Plain iridescent laser foil fabric with 4-way stretch, 180 g/m² weight and 150 cm width for swimwear, dancewear and stage costumes. Factory wholesale supply with custom color support.",
    title: "Plain Iridescent Laser Hot-Stamping Spandex 4-Way Stretch Fabric",
    mainImageUrl: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/1.jpg",
    mainImageWebp: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/1.webp",
    mainImageAlt:
      "Plain iridescent laser spandex 4-way stretch fabric with holographic laser finish",
    imageList: [
      {
        src: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/1.jpg",
        webp: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/1.webp",
        alt: "Plain iridescent laser spandex 4-way stretch fabric with holographic laser finish",
      },
      {
        src: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/2.jpg",
        webp: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/2.webp",
        alt: "Close-up texture of iridescent laser hot stamping spandex fabric 2",
      },
      {
        src: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/3.jpg",
        webp: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/3.webp",
        alt: "Close-up texture of iridescent laser hot stamping spandex fabric 3",
      },
      {
        src: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/4.jpg",
        webp: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/4.webp",
        alt: "Close-up texture of iridescent laser hot stamping spandex fabric 4",
      },
    ],
    galleryMainPath: "/images/products/plain-iridescent-laser-spandex-4-way-stretch/main/",
    galleryImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    detailImagePath:
      "/images/products/plain-iridescent-laser-spandex-4-way-stretch/detail/",
    video: null,
    shortIntro:
      "Plain iridescent laser hot‑stamping spandex fabric is engineered for garments that need real stretch performance. The 4‑way stretch spandex base stretches and recovers in every direction, while the plain laser foil surface delivers a clean, uniform iridescent shine.",
    fullDescription:
      "Our plain iridescent laser hot-stamping spandex fabric delivers uniform iridescent luster with excellent 4-way stretch-recovery. It is widely used for swimwear, dancewear and stage costumes.\n\nProduced in our self-owned factory, SGS and REACH testing can be arranged according to product and buyer requirements. Bulk custom colors are available. Free samples are offered; buyer covers international shipping cost, which will be deducted from bulk orders.",
    specs: {
      width: "150cm",
      weight: "180 g/m²",
      baseMaterial: "Polyester knitted base",
      thickness: "0.35‑0.4mm",
      moq: "100",
      leadTime: "1-3",
    },
    specTable: [
      { label: "Name", value: "Plain Iridescent Laser Hot-Stamping 4-Way Stretch Fabric" },
      { label: "Material", value: "100% Polyester knitted base" },
      { label: "Weight", value: "180 g/m²" },
      { label: "Width", value: "150cm" },
      { label: "Thickness", value: "0.35‑0.4mm" },
      { label: "Feature", value: "4-way stretch, iridescent laser foil finish" },
      { label: "Quality Standard", value: "China Textile Industry Standard (FZ)" },
      { label: "Usage", value: "Swimwear, dance wear, stage costumes, fashion apparel" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 Meters" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤500m; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "Available Customization", value: "backing options" },
      { label: "OEM / ODM", value: "Supported" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Western-style bodysuits",
      "Swimwear",
      "Stage garments",
      "Dancewear",
      "Fashion apparel",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "8 Stock Colors",
    colorCount: 8,
    tags: ["metallic", "hot-stamping", "spandex", "swimwear", "stage-costume"],
    availableColors: "8 stock colors, support custom color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom colors & custom base fabric",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The MOQ is 100m per color from stock. Custom colors start from higher quantities — contact us for a quotation.",
      },
      {
        question: "Can I get a sample before placing a bulk order?",
        answer:
          "Yes. Samples are free — you only bear the international shipping cost, which is deducted from your bulk order. Samples are ready within 3–7 working days.",
      },
      {
        question: "How does the foil hold up on a high-stretch base?",
        answer:
          "The foil finish is engineered to flex with the 4-way stretch base without cracking in normal wear. For demanding applications we recommend garment wash-testing on an approval sample first.",
      },
      {
        question: "What certifications are available?",
        answer:
          "The material is SGS and REACH testing can be arranged according to product and buyer requirements. Buyer-specific test reports can be arranged by project.",
      },
    ],
    skuImages: [],
    detailImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
  },
  {
    slug: "full-print-hot-stamping-spandex-milk-silk",
    metaTitle: "Full-Print Hot-Stamping Spandex Fabric | Wholesale Supplier",
    metaDesc:
      "Full-print hot-stamping spandex milk-silk fabric with 160 g/m² weight, 22 available colors and 4-way stretch for fashion garments, swimwear and stage costumes. Factory wholesale and OEM support.",
    title: "Full-Print Hot-Stamping Spandex Milk-Silk Fabric",
    mainImageUrl: "/images/hot01.jpg",
    mainImageWebp: "/images/hot01.webp",
    mainImageAlt:
      "Full-print hot-stamping spandex milk-silk fabric with soft hand-feel and 4-way stretch",
    imageList: [
      {
        src: "/images/hot01.jpg",
        webp: "/images/hot01.webp",
        alt: "Full-print hot-stamping spandex milk-silk fabric with soft hand-feel and 4-way stretch",
      },
    ],
    galleryMainPath: "/images/products/full-print-hot-stamping-spandex-milk-silk/main/",
    galleryImages: ["hot01.jpg"],
    detailImagePath: "/images/products/full-print-hot-stamping-spandex-milk-silk/application/product-detail/",
    video: null,
    shortIntro:
      "Full-print hot-stamping spandex milk-silk fabric pairs a soft milk-silk ground with an all-over foil print. The 4-way stretch base recovers well and the foil surface delivers a bright metallic shine that holds up through wear.",
    fullDescription:
      "Nixia Fabric brings you our full-print hot-stamping spandex milk-silk fabric — a stretchy base fabric finished with an all-over hot-stamping foil print. The milk-silk ground gives a soft, smooth hand-feel, while the foil surface delivers a bright metallic shine that holds up through wear.\n\nThe 4-way stretch construction recovers well after stretching, making it a practical choice for fitted fashion garments, swimwear and stage performance costumes. Manufactured in our own facility since 2013, with SGS and REACH testing support available according to product and buyer requirements, custom color matching and backing options are available for bulk orders.\n\nFree samples available — customer only bears international shipping cost, which will be deducted from your bulk order.",
    specs: {
      width: "150cm",
      weight: "160 g/m²",
      baseMaterial: "Milk-silk spandex, 4-way stretch",
      thickness: "0.35‑0.4mm",
      moq: "100",
      leadTime: "1-3",
    },
    specTable: [
      { label: "Product Type", value: "Full-print hot-stamping foil fabric" },
      { label: "Base Fabric", value: "Milk-silk spandex, 4-way stretch" },
      { label: "Weight", value: "160 g/m²" },
      { label: "Surface Finish", value: "All-over hot-stamping foil print" },
      { label: "Hand-feel", value: "Soft, smooth, elastic recovery" },
      { label: "MOQ", value: "100m per design" },
      { label: "Stock Status", value: "In-stock, ready to ship" },
      { label: "Sampling", value: "Free sample, 3–7 working days" },
      { label: "Customization", value: "Custom patterns, colors, width & backing on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 Meters" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤500m; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "Available Customization", value: "Custom patterns, colors, width & backing" },
      { label: "OEM / ODM", value: "Supported" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Fashion garments",
      "Swimwear",
      "Stage costumes",
      "Performance costumes",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "22 Stock Colors",
    colorCount: 22,
    tags: ["printed", "hot-stamping", "spandex", "swimwear", "stage-costume", "handbag"],
    availableColors: "22 stock colors, support custom color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom print patterns & custom foil colors",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The MOQ is 100m per design for stock designs. Custom printed patterns start from higher quantities — send us your artwork and we will quote the exact minimum.",
      },
      {
        question: "Can I get a sample before placing a bulk order?",
        answer:
          "Yes. Samples are free — you only bear the international shipping cost, which is deducted from your bulk order. Samples are ready within 3–7 working days.",
      },
      {
        question: "Can the print pattern and colors be customized?",
        answer:
          "Yes. As a factory with OEM/ODM capability, we develop custom patterns, foil colors and finishes. Send us your design or reference and we will confirm feasibility and pricing.",
      },
      {
        question: "Is the fabric certified for export markets?",
        answer:
          "The material is SGS and REACH testing can be arranged according to product and buyer requirements. Buyer-specific test reports (e.g. for swimwear applications) can be arranged by project.",
      },
    ],
    skuImages: [],
    detailImages: [],
  },
  {
    slug: "iridescent-laser-hot-stamping-stretch-ice-silk",
    metaTitle: "Iridescent Laser Stretch Ice-Silk Fabric | Wholesale Supplier",
    metaDesc:
      "Iridescent laser stretch ice-silk fabric with a shifting multi-color finish and elastic recovery for stage costumes, dancewear and backdrop decoration. Factory wholesale supply.",
    title: "iridescent-laser-hot-stamping-stretch-ice-silk",
    mainImageUrl: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.jpg",
    mainImageWebp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.webp",
    mainImageAlt:
      "Pink iridescent laser hot-stamping stretch ice-silk fabric with multi-color foil finish",
    imageList: [
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.jpg",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.webp",
        alt: "Pink iridescent laser hot-stamping stretch ice-silk fabric draped for product display",
      },
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/2.jpg",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/2.webp",
        alt: "Pink iridescent laser hot-stamping stretch ice-silk fabric gathered to show stretch and drape",
      },
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/3.jpg",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/3.webp",
        alt: "Close-up of pink iridescent laser foil finish on stretch ice-silk fabric",
      },
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/4.jpg",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/4.webp",
        alt: "Iridescent laser hot-stamping stretch ice-silk fabric texture in pink and purple tones",
      },
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/5.jpg",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/5.webp",
        alt: "Detailed view of the reflective surface and fine weave of iridescent stretch ice-silk fabric",
      },
    ],
    galleryMainPath: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/",
    galleryImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    detailImagePath: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/detail/",
    video: {
      src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/video/1.mp4",
      poster: "1.jpg",
    },
    shortIntro:
      "Iridescent laser hot-stamping stretch ice-silk fabric pairs a light, elastic ice-silk ground with a laser foil surface that shifts through multiple colors as light and viewing angle change. The gradient rainbow effect makes it a favorite for stage costumes and photo backdrops.",
    fullDescription:
      "Our iridescent laser hot-stamping stretch ice-silk fabric pairs a light, elastic ice-silk ground with a laser foil surface that shifts through multiple colors as light and viewing angle change. The gradient rainbow effect makes it a favorite for stage costumes and photo backdrops.\n\nThe stretch base drapes well and recovers after stretching, so it works for both fitted garments and decorative installations. Manufactured in-house since 2013; SGS and REACH testing can be arranged according to product and buyer requirements, with custom color matching available for bulk orders.\n\nFree samples available — customer only bears international shipping cost, which will be deducted from your bulk order.",
    specs: {
      width: "150cm",
      weight: "160 g/m²",
      baseMaterial: "Stretch ice-silk",
      thickness: "0.3‑0.35mm",
      moq: "100",
      leadTime: "1-3",
    },
    specTable: [
      { label: "Product Type", value: "Iridescent laser hot-stamping foil fabric" },
      { label: "Base Fabric", value: "Stretch ice-silk" },
      { label: "Surface Finish", value: "Laser foil, gradient multi-color iridescent" },
      { label: "Stretch", value: "Elastic with good recovery" },
      { label: "MOQ", value: "100m per color" },
      { label: "Stock Status", value: "In-stock, ready to ship" },
      { label: "Sampling", value: "Free sample, 3–7 working days" },
      { label: "Customization", value: "Custom foil colors, width & backing on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 Meters" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤500m; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "Available Customization", value: "Custom foil colors, width & backing" },
      { label: "OEM / ODM", value: "Supported" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Stage costumes",
      "Dancewear",
      "Backdrop decoration",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "Standard Color",
    colorCount: 1,
    tags: ["metallic", "gradient", "hot-stamping", "spandex", "stage-costume", "decoration"],
    availableColors: "1 standard color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom foil colors & custom width",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The MOQ is 100m per color from stock. Custom iridescent effects start from higher quantities — contact us for a quotation based on your requirement.",
      },
      {
        question: "Can I get a sample before placing a bulk order?",
        answer:
          "Yes. Samples are free — you only bear the international shipping cost, which is deducted from your bulk order. Samples are ready within 3–7 working days.",
      },
      {
        question: "How does the iridescent effect behave in production?",
        answer:
          "The laser foil shifts color with light and viewing angle. We recommend approving a physical sample before bulk production, since photos cannot fully reproduce the effect.",
      },
      {
        question: "Is the fabric certified for export markets?",
        answer:
          "The material is SGS and REACH testing can be arranged according to product and buyer requirements. Buyer-specific test reports can be arranged by project.",
      },
    ],
    skuImages: [],
    detailImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
  },
  {
    slug: "non-woven-glitter-fabric",
    metaTitle: "Non-Woven Glitter Fabric | Wholesale Manufacturer",
    metaDesc:
      "Non-woven glitter fabric with dense sparkle, clean-cut edges and a stable backing for holiday decoration, stage props, banners and performance costumes. Factory wholesale supply.",
    title: "Non-Woven Glitter Fabric",
    mainImageUrl: "/images/hot03.jpg",
    mainImageWebp: "/images/hot03.webp",
    mainImageAlt: "Sparkling non-woven glitter fabric with dense sparkle coating",
    imageList: [
      {
        src: "/images/hot03.jpg",
        webp: "/images/hot03.webp",
        alt: "Sparkling non-woven glitter fabric with dense sparkle coating",
      },
    ],
    galleryMainPath: "/images/products/non-woven-glitter-fabric/main/",
    galleryImages: ["hot03.jpg"],
    detailImagePath: "/images/products/non-woven-glitter-fabric/application/product-detail/",
    video: null,
    shortIntro:
      "Non-woven glitter fabric carries a dense, sparkling glitter surface on a stable non-woven backing. It is the cost-effective workhorse of the glitter range — bright, uniform sparkle at a friendly price point for volume decoration projects.",
    fullDescription:
      "Our non-woven glitter fabric carries a dense, sparkling glitter surface on a stable non-woven backing. It is the cost-effective workhorse of the glitter range — bright, uniform sparkle at a friendly price point for volume decoration projects.\n\nThe non-woven base cuts cleanly without fraying, which makes it especially practical for holiday decoration, stage props, banners and performance costumes. Manufactured in our own facility since 2013; SGS and REACH testing can be arranged according to product and buyer requirements, with custom colors available for bulk orders.\n\nFree samples available — customer only bears international shipping cost, which will be deducted from your bulk order.",
    specs: {
      width: "140cm",
      weight: "150 g/m²",
      baseMaterial: "Non-woven backing, cut-clean",
      thickness: "0.5mm",
      moq: "200",
      leadTime: "3-7",
    },
    specTable: [
      { label: "Product Type", value: "Glitter-coated non-woven fabric" },
      { label: "Base Fabric", value: "Non-woven backing, cut-clean without fraying" },
      { label: "Surface Finish", value: "Dense glitter coating, uniform sparkle" },
      { label: "MOQ", value: "200m per color" },
      { label: "Stock Status", value: "In-stock, ready to ship" },
      { label: "Sampling", value: "Free sample, 3–7 working days" },
      { label: "Customization", value: "Custom glitter colors & width on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "200 Meters" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "3-7 working days after payment and stock confirmation for orders ≤500m; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "Available Customization", value: "Custom glitter colors & width" },
      { label: "OEM / ODM", value: "Supported" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Holiday decoration",
      "Stage props",
      "Banners",
      "Performance costumes",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "Standard Color",
    colorCount: 1,
    tags: ["glitter", "decoration", "stage-costume", "non-woven"],
    availableColors: "1 standard color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom glitter colors & custom width",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The MOQ is 200m per color from stock. Larger decoration projects benefit from tiered pricing — send us your required quantity for a quotation.",
      },
      {
        question: "Can I get a sample before placing a bulk order?",
        answer:
          "Yes. Samples are free — you only bear the international shipping cost, which is deducted from your bulk order. Samples are ready within 3–7 working days.",
      },
      {
        question: "Does the glitter shed during cutting or use?",
        answer:
          "The glitter coating is bonded to the non-woven base for good adhesion, and the base cuts cleanly without fraying. We still recommend approving a sample for your specific processing method.",
      },
      {
        question: "What certifications are available?",
        answer:
          "The material is SGS and REACH testing can be arranged according to product and buyer requirements. Buyer-specific test reports can be arranged by project.",
      },
    ],
    skuImages: [],
    detailImages: [],
  },
  {
    slug: "iridescent-gradient-laser-ice-silk",
    metaTitle: "Iridescent Gradient Laser Fabric | Wholesale Supplier",
    metaDesc:
      "Iridescent gradient laser ice-silk fabric with a smooth color-flow finish on a stretch base for fashion apparel, stage costumes and backdrops. Factory wholesale and custom color support.",
    title: "iridescent-gradient-laser-ice-silk",
    mainImageUrl: "/images/hot04.jpg",
    mainImageWebp: "/images/hot04.webp",
    mainImageAlt:
      "Iridescent gradient laser hot-stamping ice-silk fabric with smooth color-flow finish",
    imageList: [
      {
        src: "/images/hot04.jpg",
        webp: "/images/hot04.webp",
        alt: "Iridescent gradient laser hot-stamping ice-silk fabric with smooth color-flow finish",
      },
    ],
    galleryMainPath: "/images/products/iridescent-gradient-laser-ice-silk/main/",
    galleryImages: ["hot04.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
    detailImagePath: "/images/products/iridescent-gradient-laser-ice-silk/detail/",
    video: { src: "/images/products/iridescent-gradient-laser-ice-silk/video/1.mp4", poster: "hot04.jpg" },
    shortIntro:
      "Iridescent gradient laser hot-stamping ice-silk fabric features a smooth gradient that flows across the width of the fabric, shifting through multiple colors under light. The stretch ice-silk base keeps it comfortable against the skin and easy to sew.",
    fullDescription:
      "The iridescent gradient laser hot-stamping ice-silk fabric features a smooth gradient that flows across the width of the fabric, shifting through multiple colors under light. The stretch ice-silk base keeps it comfortable against the skin and easy to sew.\n\nThe flowing gradient makes it popular for fashion apparel where a single piece of fabric carries a full color story, as well as stage costumes and backdrop decoration. Manufactured in our own facility since 2013; SGS and REACH testing can be arranged according to product and buyer requirements, custom gradient directions and colors available on bulk orders.\n\nFree samples available — customer only bears international shipping cost, which will be deducted from your bulk order.",
    specs: {
      width: "150cm",
      weight: "160 g/m²",
      baseMaterial: "Stretch ice-silk",
      thickness: "0.3‑0.35mm",
      moq: "100",
      leadTime: "1-3",
    },
    specTable: [
      { label: "Product Type", value: "Gradient laser hot-stamping foil fabric" },
      { label: "Base Fabric", value: "Stretch ice-silk" },
      { label: "Surface Finish", value: "Gradient multi-color iridescent laser foil" },
      { label: "Stretch", value: "Elastic with good recovery" },
      { label: "MOQ", value: "100m per colorway" },
      { label: "Stock Status", value: "In-stock, ready to ship" },
      { label: "Sampling", value: "Free sample, 3–7 working days" },
      { label: "Customization", value: "Custom gradient colors & direction on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 Meters" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤500m; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "Available Customization", value: "Custom gradient colors & direction" },
      { label: "OEM / ODM", value: "Supported" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Fashion apparel",
      "Stage costumes",
      "Backdrop decoration",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "Standard Color",
    colorCount: 1,
    tags: ["gradient", "metallic", "hot-stamping", "spandex", "stage-costume", "decoration"],
    availableColors: "1 standard color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom gradient colors & direction",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The MOQ is 100m per colorway from stock. Custom gradient color schemes start from higher quantities — contact us for details.",
      },
      {
        question: "Can I get a sample before placing a bulk order?",
        answer:
          "Yes. Samples are free — you only bear the international shipping cost, which is deducted from your bulk order. Samples are ready within 3–7 working days.",
      },
      {
        question: "Can the gradient direction or colors be customized?",
        answer:
          "Yes, on bulk orders we can develop custom gradient schemes and directions. A physical approval sample is always provided before mass production.",
      },
      {
        question: "What certifications are available?",
        answer:
          "The material is SGS and REACH testing can be arranged according to product and buyer requirements. Buyer-specific test reports can be arranged by project.",
      },
    ],
    skuImages: [],
    detailImages: ["0.jpg", "00.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"],
  },
  {
    slug: "rainbow-gradient-glitter-synthetic-leather",
    metaTitle: "Rainbow Gradient Glitter Synthetic Leather | Wholesale Supplier",
    metaDesc:
      "Rainbow gradient glitter synthetic leather with a reflective finish and structured base for bags, footwear and book-covering materials. Factory wholesale supply with custom options.",
    title: "Rainbow Gradient Glitter Synthetic Leather Fabric",
    mainImageUrl: "/images/hot06.jpg",
    mainImageWebp: "/images/hot06.webp",
    mainImageAlt:
      "Rainbow gradient glitter synthetic leather fabric with reflective finish",
    imageList: [
      {
        src: "/images/hot06.jpg",
        webp: "/images/hot06.webp",
        alt: "Rainbow gradient glitter synthetic leather fabric with reflective finish",
      },
    ],
    galleryMainPath: "/images/products/rainbow-gradient-glitter-synthetic-leather/main/",
    galleryImages: ["hot06.jpg"],
    detailImagePath: "/images/products/rainbow-gradient-glitter-synthetic-leather/application/product-detail/",
    video: null,
    shortIntro:
      "Rainbow gradient glitter synthetic leather combines a reflective glitter surface with a gradient of colors on a durable synthetic leather base. Unlike stretch fabrics, the leather base gives structure and durability, holding its shape in bags, footwear and book covers.",
    fullDescription:
      "The rainbow gradient glitter synthetic leather combines a reflective glitter surface with a gradient of colors on a durable synthetic leather base. Unlike stretch fabrics, the leather base gives structure and durability, holding its shape in bags, footwear and book covers.\n\nThe rainbow gradient moves across the surface for a premium look that photographs well — popular with bag, footwear and stationery buyers. Manufactured in our own facility since 2013; SGS and REACH testing can be arranged according to product and buyer requirements, with custom colors available for bulk orders.\n\nFree samples available — customer only bears international shipping cost, which will be deducted from your bulk order.",
    specs: {
      width: "137cm",
      weight: "170 g/m²",
      baseMaterial: "Synthetic leather, structured & durable",
      thickness: "0.6‑0.8mm",
      moq: "200",
      leadTime: "3-7",
    },
    specTable: [
      { label: "Product Type", value: "Rainbow gradient glitter synthetic leather" },
      { label: "Base Fabric", value: "Synthetic leather, structured & durable" },
      { label: "Surface Finish", value: "Reflective glitter, rainbow gradient" },
      { label: "MOQ", value: "200m per color" },
      { label: "Lead Time", value: "3–7 days" },
      { label: "Sampling", value: "Free sample, 3–7 working days" },
      { label: "Customization", value: "Custom gradient colors, thickness & backing on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "200 Meters" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "3-7 working days after payment and stock confirmation for orders ≤500m; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "Available Customization", value: "Custom gradient colors, thickness & backing" },
      { label: "OEM / ODM", value: "Supported" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: ["Bags", "Footwear", "Book-covering materials", "Stationery"],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "Standard Color",
    colorCount: 1,
    tags: ["gradient", "glitter", "synthetic-leather", "handbag", "footwear", "decoration"],
    availableColors: "1 standard color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom gradient colors, thickness & backing",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this material?",
        answer:
          "The MOQ is 200m per color, with a lead time of 3–7 days. Volume orders benefit from tiered pricing — send us your quantity for a quotation.",
      },
      {
        question: "Can I get a sample before placing a bulk order?",
        answer:
          "Yes. Samples are free — you only bear the international shipping cost, which is deducted from your bulk order. Samples are ready within 3–7 working days.",
      },
      {
        question: "Is it suitable for footwear and structured bags?",
        answer:
          "Yes. The synthetic leather base provides structure and abrasion resistance for footwear uppers, bags and book covers, unlike stretch glitter fabrics.",
      },
      {
        question: "What certifications are available?",
        answer:
          "The material is SGS and REACH testing can be arranged according to product and buyer requirements. Buyer-specific test reports (e.g. abrasion for footwear) can be arranged by project.",
      },
    ],
    skuImages: [],
    detailImages: [],
  },
  {
    slug: "coarse-glitter-pu-hot-stamping-fabric-cma-certified",
    metaTitle: "Coarse Glitter PU Hot Stamping Fabric | CMA Certified",
    metaDesc:
      "Coarse glitter PU hot stamping fabric with a bold reflective surface for bows, bags, footwear, phone cases and decorative accessories. CMA-certified documentation available for buyer review.",
    title: "Coarse Glitter PU Hot Stamping Fabric – CMA Certified",
    mainImageUrl:
      "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-1.jpg",
    mainImageWebp:
      "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-1.webp",
    mainImageAlt:
      "Coarse silver glitter PU hot stamping fabric with reflective sequin-like surface",
    imageList: [
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-1.jpg",
        webp: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-1.webp",
        alt: "Coarse silver glitter PU hot stamping fabric with reflective sequin-like surface",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-2.jpg",
        webp: null,
        alt: "Coarse glitter PU hot stamping fabric sample",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-3.jpg",
        webp: null,
        alt: "Coarse glitter PU hot stamping fabric surface detail",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-5.jpg",
        webp: null,
        alt: "Coarse glitter PU hot stamping fabric color and texture",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-6.jpg",
        webp: null,
        alt: "Coarse glitter PU hot stamping fabric close-up",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-7.jpg",
        webp: null,
        alt: "Coarse glitter PU hot stamping fabric reflective finish",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-8.jpg",
        webp: null,
        alt: "Coarse glitter PU hot stamping fabric for accessory production",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-9.jpg",
        webp: null,
        alt: "Coarse glitter PU hot stamping fabric in roll form",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/主图-10.jpg",
        webp: null,
        alt: "Coarse glitter PU hot stamping fabric product display",
      },
    ],
    galleryMainPath:
      "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/main/",
    galleryImages: [
      "主图-1.jpg",
      "主图-2.jpg",
      "主图-3.jpg",
      "主图-5.jpg",
      "主图-6.jpg",
      "主图-7.jpg",
      "主图-8.jpg",
      "主图-9.jpg",
      "主图-10.jpg",
    ],
    detailImagePath:
      "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/detail/",
    video: {
      src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/video/视频-1.mp4",
      poster: "主图-1.jpg",
    },
    shortIntro:
      "Coarse glitter PU hot stamping fabric combines a structured PU base with a bold, reflective glitter surface. Its high-impact texture is designed for fashion accessories, footwear and decorative applications.",
    fullDescription:
      "Coarse glitter PU hot stamping fabric features a dimensional reflective surface with a structured PU backing. The coarse glitter effect creates strong visual impact under showroom and stage lighting, making it suitable for accessory and decorative product development.\n\nTypical applications include bows, bag panels, footwear uppers, phone cases and other fashion accessories. CMA-certified documentation is available for buyer review, while samples, color selection and project-specific testing can be arranged according to product and buyer requirements.\n\nFree samples available — customer only bears international shipping cost, which will be deducted from your bulk order.",
    specs: {
      width: "137cm",
      weight: "200 g/m²",
      baseMaterial: "PU synthetic leather",
      thickness: "0.8mm",
      moq: "200",
      leadTime: "3-7",
    },
    specTable: [
      { label: "Product Type", value: "Coarse glitter PU hot stamping fabric" },
      { label: "Base Material", value: "PU synthetic leather" },
      { label: "Surface Finish", value: "Coarse glitter hot stamping finish" },
      { label: "Structure", value: "Structured backing for accessory and decorative applications" },
      { label: "Width", value: "137cm" },
      { label: "Weight", value: "200 g/m²" },
      { label: "Thickness", value: "0.8mm" },
      { label: "CMA Documentation", value: "Available for buyer review" },
    ],
    b2bTable: [
      { label: "MOQ", value: "200 Meters" },
      { label: "Supply type", value: "Stock and production supply to be confirmed" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "Quoted after stock and production requirements are confirmed" },
      { label: "Available Colors", value: "7 sample colors shown, support custom color" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "Available Customization", value: "Custom colors, backing and packaging according to project requirements" },
      { label: "OEM / ODM", value: "Supported" },
      { label: "Testing & Compliance", value: "CMA-certified documentation available; additional testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Hair bows",
      "Bag panels",
      "Footwear uppers",
      "Phone cases",
      "Fashion accessories",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "CMA Certified",
    colorCount: 7,
    tags: ["glitter", "pu", "hot-stamping", "synthetic-leather", "handbag", "footwear", "decoration"],
    availableColors: "7 sample colors shown, support custom color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom colors, backing & packaging",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this coarse glitter PU fabric?",
        answer:
          "The reference MOQ is 200m. The final minimum depends on the selected color, stock status and customization requirements.",
      },
      {
        question: "Can I receive a sample before bulk production?",
        answer:
          "Yes. Samples are free — you only bear the international shipping cost, which is deducted from your bulk order. Samples are ready within 3–7 working days.",
      },
      {
        question: "What products can use this coarse glitter PU fabric?",
        answer:
          "It is suitable for hair bows, bag panels, footwear uppers, phone cases and other fashion accessories or decorative products.",
      },
      {
        question: "What compliance documents are available?",
        answer:
          "CMA-certified documentation is available for buyer review. Additional SGS, REACH or project-specific testing can be arranged according to product and buyer requirements.",
      },
    ],
    skuImages: [
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/sku/sku-1.jpg",
        alt: "Coarse glitter PU hot stamping fabric sample color 1",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/sku/sku-2.jpg",
        alt: "Coarse glitter PU hot stamping fabric silver sample color",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/sku/sku-3.jpg",
        alt: "Coarse glitter PU hot stamping fabric black sample color",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/sku/sku-4.jpg",
        alt: "Coarse glitter PU hot stamping fabric laser silver sample color",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/sku/sku-5.jpg",
        alt: "Coarse glitter PU hot stamping fabric ceramic white sample color",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/sku/sku-6.jpg",
        alt: "Coarse glitter PU hot stamping fabric gold sample color",
      },
      {
        src: "/images/products/coarse-glitter-pu-hot-stamping-fabric-cma-certified/sku/sku-7.jpg",
        alt: "Coarse glitter PU hot stamping fabric mixed white sample color",
      },
    ],
    detailImages: [
      "详情-4.jpg",
      "详情-6.jpg",
      "详情-8.jpg",
      "详情-9.jpg",
      "详情-10.jpg",
      "详情-11.jpg",
      "详情-12.jpg",
      "详情-13.jpg",
      "详情-14.jpg",
      "详情-15.jpg",
      "详情-16.jpg",
      "详情-17.jpg",
    ],
  },
  {
    slug: "sparkle-glitter-surface-solid-leather-fabric",
    metaTitle: "Sparkle Glitter Surface Solid Leather Fabric | Wholesale Supplier",
    metaDesc:
      "Sparkle glitter surface solid leather fabric with a 200 g/m² weight, 140cm width and about 0.6mm thickness for decoration, notebook covers, DIY materials, bags, shoes and hair accessories. Factory wholesale supply.",
    title: "Sparkle Glitter Surface Solid Leather Fabric",
    mainImageUrl: "/images/products/sparkle-glitter-surface-solid-leather-fabric/main/主图-1.jpg",
    mainImageWebp: "/images/products/sparkle-glitter-surface-solid-leather-fabric/main/主图-1.webp",
    mainImageAlt:
      "Sparkle glitter surface solid leather fabric with multiple colorful rolls",
    imageList: [
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/main/主图-1.jpg",
        webp: "/images/products/sparkle-glitter-surface-solid-leather-fabric/main/主图-1.webp",
        alt: "Sparkle glitter surface solid leather fabric with multiple colorful rolls",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/main/主图-2.jpg",
        webp: null,
        alt: "Sparkle glitter surface solid leather fabric roll display",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/main/主图-3.jpg",
        webp: null,
        alt: "Sparkle glitter surface solid leather fabric in assorted colors",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/main/主图-4.jpg",
        webp: null,
        alt: "Sparkle glitter surface solid leather fabric color sample display",
      },
    ],
    galleryMainPath: "/images/products/sparkle-glitter-surface-solid-leather-fabric/main/",
    galleryImages: ["主图-1.jpg", "主图-2.jpg", "主图-3.jpg", "主图-4.jpg"],
    detailImagePath: "/images/products/sparkle-glitter-surface-solid-leather-fabric/detail/",
    video: null,
    shortIntro:
      "Sparkle glitter surface solid leather fabric combines a bright glitter finish with a PU and PET leather base. It is suitable for decorative and craft applications where a rich sparkle effect is needed.",
    fullDescription:
      "Sparkle glitter surface solid leather fabric combines a bright glitter finish with a PU and PET leather base. The dusting powder technology creates a vivid sparkle effect that works well for decorative projects and fashion-accessory development.\n\nTypical uses include notebook covers, DIY materials, bags, shoes, hair accessories, glitter wallpaper and other decorative applications. Free samples are available, and bulk customization can be arranged according to product and buyer requirements.\n\nFree samples available — customer only bears international shipping cost, which will be deducted from your bulk order.",
    specs: {
      width: "140cm",
      weight: "200 g/m²",
      baseMaterial: "PET + PU leather",
      thickness: "about 0.6mm",
      moq: "100",
      leadTime: "3-7",
    },
    specTable: [
      { label: "Product Type", value: "Sparkle glitter surface solid leather fabric" },
      { label: "Texture", value: "PET + PU leather" },
      { label: "Technology", value: "Dusting powder" },
      { label: "Width", value: "140cm" },
      { label: "Weight", value: "200 g/m²" },
      { label: "Thickness", value: "about 0.6mm" },
      { label: "MOQ", value: "100m" },
      { label: "Usage", value: "Decoration, notebook cover, DIY material, bags, shoes, hair accessories, glitter wallpaper, book cover" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 Meters" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "3-7 working days after payment and stock confirmation for orders ≤500m; 7-15 working days when production is required" },
      { label: "Available Colors", value: "17 sample colors shown, support custom color" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "Available Customization", value: "Custom colors, backing and packaging according to project requirements" },
      { label: "OEM / ODM", value: "Supported" },
      { label: "Testing & Compliance", value: "Testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Decoration",
      "Notebook covers",
      "DIY materials",
      "Bags",
      "Shoes",
      "Hair accessories",
      "Glitter wallpaper",
      "Book covers",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "17 Stock Colors",
    colorCount: 17,
    tags: ["glitter", "solid-leather", "pu", "pet", "decoration", "bags", "shoes"],
    availableColors: "17 stock colors, support custom color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom colors, backing & packaging",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this glitter leather fabric?",
        answer:
          "The MOQ is 100m. Final quantity can vary by color, stock status and customization requirements.",
      },
      {
        question: "Can I get a sample before placing an order?",
        answer:
          "Yes. Samples are free — you only bear the international shipping cost, which is deducted from your bulk order. Samples are ready within 3–7 working days.",
      },
      {
        question: "What can this fabric be used for?",
        answer:
          "It is suitable for decoration, notebook covers, DIY materials, bags, shoes, hair accessories, glitter wallpaper and book covers.",
      },
      {
        question: "Can colors be customized?",
        answer:
          "Yes. We can support custom colors and project-specific backing or packaging requirements according to the buyer's needs.",
      },
      {
        question: "How can I place an order and make payment?",
        answer:
          "Please send the product item, color, quantity and destination market first. We will confirm the quotation and issue a proforma invoice for your approval before payment and production arrangement.",
      },
      {
        question: "What is the delivery time?",
        answer:
          "Stock orders are usually ready in about 3 days after payment confirmation. Mass orders are typically 7–15 days, and special colors or larger orders may take longer according to production schedule.",
      },
    ],
    skuImages: [
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-1-1.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 1",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-2-2.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 2",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-3-3.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 3",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-4-4.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 4",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-5-5.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 5",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-6-6.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 6",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-7-7.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 7",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-8-8.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 8",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-9-9.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 9",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-10-10.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 10",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-11-11.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 11",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-12-12.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 12",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-13-14.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 13",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-14-15.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 14",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-15-16.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 15",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-16-17.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 16",
      },
      {
        src: "/images/products/sparkle-glitter-surface-solid-leather-fabric/sku/sku-17-18.jpg",
        alt: "Sparkle glitter surface solid leather fabric color sample 17",
      },
    ],
    detailImages: [
      "详情-1.jpg",
      "详情-2.jpg",
      "详情-3.jpg",
    ],
  },
];
