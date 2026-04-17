import { fetchProducts } from "./api";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "whole-cakes" | "premium-cakes" | "special-cakes" | "slices-puddings" | "snacks";
  weight?: string;
  featured?: boolean;
};

export const products: Product[] = [
  // ── Whole Cakes (500 gm) ──────────────────────────────────
  {
    id: "whole-chocolate-cream",
    name: "Chocolate Cream Cake",
    description: "Classic chocolate cream cake with smooth frosting. 100% eggless. 500 gm.",
    price: 260,
    image: "/images/products/chocolate-cream-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
    featured: true,
  },
  {
    id: "whole-pineapple",
    name: "Pineapple Cake",
    description: "Soft sponge cake layered with fresh pineapple cream. 100% eggless. 500 gm.",
    price: 260,
    image: "/images/products/pineapple-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
    featured: true,
  },
  {
    id: "whole-butterscotch",
    name: "Butterscotch Cake",
    description: "Delicious butterscotch cake with caramel chips and smooth frosting. 100% eggless. 500 gm.",
    price: 260,
    image: "/images/products/butterscotch-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
  },
  {
    id: "whole-strawberry",
    name: "Strawberry Cake",
    description: "Fresh strawberry flavored cake with pink frosting. 100% eggless. 500 gm.",
    price: 260,
    image: "/images/products/strawberry-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
  },
  {
    id: "whole-blueberry",
    name: "Blueberry Cake",
    description: "Rich blueberry cake with creamy frosting and berry toppings. 100% eggless. 500 gm.",
    price: 260,
    image: "/images/products/blueberry-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm",
  },

  // ── Premium Cakes (600 gm) ────────────────────────────────
  {
    id: "premium-truffle",
    name: "Truffle Cake",
    description: "Rich chocolate truffle cake with layers of ganache and a velvety finish. 100% eggless. 600 gm.",
    price: 350,
    image: "/images/products/truffle-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
    featured: true,
  },
  {
    id: "premium-dairymilk",
    name: "Dairymilk Cake",
    description: "Luscious Dairymilk chocolate cake loaded with chocolate goodness. 100% eggless. 600 gm.",
    price: 380,
    image: "/images/products/dairymilk-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
    featured: true,
  },
  {
    id: "premium-red-velvet",
    name: "Red Velvet Cake",
    description: "Elegant red velvet cake with cream cheese frosting. 100% eggless. 600 gm.",
    price: 350,
    image: "/images/products/red-velvet-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
    featured: true,
  },
  {
    id: "premium-rasmalai",
    name: "Rasmalai Cake",
    description: "Fusion rasmalai cake with saffron, pistachios and creamy rabri frosting. 100% eggless. 600 gm.",
    price: 360,
    image: "/images/products/rasmalai-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-white-forest",
    name: "White Forest Cake",
    description: "White forest cake with white chocolate shavings and cherry topping. 100% eggless. 600 gm.",
    price: 320,
    image: "/images/products/white-forest-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-black-forest",
    name: "Black Forest Cake",
    description: "Classic black forest cake with chocolate sponge, whipped cream and cherries. 100% eggless. 600 gm.",
    price: 320,
    image: "/images/products/black-forest-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-fruit-cake",
    name: "Fruit Cake",
    description: "Fresh fruit cake topped with seasonal fruits and cream. 100% eggless. 600 gm.",
    price: 360,
    image: "/images/products/fruit-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },
  {
    id: "premium-oreo",
    name: "Oreo Cake",
    description: "Decadent Oreo cake with crushed cookies and cream layers. 100% eggless. 600 gm.",
    price: 350,
    image: "/images/products/oreo-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
  },

  // ── Special Cakes (600 gm) ────────────────────────────────
  {
    id: "special-pineapple",
    name: "Special Pineapple Cake",
    description: "Premium special pineapple cake with extra toppings. 100% eggless. 600 gm.",
    price: 320,
    image: "/images/products/pineapple-cake.jpg",
    category: "special-cakes",
    weight: "600 gm",
  },
  {
    id: "special-strawberry",
    name: "Special Strawberry Cake",
    description: "Premium strawberry cake with fresh strawberry layers. 100% eggless. 600 gm.",
    price: 320,
    image: "/images/products/strawberry-cake.jpg",
    category: "special-cakes",
    weight: "600 gm",
  },
  {
    id: "special-blueberry",
    name: "Special Blueberry Cake",
    description: "Premium blueberry cake with rich berry layers. 100% eggless. 600 gm.",
    price: 320,
    image: "/images/products/blueberry-cake.jpg",
    category: "special-cakes",
    weight: "600 gm",
  },
  {
    id: "special-butterscotch",
    name: "Special Butterscotch Cake",
    description: "Premium butterscotch cake with extra caramel. 100% eggless. 600 gm.",
    price: 320,
    image: "/images/products/butterscotch-cake.jpg",
    category: "special-cakes",
    weight: "600 gm",
  },
  {
    id: "special-black-forest",
    name: "Special Black Forest Cake",
    description: "Premium black forest cake with extra cherries and cream. 100% eggless. 600 gm.",
    price: 320,
    image: "/images/products/black-forest-cake.jpg",
    category: "special-cakes",
    weight: "600 gm",
  },
  {
    id: "special-chocolate-cream",
    name: "Special Chocolate Cream Cake",
    description: "Premium chocolate cream cake with rich frosting. 100% eggless. 600 gm.",
    price: 320,
    image: "/images/products/chocolate-cream-cake.jpg",
    category: "special-cakes",
    weight: "600 gm",
  },

  // ── Cake Slices & Puddings ────────────────────────────────
  {
    id: "slice-truffle-red-velvet",
    name: "Truffle / Red Velvet Slice",
    description: "A generous slice of our popular truffle or red velvet cake. 100% eggless.",
    price: 60,
    image: "/images/products/cake-slice.jpg",
    category: "slices-puddings",
  },
  {
    id: "slice-black-forest-fruit",
    name: "Black Forest / Fruit Slice",
    description: "A delightful slice of black forest or fresh fruit cake. 100% eggless.",
    price: 60,
    image: "/images/products/cake-slice.jpg",
    category: "slices-puddings",
  },
  {
    id: "slice-pineapple-butterscotch",
    name: "Pineapple / Butterscotch Slice",
    description: "A tasty slice of pineapple or butterscotch cake. 100% eggless.",
    price: 50,
    image: "/images/products/cake-slice.jpg",
    category: "slices-puddings",
  },
  {
    id: "pudding-truffle-dairymilk-fruit",
    name: "Truffle / Dairymilk / Fruit Pudding",
    description: "Creamy pudding in truffle, dairymilk, or fruit flavor. 100% eggless.",
    price: 60,
    image: "/images/products/cake-slice.jpg",
    category: "slices-puddings",
  },
  {
    id: "brownie-box",
    name: "Brownie Box (120 gm)",
    description: "A box of fudgy chocolate brownies, perfectly baked. 100% eggless. 120 gm.",
    price: 80,
    image: "/images/products/brownie-box.jpg",
    category: "slices-puddings",
    featured: true,
  },

  // ── Snacks ────────────────────────────────────────────────
  {
    id: "snack-paneer-cheese-roll",
    name: "Paneer Roll / Cheese Roll",
    description: "Crispy fried roll stuffed with spiced paneer or cheese filling.",
    price: 70,
    image: "/images/products/paneer-roll.jpg",
    category: "snacks",
  },
  {
    id: "snack-burger",
    name: "Burger",
    description: "Soft bun veg burger with fresh veggies and sauces.",
    price: 70,
    image: "/images/products/burger.jpg",
    category: "snacks",
    featured: true,
  },
  {
    id: "snack-veg-parcel",
    name: "Veg Parcel",
    description: "Crispy puff pastry parcel filled with spiced vegetables.",
    price: 70,
    image: "/images/products/paneer-roll.jpg",
    category: "snacks",
  },
  {
    id: "snack-sandwich-pizza",
    name: "Sandwich Pizza",
    description: "Grilled sandwich pizza with cheese, vegetables and pizza sauce.",
    price: 70,
    image: "/images/products/sandwich-pizza.jpg",
    category: "snacks",
  },
  {
    id: "snack-paneer-kulcha",
    name: "Paneer Kulcha",
    description: "Stuffed paneer kulcha, golden and crispy on the outside.",
    price: 70,
    image: "/images/products/paneer-roll.jpg",
    category: "snacks",
  },
  {
    id: "snack-hot-dog",
    name: "Hot Dog",
    description: "Classic hot dog with sauces and fresh veggies in a soft bun.",
    price: 60,
    image: "/images/products/hot-dog.jpg",
    category: "snacks",
  },
  {
    id: "snack-stuff-roll",
    name: "Stuff Roll",
    description: "Crispy roll stuffed with a savory mixed vegetable filling.",
    price: 70,
    image: "/images/products/paneer-roll.jpg",
    category: "snacks",
  },
  {
    id: "snack-aloo-patty",
    name: "Aloo Patty",
    description: "Golden fried potato patty with spices, a classic Indian snack.",
    price: 30,
    image: "/images/products/burger.jpg",
    category: "snacks",
  },
  {
    id: "snack-paneer-patty",
    name: "Paneer Patty",
    description: "Crispy paneer patty seasoned with Indian spices.",
    price: 40,
    image: "/images/products/paneer-roll.jpg",
    category: "snacks",
  },
  {
    id: "snack-veg-sandwich",
    name: "Veg Sandwich",
    description: "Fresh veg sandwich with crunchy vegetables and sauces.",
    price: 40,
    image: "/images/products/sandwich-pizza.jpg",
    category: "snacks",
  },
];

export const categories = [
  { value: "all", label: "All Products" },
  { value: "whole-cakes", label: "Whole Cakes" },
  { value: "premium-cakes", label: "Premium Cakes" },
  { value: "special-cakes", label: "Special Cakes" },
  { value: "slices-puddings", label: "Slices & Puddings" },
  { value: "snacks", label: "Snacks" },
];

export async function getProductsByCategory(category: string) {
  const products = await fetchProducts()

  if (category === "all") return products

  return products.filter(
  (p: any) =>
    p.category?.toLowerCase().replace(/\s+/g, "-") ===
    category?.toLowerCase().replace(/\s+/g, "-")
)
}

export async function getFeaturedProducts() {
  const products = await fetchProducts()

  return products.filter((p: any) => p.featured)
}

export async function getProductById(id: string) {
  const products = await fetchProducts()

  return products.find((p: any) => p._id === id)
}
