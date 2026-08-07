/**
 * Product data model and catalog for Nixia Fabric
 * China Glitter Fabric Manufacturer
 */

export interface ProductSpecifications {
  composition: string;
  gsm: string;
  width: string;
  backing: string;
}

export interface Product {
  name: string;
  slug: string;
  category: "Glitter Fabric" | "Foil Fabric";
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
 * Product Catalog
 * Two main categories: Glitter Fabric & Foil Fabric
 */
export const productCategories: ProductCategory[] = [
  {
    name: "Glitter Fabric",
    slug: "glitter-fabric",
    description:
      "Premium glitter fabric for shoes, handbags, and fashion accessories. Available in elastic, PU, non-woven, and Oxford backing options with custom color development.",
    image: "/images/products/glitter-fabric/cover.jpg",
    applications: ["Shoes", "Handbags", "Bags Accessories", "Fashion Accessories"],
    seoKeywords: ["Glitter Fabric Manufacturer", "Glitter Fabric Factory China"],
    products: [
      {
        name: "Elastic Glitter Fabric",
        slug: "elastic-glitter-fabric",
        category: "Glitter Fabric",
        description:
          "Elastic glitter fabric combines stretchability with a shimmering glitter surface, ideal for form-fitting shoe uppers and fashion accessories that require flexibility and visual impact.",
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
          "Custom color development",
          "Custom glitter particle size",
          "Custom width and GSM",
          "Custom backing material",
        ],
        samplePolicy:
          "Free swatch samples available (shipping cost covered by buyer). Custom color samples require 7-10 days development.",
      },
      {
        name: "PU Glitter Fabric",
        slug: "pu-glitter-fabric",
        category: "Glitter Fabric",
        description:
          "PU glitter fabric features a durable polyurethane backing with bonded glitter particles, offering excellent adhesion and wear resistance for shoe and bag applications.",
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
          "Custom color development",
          "Custom glitter density",
          "Custom GSM and width",
        ],
        samplePolicy:
          "Free swatch samples available. Custom color development requires 7-10 days.",
      },
      {
        name: "Non-woven Glitter Fabric",
        slug: "non-woven-glitter-fabric",
        category: "Glitter Fabric",
        description:
          "Non-woven glitter fabric offers a lightweight, cost-effective solution with a glitter surface bonded to a non-woven backing, suitable for fashion accessories and decorative applications.",
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
          "Custom color development",
          "Custom glitter particle size",
          "Custom GSM",
        ],
        samplePolicy: "Free swatch samples available. Standard colors ship within 3 days.",
      },
      {
        name: "Oxford Glitter Fabric",
        slug: "oxford-glitter-fabric",
        category: "Glitter Fabric",
        description:
          "Oxford glitter fabric combines the durability of Oxford weave with a glitter surface, providing superior tear strength for bags and heavy-duty accessories.",
        images: [
          "/images/products/oxford-glitter-fabric/01.jpg",
          "/images/products/oxford-glitter-fabric/02.jpg",
        ],
        specifications: {
          composition: "Polyester Oxford Weave + Glitter",
          gsm: "240-300 GSM",
          width: "150cm / 59in",
          backing: "Oxford Woven",
        },
        applications: ["Bags Accessories", "Handbags", "Shoes"],
        colors: ["Gold", "Silver", "Black", "Gunmetal", "Custom Colors"],
        customizationOptions: [
          "Custom color development",
          "Custom weave density",
          "Custom GSM and width",
        ],
        samplePolicy: "Free swatch samples available. Custom colors require 7-10 days.",
      },
    ],
  },
  {
    name: "Foil Fabric",
    slug: "foil-fabric",
    description:
      "Metallic foil fabric for shoes, bags, and decoration. Available in gold, silver, and custom metallic finishes with excellent adhesion and reflective properties.",
    image: "/images/products/foil-fabric/cover.jpg",
    applications: ["Shoes", "Bags", "Decoration"],
    seoKeywords: ["Foil Fabric Manufacturer", "Metallic Fabric Factory"],
    products: [
      {
        name: "Metallic Foil Fabric",
        slug: "metallic-foil-fabric",
        category: "Foil Fabric",
        description:
          "Metallic foil fabric features a reflective metallic foil surface bonded to a fabric backing, providing a high-shine metallic appearance for fashion and decorative applications.",
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
          "Custom metallic color development",
          "Custom foil thickness",
          "Custom backing material",
        ],
        samplePolicy: "Free swatch samples available. Custom metallic colors require 10-14 days.",
      },
      {
        name: "Gold Foil Fabric",
        slug: "gold-foil-fabric",
        category: "Foil Fabric",
        description:
          "Gold foil fabric delivers a luxurious gold metallic finish with excellent light reflection, ideal for premium shoe accents, bag trim, and decorative applications.",
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
          "Custom gold tone development",
          "Custom foil finish (matte/glossy)",
          "Custom backing material",
        ],
        samplePolicy: "Free swatch samples available. Custom gold tones require 10-14 days.",
      },
      {
        name: "Silver Foil Fabric",
        slug: "silver-foil-fabric",
        category: "Foil Fabric",
        description:
          "Silver foil fabric provides a brilliant silver metallic surface with high reflectivity, suitable for shoe uppers, bag panels, and decorative elements.",
        images: [
          "/images/products/silver-foil-fabric/01.jpg",
          "/images/products/silver-foil-fabric/02.jpg",
        ],
        specifications: {
          composition: "Polyester + Silver Foil",
          gsm: "170-210 GSM",
          width: "137cm / 54in",
          backing: "Polyester Knitted",
        },
        applications: ["Shoes", "Bags", "Decoration"],
        colors: ["Bright Silver", "Antique Silver", "Platinum", "Custom Silver Tones"],
        customizationOptions: [
          "Custom silver tone development",
          "Custom foil finish",
          "Custom backing material",
        ],
        samplePolicy: "Free swatch samples available. Custom silver tones require 10-14 days.",
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
