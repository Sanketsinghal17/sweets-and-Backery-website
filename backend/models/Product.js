
import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number,
    min: 0,
    default: null
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  stock: {
    type: Number,
    default: 50
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, { timestamps: true })

export default mongoose.model("Product", productSchema)
