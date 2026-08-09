/**
 * Product data model and catalog for Nixia Fabric
 * China Glitter & Foil-Printed Synthetic Leather Manufacturer
 *
 * Navigation is driven by end-use categories (Shoes, Handbags, etc.)
 * Craft and backing are in-page filters only — never in the main nav.
 *
 * Terminology standard (hoepke.de benchmark):
 *   Foil-Printed Synthetic Leather  (full) / Foil Finish (short)
 *   Chunky Glitter Synthetic Leather  (full) / Glitter Finish (short)
 *   Chunky Glitter + Foil-Printed Composite Fabric
 *   Non-woven Backing / Elastic PU Backing
 *   Synthetic Leather  (base material — never "PU Fabric" alone as title)
 */

export interface ProductSpecifications {
  composition: string;
  gsm: string;
  width: string;
  backing: string;
}

/** Craft filter values */
export type CraftType =
  | "Chunky Glitter"
  | "Hot-Stamping Foil"
  | "Glitter + Hot-Stamping Foil Composite";

/** Backing filter values (normalised for filtering) */
export type BackingCategory = "Non-woven Backing" | "Elastic PU Backing";

export interface Product {
  name: string;
  slug: string;
  category: "Hot-Stamping Foil Finish" | "Chunky Glitter Synthetic Leather";
  craft: CraftType;
  backingCategory: BackingCategory;
  /** Multiple end-use tags — a single fabric can appear in several scenario pages */
  endUse: string[]; // e.g. ["shoes", "handbags"]
  description: string;
  images: string[];
  specifications: ProductSpecifications;
  applications: string[];
  colors: string[];
  customizationOptions?: string[];
  samplePolicy?: string;
}

export interface ProductCategory {
  name: string;
  slug: string;
  description: string;
  image: string;
  applications: string[];
  seoKeywords: string[];
  products: Product[];
}

/**
 * End-use category definitions — drive the main navigation and
 * the 4 scenario pages. Each page is independently indexable.
 */
export interface EndUseCategory {
  name: string; // e.g. "Fabric for Shoes"
  slug: string; // URL slug: fabric-for-shoes
  shortName: string; // e.g. "Shoes" — used in nav dropdown
  h1: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  image: string;
  alt: string;
}

export const endUseCategories: EndUseCategory[] = [
  {
    name: "Fabric for Shoes",
    slug: "fabric-for-shoes",
    shortName: "Shoes",
    h1: "Glitter & Foil-Printed Synthetic Leather for Shoes",
    metaTitle:
      "Glitter & Foil-Printed Synthetic Leather for Shoes | Shoe Upper Material Manufacturer",
    metaDescription:
      "Chunky glitter synthetic leather and foil-printed synthetic leather for shoe uppers, trims, and decorative panels. Elastic PU and non-woven backing options. Request free samples — factory direct from China.",
    description:
      "Shoe uppers, trims, and decorative panels. Our chunky glitter and foil-printed fabrics offer excellent adhesion, flexibility, and visual impact for footwear applications.",
    image: "/image/home/Shoes.png",
    alt: "Chunky glitter synthetic leather shoe upper with foil-printed accent",
  },
  {
    name: "Fabric for Handbags",
    slug: "fabric-for-handbags",
    shortName: "Handbags",
    h1: "Glitter & Foil-Printed Synthetic Leather for Handbags",
    metaTitle:
      "Glitter & Foil-Printed Synthetic Leather for Handbags | Bag Material Supplier",
    metaDescription:
      "Chunky glitter synthetic leather and foil-printed synthetic leather for handbag bodies, flaps, and accent panels. Custom color matching and backing options. SGS Certified, REACH Compliant. Request free samples from China factory.",
    description:
      "Bag bodies, flaps, and accent panels. Durable chunky glitter and foil-printed fabrics that elevate handbag designs with premium metallic and glitter finishes.",
    image: "/image/home/Handbags.png",
    alt: "Chunky glitter synthetic leather handbag",
  },
  {
    name: "Fabric for Accessories",
    slug: "fabric-for-accessories",
    shortName: "Accessories",
    h1: "Glitter & Foil-Printed Synthetic Leather for Accessories",
    metaTitle:
      "Glitter & Foil-Printed Synthetic Leather for Accessories | Small Leather Goods",
    metaDescription:
      "Chunky glitter synthetic leather and foil-printed synthetic leather for belts, wallets, and small leather goods. Custom color matching and backing options. Factory direct supply from China.",
    description:
      "Belts, wallets, and small leather goods. Our chunky glitter and foil-printed fabrics bring luxury finishes to accessory products with proven durability.",
    image: "/image/home/Accessories.png",
    alt: "Chunky glitter synthetic leather belt and wallet accessories",
  },
  {
    name: "Fabric for Fashion Trims",
    slug: "fabric-for-fashion-trims",
    shortName: "Fashion",
    h1: "Glitter & Foil-Printed Synthetic Leather for Fashion Trims",
    metaTitle:
      "Glitter & Foil-Printed Synthetic Leather for Fashion Trims | Garment Decoration",
    metaDescription:
      "Chunky glitter synthetic leather and foil-printed synthetic leather for garment trims, decorative elements, and fashion accessories. Custom backing options and color matching. Factory direct from China manufacturer.",
    description:
      "Garment trims, decorative elements, and more. Lightweight chunky glitter and foil-printed fabrics ideal for fashion embellishment and decorative applications.",
    image: "/image/home/Fashion.png",
    alt: "Chunky glitter synthetic leather garment trims",
  },
];

/** Craft filter options shown on product list pages */
export const craftOptions: CraftType[] = [
  "Chunky Glitter",
  "Hot-Stamping Foil",
  "Glitter + Hot-Stamping Foil Composite",
];

/** Backing filter options shown on product list pages */
export const backingOptions: BackingCategory[] = [
  "Non-woven Backing",
  "Elastic PU Backing",
];

/**
 * Product Catalog
 * Two main collections: Foil-Printed Synthetic Leather (primary) & Chunky Glitter Synthetic Leather
 */
export const productCategories: ProductCategory[] = [
  {
    name: "Foil-Printed Synthetic Leather",
    slug: "foil-fabric",
    description:
      "Metallic foil-printed synthetic leather for shoes, bags, and decoration. Available in gold, silver, and custom metallic finishes with excellent adhesion and reflective properties.",
    image: "/images/products/foil-fabric/cover.jpg",
    applications: ["Shoes", "Bags", "Decoration"],
    seoKeywords: ["Foil-Printed Synthetic Leather Manufacturer", "Metallic Fabric Factory"],
    products: [
      {
        name: "Metallic Foil-Printed Synthetic Leather",
        slug: "metallic-foil-fabric",
        category: "Hot-Stamping Foil Finish",
        craft: "Hot-Stamping Foil",
        backingCategory: "Elastic PU Backing",
        endUse: ["shoes", "handbags", "fashion-trims"],
        description:
          "Metallic foil-printed synthetic leather features a reflective metallic foil surface bonded to a synthetic leather backing, providing a high-shine metallic appearance for fashion and decorative applications.",
        images: [
          "/images/products/metallic-foil-fabric/01.jpg",
          "/images/products/metallic-foil-fabric/02.jpg",
        ],
        specifications: {
          composition: "Polyester + Metallic Foil",
          gsm: "160-200 GSM",
          width: "137cm / 54in",
          backing: "Polyester Knitted",
        },
        applications: ["Shoes", "Bags", "Decoration"],
        colors: ["Gold", "Silver", "Rose Gold", "Gunmetal", "Custom Metallic Colors"],
        customizationOptions: [
          "Custom metallic color matching",
          "Custom foil thickness",
          "Custom backing options",
        ],
        samplePolicy: "Free swatch samples available. Custom metallic colors require 10-14 days.",
      },
      {
        name: "Gold Foil-Printed Synthetic Leather",
        slug: "gold-foil-fabric",
        category: "Hot-Stamping Foil Finish",
        craft: "Hot-Stamping Foil",
        backingCategory: "Elastic PU Backing",
        endUse: ["shoes", "handbags", "fashion-trims"],
        description:
          "Gold foil-printed synthetic leather delivers a luxurious gold metallic finish with excellent light reflection, ideal for premium shoe accents, bag trim, and decorative applications.",
        images: [
          "/images/products/gold-foil-fabric/01.jpg",
          "/images/products/gold-foil-fabric/02.jpg",
        ],
        specifications: {
          composition: "Polyester + Gold Foil",
          gsm: "170-210 GSM",
          width: "137cm / 54in",
          backing: "Polyester Knitted",
        },
        applications: ["Shoes", "Bags", "Decoration"],
        colors: ["Bright Gold", "Antique Gold", "Champagne Gold", "Custom Gold Tones"],
        customizationOptions: [
          "Custom gold tone matching",
          "Custom foil finish (matte/glossy)",
          "Custom backing options",
        ],
        samplePolicy: "Free swatch samples available. Custom gold tones require 10-14 days.",
      },
      {
        name: "Silver Foil-Printed Synthetic Leather",
        slug: "silver-foil-fabric",
        category: "Hot-Stamping Foil Finish",
        craft: "Hot-Stamping Foil",
        backingCategory: "Non-woven Backing",
        endUse: ["shoes", "handbags", "accessories"],
        description:
          "Silver foil-printed synthetic leather provides a brilliant silver metallic surface with high reflectivity, suitable for shoe uppers, bag panels, and decorative elements.",
        images: [
          "/images/products/silver-foil-fabric/01.jpg",
          "/images/products/silver-foil-fabric/02.jpg",
        ],
        specifications: {
          composition: "Polyester + Silver Foil",
          gsm: "170-210 GSM",
          width: "137cm / 54in",
          backing: "Non-woven",
        },
        applications: ["Shoes", "Bags", "Decoration"],
        colors: ["Bright Silver", "Antique Silver", "Platinum", "Custom Silver Tones"],
        customizationOptions: [
          "Custom silver tone matching",
          "Custom foil finish",
          "Custom backing options",
        ],
        samplePolicy: "Free swatch samples available. Custom silver tones require 10-14 days.",
      },
    ],
  },
  {
    name: "Chunky Glitter Synthetic Leather",
    slug: "glitter-fabric",
    description:
      "Premium chunky glitter synthetic leather for shoes, handbags, and fashion accessories. Available in elastic PU and non-woven backing options with custom color matching.",
    image: "/images/products/glitter-fabric/cover.jpg",
    applications: ["Shoes", "Handbags", "Bags Accessories", "Fashion Accessories"],
    seoKeywords: ["Chunky Glitter Fabric Manufacturer", "Glitter Fabric Factory China"],
    products: [
      {
        name: "Elastic Chunky Glitter Synthetic Leather",
        slug: "elastic-glitter-fabric",
        category: "Chunky Glitter Synthetic Leather",
        craft: "Chunky Glitter",
        backingCategory: "Elastic PU Backing",
        endUse: ["shoes", "handbags", "fashion-trims"],
        description:
          "Elastic chunky glitter synthetic leather combines stretchability with a shimmering glitter surface, ideal for form-fitting shoe uppers and fashion accessories that require flexibility and visual impact.",
        images: [
          "/images/products/elastic-glitter-fabric/01.jpg",
          "/images/products/elastic-glitter-fabric/02.jpg",
          "/images/products/elastic-glitter-fabric/03.jpg",
        ],
        specifications: {
          composition: "Polyester + Polyurethane",
          gsm: "180-220 GSM",
          width: "137cm / 54in",
          backing: "Elastic Knitted",
        },
        applications: ["Shoes", "Fashion Accessories", "Handbags"],
        colors: ["Gold", "Silver", "Rose Gold", "Black", "Navy Blue", "Custom Colors"],
        customizationOptions: [
          "Custom color matching",
          "Custom glitter particle size",
          "Custom width and GSM",
          "Custom backing options",
        ],
        samplePolicy:
          "Free swatch samples available (shipping cost covered by buyer). Custom color samples require 7-10 days development.",
      },
      {
        name: "Elastic PU Chunky Glitter Synthetic Leather",
        slug: "pu-glitter-fabric",
        category: "Chunky Glitter Synthetic Leather",
        craft: "Chunky Glitter",
        backingCategory: "Elastic PU Backing",
        endUse: ["shoes", "handbags", "accessories"],
        description:
          "Elastic PU chunky glitter synthetic leather features a durable polyurethane backing with bonded glitter particles, offering excellent adhesion and wear resistance for shoe and bag applications.",
        images: [
          "/images/products/pu-glitter-fabric/01.jpg",
          "/images/products/pu-glitter-fabric/02.jpg",
        ],
        specifications: {
          composition: "Polyurethane + Polyester",
          gsm: "200-260 GSM",
          width: "137cm / 54in",
          backing: "PU Coated",
        },
        applications: ["Shoes", "Handbags", "Bags Accessories"],
        colors: ["Gold", "Silver", "Champagne", "Black", "Red", "Custom Colors"],
        customizationOptions: [
          "Custom color matching",
          "Custom glitter density",
          "Custom GSM and width",
        ],
        samplePolicy:
          "Free swatch samples available. Custom color matching requires 7-10 days.",
      },
      {
        name: "Non-woven Chunky Glitter Synthetic Leather",
        slug: "non-woven-glitter-fabric",
        category: "Chunky Glitter Synthetic Leather",
        craft: "Chunky Glitter",
        backingCategory: "Non-woven Backing",
        endUse: ["fashion-trims", "accessories", "handbags"],
        description:
          "Non-woven chunky glitter synthetic leather offers a lightweight, cost-effective solution with a glitter surface bonded to a non-woven backing, suitable for fashion accessories and decorative applications.",
        images: [
          "/images/products/non-woven-glitter-fabric/01.jpg",
          "/images/products/non-woven-glitter-fabric/02.jpg",
        ],
        specifications: {
          composition: "Polyester + Non-woven Base",
          gsm: "120-160 GSM",
          width: "140cm / 55in",
          backing: "Non-woven",
        },
        applications: ["Fashion Accessories", "Decoration", "Handbags"],
        colors: ["Gold", "Silver", "Pink", "Blue", "Green", "Custom Colors"],
        customizationOptions: [
          "Custom color matching",
          "Custom glitter particle size",
          "Custom GSM",
        ],
        samplePolicy: "Free swatch samples available. Standard colors ship within 3 days.",
      },
      {
        name: "Chunky Glitter + Foil-Printed Composite Fabric",
        slug: "oxford-glitter-fabric",
        category: "Chunky Glitter Synthetic Leather",
        craft: "Glitter + Hot-Stamping Foil Composite",
        backingCategory: "Non-woven Backing",
        endUse: ["handbags", "accessories", "shoes"],
        description:
          "Chunky glitter + foil-printed composite fabric combines the durability of Oxford weave with a glitter and foil composite surface, providing superior tear strength for bags and heavy-duty accessories.",
        images: [
          "/images/products/oxford-glitter-fabric/01.jpg",
          "/images/products/oxford-glitter-fabric/02.jpg",
        ],
        specifications: {
          composition: "Polyester Oxford Weave + Glitter + Foil",
          gsm: "240-300 GSM",
          width: "150cm / 59in",
          backing: "Oxford Woven",
        },
        applications: ["Bags Accessories", "Handbags", "Shoes"],
        colors: ["Gold", "Silver", "Black", "Gunmetal", "Custom Colors"],
        customizationOptions: [
          "Custom color matching",
          "Custom weave density",
          "Custom GSM and width",
        ],
        samplePolicy: "Free swatch samples available. Custom colors require 7-10 days.",
      },
    ],
  },
];

/** Flattened list of all products */
export const allProducts: Product[] = productCategories.flatMap(
  (cat) => cat.products
);

/** Get a single product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

/** Get a category by slug */
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.slug === slug);
}

/** Get an end-use category by slug */
export function getEndUseBySlug(slug: string): EndUseCategory | undefined {
  return endUseCategories.find((cat) => cat.slug === slug);
}

/** Get all products matching a given end-use tag */
export function getProductsByEndUse(endUseSlug: string): Product[] {
  // Convert slug "fabric-for-shoes" to tag "shoes"
  const tag = endUseSlug.replace("fabric-for-", "");
  return allProducts.filter((p) => p.endUse.includes(tag));
}

/** Get the human-readable end-use label from a tag */
export function getEndUseLabel(tag: string): string {
  const cat = endUseCategories.find((c) => c.slug === `fabric-for-${tag}`);
  return cat?.shortName || tag;
}
