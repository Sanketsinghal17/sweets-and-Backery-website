"use client"

import { useCart } from "@/components/cart-provider"
import { useState, useEffect } from "react"

export default function CheckoutPage(){

  const { items, clearCart } = useCart()

  const [mounted,setMounted] = useState(false)

  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")

  useEffect(()=>{
    setMounted(true)
  },[])

  async function placeOrder(){

    if(items.length === 0){
      alert("Cart is empty")
      return
    }

    // ✅ FIXED ORDER ITEMS
    const orderItems = items.map((item)=>({
    product: item.product?._id || item._id,   // ✅ FIX
    quantity: item.quantity
    }))
    
    try{

      const res = await fetch("https://sweets-and-backery-website.onrender.com/api/orders",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          customerName:name,
          phone,
          address,
          orderItems,
          paymentMethod:"COD"
        })
      })

      const data = await res.json()   // ✅ ADD THIS LINE

      if(!res.ok){
      alert(data.message || "Order failed")
      return
      }

      clearCart()

      alert("Order placed successfully!")

      // ✅ OPTIONAL (for next step)
      window.location.href = `/order-success?name=${name}&total=${data.totalAmount}`
    }catch(error){
      console.error(error)
      alert("Server error")
    }

  }

  if(!mounted){
    return null
  }

  return(

    <div className="max-w-3xl mx-auto py-20">

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <textarea
        placeholder="Address"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={placeOrder}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Place Order
      </button>

    </div>

  )

}