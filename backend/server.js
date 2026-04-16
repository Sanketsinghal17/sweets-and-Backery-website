import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import path from "path"
import axios from "axios"



dotenv.config()

const app = express()
const TELEGRAM_TOKEN = "8630182529:AAFU3-w7UjQmolGUMY0AZjZjP6VI1TfzlxE"
const TELEGRAM_CHAT_ID = "5971597612"

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



app.post("/api/contact", async (req, res) => {
  try {
    console.log("CONTACT API HIT")   // ✅ ADD THIS
    console.log(req.body)   // ✅ ADD THIS
    const { name, email, message } = req.body

    const text = `
📩 NEW CONTACT MESSAGE

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}
    `

    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }
    )

    res.json({ success: true })

  } catch (error) {
    console.error("Contact error:", error)
    res.status(500).json({ message: "Failed to send message" })
  }
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