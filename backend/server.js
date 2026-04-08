import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import path from "path"



dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)
app.use("/uploads", express.static("uploads"))
app.use((req, res) => {
  console.log("Route not matched:", req.url)
  res.status(404).send("Route not found ❌")
})

app.get("/", (req, res) => {
  res.send("Backend is running")
})
app.get("/api/test", (req, res) => {
  res.send("API working ✅")
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
console.log("Routes loaded 🚀")