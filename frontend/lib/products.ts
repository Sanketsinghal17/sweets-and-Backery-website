import { fetchProducts } from "./api";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category:
    | "bento-cakes"
    | "whole-cakes"
    | "premium-cakes"
    | "cakes-1kg"
    | "pastries"
    | "snacks";
  weight?: string;
  featured?: boolean;
};

export const products: Product[] = [
  // ── Bento Cakes (250 gm) ────────────────────────────────
  {
    id: "bento-pineapple",
    name: "Pineapple Bento Cake",
    description: "Soft and creamy pineapple bento cake. 250 gm.",
    price: 300,
    image: "/images/products/pineapple-cake.jpg",
    category: "bento-cakes",
    weight: "250 gm",
  },
  {
    id: "bento-strawberry",
    name: "Strawberry Bento Cake",
    description: "Fresh strawberry cream bento cake. 250 gm.",
    price: 300,
    image: "/images/products/strawberry-cake.jpg",
    category: "bento-cakes",
    weight: "250 gm",
  },
  {
    id: "bento-blueberry",
    name: "Blueberry Bento Cake",
    description: "Delicious blueberry cream bento cake. 250 gm.",
    price: 300,
    image: "/images/products/blueberry-cake.jpg",
    category: "bento-cakes",
    weight: "250 gm",
  },
  {
    id: "bento-truffle",
    name: "Truffle Bento Cake",
    description: "Rich chocolate truffle bento cake. 250 gm.",
    price: 350,
    image: "/images/products/chocolate-truffle-cake.jpg",
    category: "bento-cakes",
    weight: "250 gm",
  },

  // ── Whole Cakes (500 gm) ────────────────────────────────
  {
    id: "whole-strawberry",
    name: "Strawberry Cake",
    description: "Fresh strawberry cream cake. 500 gm.",
    price: 400,
    image: "/images/products/strawberry-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
  },
  {
    id: "whole-pineapple",
    name: "Pineapple Cake",
    description: "Fresh pineapple cream cake. 500 gm.",
    price: 400,
    image: "/images/products/pineapple-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
  },
  {
    id: "whole-chocolate",
    name: "Chocolate Cake",
    description: "Rich and creamy chocolate cake. 500 gm.",
    price: 400,
    image: "/images/products/chocolate-cream-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
  },
  {
    id: "whole-blueberry",
    name: "Blueberry Cake",
    description: "Delicious blueberry cream cake. 500 gm.",
    price: 400,
    image: "/images/products/blueberry-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
  },
  {
    id: "whole-butterscotch",
    name: "Butterscotch Cake",
    description: "Butterscotch cake with caramel flavor. 500 gm.",
    price: 400,
    image: "/images/products/butterscotch-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
  },

  // ── Premium Cakes (600 gm) ──────────────────────────────
  {
    id: "premium-truffle",
    name: "Truffle Cake",
    description: "Rich chocolate truffle cake. 600 gm.",
    price: 550,
    image: "/images/products/chocolate-truffle-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
    featured: true,
  },
  {
    id: "premium-fruit",
    name: "Fruit Cake",
    description: "Fresh mixed fruit cream cake. 600 gm.",
    price: 550,
    image: "/images/products/fruit-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-red-velvet",
    name: "Red Velvet Cake",
    description: "Classic red velvet cake with creamy frosting. 600 gm.",
    price: 550,
    image: "/images/products/red-velvet-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
    featured: true,
  },
  {
    id: "premium-brown-velvet",
    name: "Brown Velvet Cake",
    description: "Rich brown velvet cake. 600 gm.",
    price: 500,
    image: "/images/products/chocolate-brownie.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-white-forest",
    name: "White Forest Cake",
    description: "Creamy white forest cake. 600 gm.",
    price: 500,
    image: "/images/products/white-forest-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-rasmalai",
    name: "Rasmalai Cake",
    description: "Delicious rasmalai flavored cake. 600 gm.",
    price: 500,
    image: "/images/products/rasmalai-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-blueberry",
    name: "Blueberry Cake",
    description: "Rich blueberry cream cake. 600 gm.",
    price: 500,
    image: "/images/products/blueberry-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-chocolate",
    name: "Chocolate Cake",
    description: "Rich chocolate cream cake. 600 gm.",
    price: 500,
    image: "/images/products/chocolate-cream-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-black-forest",
    name: "Black Forest Cake",
    description: "Classic chocolate black forest cake. 600 gm.",
    price: 450,
    image: "/images/products/black-forest-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },

  // ── Cakes (1 kg) ─────────────────────────────────────────
  {
    id: "cake-1kg-truffle",
    name: "Truffle Cake",
    description: "Rich chocolate truffle cake. 1 kg.",
    price: 900,
    image: "/images/products/chocolate-truffle-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
    featured: true,
  },
  {
    id: "cake-1kg-red-velvet",
    name: "Red Velvet Cake",
    description: "Classic red velvet cake. 1 kg.",
    price: 900,
    image: "/images/products/red-velvet-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
  },
  {
    id: "cake-1kg-pineapple",
    name: "Pineapple Cake",
    description: "Fresh pineapple cream cake. 1 kg.",
    price: 700,
    image: "/images/products/pineapple-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
  },
  {
    id: "cake-1kg-chocolate",
    name: "Chocolate Cake",
    description: "Rich chocolate cream cake. 1 kg.",
    price: 700,
    image: "/images/products/chocolate-cream-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
  },
  {
    id: "cake-1kg-blueberry",
    name: "Blueberry Cake",
    description: "Delicious blueberry cream cake. 1 kg.",
    price: 700,
    image: "/images/products/blueberry-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
  },
  {
    id: "cake-1kg-strawberry",
    name: "Strawberry Cake",
    description: "Fresh strawberry cream cake. 1 kg.",
    price: 700,
    image: "/images/products/strawberry-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
  },
  {
    id: "cake-1kg-white-forest",
    name: "White Forest Cake",
    description: "Creamy white forest cake. 1 kg.",
    price: 800,
    image: "/images/products/white-forest-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
  },
  {
    id: "cake-1kg-butterscotch",
    name: "Butterscotch Cake",
    description: "Butterscotch cake with caramel flavor. 1 kg.",
    price: 800,
    image: "/images/products/butterscotch-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
  },
  {
    id: "cake-1kg-black-forest",
    name: "Black Forest Cake",
    description: "Classic black forest cake. 1 kg.",
    price: 800,
    image: "/images/products/black-forest-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
  },

  // ── Cake Pastries ────────────────────────────────────────
  {
    id: "pastry-truffle",
    name: "Truffle Pastry",
    description: "Rich chocolate truffle pastry.",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries",
  },
  {
    id: "pastry-red-velvet",
    name: "Red Velvet Pastry",
    description: "Soft and creamy red velvet pastry.",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries",
  },
  {
    id: "pastry-white-forest",
    name: "White Forest Pastry",
    description: "Creamy white forest pastry.",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries",
  },
  {
    id: "pastry-black-forest",
    name: "Black Forest Pastry",
    description: "Classic black forest pastry.",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries",
  },
  {
    id: "pastry-pineapple",
    name: "Pineapple Pastry",
    description: "Fresh pineapple cream pastry.",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries",
  },
  {
    id: "pastry-butterscotch",
    name: "Butterscotch Pastry",
    description: "Delicious butterscotch cream pastry.",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries",
  },
  {
    id: "pastry-doughnut",
    name: "Doughnut",
    description: "Freshly baked delicious doughnut.",
    price: 70,
    image: "/images/products/cinnamon-rolls.jpg",
    category: "pastries",
  },

  // ── Snacks ───────────────────────────────────────────────
  {
    id: "snack-stuff-kulcha",
    name: "Stuff Kulcha",
    description: "Soft and delicious stuffed kulcha.",
    price: 80,
    image: "/images/products/paneer-roll.jpg",
    category: "snacks",
  },
  {
    id: "snack-burger",
    name: "Burger",
    description: "Fresh veg burger with delicious fillings.",
    price: 80,
    image: "/images/products/burger.jpg",
    category: "snacks",
    featured: true,
  },
  {
    id: "snack-cheese-roll",
    name: "Cheese Roll",
    description: "Crispy roll filled with cheesy goodness.",
    price: 100,
    image: "/images/products/paneer-roll.jpg",
    category: "snacks",
  },
  {
    id: "snack-hotdog",
    name: "Hotdog",
    description: "Soft bun hotdog with delicious fillings.",
    price: 100,
    image: "/images/products/hot-dog.jpg",
    category: "snacks",
  },
];

export const categories = [
  { value: "all", label: "All Products" },
  { value: "bento-cakes", label: "Bento Cakes" },
  { value: "whole-cakes", label: "Whole Cakes" },
  { value: "premium-cakes", label: "Premium Cakes" },
  { value: "cakes-1kg", label: "Cakes 1kg" },
  { value: "pastries", label: "Cake Pastries" },
  { value: "snacks", label: "Snacks" },
];

export async function getProductsByCategory(category: string) {
  const products = await fetchProducts();

  if (category === "all") return products;

  return products.filter((p: any) => {
    return (
      p.category?.toLowerCase().replace(/\s+/g, "-") ===
      category?.toLowerCase().replace(/\s+/g, "-")
    );
  });
}

export async function getFeaturedProducts() {
  const products = await fetchProducts();

  return products.filter((p: any) => p.featured);
}

export async function getProductById(id: string) {
  const products = await fetchProducts();

  return products.find((p: any) => p._id === id);
}