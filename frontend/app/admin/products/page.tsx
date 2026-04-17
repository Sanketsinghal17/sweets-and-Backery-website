"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminProducts(){
const router = useRouter()
const [products,setProducts] = useState([])

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [stock,setStock] = useState("")
const [category,setCategory] = useState("")
const [description,setDescription] = useState("")
const [image,setImage] = useState(null)
const [editingProduct,setEditingProduct] = useState(null)
const BASE_URL = "https://sweets-and-backery-website.onrender.com"

useEffect(() => {
    const isAdmin = localStorage.getItem("admin")
  
    if (!isAdmin) {
      router.push("/admin/login")
    }
  }, [])

useEffect(()=>{
fetchProducts()
},[])

async function fetchProducts(){

const res = await fetch(`${BASE_URL}/api/products`)
const data = await res.json()

setProducts(data)

}

// ➕ ADD PRODUCT (with image upload)
async function addProduct(){

const formData = new FormData()

formData.append("name", name)
formData.append("price", price)
formData.append("stock", stock)
formData.append("category", category)
formData.append("description", description)

if(image){
formData.append("image", image)
}

await fetch(`${BASE_URL}/api/products`,{
method:"POST",
body:formData
})

await fetchProducts()
setTimeout(fetchProducts, 500)

resetForm()
fetchProducts()

}

// ❌ DELETE
async function deleteProduct(id){

await fetch(`${BASE_URL}/api/products/${id}`,{
method:"DELETE"
})

fetchProducts()

}

// ✏️ EDIT
function handleEdit(product){

setEditingProduct(product)

setName(product.name)
setPrice(product.price)
setStock(product.stock)
setCategory(product.category || "")
setDescription(product.description || "")

}

// 🔄 UPDATE
async function updateProduct(){

const formData = new FormData()

formData.append("name", name)
formData.append("price", price)
formData.append("stock", stock)
formData.append("category", category)
formData.append("description", description)

if(image){
formData.append("image", image)
}

await fetch(`${BASE_URL}/api/products/${editingProduct._id}`,{
method:"PUT",
body:formData
})

resetForm()
fetchProducts()

}

// 🔄 RESET FORM
function resetForm(){
setName("")
setPrice("")
setStock("")
setCategory("")
setDescription("")
setImage(null)
setEditingProduct(null)
}

return(

<div className="max-w-6xl mx-auto py-20">

<h1 className="text-3xl font-bold mb-10">
Manage Products
</h1>

<div className="border p-6 rounded mb-10">

<h2 className="text-xl font-semibold mb-6">
{editingProduct ? "Edit Product" : "Add Product"}
</h2>

<input
placeholder="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-2 w-full mb-3"
/>

<input
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
className="border p-2 w-full mb-3"
/>

<input
placeholder="Stock"
value={stock}
onChange={(e)=>setStock(e.target.value)}
className="border p-2 w-full mb-3"
/>

<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="border p-2 w-full mb-3"
>
  <option value="">Select Category</option>
  <option value="whole-cakes">Whole Cakes</option>
  <option value="premium-cakes">Premium Cakes</option>
  <option value="special-cakes">Special Cakes</option>
  <option value="slices">Slices & Puddings</option>
  <option value="snacks">Snacks</option>
</select>

<textarea
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
className="border p-2 w-full mb-3"
/>

<input
type="file"
onChange={(e)=>setImage(e.target.files[0])}
className="mb-4"
/>

<button
onClick={editingProduct ? updateProduct : addProduct}
className="bg-black text-white px-6 py-2 rounded"
>
{editingProduct ? "Update Product" : "Add Product"}
</button>

</div>

<div className="space-y-4">

{products.map((product)=>(

<div
key={product._id}
className="border p-4 rounded flex justify-between items-center"
>

<div className="flex items-center gap-4">

{product.image && (
<img
src={
    product.image?.startsWith("/uploads")
      ? `https://sweets-and-backery-website.onrender.com${product.image}`
      : product.image
  }
  alt={product.name}
className="w-16 h-16 object-cover rounded"
/>
)}

<div>
<p className="font-semibold">{product.name}</p>
<p>Price: Rs.{product.price}</p>
<p>Stock: {product.stock}</p>
</div>

</div>

<div className="flex gap-2">

<button
onClick={()=>handleEdit(product)}
className="bg-blue-500 text-white px-3 py-1 rounded"
>
Edit
</button>

<button
onClick={()=>deleteProduct(product._id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Delete
</button>

</div>

</div>

))}

</div>

</div>

)

}
