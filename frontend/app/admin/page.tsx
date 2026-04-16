"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminDashboard(){

const [authorized,setAuthorized] = useState(false)

const router = useRouter()

// 🔐 ADMIN PROTECTION
useEffect(()=>{

const isAdmin = localStorage.getItem("admin")

if(!isAdmin){
router.push("/admin/login")
}else{
setAuthorized(true)
}

},[])

// 🚪 LOGOUT FUNCTION
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

{/* 🔴 ONLY ADD THIS BUTTON (UI SAME OTHERWISE) */}
<div className="flex justify-end mb-4">
<button
onClick={handleLogout}
className="bg-red-600 text-white px-4 py-2 rounded"
>
Logout
</button>
</div>

<h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

<div className="grid grid-cols-2 gap-6">

<Link href="/admin/orders">
<div className="border p-8 rounded cursor-pointer hover:bg-gray-100">
<h2 className="text-2xl font-semibold">Manage Orders</h2>
<p className="text-gray-600 mt-2">
View and update customer orders
</p>
</div>
</Link>

<Link href="/admin/products">
<div className="border p-8 rounded cursor-pointer hover:bg-gray-100">
<h2 className="text-2xl font-semibold">Manage Products</h2>
<p className="text-gray-600 mt-2">
Add, edit and update bakery items
</p>
</div>
</Link>

</div>

</div>

)

}