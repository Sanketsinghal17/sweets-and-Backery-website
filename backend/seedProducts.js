import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [

/* WHOLE CAKES */

{
name:"Chocolate Cream Cake",
description:"Chocolate cream cake with smooth frosting",
price:260,
image:"/images/products/chocolate-cream-cake.jpg",
category:"whole-cakes",
weight:"500 gm"
},

{
name:"Pineapple Cake",
description:"Fresh pineapple cream cake",
price:260,
image:"/images/products/pineapple-cake.jpg",
category:"whole-cakes",
weight:"500 gm"
},

{
name:"Butterscotch Cake",
description:"Butterscotch cake with caramel flavor",
price:260,
image:"/images/products/butterscotch-cake.jpg",
category:"whole-cakes",
weight:"500 gm"
},

{
name:"Strawberry Cake",
description:"Fresh strawberry cake",
price:260,
image:"/images/products/strawberry-cake.jpg",
category:"whole-cakes",
weight:"500 gm"
},

{
name:"Blueberry Cake",
description:"Blueberry flavored cake",
price:260,
image:"/images/products/blueberry-cake.jpg",
category:"whole-cakes",
weight:"500 gm"
},

/* PREMIUM CAKES */

{
name:"Truffle Cake",
description:"Rich chocolate truffle cake",
price:350,
image:"/images/products/truffle-cake.jpg",
category:"premium-cakes",
weight:"600 gm"
},

{
name:"Dairymilk Cake",
description:"Chocolate dairymilk cake",
price:380,
image:"/images/products/dairymilk-cake.jpg",
category:"premium-cakes",
weight:"600 gm"
},

{
name:"Red Velvet Cake",
description:"Classic red velvet cake",
price:350,
image:"/images/products/red-velvet-cake.jpg",
category:"premium-cakes",
weight:"600 gm"
},

{
name:"Rasmalai Cake",
description:"Rasmalai flavored cake",
price:360,
image:"/images/products/rasmalai-cake.jpg",
category:"premium-cakes",
weight:"600 gm"
},

{
name:"White Forest Cake",
description:"White chocolate forest cake",
price:320,
image:"/images/products/white-forest-cake.jpg",
category:"premium-cakes",
weight:"600 gm"
},

{
name:"Black Forest Cake",
description:"Chocolate cherry forest cake",
price:320,
image:"/images/products/black-forest-cake.jpg",
category:"premium-cakes",
weight:"600 gm"
},

{
name:"Fruit Cake",
description:"Mixed fruit cream cake",
price:360,
image:"/images/products/fruit-cake.jpg",
category:"premium-cakes",
weight:"600 gm"
},

{
name:"Oreo Cake",
description:"Oreo cookies cream cake",
price:350,
image:"/images/products/oreo-cake.jpg",
category:"premium-cakes",
weight:"600 gm"
},

/* SPECIAL CAKES */

{
name:"Special Pineapple Cake",
price:320,
image:"/images/products/pineapple-cake.jpg",
category:"special-cakes",
weight:"600 gm"
},

{
name:"Special Strawberry Cake",
price:320,
image:"/images/products/strawberry-cake.jpg",
category:"special-cakes",
weight:"600 gm"
},

{
name:"Special Blueberry Cake",
price:320,
image:"/images/products/blueberry-cake.jpg",
category:"special-cakes",
weight:"600 gm"
},

{
name:"Special Butterscotch Cake",
price:320,
image:"/images/products/butterscotch-cake.jpg",
category:"special-cakes",
weight:"600 gm"
},

{
name:"Special Black Forest Cake",
price:320,
image:"/images/products/black-forest-cake.jpg",
category:"special-cakes",
weight:"600 gm"
},

{
name:"Special Chocolate Cream Cake",
price:320,
image:"/images/products/chocolate-cream-cake.jpg",
category:"special-cakes",
weight:"600 gm"
},

/* SLICES */

{
name:"Truffle Slice",
price:60,
image:"/images/products/cake-slice.jpg",
category:"slices-puddings"
},

{
name:"Black Forest Slice",
price:60,
image:"/images/products/cake-slice.jpg",
category:"slices-puddings"
},

{
name:"Pineapple Slice",
price:50,
image:"/images/products/cake-slice.jpg",
category:"slices-puddings"
},

{
name:"Fruit Pudding",
price:60,
image:"/images/products/cake-slice.jpg",
category:"slices-puddings"
},

{
name:"Brownie Box",
price:80,
image:"/images/products/brownie-box.jpg",
category:"slices-puddings"
},

/* SNACKS */

{
name:"Paneer Roll",
price:70,
image:"/images/products/paneer-roll.jpg",
category:"snacks"
},

{
name:"Burger",
price:70,
image:"/images/products/burger.jpg",
category:"snacks"
},

{
name:"Veg Parcel",
price:70,
image:"/images/products/paneer-roll.jpg",
category:"snacks"
},

{
name:"Sandwich Pizza",
price:70,
image:"/images/products/sandwich-pizza.jpg",
category:"snacks"
},

{
name:"Paneer Kulcha",
price:70,
image:"/images/products/paneer-roll.jpg",
category:"snacks"
},

{
name:"Hot Dog",
price:60,
image:"/images/products/hot-dog.jpg",
category:"snacks"
},

{
name:"Stuff Roll",
price:70,
image:"/images/products/paneer-roll.jpg",
category:"snacks"
},

{
name:"Aloo Patty",
price:30,
image:"/images/products/burger.jpg",
category:"snacks"
},

{
name:"Paneer Patty",
price:40,
image:"/images/products/paneer-roll.jpg",
category:"snacks"
},

{
name:"Veg Sandwich",
price:40,
image:"/images/products/sandwich-pizza.jpg",
category:"snacks"
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