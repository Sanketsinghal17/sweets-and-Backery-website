import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [

  /* =========================
     BENTO CAKES - 250 GM
  ========================== */

  {
    name: "Pineapple Bento Cake",
    description: "Soft and creamy pineapple bento cake",
    price: 300,
    image: "/images/products/pineapple-cake.jpg",
    category: "bento-cakes",
    weight: "250 gm"
  },

  {
    name: "Strawberry Bento Cake",
    description: "Fresh strawberry cream bento cake",
    price: 300,
    image: "/images/products/strawberry-cake.jpg",
    category: "bento-cakes",
    weight: "250 gm"
  },

  {
    name: "Blueberry Bento Cake",
    description: "Delicious blueberry cream bento cake",
    price: 300,
    image: "/images/products/blueberry-cake.jpg",
    category: "bento-cakes",
    weight: "250 gm"
  },

  {
    name: "Truffle Bento Cake",
    description: "Rich chocolate truffle bento cake",
    price: 350,
    image: "/images/products/chocolate-truffle-cake.jpg",
    category: "bento-cakes",
    weight: "250 gm"
  },


  /* =========================
     WHOLE CAKES - 500 GM
  ========================== */

  {
    name: "Strawberry Cake",
    description: "Fresh strawberry cream cake",
    price: 400,
    image: "/images/products/strawberry-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm"
  },

  {
    name: "Pineapple Cake",
    description: "Fresh pineapple cream cake",
    price: 400,
    image: "/images/products/pineapple-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm"
  },

  {
    name: "Chocolate Cake",
    description: "Rich and creamy chocolate cake",
    price: 400,
    image: "/images/products/chocolate-cream-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm"
  },

  {
    name: "Blueberry Cake",
    description: "Delicious blueberry cream cake",
    price: 400,
    image: "/images/products/blueberry-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm"
  },

  {
    name: "Butterscotch Cake",
    description: "Butterscotch cake with caramel flavor",
    price: 400,
    image: "/images/products/butterscotch-cake.jpg",
    category: "whole-cakes",
    weight: "500 gm"
  },


  /* =========================
     PREMIUM CAKES - 600 GM
  ========================== */

  {
    name: "Truffle Cake",
    description: "Rich chocolate truffle cake",
    price: 550,
    image: "/images/products/chocolate-truffle-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
    featured: true
  },

  {
    name: "Fruit Cake",
    description: "Fresh mixed fruit cream cake",
    price: 550,
    image: "/images/products/fruit-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm"
  },

  {
    name: "Red Velvet Cake",
    description: "Classic red velvet cake with creamy frosting",
    price: 550,
    image: "/images/products/red-velvet-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm",
    featured: true
  },

  {
    name: "Brown Velvet Cake",
    description: "Rich brown velvet cake",
    price: 500,
    image: "/images/products/chocolate-brownie.jpg",
    category: "premium-cakes",
    weight: "600 gm"
  },

  {
    name: "White Forest Cake",
    description: "Creamy white forest cake",
    price: 500,
    image: "/images/products/white-forest-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm"
  },

  {
    name: "Rasmalai Cake",
    description: "Delicious rasmalai flavored cake",
    price: 500,
    image: "/images/products/rasmalai-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm"
  },

  {
    name: "Blueberry Cake",
    description: "Rich blueberry cream cake",
    price: 500,
    image: "/images/products/blueberry-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm"
  },

  {
    name: "Chocolate Cake",
    description: "Rich chocolate cream cake",
    price: 500,
    image: "/images/products/chocolate-cream-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm"
  },

  {
    name: "Black Forest Cake",
    description: "Classic chocolate black forest cake",
    price: 450,
    image: "/images/products/black-forest-cake.jpg",
    category: "premium-cakes",
    weight: "600 gm"
  },


  /* =========================
     CAKES - 1 KG
  ========================== */

  {
    name: "Truffle Cake",
    description: "Rich chocolate truffle cake",
    price: 900,
    image: "/images/products/chocolate-truffle-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg",
    featured: true
  },

  {
    name: "Red Velvet Cake",
    description: "Classic red velvet cake",
    price: 900,
    image: "/images/products/red-velvet-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg"
  },

  {
    name: "Pineapple Cake",
    description: "Fresh pineapple cream cake",
    price: 700,
    image: "/images/products/pineapple-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg"
  },

  {
    name: "Chocolate Cake",
    description: "Rich chocolate cream cake",
    price: 700,
    image: "/images/products/chocolate-cream-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg"
  },

  {
    name: "Blueberry Cake",
    description: "Delicious blueberry cream cake",
    price: 700,
    image: "/images/products/blueberry-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg"
  },

  {
    name: "Strawberry Cake",
    description: "Fresh strawberry cream cake",
    price: 700,
    image: "/images/products/strawberry-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg"
  },

  {
    name: "White Forest Cake",
    description: "Creamy white forest cake",
    price: 800,
    image: "/images/products/white-forest-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg"
  },

  {
    name: "Butterscotch Cake",
    description: "Butterscotch cake with caramel flavor",
    price: 800,
    image: "/images/products/butterscotch-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg"
  },

  {
    name: "Black Forest Cake",
    description: "Classic black forest cake",
    price: 800,
    image: "/images/products/black-forest-cake.jpg",
    category: "cakes-1kg",
    weight: "1 kg"
  },


  /* =========================
     CAKE PASTRIES
  ========================== */

  {
    name: "Truffle Pastry",
    description: "Rich chocolate truffle pastry",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries"
  },

  {
    name: "Red Velvet Pastry",
    description: "Soft and creamy red velvet pastry",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries"
  },

  {
    name: "White Forest Pastry",
    description: "Creamy white forest pastry",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries"
  },

  {
    name: "Black Forest Pastry",
    description: "Classic black forest pastry",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries"
  },

  {
    name: "Pineapple Pastry",
    description: "Fresh pineapple cream pastry",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries"
  },

  {
    name: "Butterscotch Pastry",
    description: "Delicious butterscotch cream pastry",
    price: 80,
    image: "/images/products/cake-slice.jpg",
    category: "pastries"
  },

  {
    name: "Doughnut",
    description: "Freshly baked delicious doughnut",
    price: 70,
    image: "/images/products/cinnamon-rolls.jpg",
    category: "pastries"
  },


  /* =========================
     SNACKS
  ========================== */

  {
    name: "Stuff Kulcha",
    description: "Soft and delicious stuffed kulcha",
    price: 80,
    image: "/images/products/paneer-roll.jpg",
    category: "snacks"
  },

  {
    name: "Burger",
    description: "Fresh veg burger with delicious fillings",
    price: 80,
    image: "/images/products/burger.jpg",
    category: "snacks",
    featured: true
  },

  {
    name: "Cheese Roll",
    description: "Crispy roll filled with cheesy goodness",
    price: 100,
    image: "/images/products/paneer-roll.jpg",
    category: "snacks"
  },

  {
    name: "Hotdog",
    description: "Soft bun hotdog with delicious fillings",
    price: 100,
    image: "/images/products/hot-dog.jpg",
    category: "snacks"
  }

];


async function seed() {

  await mongoose.connect(process.env.MONGO_URI);

  await Product.deleteMany();

  await Product.insertMany(products);

  console.log("Products Inserted Successfully");

  process.exit();

}

seed();