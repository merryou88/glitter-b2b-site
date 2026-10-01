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
 *   2. First read products-data/面料独立站产品数据.xlsx, sheet
 *      "Independent Site Product Data", and fill product facts from that row
 *      before using images or same-category assumptions.
 *   3. Fill in every field with that product's data (title, slug, images, ...).
 *   4. Only add products that match the current performance fabric positioning:
 *      foil, laser foil, iridescent, stretch, stage costume, dancewear,
 *      performance wear, party apparel, props, backdrops or event decoration. Do not add glitter
 *      leather, PU accessory, shoes/bags/crafts or other off-position products.
 *   5. Write US-buyer SEO before saving:
 *      - metaTitle = one specific buyer search term + " | Nixia Fabric"
 *      - title/H1 starts with the product material/effect, not an internal process
 *      - metaDesc includes application, wholesale/supplier intent, samples/custom
 *        support, and key MOQ/stock facts when confirmed
 *      - keep hot-stamping as a supporting process term, not the primary phrase
 *      - include US-friendly units beside metric units, e.g. 150 cm / 59 in and
 *        100 m / 109 yd
 *   6. Save. The static site will automatically generate the new page at
 *      /products/{slug} and add it to the catalog listing — no page file needed.
 */

export const allProducts = [
  {
    slug: "rainbow-stripe-foil-4-way-stretch-fabric",
    metaTitle: "Rainbow Stripe Foil Stretch Fabric | Nixia Fabric",
    metaDesc:
      "Rainbow stripe foil stretch fabric for stage costumes, dancewear and performance outfits. Made to order with a 100 m / 109 yd MOQ. Custom colors, samples and wholesale quotations are available.",
    title: "Rainbow Stripe Foil 4-Way Stretch Fabric for Stage Costumes",
    sku: "H2013060102",
    mainImageUrl: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-1.webp",
    mainImageAlt:
      "Rainbow stripe metallic foil 4-way stretch fabric for dance costumes and stagewear",
    imageList: [
      {
        src: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-1.webp",
        webp: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-1.webp",
        alt: "Rainbow stripe metallic foil 4-way stretch fabric main view for dance costumes",
      },
      {
        src: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-2.webp",
        webp: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-2.webp",
        alt: "Reflective rainbow stripe foil stretch fabric drape for stage costume production",
      },
      {
        src: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-3.webp",
        webp: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-3.webp",
        alt: "Colorful rainbow stripe foil fabric surface with 4-way stretch for performance apparel",
      },
      {
        src: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-4.webp",
        webp: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-4.webp",
        alt: "Close-up of metallic rainbow stripe foil 4-way stretch fabric surface",
      },
      {
        src: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-5.webp",
        webp: "/images/products/H2013060102/main/rainbow-stripe-foil-4-way-stretch-fabric-main-5.webp",
        alt: "Rainbow stripe reflective foil stretch fabric close-up for dancewear and carnival costumes",
      },
    ],
    galleryMainPath: "/images/products/H2013060102/main/",
    galleryImages: ["rainbow-stripe-foil-4-way-stretch-fabric-main-1.webp", "rainbow-stripe-foil-4-way-stretch-fabric-main-2.webp", "rainbow-stripe-foil-4-way-stretch-fabric-main-3.webp", "rainbow-stripe-foil-4-way-stretch-fabric-main-4.webp", "rainbow-stripe-foil-4-way-stretch-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013060102/detail/",
    video: null,
    shortIntro:
      "Rainbow stripe foil stretch fabric with 4-way stretch, available in 2 colors for dance costumes, stagewear, performance apparel and carnival costumes.",
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
    sampleNote: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping.",
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
    detailImageAlts: {
      "rainbow-stripe-foil-4-way-stretch-fabric-detail-1.webp": "Rainbow stripe metallic foil stretch fabric detail showing reflective stripe direction",
      "rainbow-stripe-foil-4-way-stretch-fabric-detail-2.webp": "Close-up of colorful rainbow stripe foil surface on 4-way stretch fabric",
      "rainbow-stripe-foil-4-way-stretch-fabric-detail-3.webp": "Rainbow stripe foil fabric texture for dance costume and stagewear sourcing",
      "rainbow-stripe-foil-4-way-stretch-fabric-detail-4.webp": "Polyester spandex stretch fabric with colorful rainbow stripe foil finish",
      "rainbow-stripe-foil-4-way-stretch-fabric-detail-5.webp": "Rainbow stripe foil 4-way stretch fabric detail for performance apparel buyers",
      "rainbow-stripe-foil-4-way-stretch-fabric-detail-6.webp": "Reflective rainbow stripe foil fabric surface for carnival costume production",
      "rainbow-stripe-foil-4-way-stretch-fabric-detail-7.webp": "Wholesale rainbow stripe foil stretch fabric detail for US fabric buyers",
    },
    detailImages: ["rainbow-stripe-foil-4-way-stretch-fabric-detail-1.webp", "rainbow-stripe-foil-4-way-stretch-fabric-detail-2.webp", "rainbow-stripe-foil-4-way-stretch-fabric-detail-3.webp", "rainbow-stripe-foil-4-way-stretch-fabric-detail-4.webp", "rainbow-stripe-foil-4-way-stretch-fabric-detail-5.webp", "rainbow-stripe-foil-4-way-stretch-fabric-detail-6.webp", "rainbow-stripe-foil-4-way-stretch-fabric-detail-7.webp"],
  },
  {
    slug: "plain-iridescent-laser-spandex-4-way-stretch",
    metaTitle: "Iridescent Laser Foil Spandex | Nixia Fabric",
    metaDesc:
      "Iridescent laser foil spandex with 4-way stretch for dancewear, stage costumes and performance wear. Ready stock, free stock samples and a 100 m / 109 yd MOQ. Custom development is available.",
    title: "Iridescent Spandex Laser Foil 4-Way Stretch Fabric",
    sku: "H2013090102",
    mainImageUrl: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-1.webp",
    mainImageWebp: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-1.webp",
    mainImageAlt:
      "Iridescent laser foil spandex 4-way stretch fabric for dancewear and stage costumes",
    imageList: [
      {
        src: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-1.webp",
        webp: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-1.webp",
        alt: "Iridescent laser foil spandex 4-way stretch fabric main view for dancewear",
      },
      {
        src: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-2.webp",
        webp: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-2.webp",
        alt: "Close-up of color-shifting iridescent laser foil 4-way stretch fabric surface",
      },
      {
        src: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-3.webp",
        webp: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-3.webp",
        alt: "Reflective iridescent laser foil stretch fabric surface for stage costumes",
      },
      {
        src: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-4.webp",
        webp: "/images/products/H2013090102/main/plain-iridescent-laser-spandex-4-way-stretch-main-4.webp",
        alt: "Iridescent laser foil spandex fabric texture for fitted performance apparel",
      },
    ],
    galleryMainPath: "/images/products/H2013090102/main/",
    galleryImages: ["plain-iridescent-laser-spandex-4-way-stretch-main-1.webp", "plain-iridescent-laser-spandex-4-way-stretch-main-2.webp", "plain-iridescent-laser-spandex-4-way-stretch-main-3.webp", "plain-iridescent-laser-spandex-4-way-stretch-main-4.webp"],
    detailImagePath:
      "/images/products/H2013090102/detail/",
    video: null,
    shortIntro:
      "Iridescent laser foil spandex fabric with 4-way stretch for dancewear, stage costumes, fitted performance apparel and carnival costumes.",
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
      { label: "Sample", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
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
    sampleNote: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping.",
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
          "Yes. This is an in-stock product. The stock sample is free and prepared in 1-3 working days. The buyer covers international shipping.",
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
    detailImageAlts: {
      "plain-iridescent-laser-spandex-4-way-stretch-detail-1.webp": "Iridescent laser foil spandex fabric detail showing color-shifting reflective surface",
      "plain-iridescent-laser-spandex-4-way-stretch-detail-2.webp": "Close-up of 4-way stretch iridescent laser foil fabric for dancewear sourcing",
      "plain-iridescent-laser-spandex-4-way-stretch-detail-3.webp": "Iridescent spandex stretch fabric texture for stage costume production",
      "plain-iridescent-laser-spandex-4-way-stretch-detail-4.webp": "Reflective laser foil surface on stretch spandex fabric for fitted apparel",
    },
    detailImages: ["plain-iridescent-laser-spandex-4-way-stretch-detail-1.webp", "plain-iridescent-laser-spandex-4-way-stretch-detail-2.webp", "plain-iridescent-laser-spandex-4-way-stretch-detail-3.webp", "plain-iridescent-laser-spandex-4-way-stretch-detail-4.webp"],
  },
  {
    slug: "rainbow-iridescent-laser-foil-nylon-spandex-fabric",
    metaTitle: "Rainbow Iridescent Laser Foil Fabric | Nixia Fabric",
    metaDesc:
      "Rainbow iridescent laser foil on a 4-way stretch nylon-spandex base for bodysuits, swimwear and stagewear. Made to order with a 100 m / 109 yd MOQ. Custom colors and samples are available.",
    title: "Rainbow Iridescent Laser Foil Nylon-Spandex 4-Way Stretch Fabric",
    sku: "H2013120101",
    mainImageUrl: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-1.webp",
    mainImageAlt:
      "Rainbow iridescent laser foil nylon spandex 4-way stretch fabric for swimwear and bodysuits",
    imageList: [
      {
        src: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-1.webp",
        webp: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-1.webp",
        alt: "Rainbow iridescent laser foil nylon spandex 4-way stretch fabric main view for bodysuits",
      },
      {
        src: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-2.webp",
        webp: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-2.webp",
        alt: "Rainbow iridescent laser foil stretch fabric drape with glossy color-shifting surface",
      },
      {
        src: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-3.webp",
        webp: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-3.webp",
        alt: "Nylon spandex 4-way stretch laser foil fabric for swimwear and fitted apparel",
      },
      {
        src: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-4.webp",
        webp: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-4.webp",
        alt: "Rainbow iridescent laser foil nylon spandex fabric surface for bodysuits and dancewear",
      },
      {
        src: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-5.webp",
        webp: "/images/products/H2013120101/main/rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-5.webp",
        alt: "Close-up of rainbow iridescent laser foil surface on 4-way stretch fabric",
      },
    ],
    galleryMainPath: "/images/products/H2013120101/main/",
    galleryImages: ["rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-1.webp", "rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-2.webp", "rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-3.webp", "rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-4.webp", "rainbow-iridescent-laser-foil-nylon-spandex-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013120101/detail/",
    video: null,
    shortIntro:
      "Rainbow iridescent laser foil nylon spandex fabric with 4-way stretch, available in 15 colors for bodysuits, swimwear, dancewear and stage costumes.",
    fullDescription:
      "Rainbow iridescent laser foil on a 4-way stretch nylon-spandex base for bodysuits, swimwear and stagewear.",
    specs: {
      width: "150 cm / 59 in",
      weight: "180 GSM",
      baseMaterial: "92% Polyester 8% Spandex",
      thickness: "",
      moq: "100 m / 109 yd",
      leadTime: "To be confirmed",
    },
    specTable: [
      { label: "Product Type", value: "Rainbow Iridescent Laser Foil Nylon-Spandex 4-Way Stretch Fabric" },
      { label: "Surface Effect", value: "Rainbow iridescent laser foil" },
      { label: "Base Fabric", value: "92% Polyester 8% Spandex" },
      { label: "Stretch", value: "4-Way Stretch" },
      { label: "Width", value: "150 cm / 59 in" },
      { label: "Weight", value: "180 GSM" },
      { label: "Color", value: "15 colors available; custom colors on request" },
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Density", value: "110T" },
      { label: "Yarn Count", value: "75D*70D" },
      { label: "Finishing", value: "Hot-stamping foil" },
      { label: "Pattern / Construction", value: "Hot-stamping foil" },
      { label: "Typical Applications", value: "Bodysuits, swimwear, dancewear, stage costumes, performance outfits" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "Factory wholesale supply with OEM/ODM support" },
      { label: "Sample", value: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping." },
      { label: "Bulk Lead time", value: "7-15 working days" },
      { label: "Available Colors", value: "15 colors available; custom colors on request" },
      { label: "OEM / ODM", value: "Custom colors and OEM/ODM support available" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "To be confirmed in quotation" },
    ],
    applications: [
      "Bodysuits",
      "Swimwear",
      "Dancewear",
      "Stage Costumes",
      "Performance Outfits",
    ],
    inStock: false,
    stockStatus: "Made to Order",
    badge: "15 colors",
    colorCount: 15,
    tags: ["rainbow", "iridescent", "laser-foil", "nylon-spandex", "4-way-stretch", "bodysuit", "swimwear", "dancewear", "stage-costume"],
    availableColors: "15 colors available; custom colors on request",
    sampleNote: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping.",
    customizationNote: "Custom colors and OEM/ODM support available",
    packaging: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement",
    tradeTerms: "To be confirmed in quotation",
    heroHighlights: [
      "Rainbow Iridescent Laser Foil",
      "Nylon-Spandex Blend",
      "4-Way Stretch",
      "150 cm / 59 in Width",
      "180 GSM Weight",
      "MOQ 100 m / 109 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Iridescent Laser Foil",
        desc: "A rainbow iridescent laser foil surface shifts with light and viewing angle for high-impact bodysuits, swimwear and stagewear.",
      },
      {
        title: "4-Way Stretch",
        desc: "The source data confirms a 4-way stretch construction for fitted apparel and movement-focused garments.",
      },
      {
        title: "Nylon-Spandex Blend",
        desc: "The source data lists a 92% polyester and 8% spandex base, suitable for stretch apparel development.",
      },
      {
        title: "15 Color Options",
        desc: "The product data lists 15 available colors, with custom color requirements available on request.",
      },
      {
        title: "Factory Wholesale Support",
        desc: "Factory wholesale supply and OEM/ODM support are available for buyers and apparel manufacturers.",
      },
    ],
    valueStory: {
      title: "Why Choose This Rainbow Iridescent Nylon-Spandex Fabric?",
      body: "This product combines a rainbow iridescent laser foil surface with a 4-way stretch nylon-spandex base, giving bodysuit, swimwear and stagewear buyers a reflective fabric direction with confirmed width, weight, MOQ, density, yarn count and color policy from the product data sheet.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Bodysuits",
        desc: "4-way stretch supports fitted bodysuit development where shine and movement both matter.",
      },
      {
        title: "Swimwear",
        desc: "A stretch nylon-spandex base can be sampled for swimwear styles that need a reflective iridescent surface.",
      },
      {
        title: "Dancewear",
        desc: "The stretch construction and laser foil finish support dancewear with strong lighting response.",
      },
      {
        title: "Stage Costumes",
        desc: "Rainbow iridescent reflection helps stage costume panels stand out under show lighting.",
      },
    ],
    stockDevelopment: [
      {
        title: "15 Color Options",
        desc: "The product data lists 15 colors, with selected color availability confirmed before quotation.",
      },
      {
        title: "Sample Review",
        desc: "Request a sample to review the iridescent effect, stretch, hand-feel and sewing behavior.",
      },
      {
        title: "Custom Development",
        desc: "Custom colors and OEM/ODM requirements can be reviewed for qualified wholesale projects.",
      },
    ],
    sampleCta: {
      title: "Need a Rainbow Iridescent Nylon-Spandex Fabric?",
      body: "Request a sample to review the rainbow iridescent foil effect, 4-way stretch, hand-feel and sewing performance before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to review the rainbow iridescent foil effect, 4-way stretch, hand-feel and sewing performance before production.",
    faqList: [
      {
        question: "What is this rainbow iridescent laser foil fabric used for?",
        answer:
          "The source data recommends bodysuits, swimwear, dancewear, stage costumes and performance outfits.",
      },
      {
        question: "What is the MOQ?",
        answer:
          "The confirmed MOQ is 100 m / 109 yd.",
      },
      {
        question: "Does this fabric have 4-way stretch?",
        answer:
          "Yes. The product data lists this as a 4-way stretch fabric.",
      },
      {
        question: "How many colors are available?",
        answer:
          "The product data lists 15 colors available, with custom colors on request.",
      },
      {
        question: "Can I request a sample before bulk production?",
        answer:
          "Yes. A physical sample is recommended so you can confirm the rainbow iridescent surface, 4-way stretch, hand-feel and sewing performance.",
      },
    ],
    skuImages: [],
    applicationImageAlts: {
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-application-1.webp": "Rainbow iridescent laser foil 4-way stretch fabric application for bodysuits and swimwear design",
    },
    detailImageAlts: {
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-1.webp": "Close-up detail of rainbow iridescent laser foil on nylon spandex stretch fabric",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-2.webp": "Reflective rainbow laser foil fabric surface for bodysuit and swimwear sourcing",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-3.webp": "4-way stretch nylon spandex fabric with rainbow iridescent foil finish",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-4.webp": "Rainbow iridescent foil stretch fabric detail for dancewear and stage costumes",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-5.webp": "Color-shifting laser foil surface on stretch nylon spandex base",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-6.webp": "Rainbow iridescent laser foil fabric close-up for color and surface detail",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-7.webp": "Wholesale nylon spandex 4-way stretch laser foil fabric detail",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-8.webp": "Iridescent rainbow foil fabric texture for fitted performance garments",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-9.webp": "Laser foil nylon spandex stretch fabric surface for costume manufacturing",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-10.webp": "Rainbow iridescent 4-way stretch fabric detail for swimwear buyers",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-11.webp": "Reflective laser foil stretch fabric texture for bodysuits and dancewear",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-12.webp": "Rainbow iridescent nylon spandex fabric detail for wholesale fabric sourcing",
    },
    detailImages: [
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-1.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-2.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-3.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-4.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-5.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-6.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-7.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-8.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-9.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-10.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-11.webp",
      "rainbow-iridescent-laser-foil-nylon-spandex-fabric-detail-12.webp",
    ],
  },
  {
    slug: "gradient-rainbow-dot-foil-knit-fabric",
    metaTitle: "Gradient Rainbow Dot Foil Fabric | Nixia Fabric",
    metaDesc:
      "Gradient rainbow dot foil knit fabric for stage costumes, performance wear and costume accessories. Made to order with a 200 m / 219 yd MOQ. Custom colors, samples and wholesale quotes are available.",
    title: "Gradient Rainbow Dot Foil Knit Fabric for Stage Costumes",
    sku: "H2013120103",
    mainImageUrl: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-1.webp",
    mainImageAlt:
      "Gradient rainbow dot foil knit fabric for stage costumes and dancewear",
    imageList: [
      {
        src: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-1.webp",
        webp: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-1.webp",
        alt: "Gradient rainbow dot foil knit fabric main view for stage costumes",
      },
      {
        src: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-2.webp",
        webp: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-2.webp",
        alt: "Close-up of gradient rainbow dot foil knit fabric with reflective dot pattern",
      },
      {
        src: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-3.webp",
        webp: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-3.webp",
        alt: "Gradient rainbow dot foil knit fabric drape for dancewear and costume production",
      },
      {
        src: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-4.webp",
        webp: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-4.webp",
        alt: "Gradient rainbow dot foil knit fabric for stage costume panels and performance apparel",
      },
      {
        src: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-5.webp",
        webp: "/images/products/H2013120103/main/gradient-rainbow-dot-foil-knit-fabric-main-5.webp",
        alt: "Lightweight gradient rainbow dot foil knit fabric texture detail",
      },
    ],
    galleryMainPath: "/images/products/H2013120103/main/",
    galleryImages: ["gradient-rainbow-dot-foil-knit-fabric-main-1.webp", "gradient-rainbow-dot-foil-knit-fabric-main-2.webp", "gradient-rainbow-dot-foil-knit-fabric-main-3.webp", "gradient-rainbow-dot-foil-knit-fabric-main-4.webp", "gradient-rainbow-dot-foil-knit-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013120103/detail/",
    video: null,
    shortIntro:
      "Gradient rainbow dot foil knit fabric with 15 color options for stage costumes, dancewear, performance apparel and decorative costume panels.",
    fullDescription:
      "Gradient rainbow dot foil on a lightweight knit fabric for stage costumes, performance wear and colorful costume accessories.",
    specs: {
      width: "150 cm / 59 in",
      weight: "90 GSM",
      baseMaterial: "92% Polyester 8% Spandex",
      thickness: "",
      moq: "200 m / 219 yd",
      leadTime: "To be confirmed",
    },
    specTable: [
      { label: "Product Type", value: "Gradient Rainbow Dot Foil Knit Fabric" },
      { label: "Surface Effect", value: "Gradient rainbow dot foil" },
      { label: "Base Fabric", value: "92% Polyester 8% Spandex" },
      { label: "Stretch", value: "Slight stretch" },
      { label: "Width", value: "150 cm / 59 in" },
      { label: "Weight", value: "90 GSM" },
      { label: "Color", value: "15 colors available; custom colors on request" },
      { label: "MOQ", value: "200 m / 219 yd" },
      { label: "Density", value: "To be confirmed" },
      { label: "Yarn Count", value: "30D" },
      { label: "Finishing", value: "Hot-stamping foil" },
      { label: "Pattern / Construction", value: "Knit jacquard" },
      { label: "Typical Applications", value: "Stage costumes, performance wear, dancewear, costume accessories" },
    ],
    b2bTable: [
      { label: "MOQ", value: "200 m / 219 yd" },
      { label: "Supply type", value: "Factory wholesale supply with OEM/ODM support" },
      { label: "Sample", value: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping." },
      { label: "Bulk Lead time", value: "7-15 working days" },
      { label: "Available Colors", value: "15 colors available; custom colors on request" },
      { label: "OEM / ODM", value: "Custom colors and OEM/ODM support available" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "To be confirmed in quotation" },
    ],
    applications: [
      "Stage Costumes",
      "Performance Wear",
      "Dancewear",
      "Costume Accessories",
    ],
    inStock: false,
    stockStatus: "Made to Order",
    badge: "15 colors",
    colorCount: 15,
    tags: ["gradient", "rainbow-dot", "dot-foil", "knit-jacquard", "slight-stretch", "stage-costume", "performance-wear", "dancewear", "costume-accessories"],
    availableColors: "15 colors available; custom colors on request",
    sampleNote: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping.",
    customizationNote: "Custom colors and OEM/ODM support available",
    packaging: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement",
    tradeTerms: "To be confirmed in quotation",
    heroHighlights: [
      "Gradient Rainbow Dot Foil",
      "Knit Jacquard",
      "Slight Stretch",
      "150 cm / 59 in Width",
      "90 GSM Weight",
      "MOQ 200 m / 219 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Gradient Rainbow Effect",
        desc: "The source data describes a colorful gradient rainbow foil effect for strong stage and costume visibility.",
      },
      {
        title: "Dot Foil Surface",
        desc: "The dot foil finish creates a textured reflective look for performance apparel and accessories.",
      },
      {
        title: "Lightweight Knit Fabric",
        desc: "A 90 GSM knit fabric base supports lightweight costume panels and decorative apparel uses.",
      },
      {
        title: "Knit Jacquard Construction",
        desc: "The pattern construction is listed as knit jacquard in the product data sheet.",
      },
      {
        title: "15 Color Options",
        desc: "The product data lists 15 available colors, with custom colors available on request.",
      },
      {
        title: "Factory Wholesale Support",
        desc: "Factory wholesale supply and OEM/ODM support are available for buyers and apparel manufacturers.",
      },
    ],
    valueStory: {
      title: "Why Choose This Gradient Rainbow Dot Foil Fabric?",
      body: "This product combines a gradient rainbow dot foil surface with a lightweight knit jacquard base, giving stage costume, performance wear and costume accessory buyers a colorful reflective fabric direction with confirmed width, weight, MOQ, yarn count and color policy from the product data sheet.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Stage Costumes",
        desc: "Gradient rainbow dot foil creates a bright surface for stage costume panels and showwear.",
      },
      {
        title: "Performance Wear",
        desc: "The lightweight knit base supports decorative performance apparel and event looks.",
      },
      {
        title: "Dancewear",
        desc: "Slight stretch and reflective dots can be sampled for movement-focused dancewear accents.",
      },
      {
        title: "Costume Accessories",
        desc: "The colorful foil effect suits bows, panels and accessory pieces for costume collections.",
      },
    ],
    stockDevelopment: [
      {
        title: "15 Color Options",
        desc: "The product data lists 15 colors, with selected color availability confirmed before quotation.",
      },
      {
        title: "Sample Review",
        desc: "Request a sample to review the gradient rainbow effect, dot foil surface, hand-feel and sewing behavior.",
      },
      {
        title: "Custom Development",
        desc: "Custom colors and OEM/ODM requirements can be reviewed for qualified wholesale projects.",
      },
    ],
    sampleCta: {
      title: "Need a Gradient Rainbow Dot Foil Fabric?",
      body: "Request a sample to review the gradient rainbow dot foil effect, knit base, hand-feel and sewing performance before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to review the gradient rainbow dot foil effect, knit base, hand-feel and sewing performance before production.",
    faqList: [
      {
        question: "What is this gradient rainbow dot foil fabric used for?",
        answer:
          "The source data recommends stage costumes, performance wear, dancewear and costume accessories.",
      },
      {
        question: "What is the MOQ?",
        answer:
          "The confirmed MOQ is 200 m / 219 yd.",
      },
      {
        question: "How many colors are available?",
        answer:
          "The product data lists 15 colors available, with custom colors on request.",
      },
      {
        question: "What is the base material?",
        answer:
          "The product data lists the base material as 92% polyester and 8% spandex.",
      },
      {
        question: "Can I request a sample before bulk production?",
        answer:
          "Yes. A physical sample is recommended so you can confirm the gradient rainbow effect, dot foil surface, hand-feel and sewing performance.",
      },
    ],
    skuImages: [],
    detailImageAlts: {
      "gradient-rainbow-dot-foil-knit-fabric-detail-1.webp": "Gradient rainbow dot foil knit fabric detail showing reflective dot surface",
      "gradient-rainbow-dot-foil-knit-fabric-detail-2.webp": "Close-up of lightweight gradient rainbow dot foil knit fabric texture",
      "gradient-rainbow-dot-foil-knit-fabric-detail-3.webp": "Gradient rainbow foil dots on knit fabric for stage costume sourcing",
      "gradient-rainbow-dot-foil-knit-fabric-detail-4.webp": "Reflective gradient dot foil fabric surface for dancewear panels",
      "gradient-rainbow-dot-foil-knit-fabric-detail-5.webp": "Lightweight polyester spandex knit fabric with rainbow dot foil finish",
      "gradient-rainbow-dot-foil-knit-fabric-detail-6.webp": "Gradient rainbow dot foil knit fabric detail for performance apparel",
      "gradient-rainbow-dot-foil-knit-fabric-detail-7.webp": "Rainbow dot foil fabric texture for costume accessory production",
      "gradient-rainbow-dot-foil-knit-fabric-detail-8.webp": "Color-shifting dot foil surface on lightweight stretch knit fabric",
      "gradient-rainbow-dot-foil-knit-fabric-detail-9.webp": "Wholesale gradient rainbow dot foil fabric detail for US buyers",
      "gradient-rainbow-dot-foil-knit-fabric-detail-10.webp": "Knit jacquard base with reflective gradient rainbow foil dots",
      "gradient-rainbow-dot-foil-knit-fabric-detail-11.webp": "Gradient rainbow dot foil knit fabric close-up for color and surface review",
    },
    detailImages: [
      "gradient-rainbow-dot-foil-knit-fabric-detail-1.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-2.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-3.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-4.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-5.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-6.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-7.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-8.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-9.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-10.webp",
      "gradient-rainbow-dot-foil-knit-fabric-detail-11.webp",
    ],
  },
  {
    slug: "rainbow-fingerprint-dot-foil-ice-silk-fabric",
    metaTitle: "Rainbow Fingerprint Dot Foil Fabric | Nixia Fabric",
    metaDesc:
      "Rainbow fingerprint-dot foil on an ice-silk stretch knit base for dresses, tops, formalwear and performance garments. Made to order with a 200 m / 219 yd MOQ. Request a sample or custom quotation.",
    title: "Rainbow Fingerprint Dot Foil Stretch Knit Fabric",
    sku: "H2013120104",
    mainImageUrl: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-1.webp",
    mainImageAlt:
      "Rainbow fingerprint dot foil stretch knit fabric for dresses, tops and dancewear",
    imageList: [
      {
        src: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-1.webp",
        webp: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-1.webp",
        alt: "Rainbow fingerprint dot foil stretch knit fabric main view for dresses",
      },
      {
        src: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-2.webp",
        webp: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-2.webp",
        alt: "Rainbow fingerprint dot foil stretch fabric color stack for apparel buyers",
      },
      {
        src: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-3.webp",
        webp: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-3.webp",
        alt: "Close-up of rainbow fingerprint dot foil stretch knit fabric surface",
      },
      {
        src: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-4.webp",
        webp: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-4.webp",
        alt: "Fingerprint dot foil knit fabric backing and reflective surface detail",
      },
      {
        src: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-5.webp",
        webp: "/images/products/H2013120104/main/rainbow-fingerprint-dot-foil-ice-silk-fabric-main-5.webp",
        alt: "Ice-silk stretch knit fabric with rainbow fingerprint dot foil finish",
      },
    ],
    galleryMainPath: "/images/products/H2013120104/main/",
    galleryImages: ["rainbow-fingerprint-dot-foil-ice-silk-fabric-main-1.webp", "rainbow-fingerprint-dot-foil-ice-silk-fabric-main-2.webp", "rainbow-fingerprint-dot-foil-ice-silk-fabric-main-3.webp", "rainbow-fingerprint-dot-foil-ice-silk-fabric-main-4.webp", "rainbow-fingerprint-dot-foil-ice-silk-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013120104/detail/",
    video: null,
    shortIntro:
      "Rainbow fingerprint dot foil stretch knit fabric for dresses, tops, formalwear, stage costumes and dancewear, with custom colors available on request.",
    fullDescription:
      "Rainbow fingerprint-dot foil on an ice-silk knit base for dresses, tops, formalwear and performance garments.",
    specs: {
      width: "145 cm / 57 in",
      weight: "150 GSM",
      baseMaterial: "98% Polyester 2% Spandex",
      thickness: "",
      moq: "200",
      leadTime: "To be confirmed",
    },
    specTable: [
      { label: "Product Type", value: "Rainbow Fingerprint Dot Foil Ice-Silk Knit Fabric" },
      { label: "Surface Effect", value: "Rainbow fingerprint-dot foil" },
      { label: "Base Fabric", value: "98% Polyester / 2% Spandex" },
      { label: "Stretch", value: "4-Way Stretch" },
      { label: "Width", value: "145 cm / 57 in" },
      { label: "Weight", value: "150 GSM" },
      { label: "Color", value: "To be confirmed; custom colors on request" },
      { label: "MOQ", value: "200 m / 219 yd" },
      { label: "Density", value: "To be confirmed" },
      { label: "Yarn Count", value: "30s" },
      { label: "Finishing", value: "Hot-stamping foil" },
      { label: "Pattern / Construction", value: "Hot-stamping foil" },
      { label: "Typical Applications", value: "Dresses, tops, formalwear, stage costumes, dancewear" },
    ],
    b2bTable: [
      { label: "MOQ", value: "200 m / 219 yd" },
      { label: "Supply type", value: "Factory wholesale supply with OEM/ODM support" },
      { label: "Sample", value: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping." },
      { label: "Bulk Lead time", value: "7-15 working days" },
      { label: "Available Colors", value: "To be confirmed; custom colors on request" },
      { label: "OEM / ODM", value: "Custom colors and OEM/ODM support available" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "To be confirmed in quotation" },
    ],
    applications: [
      "Dresses",
      "Tops",
      "Formalwear",
      "Stage Costumes",
      "Dancewear",
    ],
    inStock: false,
    stockStatus: "Made to Order",
    badge: "Color TBC",
    colorCount: 0,
    tags: ["rainbow-fingerprint-dot", "dot-foil", "ice-silk-knit", "stretch-knit", "dresses", "tops", "formalwear", "stage-costume", "dancewear"],
    availableColors: "To be confirmed; custom colors on request",
    sampleNote: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping.",
    customizationNote: "Custom colors and OEM/ODM support available",
    packaging: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement",
    tradeTerms: "To be confirmed in quotation",
    heroHighlights: [
      "Rainbow Fingerprint-Dot Foil",
      "Ice-Silk Knit Base",
      "4-Way Stretch",
      "145 cm / 57 in Width",
      "150 GSM Weight",
      "MOQ 200 m / 219 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Fingerprint Dot Foil",
        desc: "The source data identifies a rainbow fingerprint-dot foil effect for a bright decorative garment surface.",
      },
      {
        title: "Ice-Silk Knit Direction",
        desc: "The product name and description position this fabric on an ice-silk knit base for apparel sampling.",
      },
      {
        title: "Stretch Construction",
        desc: "The source data confirms a 4-way stretch construction for fitted apparel and performance garments.",
      },
      {
        title: "Dress and Top Applications",
        desc: "The source data recommends dresses, tops, formalwear and performance garments.",
      },
      {
        title: "Confirmed Composition",
        desc: "The base material is confirmed as 98% polyester / 2% spandex.",
      },
      {
        title: "Confirmed Production Details",
        desc: "The source data confirms 145 cm width, 150 GSM weight, 200 m MOQ, 30s yarn count and hot-stamping foil finishing.",
      },
      {
        title: "Custom Color Support",
        desc: "Color availability is not confirmed in the source row, but custom colors can be reviewed on request.",
      },
      {
        title: "Factory Wholesale Support",
        desc: "Factory wholesale supply and OEM/ODM support are available for buyers and apparel manufacturers.",
      },
    ],
    valueStory: {
      title: "Why Choose This Rainbow Fingerprint Dot Foil Fabric?",
      body: "This product combines a rainbow fingerprint-dot foil surface with a 98% polyester / 2% spandex, 4-way stretch knit base for dresses, tops, formalwear, stage costumes and dancewear. The confirmed 145 cm width, 150 GSM weight and 200 m MOQ support production planning, while color availability and compliance details can be confirmed during sampling and quotation review.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Dresses",
        desc: "The rainbow fingerprint-dot foil surface can be sampled for decorative dress panels and bright occasionwear.",
      },
      {
        title: "Tops",
        desc: "The ice-silk knit direction supports lightweight top concepts once hand-feel and stretch are confirmed.",
      },
      {
        title: "Formalwear",
        desc: "The reflective foil effect can be reviewed for formalwear accents and special-event apparel.",
      },
      {
        title: "Stage Costumes",
        desc: "The rainbow foil surface offers a visible stage look for performance costume projects.",
      },
      {
        title: "Dancewear",
        desc: "The 4-way stretch base supports dancewear concepts, with sample review recommended for recovery and sewing performance.",
      },
    ],
    stockDevelopment: [
      {
        title: "Partial Source Data",
        desc: "Width, weight, MOQ, base material, stretch, yarn count and finishing are confirmed; color count, density and compliance details remain to be confirmed.",
      },
      {
        title: "Sample Review",
        desc: "Request a sample to review the fingerprint-dot foil effect, 4-way stretch recovery, hand-feel and sewing performance.",
      },
      {
        title: "Custom Development",
        desc: "Custom colors and OEM/ODM requirements can be reviewed for qualified wholesale projects.",
      },
    ],
    sampleCta: {
      title: "Need a Rainbow Fingerprint Dot Foil Fabric?",
      body: "Request a sample to review the rainbow fingerprint-dot foil effect, 4-way stretch recovery, hand-feel and sewing performance before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to review the rainbow fingerprint-dot foil effect, 4-way stretch recovery, hand-feel and sewing performance before production.",
    faqList: [
      {
        question: "What is this rainbow fingerprint dot foil fabric used for?",
        answer:
          "The source data recommends dresses, tops, formalwear, stage costumes and dancewear.",
      },
      {
        question: "What is the MOQ?",
        answer:
          "The MOQ is 200 m / 219 yd.",
      },
      {
        question: "How many colors are available?",
        answer:
          "Color availability is to be confirmed; custom colors can be reviewed on request.",
      },
      {
        question: "What fabric specifications still need confirmation?",
        answer:
          "Color count, density, testing and compliance details should be confirmed before bulk quotation. The source data confirms 145 cm width, 150 GSM weight, 98% polyester / 2% spandex, 4-way stretch, 30s yarn count and hot-stamping foil finishing.",
      },
      {
        question: "Can I request a sample before bulk production?",
        answer:
          "Yes. A physical sample is recommended so you can confirm the fingerprint-dot foil surface, hand-feel, stretch and sewing performance.",
      },
    ],
    skuImages: [],
    detailImageAlts: {
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-1.webp": "Rainbow fingerprint dot foil stretch knit fabric detail for dresses and tops",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-2.webp": "Close-up of fingerprint dot foil surface on ice-silk stretch knit fabric",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-3.webp": "Rainbow foil dot texture for formalwear and stage costume sourcing",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-4.webp": "Stretch knit fabric with rainbow fingerprint dot foil finish",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-5.webp": "Reflective fingerprint dot foil surface for dancewear and apparel buyers",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-6.webp": "Ice-silk knit fabric detail showing rainbow dot foil shine",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-7.webp": "Rainbow fingerprint dot foil fabric texture for decorative garment panels",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-8.webp": "Close-up of 4-way stretch knit fabric with rainbow fingerprint dot foil effect",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-9.webp": "Rainbow fingerprint dot foil fabric detail for wholesale sourcing",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-10.webp": "Reflective fingerprint dot foil stretch knit fabric for stage costume production",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-11.webp": "Rainbow fingerprint dot foil surface detail on polyester spandex stretch knit fabric",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-12.webp": "Fingerprint dot foil knit fabric detail for color and surface review",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-13.webp": "Rainbow fingerprint dot foil stretch fabric texture for dresses, tops and dancewear",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-14.webp": "Wholesale rainbow fingerprint dot foil fabric detail for US apparel buyers",
    },
    detailImages: [
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-1.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-2.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-3.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-4.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-5.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-6.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-7.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-8.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-9.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-10.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-11.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-12.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-13.webp",
      "rainbow-fingerprint-dot-foil-ice-silk-fabric-detail-14.webp",
    ],
  },
  {
    slug: "holographic-mermaid-scale-milk-silk-stretch-fabric",
    metaTitle: "Holographic Mermaid Scale Stretch Fabric | Nixia Fabric",
    metaDesc:
      "Holographic mermaid scale foil on a high-stretch milk-silk base for mermaid skirts, stage costumes and dancewear. Made to order with a 100 m / 109 yd MOQ. Samples and custom colors are available.",
    title: "Holographic Mermaid Scale Milk Silk 4-Way Stretch Fabric",
    sku: "H2013120105",
    mainImageUrl: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-1.webp",
    mainImageAlt:
      "Holographic mermaid scale milk silk 4-way stretch fabric for dance costumes and mermaid skirts",
    imageList: [
      {
        src: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-1.webp",
        webp: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-1.webp",
        alt: "Holographic mermaid scale milk silk 4-way stretch fabric main view for dance costumes",
      },
      {
        src: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-2.webp",
        webp: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-2.webp",
        alt: "Pink holographic mermaid scale stretch fabric with reflective foil surface for dancewear",
      },
      {
        src: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-3.webp",
        webp: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-3.webp",
        alt: "Holographic mermaid scale stretch fabric color stack with 11 wholesale color options",
      },
      {
        src: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-4.webp",
        webp: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-4.webp",
        alt: "Close-up of holographic mermaid scale foil surface on stretch milk silk fabric",
      },
      {
        src: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-5.webp",
        webp: "/images/products/H2013120105/main/holographic-mermaid-scale-milk-silk-stretch-fabric-main-5.webp",
        alt: "Gold holographic mermaid scale milk silk stretch fabric for mermaid skirts and costumes",
      },
    ],
    galleryMainPath: "/images/products/H2013120105/main/",
    galleryImages: ["holographic-mermaid-scale-milk-silk-stretch-fabric-main-1.webp", "holographic-mermaid-scale-milk-silk-stretch-fabric-main-2.webp", "holographic-mermaid-scale-milk-silk-stretch-fabric-main-3.webp", "holographic-mermaid-scale-milk-silk-stretch-fabric-main-4.webp", "holographic-mermaid-scale-milk-silk-stretch-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013120105/detail/",
    video: null,
    shortIntro:
      "Holographic mermaid scale stretch fabric on a milk-silk spandex base, available in 11 colors for mermaid skirts, dance costumes, stagewear and performance apparel.",
    fullDescription:
      "Holographic mermaid-scale foil on a high-stretch milk-silk base for mermaid skirts, stage costumes and dancewear.",
    specs: {
      width: "150 cm / 59 in",
      weight: "180 GSM",
      baseMaterial: "92% Polyester 8% Spandex",
      thickness: "",
      moq: "100 m / 109 yd",
      leadTime: "To be confirmed",
    },
    specTable: [
      { label: "Product Type", value: "Holographic Mermaid Scale Milk Silk 4-Way Stretch Fabric" },
      { label: "Surface Effect", value: "Holographic mermaid-scale foil" },
      { label: "Base Fabric", value: "92% Polyester 8% Spandex" },
      { label: "Stretch", value: "High stretch / 4-way stretch" },
      { label: "Width", value: "150 cm / 59 in" },
      { label: "Weight", value: "180 GSM" },
      { label: "Color", value: "11 colors available; custom colors on request" },
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Density", value: "86T" },
      { label: "Yarn Count", value: "To be confirmed" },
      { label: "Finishing", value: "Hot-stamping foil" },
      { label: "Pattern / Construction", value: "Hot-stamping foil mermaid-scale pattern" },
      { label: "Typical Applications", value: "Mermaid skirts, stage costumes, dancewear, performance outfits" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "Factory wholesale supply with OEM/ODM support" },
      { label: "Sample", value: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping." },
      { label: "Bulk Lead time", value: "7-15 working days" },
      { label: "Available Colors", value: "11 colors available; custom colors on request" },
      { label: "OEM / ODM", value: "Custom colors and OEM/ODM support available" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "To be confirmed in quotation" },
    ],
    applications: [
      "Mermaid Skirts",
      "Stage Costumes",
      "Dancewear",
      "Performance Outfits",
    ],
    inStock: false,
    stockStatus: "Made to Order",
    badge: "11 colors",
    colorCount: 11,
    tags: ["holographic", "mermaid-scale", "milk-silk", "4-way-stretch", "high-stretch", "stage-costume", "dancewear", "performance-outfit", "mermaid-skirts"],
    availableColors: "11 colors available; custom colors on request",
    sampleNote: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping.",
    customizationNote: "Custom colors and OEM/ODM support available",
    packaging: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement",
    tradeTerms: "To be confirmed in quotation",
    heroHighlights: [
      "Holographic Mermaid Scale Foil",
      "Milk-Silk Stretch Base",
      "High Stretch / 4-Way Stretch",
      "150 cm / 59 in Width",
      "180 GSM Weight",
      "MOQ 100 m / 109 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Mermaid-Scale Foil",
        desc: "The source data identifies a holographic mermaid-scale foil effect for bright costume and dancewear projects.",
      },
      {
        title: "High-Stretch Milk-Silk Base",
        desc: "The product uses a milk-silk stretch base with high elasticity for fitted stage garments.",
      },
      {
        title: "4-Way Stretch Direction",
        desc: "The source title and H1 position this fabric as a 4-way stretch option for movement-focused apparel.",
      },
      {
        title: "Confirmed B2B Specs",
        desc: "Width, weight, MOQ, density, color policy and base material are confirmed in the source row.",
      },
      {
        title: "11 Color Options",
        desc: "The product data lists 11 available colors, with custom colors available on request.",
      },
      {
        title: "Factory Wholesale Support",
        desc: "Factory wholesale supply and OEM/ODM support are available for buyers and apparel manufacturers.",
      },
    ],
    valueStory: {
      title: "Why Choose This Holographic Mermaid Scale Fabric?",
      body: "This fabric combines a holographic mermaid-scale foil surface with a high-stretch milk-silk base, giving buyers a strong visual option for mermaid skirts, stage costumes, dancewear and performance outfits. The source row confirms the key procurement facts: 150 cm / 59 in width, 180 GSM weight, 100 m / 109 yd MOQ, 11 colors, 86T density and 92% Polyester 8% Spandex composition.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Mermaid Skirts",
        desc: "The fish-scale holographic surface is suited to mermaid skirt concepts and fantasy costume styling.",
      },
      {
        title: "Stage Costumes",
        desc: "The reflective scale pattern creates strong stage visibility under performance lighting.",
      },
      {
        title: "Dancewear",
        desc: "High stretch supports movement-focused dancewear after sample review for recovery and sewing performance.",
      },
      {
        title: "Performance Outfits",
        desc: "The milk-silk stretch base and foil finish can be sampled for fitted performance garments.",
      },
    ],
    stockDevelopment: [
      {
        title: "11 Color Options",
        desc: "The product data lists 11 colors, with selected color availability confirmed before quotation.",
      },
      {
        title: "Sample Review",
        desc: "Request a sample to review the mermaid-scale foil effect, stretch, hand-feel and sewing behavior.",
      },
      {
        title: "Custom Development",
        desc: "Custom colors and OEM/ODM requirements can be reviewed for qualified wholesale projects.",
      },
    ],
    sampleCta: {
      title: "Need a Holographic Mermaid Scale Stretch Fabric?",
      body: "Request a sample to review the mermaid-scale foil effect, milk-silk stretch base, hand-feel and sewing performance before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to review the mermaid-scale foil effect, milk-silk stretch base, hand-feel and sewing performance before production.",
    faqList: [
      {
        question: "What is this holographic mermaid scale fabric used for?",
        answer:
          "The source data recommends mermaid skirts, stage costumes, dancewear and performance outfits.",
      },
      {
        question: "What is the MOQ?",
        answer:
          "The confirmed MOQ is 100 m / 109 yd.",
      },
      {
        question: "How many colors are available?",
        answer:
          "The product data lists 11 colors available, with custom colors on request.",
      },
      {
        question: "What is the base material?",
        answer:
          "The product data lists the base material as 92% polyester and 8% spandex.",
      },
      {
        question: "Can I request a sample before bulk production?",
        answer:
          "Yes. A physical sample is recommended so you can confirm the mermaid-scale foil surface, 4-way stretch, hand-feel and sewing performance.",
      },
    ],
    skuImages: [],
    applicationImageAlts: {
      "holographic-mermaid-scale-milk-silk-stretch-fabric-application-1.webp": "Holographic mermaid scale stretch fabric application for stage costumes and dancewear design",
    },
    detailImageContext:
      "The close-ups give a clearer look at the mermaid-scale shine, the smooth stretch base and how the colors shift under light.",
    detailImageAlts: {
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-1.webp": "Close-up detail of holographic mermaid scale foil pattern on milk silk stretch fabric",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-2.webp": "Holographic mermaid scale fabric surface showing reflective fish-scale texture",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-3.webp": "Milk silk 4-way stretch fabric with holographic mermaid scale foil finish",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-4.webp": "Mermaid scale foil fabric detail for stage costumes and performance outfits",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-5.webp": "Holographic mermaid scale stretch fabric color and shine detail for dancewear buyers",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-6.webp": "Reflective mermaid scale foil surface on polyester spandex milk silk base",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-7.webp": "Holographic mermaid scale fabric close-up for color and shine review",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-8.webp": "Wholesale holographic mermaid scale stretch fabric detail for US costume buyers",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-9.webp": "4-way stretch mermaid scale foil fabric texture for costume manufacturing",
    },
    detailImages: [
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-1.webp",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-2.webp",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-3.webp",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-4.webp",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-5.webp",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-6.webp",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-7.webp",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-8.webp",
      "holographic-mermaid-scale-milk-silk-stretch-fabric-detail-9.webp",
    ],
  },
  {
    slug: "full-print-hot-stamping-spandex-milk-silk",
    metaTitle: "Full-Print Foil Spandex Fabric | Nixia Fabric",
    metaDesc:
      "Full-print foil spandex milk-silk fabric with 4-way stretch for stage costumes, dancewear and performance outfits. Ready stock, free stock samples and a 100 m / 109 yd MOQ per design. Custom prints are available.",
    title: "Full-Print Foil Spandex Milk-Silk Fabric",
    sku: "P0002",
    mainImageUrl: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-1.webp",
    mainImageWebp: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-1.webp",
    mainImageAlt:
      "Full-print metallic foil spandex milk-silk 4-way stretch fabric for dancewear",
    imageList: [
      {
        src: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-1.webp",
        webp: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-1.webp",
        alt: "Full-print metallic foil spandex milk-silk fabric main view for dancewear",
      },
      {
        src: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-2.webp",
        webp: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-2.webp",
        alt: "All-over metallic foil print stretch fabric drape for performance costume production",
      },
      {
        src: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-3.webp",
        webp: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-3.webp",
        alt: "Full-print metallic foil spandex fabric surface for stage apparel",
      },
      {
        src: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-4.webp",
        webp: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-4.webp",
        alt: "Milk-silk spandex 4-way stretch fabric with all-over printed foil finish",
      },
      {
        src: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-5.webp",
        webp: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-5.webp",
        alt: "Full-print metallic foil stretch fabric close-up for dancewear manufacturers",
      },
      {
        src: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-6.webp",
        webp: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-6.webp",
        alt: "Reflective foil print spandex fabric for festival and carnival costumes",
      },
      {
        src: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-7.webp",
        webp: "/images/products/H2013060101/main/full-print-hot-stamping-spandex-milk-silk-main-7.webp",
        alt: "Wholesale full-print foil spandex fabric color and surface display",
      },
    ],
    galleryMainPath: "/images/products/H2013060101/main/",
    galleryImages: ["full-print-hot-stamping-spandex-milk-silk-main-1.webp", "full-print-hot-stamping-spandex-milk-silk-main-2.webp", "full-print-hot-stamping-spandex-milk-silk-main-3.webp", "full-print-hot-stamping-spandex-milk-silk-main-4.webp", "full-print-hot-stamping-spandex-milk-silk-main-5.webp", "full-print-hot-stamping-spandex-milk-silk-main-6.webp", "full-print-hot-stamping-spandex-milk-silk-main-7.webp"],
    detailImagePath: "/images/products/H2013060101/detail/",
    video: null,
    shortIntro:
      "Full-print foil spandex milk-silk fabric with 4-way stretch, available in 22 stock colors for dancewear, stage costumes, performance costumes and festival apparel.",
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
      { label: "Sampling", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
      { label: "Customization", value: "Custom patterns, colors, width & backing on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤ 500 m / 547 yd; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom color, width, new fabric development & private label available" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    whyChooseHeading: "What Makes This Full-Print Foil Fabric Different?",
    whyChoose: [
      {
        title: "All-Over Foil Print",
        desc: "The foil effect is printed across the fabric rather than limited to a small motif, giving garment panels a continuous metallic appearance.",
      },
      {
        title: "Soft Milk-Silk Ground",
        desc: "The milk-silk spandex base is described as soft and smooth, making it suitable for fitted dancewear, stage costumes and performance outfits.",
      },
      {
        title: "4-Way Stretch With Recovery",
        desc: "The documented 4-way stretch construction recovers after stretching for movement-focused apparel development.",
      },
      {
        title: "Bright Metallic Shine",
        desc: "The foil surface provides a bright metallic finish designed to remain visually strong through wear.",
      },
      {
        title: "22 Stock Colors",
        desc: "The product data lists 22 stock colors, with custom print patterns and foil colors available for bulk development.",
      },
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
    sampleNote: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping.",
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
          "Yes. This is an in-stock product. The stock sample is free and prepared in 1-3 working days. The buyer covers international shipping.",
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
    detailImageAlts: {
      "full-print-hot-stamping-spandex-milk-silk-detail-1.webp": "Full-print metallic foil spandex milk-silk fabric detail showing reflective surface",
      "full-print-hot-stamping-spandex-milk-silk-detail-2.webp": "Close-up of all-over metallic foil print on 4-way stretch milk-silk fabric",
      "full-print-hot-stamping-spandex-milk-silk-detail-3.webp": "Soft stretch spandex fabric with full-print foil finish for dancewear",
      "full-print-hot-stamping-spandex-milk-silk-detail-4.webp": "Reflective foil print fabric texture for stage costume production",
      "full-print-hot-stamping-spandex-milk-silk-detail-5.webp": "Full-print metallic foil spandex fabric detail for performance apparel sourcing",
      "full-print-hot-stamping-spandex-milk-silk-detail-6.webp": "Wholesale milk-silk spandex foil fabric detail for US fabric buyers",
    },
    detailImages: ["full-print-hot-stamping-spandex-milk-silk-detail-1.webp", "full-print-hot-stamping-spandex-milk-silk-detail-2.webp", "full-print-hot-stamping-spandex-milk-silk-detail-3.webp", "full-print-hot-stamping-spandex-milk-silk-detail-4.webp", "full-print-hot-stamping-spandex-milk-silk-detail-5.webp", "full-print-hot-stamping-spandex-milk-silk-detail-6.webp"],
  },
  {
    slug: "double-layer-pleated-foil-knit-fabric",
    metaTitle: "Pleated Foil Knit Fabric | Nixia Fabric",
    metaDesc:
      "Double-layer pleated foil knit fabric for performance skirts, stage costumes, dresses and dancewear. Made to order with a 100 m / 109 yd MOQ. Custom colors, samples and wholesale quotations are available.",
    title: "Double-Layer Pleated Foil Knit Fabric for Performance Skirts",
    sku: "H2013060104",
    mainImageUrl: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-1.webp",
    mainImageAlt:
      "Double-layer pleated foil knit fabric with vertical texture for performance skirts",
    imageList: [
      {
        src: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-1.webp",
        webp: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-1.webp",
        alt: "Double-layer pleated foil knit fabric main view for performance skirts",
      },
      {
        src: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-2.webp",
        webp: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-2.webp",
        alt: "Pleated foil knit fabric surface with vertical metallic texture",
      },
      {
        src: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-3.webp",
        webp: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-3.webp",
        alt: "Double-layer foil knit fabric showing pleated texture and structured shine",
      },
      {
        src: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-4.webp",
        webp: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-4.webp",
        alt: "Pleated foil knit fabric for stage costume and dress production",
      },
      {
        src: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-5.webp",
        webp: "/images/products/H2013060104/main/double-layer-pleated-foil-knit-fabric-main-5.webp",
        alt: "Vertical pleated foil knit fabric detail for apparel manufacturers",
      },
    ],
    galleryMainPath: "/images/products/H2013060104/main/",
    galleryImages: ["double-layer-pleated-foil-knit-fabric-main-1.webp", "double-layer-pleated-foil-knit-fabric-main-2.webp", "double-layer-pleated-foil-knit-fabric-main-3.webp", "double-layer-pleated-foil-knit-fabric-main-4.webp", "double-layer-pleated-foil-knit-fabric-main-5.webp"],
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
      { label: "Sample", value: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping." },
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
    sampleNote: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping.",
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
    detailImageAlts: {
      "double-layer-pleated-foil-knit-fabric-detail-1.webp": "Double-layer pleated foil knit fabric detail showing vertical texture",
      "double-layer-pleated-foil-knit-fabric-detail-2.webp": "Close-up of pleated foil surface for performance skirt sourcing",
      "double-layer-pleated-foil-knit-fabric-detail-3.webp": "Reflective pleated knit fabric texture for stage costume production",
      "double-layer-pleated-foil-knit-fabric-detail-4.webp": "Double-layer foil knit fabric detail for dresses and dancewear",
      "double-layer-pleated-foil-knit-fabric-detail-5.webp": "Pleated foil fabric close-up showing dimensional vertical lines",
      "double-layer-pleated-foil-knit-fabric-detail-6.webp": "Polyester spandex knit fabric with foil pleated finish",
      "double-layer-pleated-foil-knit-fabric-detail-7.webp": "Pleated foil knit fabric detail for formalwear and costume panels",
      "double-layer-pleated-foil-knit-fabric-detail-8.webp": "Reflective vertical pleats on foil knit fabric for stagewear buyers",
      "double-layer-pleated-foil-knit-fabric-detail-9.webp": "Double-layer pleated foil fabric texture for apparel development",
      "double-layer-pleated-foil-knit-fabric-detail-10.webp": "Pleated foil knit fabric close-up for color and surface review",
      "double-layer-pleated-foil-knit-fabric-detail-11.webp": "Wholesale pleated foil knit fabric detail for fabric sourcing",
      "double-layer-pleated-foil-knit-fabric-detail-12.webp": "Structured pleated foil fabric detail for performance skirts",
    },
    detailImages: [
      "double-layer-pleated-foil-knit-fabric-detail-1.webp",
      "double-layer-pleated-foil-knit-fabric-detail-2.webp",
      "double-layer-pleated-foil-knit-fabric-detail-3.webp",
      "double-layer-pleated-foil-knit-fabric-detail-4.webp",
      "double-layer-pleated-foil-knit-fabric-detail-5.webp",
      "double-layer-pleated-foil-knit-fabric-detail-6.webp",
      "double-layer-pleated-foil-knit-fabric-detail-7.webp",
      "double-layer-pleated-foil-knit-fabric-detail-8.webp",
      "double-layer-pleated-foil-knit-fabric-detail-9.webp",
      "double-layer-pleated-foil-knit-fabric-detail-10.webp",
      "double-layer-pleated-foil-knit-fabric-detail-11.webp",
      "double-layer-pleated-foil-knit-fabric-detail-12.webp",
    ],
  },
  {
    slug: "shiny-foil-4-way-stretch-knit-fabric",
    metaTitle: "Shiny Foil Stretch Knit Fabric | Nixia Fabric",
    metaDesc:
      "Shiny foil 4-way stretch knit fabric for stage costumes, dancewear, party apparel and performance wear. Ready stock, free stock samples and a 100 m / 109 yd MOQ. Custom development is available.",
    title: "Shiny Foil 4-Way Stretch Knit Fabric for Performance & Party Wear",
    sku: "H2013060105",
    mainImageUrl: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-1.webp",
    mainImageAlt:
      "Shiny metallic foil 4-way stretch knit fabric for stage costumes and dancewear",
    imageList: [
      {
        src: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-1.webp",
        webp: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-1.webp",
        alt: "Shiny metallic foil 4-way stretch knit fabric main view for stage costumes",
      },
      {
        src: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-2.webp",
        webp: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-2.webp",
        alt: "Close-up of shiny metallic foil stretch knit fabric surface",
      },
      {
        src: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-3.webp",
        webp: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-3.webp",
        alt: "Reflective shiny foil knit fabric showing flexible drape for dancewear",
      },
      {
        src: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-4.webp",
        webp: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-4.webp",
        alt: "Shiny metallic foil stretch fabric for stage costume and performance apparel sourcing",
      },
      {
        src: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-5.webp",
        webp: "/images/products/H2013060105/main/shiny-foil-4-way-stretch-knit-fabric-main-5.webp",
        alt: "Foil-finished 4-way stretch knit fabric detail for apparel manufacturers",
      },
    ],
    galleryMainPath: "/images/products/H2013060105/main/",
    galleryImages: ["shiny-foil-4-way-stretch-knit-fabric-main-1.webp", "shiny-foil-4-way-stretch-knit-fabric-main-2.webp", "shiny-foil-4-way-stretch-knit-fabric-main-3.webp", "shiny-foil-4-way-stretch-knit-fabric-main-4.webp", "shiny-foil-4-way-stretch-knit-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013060105/detail/",
    video: null,
    shortIntro:
      "Shiny foil 4-way stretch knit fabric available in 30 colors for stage costumes, dancewear, performance bodysuits, concert outfits and party apparel.",
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
      { label: "Sample", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
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
    sampleNote: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping.",
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
    detailImageAlts: {
      "shiny-foil-4-way-stretch-knit-fabric-detail-1.webp": "Shiny metallic foil 4-way stretch knit fabric detail showing reflective surface",
      "shiny-foil-4-way-stretch-knit-fabric-detail-2.webp": "Close-up of shiny foil stretch knit fabric for dancewear sourcing",
      "shiny-foil-4-way-stretch-knit-fabric-detail-3.webp": "Reflective shiny foil knit fabric texture for stage costume production",
      "shiny-foil-4-way-stretch-knit-fabric-detail-4.webp": "4-way stretch polyester knit fabric with shiny foil finish",
      "shiny-foil-4-way-stretch-knit-fabric-detail-5.webp": "Shiny foil fabric detail for performance bodysuit development",
      "shiny-foil-4-way-stretch-knit-fabric-detail-6.webp": "Shiny foil stretch knit fabric surface for concert outfit sourcing",
      "shiny-foil-4-way-stretch-knit-fabric-detail-7.webp": "Close-up of shiny foil texture on lightweight stretch knit fabric",
      "shiny-foil-4-way-stretch-knit-fabric-detail-8.webp": "Shiny foil 4-way stretch fabric detail for party apparel",
      "shiny-foil-4-way-stretch-knit-fabric-detail-9.webp": "Reflective foil knit fabric detail for festival costume production",
      "shiny-foil-4-way-stretch-knit-fabric-detail-10.webp": "Wholesale shiny foil stretch fabric close-up for color review",
      "shiny-foil-4-way-stretch-knit-fabric-detail-11.webp": "Shiny foil surface detail on polyester knit performance fabric",
      "shiny-foil-4-way-stretch-knit-fabric-detail-12.webp": "4-way stretch foil fabric texture for fitted stage garments",
      "shiny-foil-4-way-stretch-knit-fabric-detail-13.webp": "Shiny foil knit fabric detail for apparel manufacturer sourcing",
      "shiny-foil-4-way-stretch-knit-fabric-detail-14.webp": "Wholesale shiny foil 4-way stretch knit fabric detail for US buyers",
    },
    detailImages: [
      "shiny-foil-4-way-stretch-knit-fabric-detail-1.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-2.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-3.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-4.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-5.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-6.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-7.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-8.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-9.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-10.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-11.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-12.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-13.webp",
      "shiny-foil-4-way-stretch-knit-fabric-detail-14.webp",
    ],
  },
  {
    slug: "dense-dot-foil-suede-look-fabric",
    metaTitle: "Dense Dot Foil Suede-Look Fabric | Nixia Fabric",
    metaDesc:
      "Dense dot foil suede-look fabric for stage costumes, performance props, backdrops and event decoration. Ready stock, free stock samples and a 100 m / 109 yd MOQ. Custom colors are available.",
    title: "Dense Dot Foil Suede-Look Fabric for Stage Props & Backdrops",
    sku: "H2013060106",
    mainImageUrl: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-1.webp",
    mainImageAlt:
      "Dense dot foil suede-look fabric for stage props and event backdrops",
    imageList: [
      {
        src: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-1.webp",
        webp: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-1.webp",
        alt: "Dense dot foil suede-look fabric main view for stage props and backdrops",
      },
      {
        src: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-2.webp",
        webp: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-2.webp",
        alt: "Dense dot foil suede-look fabric color and small-dot reflective surface detail",
      },
      {
        src: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-3.webp",
        webp: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-3.webp",
        alt: "Bright dense dot foil suede-look fabric for event decoration",
      },
      {
        src: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-4.webp",
        webp: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-4.webp",
        alt: "Dense dot foil suede-look fabric color assortment for display projects",
      },
      {
        src: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-5.webp",
        webp: "/images/products/H2013060106/main/dense-dot-foil-suede-look-fabric-main-5.webp",
        alt: "Dense dot foil suede-look fabric for stage costume and backdrop sourcing",
      },
    ],
    galleryMainPath: "/images/products/H2013060106/main/",
    galleryImages: ["dense-dot-foil-suede-look-fabric-main-1.webp", "dense-dot-foil-suede-look-fabric-main-2.webp", "dense-dot-foil-suede-look-fabric-main-3.webp", "dense-dot-foil-suede-look-fabric-main-4.webp", "dense-dot-foil-suede-look-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013060106/detail/",
    video: null,
    shortIntro:
      "Dense dot foil suede-look fabric with slight stretch, available in 16 colors for stage costumes, performance props, backdrops and event decoration.",
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
      { label: "Sample", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
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
    sampleNote: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping.",
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
    detailImageAlts: {
      "dense-dot-foil-suede-look-fabric-detail-1.webp": "Dense dot foil suede-look fabric detail showing small-dot reflective surface",
      "dense-dot-foil-suede-look-fabric-detail-2.webp": "Close-up of suede-look base with dense foil dot finish",
      "dense-dot-foil-suede-look-fabric-detail-3.webp": "Dense dot foil fabric texture for stage prop and backdrop sourcing",
      "dense-dot-foil-suede-look-fabric-detail-4.webp": "Suede-look foil fabric detail for event decoration panels",
      "dense-dot-foil-suede-look-fabric-detail-5.webp": "Reflective small-dot foil surface for performance costume production",
      "dense-dot-foil-suede-look-fabric-detail-6.webp": "Dense dot foil suede-look fabric close-up for color review",
      "dense-dot-foil-suede-look-fabric-detail-7.webp": "Slight stretch suede-look fabric with embossed foil dot effect",
      "dense-dot-foil-suede-look-fabric-detail-8.webp": "Dense dot foil fabric detail for stage backdrop sourcing",
      "dense-dot-foil-suede-look-fabric-detail-9.webp": "Wholesale suede-look foil fabric texture for display projects",
      "dense-dot-foil-suede-look-fabric-detail-10.webp": "Small-dot laser foil surface on suede-look fabric base",
      "dense-dot-foil-suede-look-fabric-detail-11.webp": "Dense dot foil fabric close-up for props and event decoration",
      "dense-dot-foil-suede-look-fabric-detail-12.webp": "Wholesale dense dot foil suede-look fabric detail for event buyers",
    },
    detailImages: [
      "dense-dot-foil-suede-look-fabric-detail-1.webp",
      "dense-dot-foil-suede-look-fabric-detail-2.webp",
      "dense-dot-foil-suede-look-fabric-detail-3.webp",
      "dense-dot-foil-suede-look-fabric-detail-4.webp",
      "dense-dot-foil-suede-look-fabric-detail-5.webp",
      "dense-dot-foil-suede-look-fabric-detail-6.webp",
      "dense-dot-foil-suede-look-fabric-detail-7.webp",
      "dense-dot-foil-suede-look-fabric-detail-8.webp",
      "dense-dot-foil-suede-look-fabric-detail-9.webp",
      "dense-dot-foil-suede-look-fabric-detail-10.webp",
      "dense-dot-foil-suede-look-fabric-detail-11.webp",
      "dense-dot-foil-suede-look-fabric-detail-12.webp",
    ],
  },

  {
    slug: "iridescent-laser-hot-stamping-stretch-ice-silk",
    metaTitle: "Iridescent Laser Foil Stretch Fabric | Nixia Fabric",
    metaDesc:
      "Iridescent laser foil 4-way stretch fabric for stage costumes, performance wear, dancewear and party apparel. Ready stock, free stock samples and a 100 m / 109 yd MOQ per color. Custom colors are available.",
    title: "Iridescent Laser Foil 4-Way Stretch Fabric",
    sku: "H2013120107",
    mainImageUrl: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-1.webp",
    mainImageWebp: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-1.webp",
    mainImageAlt:
      "Iridescent laser foil 4-way stretch fabric for stage costumes and show costumes",
    imageList: [
      {
        src: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-1.webp",
        webp: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-1.webp",
        alt: "Iridescent laser foil 4-way stretch fabric draped for stage costume sourcing",
      },
      {
        src: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-2.webp",
        webp: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-2.webp",
        alt: "Iridescent laser foil 4-way stretch fabric gathered to show stretch and drape",
      },
      {
        src: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-3.webp",
        webp: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-3.webp",
        alt: "Close-up of pink-purple iridescent laser foil finish on 4-way stretch fabric",
      },
      {
        src: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-4.webp",
        webp: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-4.webp",
        alt: "Iridescent laser foil 4-way stretch fabric texture for dancewear and show costumes",
      },
      {
        src: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-5.webp",
        webp: "/images/products/H2013120107/main/iridescent-laser-hot-stamping-stretch-ice-silk-main-5.webp",
        alt: "Detailed view of reflective iridescent laser foil stretch fabric surface",
      },
    ],
    galleryMainPath: "/images/products/H2013120107/main/",
    galleryImages: ["iridescent-laser-hot-stamping-stretch-ice-silk-main-1.webp", "iridescent-laser-hot-stamping-stretch-ice-silk-main-2.webp", "iridescent-laser-hot-stamping-stretch-ice-silk-main-3.webp", "iridescent-laser-hot-stamping-stretch-ice-silk-main-4.webp", "iridescent-laser-hot-stamping-stretch-ice-silk-main-5.webp"],
    detailImagePath: "/images/products/H2013120107/detail/",
    video: {
      src: "/images/products/H2013120107/video/1.mp4",
      poster: "iridescent-laser-hot-stamping-stretch-ice-silk-main-1.webp",
    },
    shortIntro:
      "Iridescent laser foil 4-way stretch fabric on a 95% polyester / 5% spandex base for stage costumes, dancewear, performance wear, party wear and show costumes.",
    fullDescription:
      "Our iridescent laser foil 4-way stretch fabric uses a 95% polyester / 5% spandex composition for flexible costume and apparel production. Its reflective surface changes with light and viewing angle, giving stage costumes and show costumes a strong visual effect.\n\nThe 4-way stretch construction supports fitted performance wear, dancewear and party wear while allowing movement and recovery. Request a physical sample to review the surface, hand feel and sewing performance before bulk production.",
    specs: {
      width: "150 cm / 59 in",
      weight: "160 g/m²",
      baseMaterial: "95% Polyester 5% Spandex",
      thickness: "0.3‑0.35mm",
      moq: "100",
      leadTime: "1-3",
    },
    specTable: [
      { label: "Product Type", value: "Iridescent Laser Foil 4-Way Stretch Fabric" },
      { label: "Composition", value: "95% Polyester / 5% Spandex" },
      { label: "Surface Finish", value: "Iridescent laser foil" },
      { label: "Stretch", value: "4-Way Stretch" },
      { label: "MOQ", value: "100 m / 109 yd per color" },
      { label: "Stock Status", value: "In-stock, ready to ship" },
      { label: "Sampling", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
      { label: "Customization", value: "Custom foil colors, width & backing on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤ 500 m / 547 yd; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom color, width, new fabric development & private label available" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    whyChooseHeading: "What Makes This Iridescent Laser Foil Fabric Different?",
    whyChoose: [
      {
        title: "Color-Shifting Laser Foil",
        desc: "The reflective surface changes with light and viewing angle, creating a stronger stage and show-costume effect than a single-tone foil finish.",
      },
      {
        title: "95% Polyester / 5% Spandex Base",
        desc: "The confirmed composition provides a clear base-fabric specification for fitted costume and performance apparel development.",
      },
      {
        title: "4-Way Stretch Construction",
        desc: "The documented 4-way stretch supports movement-focused garments while allowing buyers to review recovery and sewing performance by sample.",
      },
      {
        title: "Lightweight 160 g/m² Build",
        desc: "The 160 g/m² weight and 0.3–0.35 mm thickness give buyers a defined starting point for garment development and sampling.",
      },
      {
        title: "Custom Foil Development",
        desc: "The product data supports custom foil colors, width and backing on bulk orders in addition to the standard color.",
      },
    ],
    applications: [
      "Stage costumes",
      "Performance wear",
      "Dancewear",
      "Party wear",
      "Show costumes",
    ],
    inStock: true,
    stockStatus: "In-Stock",
    badge: "1 standard color",
    colorCount: 1,
    tags: ["iridescent", "laser-foil", "4-way-stretch", "spandex", "stage-costume", "performance-wear", "dancewear", "party-wear", "show-costume"],
    availableColors: "1 standard color",
    sampleNote: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping.",
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
          "Yes. This is an in-stock product. The stock sample is free and prepared in 1-3 working days. The buyer covers international shipping.",
      },
      {
        question: "What is the composition and stretch?",
        answer:
          "The fabric is 95% polyester / 5% spandex with 4-way stretch. We recommend approving a physical sample before bulk production to confirm hand feel, recovery and sewing performance.",
      },
      {
        question: "What applications is this fabric suitable for?",
        answer:
          "Recommended applications include stage costumes, performance wear, dancewear, party wear and show costumes.",
      },
      {
        question: "Is the fabric certified for export markets?",
        answer:
          "The material is SGS and REACH testing can be arranged according to product and buyer requirements. Buyer-specific test reports can be arranged by project.",
      },
    ],
    skuImages: [],
    detailImageAlts: {
      "iridescent-laser-hot-stamping-stretch-ice-silk-detail-1.webp": "Iridescent laser foil 4-way stretch fabric detail showing color-shifting surface",
      "iridescent-laser-hot-stamping-stretch-ice-silk-detail-2.webp": "Close-up of reflective laser foil stretch fabric for dancewear sourcing",
      "iridescent-laser-hot-stamping-stretch-ice-silk-detail-3.webp": "Polyester spandex 4-way stretch fabric with iridescent foil finish",
      "iridescent-laser-hot-stamping-stretch-ice-silk-detail-4.webp": "Iridescent laser foil fabric texture for stage costume production",
      "iridescent-laser-hot-stamping-stretch-ice-silk-detail-5.webp": "Reflective stretch foil fabric detail for show costume buyers",
      "iridescent-laser-hot-stamping-stretch-ice-silk-detail-6.webp": "Wholesale iridescent laser foil 4-way stretch fabric detail for US buyers",
    },
    detailImages: ["iridescent-laser-hot-stamping-stretch-ice-silk-detail-1.webp", "iridescent-laser-hot-stamping-stretch-ice-silk-detail-2.webp", "iridescent-laser-hot-stamping-stretch-ice-silk-detail-3.webp", "iridescent-laser-hot-stamping-stretch-ice-silk-detail-4.webp", "iridescent-laser-hot-stamping-stretch-ice-silk-detail-5.webp", "iridescent-laser-hot-stamping-stretch-ice-silk-detail-6.webp"],
  },

  {
    slug: "iridescent-gradient-laser-ice-silk",
    metaTitle: "Gradient Iridescent Stretch Fabric | Nixia Fabric",
    metaDesc:
      "Gradient iridescent foil stretch fabric for dancewear, stage costumes, performance wear and party apparel. Ready stock, free stock samples and a 100 m / 109 yd MOQ per colorway. Custom gradients are available.",
    title: "Iridescent Gradient Foil Stretch Fabric for Dancewear & Costumes",
    sku: "P0005",
    mainImageUrl: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-1.webp",
    mainImageWebp: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-1.webp",
    mainImageAlt:
      "Iridescent gradient foil stretch ice-silk fabric for dancewear and stage costumes",
    imageList: [
      {
        src: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-1.webp",
        webp: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-1.webp",
        alt: "Iridescent gradient foil stretch ice-silk fabric main view for dancewear",
      },
      {
        src: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-2.webp",
        webp: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-2.webp",
        alt: "Ombre gradient iridescent foil stretch fabric drape for stage costumes",
      },
      {
        src: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-3.webp",
        webp: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-3.webp",
        alt: "Color-shifting gradient foil ice-silk fabric surface for performance outfits",
      },
      {
        src: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-4.webp",
        webp: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-4.webp",
        alt: "Iridescent gradient stretch fabric close-up for dancewear manufacturers",
      },
      {
        src: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-5.webp",
        webp: "/images/products/H2013120106/main/iridescent-gradient-laser-ice-silk-main-5.webp",
        alt: "Gradient laser foil stretch fabric for festival and carnival costumes",
      },
    ],
    galleryMainPath: "/images/products/H2013120106/main/",
    galleryImages: ["iridescent-gradient-laser-ice-silk-main-1.webp", "iridescent-gradient-laser-ice-silk-main-2.webp", "iridescent-gradient-laser-ice-silk-main-3.webp", "iridescent-gradient-laser-ice-silk-main-4.webp", "iridescent-gradient-laser-ice-silk-main-5.webp"],
    detailImagePath: "/images/products/H2013120106/detail/",
    video: { src: "/images/products/H2013120106/video/1.mp4", poster: "iridescent-gradient-laser-ice-silk-main-1.webp" },
    shortIntro:
      "Iridescent gradient foil stretch ice-silk fabric, available in 19 colors for dancewear, stage costumes, performance outfits and festival costumes.",
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
      { label: "Sampling", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
      { label: "Customization", value: "Custom gradient colors & direction on bulk orders" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "In-stock available" },
      { label: "Sample", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
      { label: "Bulk Lead time", value: "1-3 working days after payment and stock confirmation for orders ≤ 500 m / 547 yd; 7-15 working days when production is required" },
      { label: "Port", value: "Ningbo / Shanghai" },
      { label: "OEM / ODM", value: "Custom color, width, new fabric development & private label available" },
      { label: "Testing & Compliance", value: "SGS / REACH testing can be arranged according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "FOB, CIF available, provide commercial invoice & packing list" },
    ],
    whyChooseHeading: "What Makes This Gradient Foil Fabric Different?",
    whyChoose: [
      {
        title: "Gradient Across the Width",
        desc: "The color transition flows across the width of the fabric, giving designers a continuous gradient direction for garment panels.",
      },
      {
        title: "Multi-Color Iridescent Foil",
        desc: "The laser foil shifts through multiple colors under light, creating a changing surface effect rather than a flat metallic finish.",
      },
      {
        title: "Stretch Ice-Silk Base",
        desc: "The stretch ice-silk base is described as comfortable against the skin and easy to sew for dancewear and costume development.",
      },
      {
        title: "Elastic Recovery",
        desc: "The product data specifies elastic stretch with good recovery for movement-focused apparel.",
      },
      {
        title: "19 Colors and Custom Direction",
        desc: "The product offers 19 colors with a color card available on request, plus custom gradient colors and direction for bulk orders.",
      },
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
    sampleNote: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping.",
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
          "Yes. This is an in-stock product. The stock sample is free and prepared in 1-3 working days. The buyer covers international shipping.",
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
    detailImageAlts: {
      "iridescent-gradient-laser-ice-silk-detail-1.webp": "Iridescent gradient foil stretch ice-silk fabric detail showing smooth color flow",
      "iridescent-gradient-laser-ice-silk-detail-2.webp": "Close-up of ombre gradient laser foil surface on stretch ice-silk fabric",
    },
    detailImages: ["iridescent-gradient-laser-ice-silk-detail-1.webp", "iridescent-gradient-laser-ice-silk-detail-2.webp"],
  },
  {
    slug: "rainbow-dot-laser-foil-knit-fabric",
    metaTitle: "Rainbow Dot Laser Foil Knit Fabric | Nixia Fabric",
    metaDesc:
      "Rainbow dot laser foil knit fabric for stage costumes, dancewear and performance outfits. Ready stock with 28 colors and a 200 m / 219 yd MOQ. Free stock samples and custom colors are available.",
    title: "Rainbow Dot Laser Foil Knit Fabric for Stage Costumes",
    sku: "H2013090104",
    mainImageUrl: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-1.webp",
    mainImageAlt:
      "Rainbow dot laser foil knit fabric for stage costumes and dancewear",
    imageList: [
      {
        src: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-1.webp",
        webp: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-1.webp",
        alt: "Rainbow dot laser foil knit fabric main view for stage costumes",
      },
      {
        src: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-2.webp",
        webp: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-2.webp",
        alt: "Rainbow dot laser foil knit fabric color options for costume production",
      },
      {
        src: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-3.webp",
        webp: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-3.webp",
        alt: "Yellow rainbow dot laser foil knit fabric drape and shine for stagewear",
      },
      {
        src: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-4.webp",
        webp: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-4.webp",
        alt: "Pink rainbow dot laser foil knit fabric for stage costumes and dancewear",
      },
      {
        src: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-5.webp",
        webp: "/images/products/H2013090104/main/rainbow-dot-laser-foil-knit-fabric-main-5.webp",
        alt: "Green and yellow rainbow dot laser foil knit fabric surface detail",
      },
    ],
    galleryMainPath: "/images/products/H2013090104/main/",
    galleryImages: ["rainbow-dot-laser-foil-knit-fabric-main-1.webp", "rainbow-dot-laser-foil-knit-fabric-main-2.webp", "rainbow-dot-laser-foil-knit-fabric-main-3.webp", "rainbow-dot-laser-foil-knit-fabric-main-4.webp", "rainbow-dot-laser-foil-knit-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013090104/detail/",
    video: null,
    shortIntro:
      "Rainbow dot laser foil knit fabric, available in 28 colors for stage costumes, dancewear, performance wear and decorative costume panels.",
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
      { label: "Sample", value: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping." },
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
    sampleNote: "Free stock sample; preparation in 1-3 working days. Buyer covers international shipping.",
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
    detailImageAlts: {
      "rainbow-dot-laser-foil-knit-fabric-detail-1.webp": "Rainbow dot laser foil knit fabric detail showing reflective dot surface",
      "rainbow-dot-laser-foil-knit-fabric-detail-2.webp": "Close-up of rainbow dot laser foil texture on lightweight knit fabric",
      "rainbow-dot-laser-foil-knit-fabric-detail-3.webp": "Rainbow dot laser foil fabric detail for stage costume sourcing",
      "rainbow-dot-laser-foil-knit-fabric-detail-4.webp": "Polyester knit fabric with colorful dot laser foil finish",
      "rainbow-dot-laser-foil-knit-fabric-detail-5.webp": "Reflective rainbow dot laser foil surface for dancewear panels",
      "rainbow-dot-laser-foil-knit-fabric-detail-6.webp": "Rainbow dot laser foil knit fabric texture for performance wear",
      "rainbow-dot-laser-foil-knit-fabric-detail-7.webp": "Lightweight rainbow dot foil fabric close-up for costume production",
      "rainbow-dot-laser-foil-knit-fabric-detail-8.webp": "Rainbow laser foil dot knit fabric detail for apparel buyers",
      "rainbow-dot-laser-foil-knit-fabric-detail-9.webp": "Colorful laser dot foil fabric surface for decorative panels",
      "rainbow-dot-laser-foil-knit-fabric-detail-10.webp": "Wholesale rainbow dot laser foil knit fabric detail for US buyers",
      "rainbow-dot-laser-foil-knit-fabric-detail-11.webp": "Rainbow dot laser foil surface for stagewear sourcing",
      "rainbow-dot-laser-foil-knit-fabric-detail-12.webp": "Close-up of slight stretch knit fabric with rainbow dot foil effect",
      "rainbow-dot-laser-foil-knit-fabric-detail-13.webp": "Rainbow dot laser foil fabric texture for color and surface review",
      "rainbow-dot-laser-foil-knit-fabric-detail-14.webp": "Reflective laser foil dots on polyester knit fabric base",
      "rainbow-dot-laser-foil-knit-fabric-detail-15.webp": "Rainbow dot laser foil fabric detail for costume panel cutting",
      "rainbow-dot-laser-foil-knit-fabric-detail-16.webp": "Rainbow dot foil knit fabric close-up for dance costume production",
      "rainbow-dot-laser-foil-knit-fabric-detail-17.webp": "Color-shifting rainbow dot laser foil surface detail",
      "rainbow-dot-laser-foil-knit-fabric-detail-18.webp": "Lightweight rainbow dot laser foil knit fabric for performance apparel",
      "rainbow-dot-laser-foil-knit-fabric-detail-19.webp": "Wholesale rainbow dot laser foil fabric texture for fabric sourcing",
      "rainbow-dot-laser-foil-knit-fabric-detail-20.webp": "Rainbow dot laser foil knit fabric detail for stage costume manufacturers",
      "rainbow-dot-laser-foil-knit-fabric-detail-21.webp": "Reflective rainbow dot foil fabric close-up for decorative garment panels",
      "rainbow-dot-laser-foil-knit-fabric-detail-22.webp": "Rainbow dot laser foil knit fabric detail for color and surface review",
      "rainbow-dot-laser-foil-knit-fabric-detail-23.webp": "Wholesale rainbow dot laser foil knit fabric close-up for US buyers",
    },
    detailImages: [
      "rainbow-dot-laser-foil-knit-fabric-detail-1.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-2.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-3.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-4.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-5.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-6.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-7.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-8.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-9.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-10.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-11.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-12.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-13.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-14.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-15.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-16.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-17.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-18.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-19.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-20.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-21.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-22.webp",
      "rainbow-dot-laser-foil-knit-fabric-detail-23.webp",
    ],
  },
  {
    slug: "blue-purple-gradient-laser-foil-spandex-fabric",
    metaTitle: "Blue-Purple Gradient Foil Spandex | Nixia Fabric",
    metaDesc:
      "Blue-purple gradient laser foil on a 4-way stretch spandex base for stage costumes, dancewear and performance apparel. Made to order with a 100 m / 109 yd MOQ. Custom colors and samples are available.",
    title: "Blue-Purple Gradient Laser Foil 4-Way Stretch Fabric",
    sku: "H2013120102",
    mainImageUrl: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-1.webp",
    mainImageAlt:
      "Blue-purple gradient laser foil 4-way stretch spandex fabric for stage costumes",
    imageList: [
      {
        src: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-1.webp",
        webp: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-1.webp",
        alt: "Blue-purple gradient laser foil 4-way stretch fabric main view for stage costumes",
      },
      {
        src: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-2.webp",
        webp: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-2.webp",
        alt: "Blue-purple gradient laser foil stretch fabric surface detail for dancewear",
      },
      {
        src: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-3.webp",
        webp: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-3.webp",
        alt: "Blue-purple gradient laser foil spandex fabric drape and shine for performance apparel",
      },
      {
        src: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-4.webp",
        webp: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-4.webp",
        alt: "Blue-purple gradient foil stretch fabric for stage costumes and stagewear",
      },
      {
        src: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-5.webp",
        webp: "/images/products/H2013120102/main/blue-purple-gradient-laser-foil-spandex-fabric-main-5.webp",
        alt: "Blue-purple gradient laser foil spandex fabric for party and festival costumes",
      },
    ],
    galleryMainPath: "/images/products/H2013120102/main/",
    galleryImages: ["blue-purple-gradient-laser-foil-spandex-fabric-main-1.webp", "blue-purple-gradient-laser-foil-spandex-fabric-main-2.webp", "blue-purple-gradient-laser-foil-spandex-fabric-main-3.webp", "blue-purple-gradient-laser-foil-spandex-fabric-main-4.webp", "blue-purple-gradient-laser-foil-spandex-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013120102/detail/",
    video: null,
    shortIntro:
      "Blue-purple gradient laser foil 4-way stretch spandex fabric for stage costumes, dancewear, performance apparel, party wear and festival costumes.",
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
      { label: "Sample", value: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping." },
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
    sampleNote: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping.",
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
    detailImageAlts: {
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-1.webp": "Blue-purple gradient laser foil spandex fabric detail showing color-shift surface",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-2.webp": "Close-up of blue-purple gradient laser foil on 4-way stretch fabric",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-3.webp": "Blue-purple gradient foil spandex fabric texture for stage costume sourcing",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-4.webp": "Blue-purple gradient stretch foil fabric detail for dancewear production",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-5.webp": "Reflective blue-purple gradient laser foil surface on spandex fabric base",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-6.webp": "4-way stretch spandex fabric with blue-purple gradient foil finish",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-7.webp": "Blue-purple gradient foil fabric detail for performance apparel buyers",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-8.webp": "Wholesale blue-purple gradient laser foil spandex fabric close-up",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-9.webp": "Blue-purple gradient foil stretch fabric texture for party and festival costumes",
    },
    detailImages: [
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-1.webp",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-2.webp",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-3.webp",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-4.webp",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-5.webp",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-6.webp",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-7.webp",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-8.webp",
      "blue-purple-gradient-laser-foil-spandex-fabric-detail-9.webp",
    ],
  },
  {
    slug: "holographic-snakeskin-stretch-fabric",
    metaTitle: "Holographic Snakeskin Stretch Fabric | Nixia Fabric",
    metaDesc:
      "Holographic snakeskin stretch fabric for swimwear, leggings, dancewear and mermaid-inspired costumes. Made to order with a 100 m / 109 yd MOQ. Custom development and samples are available.",
    title: "Laser Foil Snakeskin Stretch Fabric",
    sku: "H2013090101",
    mainImageUrl: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-1.webp",
    mainImageWebp: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-1.webp",
    mainImageAlt:
      "Holographic laser foil snakeskin stretch fabric for swimwear and leggings",
    imageList: [
      {
        src: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-1.webp",
        webp: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-1.webp",
        alt: "Holographic laser foil snakeskin stretch fabric main view for swimwear and dancewear",
      },
      {
        src: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-2.webp",
        webp: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-2.webp",
        alt: "Laser foil snakeskin stretch fabric drape with reflective holographic surface",
      },
      {
        src: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-3.webp",
        webp: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-3.webp",
        alt: "Holographic snakeskin texture on stretch polyester spandex fabric for fitted apparel",
      },
      {
        src: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-4.webp",
        webp: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-4.webp",
        alt: "Color-shifting laser foil snakeskin fabric surface for stage costumes and leggings",
      },
      {
        src: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-5.webp",
        webp: "/images/products/H2013090101/main/holographic-snakeskin-stretch-fabric-main-5.webp",
        alt: "Snakeskin foil stretch fabric detail for mermaid-inspired costume production",
      },
    ],
    galleryMainPath: "/images/products/H2013090101/main/",
    galleryImages: ["holographic-snakeskin-stretch-fabric-main-1.webp", "holographic-snakeskin-stretch-fabric-main-2.webp", "holographic-snakeskin-stretch-fabric-main-3.webp", "holographic-snakeskin-stretch-fabric-main-4.webp", "holographic-snakeskin-stretch-fabric-main-5.webp"],
    detailImagePath: "/images/products/H2013090101/detail/",
    video: null,
    shortIntro:
      "Holographic snakeskin stretch fabric on a polyester-spandex base, available in 70 colors for swimwear, leggings, dancewear and mermaid-inspired costumes.",
    fullDescription:
      "This laser foil snakeskin stretch fabric combines a glossy holographic surface with a flexible 92% polyester and 8% spandex base. The raised snakeskin look creates strong visual movement under light, while the slight stretch supports fitted apparel and costume applications.\n\nIt is developed for swimwear, leggings, dancewear, stage costumes and mermaid-inspired performance designs. Request a physical sample to review the surface effect, color and sewing performance before bulk production.",
    specs: {
      width: "147 cm / 58 in",
      weight: "160 GSM",
      baseMaterial: "92% Polyester 8% Spandex",
      thickness: "",
      moq: "100 m / 109 yd",
      leadTime: "To be confirmed",
    },
    specTable: [
      { label: "Product Type", value: "Laser Foil Snakeskin Stretch Fabric" },
      { label: "Surface Effect", value: "Holographic laser foil snakeskin texture" },
      { label: "Base Fabric", value: "92% Polyester 8% Spandex" },
      { label: "Stretch", value: "Slight stretch" },
      { label: "Width", value: "147 cm / 58 in" },
      { label: "Weight", value: "160 GSM" },
      { label: "Color", value: "70 colors available; custom colors on request" },
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Yarn Count", value: "90S" },
      { label: "Finishing", value: "To be confirmed" },
      { label: "Typical Applications", value: "Swimwear, leggings, dancewear, stage costumes, mermaid costumes" },
    ],
    b2bTable: [
      { label: "MOQ", value: "100 m / 109 yd" },
      { label: "Supply type", value: "Factory wholesale supply with OEM/ODM support" },
      { label: "Sample", value: "Availability, preparation time and shipping to be confirmed by project" },
      { label: "Bulk Lead time", value: "To be confirmed according to order quantity and production requirements" },
      { label: "Available Colors", value: "70 colors available; custom colors on request" },
      { label: "OEM / ODM", value: "OEM/ODM support; custom color details to be confirmed" },
      { label: "Testing & Compliance", value: "To be confirmed according to buyer requirements" },
      { label: "Package type", value: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement" },
      { label: "Trade Terms", value: "To be confirmed in quotation" },
    ],
    applications: [
      "Swimwear",
      "Leggings",
      "Dancewear",
      "Stage Costumes",
      "Mermaid Costumes",
    ],
    inStock: false,
    stockStatus: "Made to Order",
    badge: "70 colors",
    colorCount: 70,
    tags: ["holographic", "snakeskin", "laser-foil", "stretch", "swimwear", "leggings", "dancewear", "mermaid-costume"],
    availableColors: "70 colors available; custom colors on request",
    sampleNote: "Custom sample; customization fee applies; preparation in 3-5 working days. Buyer covers international shipping.",
    customizationNote: "OEM/ODM support; custom color details to be confirmed",
    packaging: "Roll packing with paper tube inside, plastic bag outside; can follow customer requirement",
    tradeTerms: "To be confirmed in quotation",
    heroHighlights: [
      "Holographic Snakeskin Texture",
      "Slight Stretch",
      "147 cm / 58 in Width",
      "160 GSM",
      "70 Colors",
      "MOQ 100 m / 109 yd",
    ],
    whyChooseHeading: "Key Features",
    whyChoose: [
      {
        title: "Holographic Snakeskin Surface",
        desc: "A glossy snakeskin texture creates a distinctive color-shifting effect under stage, studio and retail lighting.",
      },
      {
        title: "Flexible Stretch Base",
        desc: "The slight-stretch polyester-spandex construction supports fitted garments and costume panels.",
      },
      {
        title: "Wide Color Selection",
        desc: "The source data lists 70 colors, with custom color discussions available for qualified projects.",
      },
      {
        title: "Costume-Ready Visual Impact",
        desc: "The reflective surface works well when a garment needs a strong scale-like or mermaid-inspired appearance.",
      },
      {
        title: "Wholesale Development Support",
        desc: "Factory supply and OEM/ODM support can be discussed for swimwear, performancewear and costume programs.",
      },
    ],
    valueStory: {
      title: "Why Choose This Holographic Snakeskin Fabric?",
      body: "This snakeskin stretch fabric gives buyers a distinctive surface direction for swimwear, leggings and performance costumes while keeping the confirmed width, weight, stretch and color information clear for sampling and bulk planning.",
    },
    applicationsHeading: "Recommended Applications",
    buyerApplications: [
      {
        title: "Swimwear",
        desc: "Holographic snakeskin texture adds a reflective, fashion-forward surface to fitted swimwear designs.",
      },
      {
        title: "Leggings & Fitted Apparel",
        desc: "The slight-stretch base supports close-fitting apparel and statement fashion pieces.",
      },
      {
        title: "Dancewear",
        desc: "The reflective finish helps dancewear remain visible under performance lighting.",
      },
      {
        title: "Stage Costumes",
        desc: "A scale-like holographic texture creates strong visual impact for stage and event costume programs.",
      },
      {
        title: "Mermaid Costumes",
        desc: "The snakeskin appearance is suitable for mermaid-inspired costumes, show pieces and themed performance wear.",
      },
    ],
    stockDevelopment: [
      {
        title: "Factory Wholesale Supply",
        desc: "Supply support is available for buyers and apparel manufacturers based on confirmed project requirements.",
      },
      {
        title: "Sample Review",
        desc: "Request a physical sample to review the snakeskin effect, color, stretch and sewing performance before bulk production.",
      },
      {
        title: "Custom Color Discussion",
        desc: "Custom color requirements can be reviewed for qualified OEM/ODM projects.",
      },
    ],
    sampleCta: {
      title: "Need a Holographic Snakeskin Stretch Fabric?",
      body: "Request a sample to review the surface effect, color and stretch before production.",
      buttonLabel: "Request a Sample",
    },
    samplePrompt:
      "Request a sample to review the surface effect, color and stretch before production. Sample availability and preparation time are confirmed by project.",
    faqList: [
      {
        question: "What is this holographic snakeskin fabric used for?",
        answer:
          "It is designed for swimwear, leggings, dancewear, stage costumes and mermaid-inspired costumes.",
      },
      {
        question: "Does the fabric stretch?",
        answer:
          "The source data identifies it as a slight-stretch fabric with a 92% polyester and 8% spandex base. Approve a physical sample for your exact garment pattern.",
      },
      {
        question: "How many colors are available?",
        answer:
          "The source data lists 70 available colors. Custom color requirements can be discussed by project.",
      },
      {
        question: "What is the MOQ?",
        answer:
          "The confirmed MOQ is 100 m / 109 yd.",
      },
      {
        question: "Can I request a sample before a bulk order?",
        answer:
          "Yes. This is a made-to-order product. A custom sample requires a customization fee and is prepared in 3-5 working days. The buyer covers international shipping. We recommend checking the surface effect, color and sewing performance before bulk approval.",
      },
      {
        question: "Can the fabric be developed for a custom program?",
        answer:
          "OEM/ODM support and custom color discussions are available for qualified buyer projects.",
      },
    ],
    skuImages: [],
    detailImageAlts: {
      "holographic-snakeskin-stretch-fabric-detail-1.webp": "Close-up of holographic laser foil snakeskin texture on stretch fabric",
      "holographic-snakeskin-stretch-fabric-detail-2.webp": "Reflective snakeskin foil fabric surface for swimwear and leggings",
      "holographic-snakeskin-stretch-fabric-detail-3.webp": "Holographic snakeskin stretch fabric detail for dancewear and stage costumes",
      "holographic-snakeskin-stretch-fabric-detail-4.webp": "Color-shifting laser foil snakeskin fabric close-up for surface and color detail",
      "holographic-snakeskin-stretch-fabric-detail-5.webp": "Polyester spandex snakeskin foil fabric texture for fitted apparel",
      "holographic-snakeskin-stretch-fabric-detail-6.webp": "Holographic scale-like snakeskin surface for mermaid costume fabric",
      "holographic-snakeskin-stretch-fabric-detail-7.webp": "Wholesale holographic snakeskin stretch fabric detail for US buyers",
      "holographic-snakeskin-stretch-fabric-detail-8.webp": "Laser foil snakeskin stretch fabric surface for costume manufacturing",
    },
    detailImages: [
      "holographic-snakeskin-stretch-fabric-detail-1.webp",
      "holographic-snakeskin-stretch-fabric-detail-2.webp",
      "holographic-snakeskin-stretch-fabric-detail-3.webp",
      "holographic-snakeskin-stretch-fabric-detail-4.webp",
      "holographic-snakeskin-stretch-fabric-detail-5.webp",
      "holographic-snakeskin-stretch-fabric-detail-6.webp",
      "holographic-snakeskin-stretch-fabric-detail-7.webp",
      "holographic-snakeskin-stretch-fabric-detail-8.webp",
    ],
  },
];

// Keep every public product page answer-ready for the core B2B buying questions.
// Product-specific FAQs remain the source of detail; these additions only fill
// missing commercial topics for products whose source row does not cover them.
const hasFaqTopic = (faqList, pattern) =>
  faqList.some((item) => pattern.test(item.question));

const standardBuyerFaqs = (product) => {
  const moq =
    product.specTable?.find((row) => /^MOQ$/i.test(row.label))?.value ||
    product.b2bTable?.find((row) => /^MOQ$/i.test(row.label))?.value ||
    product.specs.moq;
  const isStock = product.inStock === true;
  const sampleAnswer = isStock
    ? "Yes. This is an in-stock product. The stock sample is free and prepared in 1-3 working days. The buyer covers international shipping."
    : "Yes. This is a made-to-order product. A custom sample requires a customization fee and is prepared in 3-5 working days. The buyer covers international shipping.";
  const availabilityAnswer = isStock
    ? "This product is listed as in stock. Final color availability and stock quantity are confirmed before quotation."
    : "This product is made to order. Production timing and final availability are confirmed according to the quantity and customization requirements.";
  const leadTimeAnswer = isStock
    ? "Ready-stock dispatch is typically 3-5 working days after order and stock confirmation."
    : "Made-to-order production is typically 7-15 working days after customization and production details are confirmed.";
  const customizationAnswer =
    product.customizationNote ||
    "Custom color, finish or development requirements can be reviewed according to the project.";
  const priceAnswer =
    "Pricing is quoted according to quantity, color, customization requirements, destination and shipping method.";

  return [
    {
      topic: /MOQ/i,
      question: "What is the MOQ for this fabric?",
      answer: `The confirmed MOQ is ${moq}.`,
    },
    {
      topic: /sample|sampling|sampled/i,
      question: "Can I request a sample before bulk production?",
      answer: sampleAnswer,
    },
    {
      topic: /stock status|in.stock|made.to.order|availability|ready.to.ship/i,
      question: "Is this fabric in stock or made to order?",
      answer: availabilityAnswer,
    },
    {
      topic: /lead time|delivery|dispatch|production timing/i,
      question: "What is the lead time?",
      answer: leadTimeAnswer,
    },
    {
      topic: /custom|customiz|oem|odm/i,
      question: "Can the color, finish or construction be customized?",
      answer: customizationAnswer,
    },
    {
      topic: /application|used for|suitable|recommended/i,
      question: "What applications is this fabric suitable for?",
      answer: `Recommended applications include ${product.applications.join(", ")}.`,
    },
    {
      topic: /price|pricing|quoted|quotation/i,
      question: "How is the price quoted?",
      answer: priceAnswer,
    },
  ];
};

allProducts.forEach((product) => {
  const existingFaqs = product.faqList ?? [];
  const additions = standardBuyerFaqs(product)
    .filter((faq) => !hasFaqTopic(existingFaqs, faq.topic))
    .map(({ topic: _topic, ...faq }) => faq);
  product.faqList = [...existingFaqs, ...additions];
});

export const performanceProductSlugs = [
  "rainbow-stripe-foil-4-way-stretch-fabric",
  "plain-iridescent-laser-spandex-4-way-stretch",
  "rainbow-iridescent-laser-foil-nylon-spandex-fabric",
  "gradient-rainbow-dot-foil-knit-fabric",
  "rainbow-fingerprint-dot-foil-ice-silk-fabric",
  "holographic-mermaid-scale-milk-silk-stretch-fabric",
  "full-print-hot-stamping-spandex-milk-silk",
  "double-layer-pleated-foil-knit-fabric",
  "shiny-foil-4-way-stretch-knit-fabric",
  "dense-dot-foil-suede-look-fabric",
  "iridescent-laser-hot-stamping-stretch-ice-silk",
  "iridescent-gradient-laser-ice-silk",
  "blue-purple-gradient-laser-foil-spandex-fabric",
  "rainbow-dot-laser-foil-knit-fabric",
  "holographic-snakeskin-stretch-fabric",
];

export const performanceProducts = allProducts.filter((product) =>
  performanceProductSlugs.includes(product.slug),
);
