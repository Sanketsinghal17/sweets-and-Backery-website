console.log("Product routes loaded 🚀")
import express from "express"
import { upload } from "../middleware/upload.js"
import {
  addProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct
} from "../controllers/productController.js"

const router = express.Router()

// Add product
// router.post("/", addProduct)

// Get all products
router.get("/", getProducts)

// Get single product
router.get("/:id", getProductById)

// Delete product
router.delete("/:id", deleteProduct)

router.post("/", upload.single("image"), addProduct)

router.put("/:id", upload.single("image"), updateProduct)

export default router