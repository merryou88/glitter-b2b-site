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
 *   3. Only add products that match the current performance fabric positioning:
 *      foil, laser foil, iridescent, stretch, stage costume, dancewear,
 *      performance wear, party apparel, props, backdrops or event decoration. Do not add glitter
 *      leather, PU accessory, shoes/bags/crafts or other off-position products.
 *   4. Write US-buyer SEO before saving:
 *      - metaTitle = one specific buyer search term + " | Nixia Fabric"
 *      - title/H1 starts with the product material/effect, not an internal process
 *      - metaDesc includes application, wholesale/supplier intent, samples/custom
 *        support, and key MOQ/stock facts when confirmed
 *      - keep hot-stamping as a supporting process term, not the primary phrase
 *      - include US-friendly units beside metric units, e.g. 150 cm / 59 in and
 *        100 m / 109 yd
 *   5. Save. The static site will automatically generate the new page at
 *      /products/{slug} and add it to the catalog listing — no page file needed.
 */

export const allProducts = [
  {
    slug: "rainbow-stripe-foil-4-way-stretch-fabric",
    metaTitle: "Rainbow Stripe Foil 4-Way Stretch Fabric | Wholesale Supplier",
    metaDesc:
      "Rainbow stripe foil fabric with a flexible 4-way stretch base for stage costumes, dancewear, performance outfits and carnival costumes. Factory wholesale supply with OEM/ODM support, 100 m / 109 yd MOQ and sample details confirmed by project.",
    title: "Rainbow Stripe Foil 4-Way Stretch Fabric for Stage Costumes",
    sku: "H2013060102",
    mainImageUrl: "/images/products/H2013060102/main/a1.webp",
    mainImageWebp: "/images/products/H2013060102/main/a1.webp",
    mainImageAlt:
      "Rainbow stripe foil 4-way stretch fabric for stage costumes and performance garments",
    imageList: [
      {
        src: "/images/products/H2013060102/main/a1.webp",
        webp: "/images/products/H2013060102/main/a1.webp",
        alt: "Rainbow stripe foil 4-way stretch fabric main view",
      },
      {
        src: "/images/products/H2013060102/main/a2.webp",
        webp: "/images/products/H2013060102/main/a2.webp",
        alt: "Rainbow stripe foil fabric draped for costume production",
      },
      {
        src: "/images/products/H2013060102/main/a3.webp",
        webp: "/images/products/H2013060102/main/a3.webp",
        alt: "Rainbow stripe foil fabric surface and stretch appearance",
      },
      {
        src: "/images/products/H2013060102/main/a4.webp",
        webp: "/images/products/H2013060102/main/a4.webp",
        alt: "Rainbow stripe foil 4-way stretch fabric surface detail",
      },
      {
        src: "/images/products/H2013060102/main/a5.webp",
        webp: "/images/products/H2013060102/main/a5.webp",
        alt: "Rainbow stripe foil fabric close-up for performance garments",
      },
    ],
    galleryMainPath: "/images/products/H2013060102/main/",
    galleryImages: ["a1.webp", "a2.webp", "a3.webp", "a4.webp", "a5.webp"],
    detailImagePath: "/images/products/H2013060102/detail/",
    video: null,
    shortIntro:
      "Rainbow stripe foil fabric with a flexible 4-way stretch base for colorful stage costumes and performance garments.",
    fullDescription:
      "Rainbow stripe foil fabric with a flexible 4-way stretch base for colorful stage costumes and performance garments. Factory wholesale supply with OEM/ODM support for buyers and apparel manufacturers.",
    specs: {
      width: "150 cm / 59 in",
      weight: "180 GSM",
      baseMaterial: "95% Polyester 5% Spandex",
      thickness: "",
      moq: "100 m / 109 yd",
      leadTime: "To be confirmed",
    },
    specTable: [
      { label: "Product Type", value: "Rainbow Stripe Foil 4-Way Stretch Fabric" },
      { label: "Surface Effect", value: "Rainbow stripe foil; full-print effect" },
      { label: "Base Fabric", value: "95% Polyester 5% Spandex" },
      { label: "Stretch", value: "4-Way Stretch" },
      { label: "Width", value: "150 cm / 59 in" },
      { label: "Weight", value: "180 GSM" },
      { label: "Color", value: "2 colors available; custom colors on request" },
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Density", value: "80T" },
      { label: "Yarn Count", value: "300D*10S" },
      { label: "Finishing", value: "Hot-stamping foil" },
      { label: "Typical Applications", value: "Stage costumes, dancewear, performance outfits, carnival costumes" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "Factory wholesale supply with OEM/ODM support" },
      { label: "Sample", value: "Availability, preparation time and shipping to be confirmed by project" },
      { label: "Bulk Lead time", value: "To be confirmed according to order quantity and production requirements" },
      { label: "Available Colors", value: "2 colors available; custom colors on request" },
      { label: "OEM / ODM", value: "OEM/ODM support; custom color details to be confirmed" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "To be confirmed in quotation" },
      { label: "Trade Terms", value: "To be confirmed in quotation" },
    ],
    applications: [
      "Stage Costumes",
      "Dancewear",
      "Performance Outfits",
      "Carnival Costumes",
    ],
    inStock: false,
    stockStatus: "Made to Order",
    badge: "2 colors",
    colorCount: 2,
    tags: ["rainbow-stripe", "foil", "spandex", "4-way-stretch", "stage-costume", "dancewear", "performance-outfit", "carnival-costume"],
    availableColors: "2 colors available; custom colors on request",
    sampleNote: "Sample availability, preparation time and shipping to be confirmed by project",
    customizationNote: "OEM/ODM support; custom color details to be confirmed",
    packaging: "To be confirmed in quotation",
    tradeTerms: "To be confirmed in quotation",
    heroHighlights: [
      "Rainbow Stripe Foil",
      "Full-Print Effect",
      "4-Way Stretch",
      "150 cm / 59 in Width",
      "180 GSM Weight",
      "MOQ 100 m / 109 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Rainbow Stripe Surface",
        desc: "A colorful stripe effect creates a strong visual direction for stage and performance garment designs.",
      },
      {
        title: "Full-Print Foil Effect",
        desc: "The foil surface provides a continuous reflective appearance across the fabric.",
      },
      {
        title: "4-Way Stretch",
        desc: "The flexible construction supports movement-focused performance garments and fitted costume designs.",
      },
      {
        title: "Polyester-Spandex Base",
        desc: "The confirmed 95% polyester and 5% spandex base combines a stable textile base with stretch.",
      },
      {
        title: "Two Color Options",
        desc: "Two colors are listed in the source data, with custom colors available on request.",
      },
      {
        title: "OEM/ODM Support",
        desc: "Factory wholesale and OEM/ODM support can be discussed for qualified buyer projects.",
      },
    ],
    valueStory: {
      title: "Why Choose This Rainbow Stripe Foil Fabric?",
      body: "This rainbow stripe foil fabric combines a full-print visual effect with a 4-way stretch base, giving stage costume and performance garment buyers a colorful surface direction for movement-focused designs.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Stage Costumes",
        desc: "Rainbow stripe foil creates a high-visibility surface for stage costume production.",
      },
      {
        title: "Dancewear",
        desc: "4-way stretch supports dancewear designs that require movement and visual impact.",
      },
      {
        title: "Performance Outfits",
        desc: "The full-print foil effect gives performance garments a continuous colorful finish.",
      },
      {
        title: "Carnival Costumes",
        desc: "Colorful stripes suit carnival and event costume collections.",
      },
    ],
    stockDevelopment: [
      {
        title: "Factory Wholesale Supply",
        desc: "Wholesale supply is available for buyers and apparel manufacturers, subject to project confirmation.",
      },
      {
        title: "OEM/ODM Support",
        desc: "OEM/ODM and custom color requirements can be reviewed before quotation.",
      },
    ],
    sampleCta: {
      title: "Need Rainbow Stripe Foil Fabric?",
      body: "Request a project review to confirm sample availability, color options and the surface effect before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a project review to confirm sample availability, color options and the surface effect before production.",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer: "The confirmed MOQ is 100 m / 109 yd.",
      },
      {
        question: "Does this fabric have 4-way stretch?",
        answer: "Yes. The source data confirms this is a 4-way stretch fabric.",
      },
      {
        question: "How many colors are available?",
        answer: "The source data lists 2 colors, with custom colors available on request.",
      },
      {
        question: "What applications is this fabric suitable for?",
        answer: "Recommended applications include stage costumes, dancewear, performance outfits and carnival costumes.",
      },
    ],
    skuImages: [],
    detailImages: ["x1.webp", "x2.webp", "x3.webp", "x4.webp", "x5.webp", "x6.webp", "x7.webp"],
  },
  {
    slug: "plain-iridescent-laser-spandex-4-way-stretch",
    metaTitle: "Iridescent Spandex Fabric | 4-Way Stretch Foil Supplier",
    metaDesc:
      "Iridescent spandex fabric with laser foil finish and 4-way stretch for dancewear, stage costumes and performance wear. Wholesale samples, custom support and 100 m / 109 yd MOQ.",
    title: "Iridescent Spandex Laser Foil 4-Way Stretch Fabric",
    sku: "H2013090102",
    mainImageUrl: "/images/products/H2013090102/main/1.webp",
    mainImageWebp: "/images/products/H2013090102/main/1.webp",
    mainImageAlt:
      "Iridescent laser 4-way stretch fabric for stage costumes and dancewear",
    imageList: [
      {
        src: "/images/products/H2013090102/main/1.webp",
        webp: "/images/products/H2013090102/main/1.webp",
        alt: "Iridescent laser 4-way stretch fabric for stage costumes and dancewear",
      },
      {
        src: "/images/products/H2013090102/main/2.webp",
        webp: "/images/products/H2013090102/main/2.webp",
        alt: "Close-up of iridescent laser 4-way stretch fabric surface",
      },
      {
        src: "/images/products/H2013090102/main/3.webp",
        webp: "/images/products/H2013090102/main/3.webp",
        alt: "Close-up of reflective iridescent laser foil stretch fabric surface",
      },
      {
        src: "/images/products/H2013090102/main/4.webp",
        webp: "/images/products/H2013090102/main/4.webp",
        alt: "Close-up of iridescent laser hot-stamping stretch fabric texture",
      },
    ],
    galleryMainPath: "/images/products/H2013090102/main/",
    galleryImages: ["1.webp", "2.webp", "3.webp", "4.webp"],
    detailImagePath:
      "/images/products/H2013090102/detail/",
    video: null,
    shortIntro:
      "Iridescent spandex fabric with a laser foil finish on a flexible 4-way stretch base, designed for stage costumes, dancewear and fitted performance outfits.",
    fullDescription:
      "This iridescent spandex stretch fabric combines a reflective laser foil surface with a flexible 4-way stretch base. It is designed for fitted performance garments where visual impact and fabric movement both matter, including dancewear, stage costumes and performance outfits.",
    specs: {
      width: "150 cm / 59 in",
      weight: "180 GSM",
      baseMaterial: "Spandex / stretch fabric",
      thickness: "0.35–0.40 mm",
      moq: "100",
      leadTime: "1-3",
    },
    specTable: [
      { label: "Name", value: "Iridescent Spandex Laser Foil 4-Way Stretch Fabric" },
      { label: "Material", value: "Spandex / stretch fabric" },
      { label: "Surface", value: "Iridescent laser hot-stamping" },
      { label: "Width", value: "150 cm / 59 in" },
      { label: "Weight", value: "180 GSM" },
      { label: "Thickness", value: "0.35–0.40 mm" },
      { label: "Stretch", value: "4-way stretch" },
      { label: "Color", value: "One standard color" },
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Sample", value: "Available" },
      { label: "Usage", value: "Dancewear, stage costumes, performance outfits" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤ 500 m / 547 yd; 7-15 working days when production is required" },
      { label: "OEM / ODM", value: "Custom color, width, new fabric development & private label available" },
      { label: "Testing & Compliance", value: "SGS / REACH on request" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Dancewear",
      "Stage costumes",
      "Performance outfits",
      "Festival & carnival costumes",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "1 standard color",
    colorCount: 1,
    tags: ["metallic", "hot-stamping", "spandex", "dancewear", "stage-costume", "performance-wear", "party-wear"],
    availableColors: "1 standard color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "OEM / ODM available for bulk development",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    heroHighlights: [
      "4-Way Stretch",
      "Iridescent Laser Finish",
      "150 cm / 59 in Width",
      "180 GSM",
      "MOQ 100 m / 109 yd",
      "Sample Available",
    ],
    whyChoose: [
      {
        title: "Iridescent Spandex Laser Effect",
        desc: "Reflective surface effect that changes with light and viewing angle.",
      },
      {
        title: "4-Way Stretch",
        desc: "Flexible stretch performance for fitted garments and movement.",
      },
      {
        title: "Soft & Flexible Base",
        desc: "Suitable for apparel applications that need body movement and drape.",
      },
      {
        title: "Built for Performance",
        desc: "Designed for dancewear, stage costumes and performance outfits.",
      },
    ],
    buyerApplications: [
      {
        title: "Dancewear & Performance Wear",
        desc: "Flexible stretch fabric for fitted performance garments.",
      },
      {
        title: "Stage Costume Manufacturers",
        desc: "Iridescent spandex surface effect helps costumes stand out under stage lighting.",
      },
      {
        title: "Festival & Carnival Costume Companies",
        desc: "Color-shifting stretch fabric for expressive festival and carnival costumes.",
      },
    ],
    samplePrompt:
      "Request a fabric sample to confirm color, stretch and surface effect before bulk order. Sample is free; buyer covers shipping.",
    faqList: [
      {
        question: "What is this iridescent laser stretch fabric used for?",
        answer:
          "It is used for dancewear, stage costumes and performance outfits that need a reflective iridescent foil appearance with stretch performance.",
      },
      {
        question: "Does the fabric have 4-way stretch?",
        answer:
          "Yes. The fabric is built on a stretch base with 4-way stretch performance for fitted garments and movement-based applications.",
      },
      {
        question: "What is the MOQ?",
        answer:
          "The MOQ is 100 m / 109 yd.",
      },
      {
        question: "Can I request a sample before placing a bulk order?",
        answer:
          "Yes. Samples are available before bulk order. Buyer covers international shipping, and the shipping cost can be deducted from the bulk order.",
      },
      {
        question: "What is the fabric width and weight?",
        answer:
          "The fabric width is 150 cm / 59 in and the weight is 180 GSM.",
      },
      {
        question: "Can you provide custom development?",
        answer:
          "OEM / ODM support is available for bulk development according to buyer requirements.",
      },
      {
        question: "How should I test the fabric before bulk production?",
        answer:
          "We recommend requesting a sample and checking the stretch, surface effect and sewing performance with your own production process before bulk approval.",
      },
    ],
    skuImages: [],
    detailImages: ["1.webp", "2.webp", "3.webp", "4.webp"],
  },
  {
    slug: "full-print-hot-stamping-spandex-milk-silk",
    metaTitle: "Full-Print Foil Spandex Fabric | Wholesale Supplier",
    metaDesc:
      "Full-print foil spandex milk-silk fabric with 4-way stretch for stage costumes, dancewear and performance outfits. Wholesale factory supply, samples and OEM support.",
    title: "Full-Print Foil Spandex Milk-Silk Fabric",
    sku: "P0002",
    mainImageUrl: "/images/products/full-print-hot-stamping-spandex-milk-silk/main/主图-1.webp",
    mainImageWebp: "/images/products/full-print-hot-stamping-spandex-milk-silk/main/主图-1.webp",
    mainImageAlt:
      "Full-print hot-stamping spandex milk-silk fabric with soft hand-feel and 4-way stretch",
    imageList: [
      {
        src: "/images/products/full-print-hot-stamping-spandex-milk-silk/main/主图-1.webp",
        webp: "/images/products/full-print-hot-stamping-spandex-milk-silk/main/主图-1.webp",
        alt: "Full-print hot-stamping spandex milk-silk fabric with soft hand-feel and 4-way stretch",
      },
    ],
    galleryMainPath: "/images/products/full-print-hot-stamping-spandex-milk-silk/main/",
    galleryImages: [
      "主图-1.webp",
      "主图-2.webp",
      "主图-3.webp",
      "主图-4.webp",
      "主图-5.webp",
      "主图-6.webp",
      "主图-7.webp",
    ],
    detailImagePath: "/images/products/full-print-hot-stamping-spandex-milk-silk/detail/",
    video: null,
    shortIntro:
      "Full-print hot-stamping spandex milk-silk fabric pairs a soft milk-silk ground with an all-over foil print. The 4-way stretch base recovers well and the foil surface delivers a bright metallic shine that holds up through wear.",
    fullDescription:
      "Nixia Fabric brings you our full-print hot-stamping spandex milk-silk fabric — a stretchy base fabric finished with an all-over hot-stamping foil print. The milk-silk ground gives a soft, smooth hand-feel, while the foil surface delivers a bright metallic shine that holds up through wear.\n\nThe 4-way stretch construction recovers well after stretching, making it a practical choice for fitted dancewear, stage costumes and performance outfits.",
    specs: {
      width: "150 cm / 59 in",
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
      { label: "MOQ", value: "100 m / 109 yd per design" },
      { label: "Stock Status", value: "In-stock, ready to ship" },
      { label: "Sampling", value: "Free sample, 3–7 working days" },
      { label: "Customization", value: "Custom patterns, colors, width & backing on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤ 500 m / 547 yd; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom color, width, new fabric development & private label available" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Stage costumes",
      "Performance costumes",
      "Dancewear",
      "Festival & carnival costumes",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "22 Stock Colors",
    colorCount: 22,
    tags: ["printed", "hot-stamping", "spandex", "dancewear", "stage-costume", "performance-wear", "party-wear"],
    availableColors: "22 stock colors, support custom color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom print patterns & custom foil colors",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The MOQ is 100 m / 109 yd per design for stock designs. Custom printed patterns start from higher quantities; send us your artwork and we will quote the exact minimum.",
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
          "The material is SGS and REACH testing can be arranged according to product and buyer requirements. Buyer-specific reports can be discussed by project.",
      },
    ],
    skuImages: [],
    detailImages: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"],
  },
  {
    slug: "double-layer-pleated-foil-knit-fabric",
    metaTitle: "Pleated Foil Knit Fabric | Performance Skirt Supplier",
    metaDesc:
      "Double-layer pleated foil knit fabric with vertical texture for performance skirts, stage costumes, dresses and dancewear. Wholesale fabric supply, samples, custom colors and 100 m / 109 yd MOQ.",
    title: "Double-Layer Pleated Foil Knit Fabric for Performance Skirts",
    sku: "H2013060104",
    mainImageUrl: "/images/products/H2013060104/main/a1.webp",
    mainImageWebp: "/images/products/H2013060104/main/a1.webp",
    mainImageAlt:
      "Double-layer pleated foil knit fabric with vertical texture for performance skirts and costumes",
    imageList: [
      {
        src: "/images/products/H2013060104/main/a1.webp",
        webp: "/images/products/H2013060104/main/a1.webp",
        alt: "Double-layer pleated foil knit fabric main view for performance skirts",
      },
      {
        src: "/images/products/H2013060104/main/a2.webp",
        webp: "/images/products/H2013060104/main/a2.webp",
        alt: "Pleated foil knit fabric surface with vertical texture",
      },
      {
        src: "/images/products/H2013060104/main/a3.webp",
        webp: "/images/products/H2013060104/main/a3.webp",
        alt: "Double-layer foil knit fabric showing pleated texture and shine",
      },
      {
        src: "/images/products/H2013060104/main/a4.webp",
        webp: "/images/products/H2013060104/main/a4.webp",
        alt: "Pleated foil knit fabric for stage costume and dress production",
      },
      {
        src: "/images/products/H2013060104/main/a5.webp",
        webp: "/images/products/H2013060104/main/a5.webp",
        alt: "Vertical pleated foil knit fabric detail for apparel manufacturers",
      },
    ],
    galleryMainPath: "/images/products/H2013060104/main/",
    galleryImages: ["a1.webp", "a2.webp", "a3.webp", "a4.webp", "a5.webp"],
    detailImagePath: "/images/products/H2013060104/detail/",
    video: null,
    shortIntro:
      "Double-layer pleated knit fabric with vertical texture and foil finish for performance skirts, stage costumes, dresses and dancewear.",
    fullDescription:
      "Double-layer pleated knit fabric with vertical texture and foil finish for performance skirts, stage costumes, dresses and dancewear.",
    specs: {
      width: "147 cm / 58 in",
      weight: "200 GSM",
      baseMaterial: "95% Polyester 5% Spandex",
      thickness: "",
      moq: "100",
      leadTime: "To be confirmed",
    },
    specTable: [
      { label: "Product Type", value: "Double-Layer Pleated Foil Knit Fabric" },
      { label: "Surface Effect", value: "Foil finish with vertical pleated texture" },
      { label: "Base Fabric", value: "95% Polyester 5% Spandex knit fabric" },
      { label: "Stretch", value: "Slight stretch" },
      { label: "Width", value: "147 cm / 58 in" },
      { label: "Weight", value: "200 GSM" },
      { label: "Color", value: "18 colors available; custom colors on request" },
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Density", value: "To be confirmed" },
      { label: "Yarn Count", value: "90S" },
      { label: "Finishing", value: "Hot-stamping foil" },
      { label: "Pattern / Construction", value: "Double-layer pleated knit fabric" },
      { label: "Typical Applications", value: "Performance skirts, stage costumes, dresses, formalwear, dancewear" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "18 colors available; stock status confirmed by quotation" },
      { label: "Sample", value: "Sample available for pleated texture, surface effect and sewing review before production" },
      { label: "Bulk Lead time", value: "To be confirmed according to order quantity and production requirements" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom colors and OEM/ODM development available" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "Roll packing; export packing available upon quotation" },
      { label: "Trade Terms", value: "FOB, CIF upon quotation" },
    ],
    applications: [
      "Performance Skirts",
      "Stage Costumes",
      "Dresses",
      "Formalwear",
      "Dancewear",
    ],
    inStock: false,
    stockStatus: "Made to Order",
    badge: "18 colors",
    colorCount: 18,
    tags: ["pleated-foil", "foil", "knit", "stage-costume", "performance-skirts", "dancewear", "formalwear"],
    availableColors: "18 colors available; custom colors on request",
    sampleNote: "Sample available for pleated texture and surface effect review",
    customizationNote: "Custom colors and OEM/ODM development available",
    packaging: "Roll packing; export packing available upon quotation",
    tradeTerms: "FOB, CIF upon quotation",
    heroHighlights: [
      "Double-Layer Pleated Knit",
      "Foil Finish",
      "Slight Stretch",
      "147 cm / 58 in Width",
      "200 GSM Weight",
      "MOQ 100 m / 109 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Double-Layer Pleated Structure",
        desc: "Vertical pleated texture creates stronger dimension for skirts, dresses and costume panels.",
      },
      {
        title: "Foil Surface Effect",
        desc: "A reflective foil finish adds visual impact for stage costumes and formalwear details.",
      },
      {
        title: "Knit Fabric Base",
        desc: "The polyester-spandex knit base gives the fabric slight stretch for apparel applications.",
      },
      {
        title: "200 GSM Weight",
        desc: "A heavier 200 GSM construction supports structured performance skirts and dress panels.",
      },
      {
        title: "18 Color Options",
        desc: "18 available colors support stage, costume, formalwear and dancewear development.",
      },
      {
        title: "Custom Development Support",
        desc: "Custom colors can be discussed for qualified wholesale and apparel manufacturing projects.",
      },
    ],
    valueStory: {
      title: "Why Choose This Pleated Foil Knit Fabric?",
      body: "This double-layer pleated foil knit fabric gives performance apparel buyers a more dimensional surface than flat foil fabrics. The vertical texture, 200 GSM weight and slight stretch make it useful for performance skirts, stage costumes, dresses and dancewear.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Performance Skirts",
        desc: "Vertical pleats and foil shine create stronger movement and stage visibility.",
      },
      {
        title: "Stage Costumes",
        desc: "Reflective foil surface helps costume panels stand out under lighting.",
      },
      {
        title: "Dresses & Formalwear",
        desc: "Pleated texture and heavier weight support decorative dress and formalwear panels.",
      },
      {
        title: "Dancewear",
        desc: "Slight stretch supports movement-focused garment details and accents.",
      },
    ],
    stockDevelopment: [
      {
        title: "18 Color Options",
        desc: "18 colors are available, with selected colors confirmed before quotation.",
      },
      {
        title: "Custom Color Development",
        desc: "Custom colors can be discussed for project-based OEM/ODM requirements.",
      },
    ],
    sampleCta: {
      title: "Need a Pleated Foil Knit Fabric?",
      body: "Request a sample to review the pleated texture, foil surface and weight before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to review the pleated texture, foil surface and weight before production.",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The confirmed MOQ is 100 m / 109 yd.",
      },
      {
        question: "What is the fabric width and weight?",
        answer:
          "The fabric width is 147 cm / 58 in and the weight is 200 GSM.",
      },
      {
        question: "Does this fabric stretch?",
        answer:
          "The source data describes this fabric as slight stretch.",
      },
      {
        question: "What applications is this fabric suitable for?",
        answer:
          "Recommended applications include performance skirts, stage costumes, dresses, formalwear and dancewear.",
      },
      {
        question: "Can the color be customized?",
        answer:
          "18 colors are available, and custom colors can be discussed for qualified wholesale projects.",
      },
    ],
    skuImages: [],
    detailImages: [
      "x4.webp",
      "x5.webp",
      "x6.webp",
      "x7.webp",
      "x8.webp",
      "x9.webp",
      "x10.webp",
      "x11.webp",
      "x111.webp",
      "x112.webp",
      "x113.webp",
      "x13.webp",
    ],
  },
  {
    slug: "shiny-foil-4-way-stretch-knit-fabric",
    metaTitle: "Shiny Foil 4-Way Stretch Knit Fabric | Wholesale Supplier",
    metaDesc:
      "Shiny foil 4-way stretch knit fabric for stage costumes, dancewear, party apparel and performance wear. Wholesale supply, ready stock, samples and custom development.",
    title: "Shiny Foil 4-Way Stretch Knit Fabric for Performance & Party Wear",
    sku: "H2013060105",
    mainImageUrl: "/images/products/H2013060105/main/a1.webp",
    mainImageWebp: "/images/products/H2013060105/main/a1.webp",
    mainImageAlt:
      "Shiny foil 4-way stretch knit fabric for performance and party wear",
    imageList: [
      {
        src: "/images/products/H2013060105/main/a1.webp",
        webp: "/images/products/H2013060105/main/a1.webp",
        alt: "Shiny foil 4-way stretch knit fabric for performance and party wear",
      },
      {
        src: "/images/products/H2013060105/main/a2.webp",
        webp: "/images/products/H2013060105/main/a2.webp",
        alt: "Close-up of shiny foil stretch knit fabric surface",
      },
      {
        src: "/images/products/H2013060105/main/a3.webp",
        webp: "/images/products/H2013060105/main/a3.webp",
        alt: "Reflective foil knit fabric showing flexible drape",
      },
      {
        src: "/images/products/H2013060105/main/a4.webp",
        webp: "/images/products/H2013060105/main/a4.webp",
        alt: "Shiny foil stretch fabric for stage costume sourcing",
      },
      {
        src: "/images/products/H2013060105/main/a5.webp",
        webp: "/images/products/H2013060105/main/a5.webp",
        alt: "Foil-finished stretch knit fabric detail for apparel manufacturers",
      },
    ],
    galleryMainPath: "/images/products/H2013060105/main/",
    galleryImages: ["a1.webp", "a2.webp", "a3.webp", "a4.webp", "a5.webp"],
    detailImagePath: "/images/products/H2013060105/detail/",
    video: null,
    shortIntro:
      "A shiny foil-finished 4-way stretch knit fabric designed for eye-catching performance costumes, dancewear and party apparel. The flexible stretch base provides comfort and freedom of movement, while the reflective foil surface creates a striking visual effect under stage and event lighting.",
    fullDescription:
      "A shiny foil-finished 4-way stretch knit fabric designed for eye-catching performance costumes, dancewear and party apparel. The flexible stretch base provides comfort and freedom of movement, while the reflective foil surface creates a striking visual effect under stage and event lighting.",
    specs: {
      width: "145 cm / 57 in",
      weight: "150 GSM",
      baseMaterial: "100% Polyester",
      thickness: "",
      moq: "100",
      leadTime: "1-3",
    },
    specTable: [
      { label: "Product Type", value: "Foil Stretch Knit Fabric" },
      { label: "Surface Effect", value: "Shiny Foil Finish" },
      { label: "Base Fabric", value: "100% Polyester" },
      { label: "Stretch", value: "4-Way Stretch" },
      { label: "Width", value: "145 cm / 57 in" },
      { label: "Weight", value: "150 GSM" },
      { label: "Color", value: "30 colors available; custom colors on request" },
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Yarn Count", value: "90S" },
      { label: "Finishing", value: "Hot-stamping foil" },
      { label: "Supply Type", value: "Ready Stock & Custom Development" },
      { label: "Typical Applications", value: "Stage costumes, dancewear, performance wear, concert outfits, party wear, festival costumes, performance bodysuits" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "Ready stock available; custom development available" },
      { label: "Sample", value: "Sample available for stretch, surface effect and appearance review before production" },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤ 500 m / 547 yd; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom foil fabric development based on customer sample or requirements" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Stage Costumes",
      "Dancewear",
      "Performance Wear",
      "Concert Outfits",
      "Party Wear",
      "Festival Costumes",
      "Performance Bodysuits",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "30 colors",
    colorCount: 30,
    tags: ["foil", "hot-stamping", "polyester", "knit", "stage-costume", "dancewear", "performance-wear", "party-wear"],
    availableColors: "30 colors available; custom colors on request",
    sampleNote: "Sample available for stretch, surface effect and appearance review",
    customizationNote: "Custom foil fabric development based on your sample or requirements",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    heroHighlights: [
      "Shiny Foil Finish",
      "4-Way Stretch",
      "145 cm / 57 in Width",
      "150 GSM Weight",
      "30 Colors",
      "MOQ 100 m / 109 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Shiny Foil Surface",
        desc: "Creates a bright and reflective visual effect.",
      },
      {
        title: "4-Way Stretch",
        desc: "Flexible stretch suitable for movement-focused garments.",
      },
      {
        title: "Designed for Performance",
        desc: "Ideal for costumes and apparel designed to stand out under lighting.",
      },
      {
        title: "Suitable for Fitted Designs",
        desc: "Works well for bodysuits and other close-fitting costume styles.",
      },
      {
        title: "Strong Visual Impact",
        desc: "The foil finish adds a bold and eye-catching appearance to garments.",
      },
      {
        title: "Cool & Translucent Visual Effect",
        desc: "Unlike standard shiny foil fabrics, this material offers a cooler, crisper look with a clearer, more translucent finish.",
      },
    ],
    valueStory: {
      title: "Why Choose This Foil Stretch Fabric?",
      body: "Performance apparel needs more than ordinary fabric. This shiny foil stretch knit fabric combines flexibility with a bold reflective surface, helping costume manufacturers create garments with stronger visual impact for stage, dance and party environments.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Stage Costumes",
        desc: "Reflective foil surface helps costumes read clearly under stage lighting.",
      },
      {
        title: "Dancewear",
        desc: "4-way stretch supports fitted garments and movement-focused designs.",
      },
      {
        title: "Performance Wear",
        desc: "A strong shine effect for apparel that needs visual impact.",
      },
      {
        title: "Concert Outfits",
        desc: "Bold foil finish for statement looks under event lighting.",
      },
      {
        title: "Party Wear",
        desc: "Eye-catching surface effect for festive apparel collections.",
      },
      {
        title: "Festival Costumes",
        desc: "Bright reflective appearance for expressive costume production.",
      },
      {
        title: "Performance Bodysuits",
        desc: "Stretch knit base works well for close-fitting costume styles.",
      },
    ],
    stockDevelopment: [
      {
        title: "Ready Stock for Faster Development",
        desc: "We keep a selection of foil fabrics available in ready stock to support faster sampling and product development.",
      },
      {
        title: "Custom Development Available",
        desc: "Have a reference fabric or visual effect in mind? We can support custom foil fabric development based on your sample or requirements.",
      },
    ],
    sampleCta: {
      title: "Looking for Fabric for Your Next Costume Collection?",
      body: "Request a sample to check the stretch, surface effect and appearance before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to check the stretch, surface effect and appearance before production.",
    faqList: [
      {
        question: "Is this fabric suitable for stage costumes?",
        answer:
          "Yes. The shiny foil surface creates a strong visual effect under stage and event lighting, while the 4-way stretch makes it suitable for movement-focused garments.",
      },
      {
        question: "Does the fabric have 4-way stretch?",
        answer:
          "Yes, this fabric features 4-way stretch for improved flexibility and movement.",
      },
      {
        question: "Can I order a sample before bulk production?",
        answer:
          "Yes. Samples are available so you can evaluate the fabric's stretch, surface effect and suitability for your application.",
      },
      {
        question: "Do you offer custom development?",
        answer:
          "Yes. We can support foil fabric development based on customer samples or specific requirements.",
      },
    ],
    skuImages: [],
    detailImages: [
      "x2.webp",
      "x3.webp",
      "x4.webp",
      "x5.webp",
      "x7.webp",
      "x8.webp",
      "x9.webp",
      "x10.webp",
      "x11.webp",
      "x111.webp",
      "x112.webp",
      "x113.webp",
      "x114.webp",
      "x115.webp",
    ],
  },
  {
    slug: "non-shedding-glitter-suede-look-laser-foil-fabric",
    metaTitle: "Dense Dot Foil Suede-Look Fabric | Wholesale Supplier",
    metaDesc:
      "Dense dot foil suede-look fabric for stage costumes, performance props, backdrops and event decoration. Foil fabric supply, samples and custom color support.",
    title: "Dense Dot Foil Suede-Look Fabric for Stage Props & Backdrops",
    sku: "H2013060106",
    mainImageUrl: "/images/products/H2013060106/main/a1.webp",
    mainImageWebp: "/images/products/H2013060106/main/a1.webp",
    mainImageAlt:
      "Dense dot foil suede-look fabric with a small-dot foil surface",
    imageList: [
      {
        src: "/images/products/H2013060106/main/a1.webp",
        webp: "/images/products/H2013060106/main/a1.webp",
        alt: "Dense dot foil suede-look fabric in a neutral color",
      },
      {
        src: "/images/products/H2013060106/main/a2.webp",
        webp: "/images/products/H2013060106/main/a2.webp",
        alt: "Dense dot foil suede-look fabric color and surface detail",
      },
      {
        src: "/images/products/H2013060106/main/a3.webp",
        webp: "/images/products/H2013060106/main/a3.webp",
        alt: "Dense dot foil suede-look fabric in a bright color",
      },
      {
        src: "/images/products/H2013060106/main/a4.webp",
        webp: "/images/products/H2013060106/main/a4.webp",
        alt: "Dense dot foil suede-look fabric color assortment",
      },
      {
        src: "/images/products/H2013060106/main/a5.webp",
        webp: "/images/products/H2013060106/main/a5.webp",
        alt: "Dense dot foil suede-look fabric for stagewear sourcing",
      },
    ],
    galleryMainPath: "/images/products/H2013060106/main/",
    galleryImages: ["a1.webp", "a2.webp", "a3.webp", "a4.webp", "a5.webp"],
    detailImagePath: "/images/products/H2013060106/detail/",
    video: null,
    shortIntro:
      "Soft suede-like base paired with a dense small-dot foil finish for an elevated visual effect. Wrinkle-resistant and more flexible than full-area hot stamping fabrics. Suitable for stage costumes, performance props, backdrops and event decoration.",
    fullDescription:
      "Soft suede-like base paired with a dense small-dot foil finish for an elevated visual effect. Wrinkle-resistant and more flexible than full-area hot stamping fabrics. Suitable for stage costumes, performance props, backdrops and event decoration.",
    specs: {
      width: "150 cm / 59 in",
      weight: "130 GSM",
      baseMaterial: "Suede-look fabric",
      thickness: "",
      moq: "100",
      leadTime: "5-7",
    },
    specTable: [
      { label: "Product Type", value: "Dense Dot Foil Suede-Look Fabric" },
      { label: "Base Material", value: "Suede-look fabric" },
      { label: "Width", value: "150 cm / 59 in" },
      { label: "Weight", value: "130 GSM" },
      { label: "Surface Effect", value: "Dense small-dot foil with laser foil effect" },
      { label: "Stretch", value: "Slight stretch" },
      { label: "Color", value: "16 colors available; custom colors on request" },
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Density", value: "210T" },
      { label: "Yarn Count", value: "75D*75DD" },
      { label: "Finishing", value: "Foil" },
      { label: "Pattern / Construction", value: "Foil embossing" },
      { label: "Typical Applications", value: "Stage costumes, performance props, backdrops, event decoration" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "In-stock availability; custom development available" },
      { label: "Sample", value: "Sample available for surface effect, stretch and appearance review before production" },
      { label: "Bulk Lead time", value: "5-7 working days for stock dispatch; custom production timing to be confirmed" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom color and fabric development based on customer requirements" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "Roll packing; export packing available upon quotation" },
      { label: "Trade Terms", value: "FOB, CIF upon quotation" },
    ],
    applications: [
      "Stage Costumes",
      "Performance Props",
      "Backdrops",
      "Event Decoration",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    availability: "In-Stock",
    customProjectMoq: "MOQ 200 m / 219 yd",
    badge: "16 colors",
    colorCount: 16,
    tags: ["foil", "suede-look", "embossed", "stage-costume", "performance-props", "backdrops", "event-decoration"],
    availableColors: "16 colors available; custom colors on request",
    sampleNote: "Sample available for surface effect, stretch and appearance review",
    customizationNote: "Custom color and fabric development based on customer requirements",
    packaging: "Roll packing; export packing available upon quotation",
    tradeTerms: "FOB, CIF upon quotation",
    heroHighlights: [
      "Dense Dot Foil",
      "Suede-Look Base",
      "Laser Foil Effect",
      "150 cm / 59 in Width",
      "130 GSM Weight",
      "MOQ 100 m / 109 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Dense Dot Foil",
        desc: "Small-dot foil finish designed to create a rich reflective surface effect.",
      },
      {
        title: "Suede-Look Base",
        desc: "Soft visual texture gives costumes, props and decorative panels a richer appearance.",
      },
      {
        title: "Foil Embossing",
        desc: "Embossed foil effect adds visible texture and shine to the fabric surface.",
      },
      {
        title: "Slight Stretch",
        desc: "Offers limited flexibility for selected costume and decorative applications.",
      },
      {
        title: "16 Color Options",
        desc: "Available colors support coordinated stage, event and display projects.",
      },
      {
        title: "Suitable for Visual Displays",
        desc: "The dense small-dot foil and laser foil effect creates strong visual impact under lighting.",
      },
    ],
    valueStory: {
      title: "Why Choose This Dense Dot Foil Fabric?",
      body: "This suede-look foil fabric combines a dense small-dot foil surface with embossed laser foil detail. It is designed for buyers who need a visually rich material for stage costumes, performance props, backdrops and event decoration.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Stage Costumes",
        desc: "Dense small-dot foil detail helps costumes stand out under stage lighting.",
      },
      {
        title: "Performance Props",
        desc: "The textured surface supports visual props and display elements for performances.",
      },
      {
        title: "Backdrops",
        desc: "Reflective foil detail adds depth to decorative stage and event backdrops.",
      },
      {
        title: "Event Decoration",
        desc: "Suitable for eye-catching decorative panels and themed event displays.",
      },
    ],
    stockDevelopment: [
      {
        title: "In-Stock Availability",
        desc: "This product is available in stock for faster sample review and order preparation.",
      },
      {
        title: "Custom Development Available",
        desc: "Custom color and fabric development can be discussed based on project requirements.",
      },
    ],
    sampleCta: {
      title: "Need a Textured Foil Fabric for Your Project?",
      body: "Request a sample to review the small-dot foil surface, foil embossing and slight stretch before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to review the small-dot foil surface, foil embossing and slight stretch before production.",
    faqList: [
      {
        question: "Does the small-dot foil surface shed from the fabric?",
        answer:
          "This product is positioned as a dense dot foil suede-look fabric. Please request a sample to review the surface under your intended handling and application conditions.",
      },
      {
        question: "What is the stretch level?",
        answer:
          "The source data describes the fabric as having slight stretch.",
      },
      {
        question: "How many colors are available?",
        answer:
          "The source data lists 16 available colors, with custom colors available on request.",
      },
      {
        question: "What applications is this fabric suitable for?",
        answer:
          "Recommended applications include stage costumes, performance props, backdrops and event decoration.",
      },
    ],
    skuImages: [],
    detailImages: [
      "x1.webp",
      "x2.webp",
      "x3.webp",
      "x4.webp",
      "x5.webp",
      "x6.webp",
      "x7.webp",
      "x8.webp",
      "x9.webp",
      "x10.webp",
      "x11.webp",
      "x12.webp",
    ],
  },

  {
    slug: "iridescent-laser-hot-stamping-stretch-ice-silk",
    metaTitle: "Iridescent Stretch Foil Fabric | Nixia Fabric",
    metaDesc:
      "Iridescent stretch ice-silk fabric with a shifting multi-color foil finish for stage costumes, dancewear and performance outfits. Samples available.",
    title: "Iridescent Laser Foil Stretch Ice-Silk Fabric",
    sku: "P0003",
    mainImageUrl: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.webp",
    mainImageWebp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.webp",
    mainImageAlt:
      "Pink iridescent laser hot-stamping stretch ice-silk fabric with multi-color foil finish",
    imageList: [
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.webp",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.webp",
        alt: "Pink iridescent laser hot-stamping stretch ice-silk fabric draped for product display",
      },
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/2.webp",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/2.webp",
        alt: "Pink iridescent laser hot-stamping stretch ice-silk fabric gathered to show stretch and drape",
      },
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/3.webp",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/3.webp",
        alt: "Close-up of pink iridescent laser foil finish on stretch ice-silk fabric",
      },
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/4.webp",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/4.webp",
        alt: "Iridescent laser hot-stamping stretch ice-silk fabric texture in pink and purple tones",
      },
      {
        src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/5.webp",
        webp: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/5.webp",
        alt: "Detailed view of the reflective surface and fine weave of iridescent stretch ice-silk fabric",
      },
    ],
    galleryMainPath: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/",
    galleryImages: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"],
    detailImagePath: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/detail/",
    video: {
      src: "/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/video/1.mp4",
      poster: "1.webp",
    },
    shortIntro:
      "Iridescent laser hot-stamping stretch ice-silk fabric pairs a light, elastic ice-silk ground with a laser foil surface that shifts through multiple colors as light and viewing angle change. The gradient rainbow effect makes it a strong choice for stage costumes, dancewear and performance outfits.",
    fullDescription:
      "Our iridescent laser hot-stamping stretch ice-silk fabric pairs a light, elastic ice-silk ground with a laser foil surface that shifts through multiple colors as light and viewing angle change. The gradient rainbow effect makes it a strong choice for stage costumes, dancewear and performance outfits.\n\nThe stretch base drapes well and recovers after stretching, so it works for fitted garments and expressive costume designs.",
    specs: {
      width: "150 cm / 59 in",
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
      { label: "MOQ", value: "100 m / 109 yd per color" },
      { label: "Stock Status", value: "In-stock, ready to ship" },
      { label: "Sampling", value: "Free sample, 3–7 working days" },
      { label: "Customization", value: "Custom foil colors, width & backing on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤ 500 m / 547 yd; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom color, width, new fabric development & private label available" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Stage costumes",
      "Dancewear",
      "Performance outfits",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "1 standard color",
    colorCount: 1,
    tags: ["metallic", "gradient", "hot-stamping", "spandex", "stage-costume", "dancewear", "performance-wear"],
    availableColors: "1 standard color",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom foil colors & custom width",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The MOQ is 100 m / 109 yd per color from stock. Custom iridescent effects start from higher quantities; contact us for a quotation based on your requirement.",
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
    detailImages: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"],
  },

  {
    slug: "iridescent-gradient-laser-ice-silk",
    metaTitle: "Gradient Iridescent Stretch Fabric | Nixia Fabric",
    metaDesc:
      "Iridescent gradient foil stretch fabric for dancewear, stage costumes, performance wear and party apparel. Samples and custom gradient color support.",
    title: "Iridescent Gradient Foil Stretch Fabric for Dancewear & Costumes",
    sku: "P0005",
    mainImageUrl: "/images/products/iridescent-gradient-laser-ice-silk/main/1.webp",
    mainImageWebp: "/images/products/iridescent-gradient-laser-ice-silk/main/1.webp",
    mainImageAlt:
      "Iridescent gradient laser hot-stamping ice-silk fabric with smooth color-flow finish",
    imageList: [
      {
        src: "/images/products/iridescent-gradient-laser-ice-silk/main/1.webp",
        webp: "/images/products/iridescent-gradient-laser-ice-silk/main/1.webp",
        alt: "Iridescent gradient laser hot-stamping ice-silk fabric with smooth color-flow finish",
      },
    ],
    galleryMainPath: "/images/products/iridescent-gradient-laser-ice-silk/main/",
    galleryImages: ["1.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    detailImagePath: "/images/products/iridescent-gradient-laser-ice-silk/detail/",
    video: { src: "/images/products/iridescent-gradient-laser-ice-silk/video/1.mp4", poster: "1.webp" },
    shortIntro:
      "The iridescent gradient laser hot-stamping ice-silk fabric features a smooth gradient that flows across the width of the fabric, shifting through multiple colors under light. The stretch ice-silk base keeps it comfortable against the skin and easy to sew.",
    fullDescription:
      "The iridescent gradient laser hot-stamping ice-silk fabric features a smooth gradient that flows across the width of the fabric, shifting through multiple colors under light. The stretch ice-silk base keeps it comfortable against the skin and easy to sew. The flowing gradient gives dancewear, stage costumes and performance outfits a strong visual identity.",
    specs: {
      width: "150 cm / 59 in",
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
      { label: "MOQ", value: "100 m / 109 yd per colorway" },
      { label: "Stock Status", value: "In-stock, ready to ship" },
      { label: "Sampling", value: "Free sample, 3–7 working days" },
      { label: "Customization", value: "Custom gradient colors & direction on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free sample, customer bears international freight; shipping cost deducted from bulk order" },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤ 500 m / 547 yd; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom color, width, new fabric development & private label available" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    applications: [
      "Stage costumes",
      "Dancewear",
      "Performance outfits",
      "Festival & carnival costumes",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "19 colors",
    colorCount: 19,
    tags: ["gradient", "metallic", "hot-stamping", "spandex", "stage-costume", "dancewear", "performance-wear", "party-wear"],
    availableColors: "19 colors available, color card available on request",
    sampleNote: "Free sample available, customer bears shipping cost",
    customizationNote: "Custom gradient colors & direction",
    packaging: "Roll packing, export carton",
    tradeTerms: "FOB, CIF upon quotation",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The MOQ is 100 m / 109 yd per colorway from stock. Custom gradient color schemes start from higher quantities; contact us for details.",
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
    detailImages: ["detail01.webp", "detail02.webp"],
  },
  {
    slug: "rainbow-dot-laser-foil-knit-fabric",
    metaTitle: "Rainbow Dot Foil Knit Fabric | Nixia Fabric",
    metaDesc:
      "Rainbow dot foil knit fabric for stage costumes, dancewear and performance outfits. Available in 28 colors with a 200 m / 219 yd MOQ.",
    title: "Rainbow Dot Laser Foil Knit Fabric for Stage Costumes",
    sku: "H2013090104",
    mainImageUrl: "/images/products/H2013090104/main/a1.webp",
    mainImageWebp: "/images/products/H2013090104/main/a1.webp",
    mainImageAlt:
      "Rainbow dot laser foil knit fabric for stage costumes and performance wear",
    imageList: [
      {
        src: "/images/products/H2013090104/main/a1.webp",
        webp: "/images/products/H2013090104/main/a1.webp",
        alt: "Rainbow dot laser foil knit fabric main view for stage costumes",
      },
      {
        src: "/images/products/H2013090104/main/a2.webp",
        webp: "/images/products/H2013090104/main/a2.webp",
        alt: "Rainbow dot laser foil knit fabric color options for costume production",
      },
      {
        src: "/images/products/H2013090104/main/a3.webp",
        webp: "/images/products/H2013090104/main/a3.webp",
        alt: "Yellow rainbow dot laser foil knit fabric drape and shine",
      },
      {
        src: "/images/products/H2013090104/main/a4.webp",
        webp: "/images/products/H2013090104/main/a4.webp",
        alt: "Pink rainbow dot foil knit fabric for stage and dancewear",
      },
      {
        src: "/images/products/H2013090104/main/a5.webp",
        webp: "/images/products/H2013090104/main/a5.webp",
        alt: "Green and yellow rainbow dot laser foil knit fabric detail",
      },
    ],
    galleryMainPath: "/images/products/H2013090104/main/",
    galleryImages: ["a1.webp", "a2.webp", "a3.webp", "a4.webp", "a5.webp"],
    detailImagePath: "/images/products/H2013090104/detail/",
    video: null,
    shortIntro:
      "Rainbow dot laser foil knit fabric for stage costumes, performance outfits and colorful decorative garment panels.",
    fullDescription:
      "Rainbow dot laser foil knit fabric for stage costumes, performance outfits and colorful decorative garment panels.",
    specs: {
      width: "150 cm / 59 in",
      weight: "90 GSM",
      baseMaterial: "100% Polyester",
      thickness: "",
      moq: "200",
      leadTime: "5-7",
    },
    specTable: [
      { label: "Product Type", value: "Rainbow Dot Laser Foil Knit Fabric" },
      { label: "Surface Effect", value: "Dot laser foil" },
      { label: "Base Fabric", value: "100% Polyester knit fabric" },
      { label: "Stretch", value: "Slight stretch" },
      { label: "Width", value: "150 cm / 59 in" },
      { label: "Weight", value: "90 GSM" },
      { label: "Color", value: "28 colors available; custom colors on request" },
      { label: "MOQ", value: "200 m / 219 yd" },
      { label: "Density", value: "To be confirmed" },
      { label: "Yarn Count", value: "90S" },
      { label: "Finishing", value: "Hot-stamping foil" },
      { label: "Pattern / Construction", value: "Knit fabric with dot laser foil" },
      { label: "Typical Applications", value: "Stage costumes, performance wear, dancewear, costume panels" },
    ],
    b2bTable: [
      { label: "MOQ", value: "200 m / 219 yd" },
      { label: "Supply type", value: "28 colors available; custom colors on request" },
      { label: "Sample", value: "Sample available for color, surface effect and sewing review before production" },
      { label: "Bulk Lead time", value: "5-7 working days after order confirmation" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom colors and OEM/ODM development available" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "Roll packing; export packing available upon quotation" },
      { label: "Trade Terms", value: "FOB, CIF upon quotation" },
    ],
    applications: [
      "Stage Costumes",
      "Performance Wear",
      "Dancewear",
      "Costume Panels",
    ],
    inStock: true,
    stockStatus: "In-Stock Color Options",
    badge: "28 colors",
    colorCount: 28,
    tags: ["dot-foil", "laser-foil", "knit", "stage-costume", "performance-wear", "dancewear", "costume-panels"],
    availableColors: "28 colors available; custom colors on request",
    sampleNote: "Sample available for color and surface effect review",
    customizationNote: "Custom colors and OEM/ODM development available",
    packaging: "Roll packing; export packing available upon quotation",
    tradeTerms: "FOB, CIF upon quotation",
    heroHighlights: [
      "Rainbow Dot Laser Foil",
      "Knit Construction",
      "Slight Stretch",
      "150 cm / 59 in Width",
      "90 GSM Weight",
      "MOQ 200 m / 219 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Rainbow Dot Laser Foil",
        desc: "Creates a colorful reflective dot effect for stage costumes and decorative garment panels.",
      },
      {
        title: "Knit Construction",
        desc: "The 100% polyester knit base supports lightweight costume and performance apparel uses.",
      },
      {
        title: "Slight Stretch",
        desc: "A slightly elastic hand feel helps with costume panels and movement-focused garment details.",
      },
      {
        title: "28 Color Options",
        desc: "28 available colors support coordinated stage, costume and performance wear projects.",
      },
      {
        title: "Performance Visual Impact",
        desc: "The dot foil surface catches light strongly for stagewear, dancewear and event costume designs.",
      },
      {
        title: "OEM/ODM Support",
        desc: "Custom colors can be discussed for qualified wholesale and apparel manufacturing projects.",
      },
    ],
    valueStory: {
      title: "Why Choose This Rainbow Dot Laser Foil Knit Fabric?",
      body: "This rainbow dot laser foil knit fabric gives costume and performance wear buyers a bright reflective dot surface on a lightweight polyester knit base, making it useful for stage costumes, dancewear and colorful decorative garment panels.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Stage Costumes",
        desc: "Reflective rainbow dots create strong visibility under stage lighting.",
      },
      {
        title: "Performance Wear",
        desc: "A lightweight knit base supports decorative panels and visual garment accents.",
      },
      {
        title: "Dancewear",
        desc: "Slight stretch helps with movement-focused costume details.",
      },
      {
        title: "Costume Panels",
        desc: "Colorful foil dots work well for decorative panel cutting and sewing.",
      },
    ],
    stockDevelopment: [
      {
        title: "28 Color Options",
        desc: "28 colors are available, with selected colors confirmed before quotation.",
      },
      {
        title: "Custom Color Development",
        desc: "Custom colors can be discussed for project-based OEM/ODM requirements.",
      },
    ],
    sampleCta: {
      title: "Need a Rainbow Dot Laser Foil Fabric?",
      body: "Request a sample to review the dot foil shine, knit base and color options before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to review the dot foil shine, knit base and color options before production.",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The confirmed MOQ is 200 m / 219 yd.",
      },
      {
        question: "What is the base material?",
        answer:
          "The source data lists this fabric as 100% polyester knit fabric with a hot-stamping foil finish.",
      },
      {
        question: "How many colors are available?",
        answer:
          "28 colors are available, with custom colors available on request.",
      },
      {
        question: "What applications is this fabric suitable for?",
        answer:
          "Recommended applications include stage costumes, performance wear, dancewear and decorative costume panels.",
      },
    ],
    skuImages: [],
    detailImages: [
      "x1.webp",
      "x2.webp",
      "x3.webp",
      "x4.webp",
      "x5.webp",
      "x6.webp",
      "x7.webp",
      "x8.webp",
      "x9.webp",
      "x10.webp",
      "x11.webp",
      "x12.webp",
      "x13.webp",
      "x14.webp",
      "x15.webp",
      "x16.webp",
      "x17.webp",
      "x18.webp",
      "x19.webp",
      "x20.webp",
      "x21.webp",
      "x22.webp",
      "x23.webp",
    ],
  },
  {
    slug: "blue-purple-gradient-laser-foil-spandex-fabric",
    metaTitle: "Blue-Purple Gradient Foil Spandex | Nixia Fabric",
    metaDesc:
      "Blue-purple gradient laser foil on a 4-way stretch spandex base for stage costumes, dancewear and performance apparel. Foil fabric supply with custom color development support.",
    title: "Blue-Purple Gradient Laser Foil 4-Way Stretch Fabric",
    sku: "H2013120102",
    mainImageUrl: "/images/products/H2013120102/main/a1.webp",
    mainImageWebp: "/images/products/H2013120102/main/a1.webp",
    mainImageAlt:
      "Blue-purple gradient laser foil 4-way stretch spandex fabric for costumes and performance apparel",
    imageList: [
      {
        src: "/images/products/H2013120102/main/a1.webp",
        webp: "/images/products/H2013120102/main/a1.webp",
        alt: "Blue-purple gradient laser foil 4-way stretch fabric main view",
      },
      {
        src: "/images/products/H2013120102/main/a2.webp",
        webp: "/images/products/H2013120102/main/a2.webp",
        alt: "Blue-purple laser foil stretch fabric surface detail",
      },
      {
        src: "/images/products/H2013120102/main/a3.webp",
        webp: "/images/products/H2013120102/main/a3.webp",
        alt: "Gradient laser foil spandex fabric drape and shine",
      },
      {
        src: "/images/products/H2013120102/main/a4.webp",
        webp: "/images/products/H2013120102/main/a4.webp",
        alt: "Blue-purple gradient foil stretch fabric for stage costumes",
      },
      {
        src: "/images/products/H2013120102/main/a5.webp",
        webp: "/images/products/H2013120102/main/a5.webp",
        alt: "Blue-purple laser foil spandex fabric for performance costumes",
      },
    ],
    galleryMainPath: "/images/products/H2013120102/main/",
    galleryImages: ["a1.webp", "a2.webp", "a3.webp", "a4.webp", "a5.webp"],
    detailImagePath: "/images/products/H2013120102/detail/",
    video: null,
    shortIntro:
      "Blue-purple gradient laser foil on a 4-way stretch spandex base for stage costumes, dancewear and performance apparel.",
    fullDescription:
      "Blue-purple gradient laser foil on a 4-way stretch spandex base for stage costumes, dancewear and performance apparel.",
    specs: {
      width: "150 cm / 59 in",
      weight: "180 GSM",
      baseMaterial: "98% Polyester 2% Spandex",
      thickness: "",
      moq: "100",
      leadTime: "To be confirmed",
    },
    specTable: [
      { label: "Product Type", value: "Blue-Purple Gradient Laser Foil 4-Way Stretch Fabric" },
      { label: "Surface Effect", value: "Blue-purple gradient laser foil" },
      { label: "Base Fabric", value: "98% Polyester 2% Spandex" },
      { label: "Stretch", value: "4-Way Stretch" },
      { label: "Width", value: "150 cm / 59 in" },
      { label: "Weight", value: "180 GSM" },
      { label: "Color", value: "1 standard color; custom color development available" },
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Density", value: "110T" },
      { label: "Yarn Count", value: "120D*120D" },
      { label: "Finishing", value: "Hot-stamping foil" },
      { label: "Pattern / Construction", value: "Hot-stamping foil" },
      { label: "Typical Applications", value: "Stage costumes, performance wear, dancewear, party wear, festival costumes" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "Foil fabric supply with custom development support" },
      { label: "Sample", value: "Sample available for color, stretch and surface effect review before production" },
      { label: "Bulk Lead time", value: "To be confirmed according to order quantity and production requirements" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom color development available" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "Roll packing; export packing available upon quotation" },
      { label: "Trade Terms", value: "FOB, CIF upon quotation" },
    ],
    applications: [
      "Stage Costumes",
      "Performance Wear",
      "Dancewear",
      "Party Wear",
      "Festival Costumes",
    ],
    inStock: false,
    stockStatus: "Made to Order",
    badge: "1 color",
    colorCount: 1,
    tags: ["gradient", "laser-foil", "spandex", "4-way-stretch", "stage-costume", "performance-wear", "dancewear", "party-wear"],
    availableColors: "1 standard color; custom color development available",
    sampleNote: "Sample available for color, stretch and surface effect review",
    customizationNote: "Custom color development available",
    packaging: "Roll packing; export packing available upon quotation",
    tradeTerms: "FOB, CIF upon quotation",
    heroHighlights: [
      "Blue-Purple Gradient",
      "Laser Foil Finish",
      "4-Way Stretch",
      "150 cm / 59 in Width",
      "180 GSM Weight",
      "MOQ 100 m / 109 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Blue-Purple Gradient",
        desc: "Creates a flowing color-shift effect for high-impact costume and apparel designs.",
      },
      {
        title: "Laser Foil Surface",
        desc: "Adds a reflective metallic finish that stands out under stage and event lighting.",
      },
      {
        title: "4-Way Stretch",
        desc: "Supports fitted garments and movement-focused performance apparel.",
      },
      {
        title: "Spandex Blend Base",
        desc: "A 98% polyester and 2% spandex base balances shine, stretch and garment usability.",
      },
      {
        title: "Costume-Ready Visual Effect",
        desc: "Suitable for stage costumes, performance wear, dancewear and party apparel.",
      },
      {
        title: "Custom Color Development",
        desc: "Custom color development is available for qualified project requirements.",
      },
    ],
    valueStory: {
      title: "Why Choose This Blue-Purple Gradient Foil Fabric?",
      body: "This blue-purple laser foil spandex fabric combines a 4-way stretch base with a gradient metallic surface, helping costume and performance apparel buyers create garments with stronger color movement and visual impact.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Stage Costumes",
        desc: "A bold blue-purple foil surface for expressive costume production.",
      },
      {
        title: "Performance Wear",
        desc: "4-way stretch supports fitted apparel categories where stretch and shine matter.",
      },
      {
        title: "Stagewear",
        desc: "Laser foil reflection helps garments stand out under lighting.",
      },
      {
        title: "Dancewear",
        desc: "Stretch construction supports movement-focused performance designs.",
      },
      {
        title: "Party & Festival Costumes",
        desc: "Gradient metallic effect works well for party and festival costume collections.",
      },
    ],
    stockDevelopment: [
      {
        title: "Foil Fabric Supply",
        desc: "Supply support is available for buyers and apparel manufacturers.",
      },
      {
        title: "Custom Color Development",
        desc: "Custom color development can be discussed for project-based requirements.",
      },
    ],
    sampleCta: {
      title: "Need a Blue-Purple Gradient Foil Fabric?",
      body: "Request a sample to review the color shift, stretch and surface effect before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to review the color shift, stretch and surface effect before production.",
    faqList: [
      {
        question: "What is the MOQ for this fabric?",
        answer:
          "The confirmed MOQ is 100 m / 109 yd.",
      },
      {
        question: "Does this fabric have 4-way stretch?",
        answer:
          "Yes. The source data confirms this is a 4-way stretch fabric.",
      },
      {
        question: "How many standard colors are available?",
        answer:
          "The source data lists 1 standard color, with custom color development available.",
      },
      {
        question: "What applications is this fabric suitable for?",
        answer:
          "Recommended applications include stage costumes, performance wear, dancewear, party wear and festival costumes.",
      },
    ],
    skuImages: [],
    detailImages: [
      "x1.webp",
      "x2.webp",
      "x3.webp",
      "x4.webp",
      "x5.webp",
      "x6.webp",
      "x7.webp",
      "x8.webp",
      "x9.webp",
    ],
  },
];

export const performanceProductSlugs = [
  "rainbow-stripe-foil-4-way-stretch-fabric",
  "plain-iridescent-laser-spandex-4-way-stretch",
  "full-print-hot-stamping-spandex-milk-silk",
  "double-layer-pleated-foil-knit-fabric",
  "shiny-foil-4-way-stretch-knit-fabric",
  "non-shedding-glitter-suede-look-laser-foil-fabric",
  "iridescent-laser-hot-stamping-stretch-ice-silk",
  "iridescent-gradient-laser-ice-silk",
  "blue-purple-gradient-laser-foil-spandex-fabric",
  "rainbow-dot-laser-foil-knit-fabric",
];

export const performanceProducts = allProducts.filter((product) =>
  performanceProductSlugs.includes(product.slug),
);
