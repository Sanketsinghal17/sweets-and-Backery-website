"use client"

import Link from "next/link"

export default function AdminDashboard(){

return(

<div className="max-w-6xl mx-auto py-20">

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
