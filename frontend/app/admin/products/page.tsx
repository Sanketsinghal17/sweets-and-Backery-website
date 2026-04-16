"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminProducts(){

const [products,setProducts] = useState([])
const [authorized,setAuthorized] = useState(false)

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [stock,setStock] = useState("")
const [category,setCategory] = useState("")
const [description,setDescription] = useState("")
const [image,setImage] = useState(null)
const [editingProduct,setEditingProduct] = useState(null)

const BASE_URL = "https://sweets-and-bakery-website.onrender.com"

const router = useRouter()

// 🔐 ADMIN PROTECTION
useEffect(()=>{

const isAdmin = localStorage.getItem("admin")

if(!isAdmin){
router.push("/admin/login")
}else{
setAuthorized(true)
fetchProducts()
}

},[])

async function fetchProducts(){

const res = await fetch(`${BASE_URL}/api/products`)
const data = await res.json()

setProducts(data)

}

// ➕ ADD PRODUCT
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

// 🚪 LOGOUT
function handleLogout(){
localStorage.removeItem("admin")
router.push("/admin/login")
}

// ⛔ BLOCK UNTIL AUTH CHECK
if(!authorized){
return null
}

return(

<div className="max-w-6xl mx-auto py-20">

{/* HEADER */}
<div className="flex justify-between items-center mb-10">
<h1 className="text-3xl font-bold">
Manage Products
</h1>

<button
onClick={handleLogout}
className="bg-red-600 text-white px-4 py-2 rounded"
>
Logout
</button>
</div>

{/* FORM */}
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

<input
placeholder="Category"
value={category}
onChange={(e)=>setCategory(e.target.value)}
className="border p-2 w-full mb-3"
/>

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

{/* PRODUCT LIST */}
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
    ? `${BASE_URL}${product.image}`
    : product.image
}
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