import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import path from "path"
import axios from "axios"
import fs from "fs"

dotenv.config()

const app = express()

// ✅ Ensure uploads folder exists
const uploadDir = "uploads"
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

// ✅ Middleware
app.use(cors())
app.use(express.json())

// ✅ Static + Routes
app.use("/uploads", express.static("uploads"))
app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)

// ✅ Test routes
app.get("/", (req, res) => {
  res.send("Backend is running")
})

app.get("/api/test", (req, res) => {
  res.send("API working ✅")
})

// ⚠️ MOVE THESE TO .env LATER
const TELEGRAM_TOKEN = "8630182529:AAFU3-w7UjQmolGUMY0AZjZjP6VI1TfzlxE"
const TELEGRAM_CHAT_ID = "5971597612"

// ✅ Contact API
app.post("/api/contact", async (req, res) => {
  try {
    console.log("CONTACT HIT")

    const { name, email, subject, message } = req.body

    const text = `
📩 NEW CONTACT MESSAGE

👤 Name: ${name}
📧 Email: ${email}
📌 Subject: ${subject}

💬 Message:
${message}
    `

    // ✅ SAFE TELEGRAM CALL
    try {
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          chat_id: TELEGRAM_CHAT_ID,
          text
        }
      )
      console.log("✅ Telegram sent")
    } catch (err) {
      console.error("❌ Telegram failed:", err.message)
    }

    res.json({ success: true })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed" })
  }
})

// ❌ Always keep LAST
app.use((req, res) => {
  console.log("Route not matched:", req.url)
  res.status(404).send("Route not found ❌")
})

// ✅ DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

// ✅ Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

console.log("Routes loaded 🚀")