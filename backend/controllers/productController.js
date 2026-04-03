import Product from "../models/Product.js"

// Add Product
export const addProduct = async (req, res) => {
try {

const { name, price, stock } = req.body

const product = new Product({
  name: name,
  price: Number(price),
  stock: Number(stock),
  image: "/images/products/chocolate-cake.jpg",
  category: "Cake",
  description: name,
  isAvailable: true
})

const savedProduct = await product.save()

res.status(201).json(savedProduct)


} catch (error) {


console.log(error)

res.status(500).json({ message: error.message })


}
}


// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get Single Product
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Product deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    product.name = req.body.name || product.name
    product.price = req.body.price || product.price
    product.stock = req.body.stock || product.stock
    product.category = req.body.category || product.category
    product.description = req.body.description || product.description

    if (req.file) {
      product.image = "/uploads/" + req.file.filename
    }

    const updatedProduct = await product.save()

    res.status(200).json(updatedProduct)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}