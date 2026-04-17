"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminOrders(){

const [orders,setOrders] = useState([])
const router = useRouter()

useEffect(() => {
  const isAdmin = localStorage.getItem("admin")

  if (!isAdmin) {
    router.push("/admin/login")
  }
}, [])

useEffect(()=>{
fetchOrders()
},[])

async function fetchOrders(){

try{

const res = await fetch("https://sweets-and-backery-website.onrender.com/api/orders")

const data = await res.json()

console.log("ORDERS:", data) // ✅ DEBUG

setOrders(data)

}catch(error){
console.error("Error loading orders",error)
}

}

async function updateStatus(id,status){

try{

await fetch(`https://sweets-and-backery-website.onrender.com/api/orders/${id}/status`,{
method:"PATCH",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
orderStatus:status
})
})

fetchOrders()

}catch(error){

console.error("Status update failed",error)

}

}

return(

<div className="max-w-6xl mx-auto py-20">

<h1 className="text-3xl font-bold mb-10">
Admin Orders
</h1>

<div className="space-y-6">

{orders.length === 0 && (
  <p>No orders found</p>
)}

{orders.map((order) => {

  // ✅ Calculate subtotal from items
  const items = typeof order.orderItems === "string"
  ? JSON.parse(order.orderItems)
  : order.orderItems

  const subtotal = items.reduce((sum, item) => {
  const price = item.price || item.product?.price || 0
  return sum + price * (item.quantity || 0)
  }, 0)

  // ✅ Delivery logic
  const delivery = subtotal < 500 ? 30 : 0

  // ✅ Final total
  const finalTotal = subtotal + delivery

  return (

    <div
      key={order._id}
      className="border rounded-lg p-6 shadow-sm"
    >

      <p><b>Name:</b> {order.customerName}</p>
      <p><b>Phone:</b> {order.phone}</p>
      <p><b>Address:</b> {order.address}</p>

      <p className="mt-3">
        <b>Subtotal:</b> Rs.{subtotal}
      </p>

      <p>
        <b>Delivery:</b> Rs.{delivery}
      </p>

      <p className="text-lg font-bold">
        Total: Rs.{finalTotal}
      </p>

      <p className="mt-2">
        <b>Status:</b> {order.orderStatus}
      </p>

      <div className="mt-4 flex gap-3">

        <button
          onClick={() => updateStatus(order._id, "Preparing")}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Preparing
        </button>

        <button
          onClick={() => updateStatus(order._id, "Delivered")}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Delivered
        </button>

        <button
          onClick={() => updateStatus(order._id, "Cancelled")}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Cancel
        </button>

      </div>

    </div>
  )
})}

</div>

</div>

)

}