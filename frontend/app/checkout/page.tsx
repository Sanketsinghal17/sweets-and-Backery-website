"use client"

import { useCart } from "@/components/cart-provider"
import { useState, useEffect } from "react"

export default function CheckoutPage() {

  const { items, clearCart } = useCart()

  const [mounted, setMounted] = useState(false)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState("COD")

  useEffect(() => {
    setMounted(true)
  }, [])

  async function placeOrder() {

    if (items.length === 0) {
      alert("Cart is empty")
      return
    }

    if (!name || !phone || !address) {
      alert("Please fill all customer details")
      return
    }

    const orderItems = items.map((item) => ({
      product: item.product?._id || item._id,
      quantity: item.quantity
    }))

    try {

      const res = await fetch(
        "https://sweets-and-backery-website.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            customerName: name,
            phone,
            address,
            orderItems,
            paymentMethod: paymentMethod
          })
        }
      )

      const data = await res.json()

      if (!res.ok) {
        alert(data.message || "Order failed")
        return
      }

      clearCart()

      window.location.href =
        `/order-success?name=${encodeURIComponent(name)}&total=${data.totalAmount}&delivery=${data.deliveryCharge}&items=${encodeURIComponent(
          JSON.stringify(data.orderItemsWithDetails)
        )}`

    } catch (error) {

      console.error(error)
      alert("Server error")

    }
  }

  if (!mounted) {
    return null
  }

  return (

    <div className="max-w-3xl mx-auto py-20 px-4">

      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      {/* CUSTOMER DETAILS */}

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-3 w-full mb-4 rounded"
      />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-3 w-full mb-4 rounded"
      />

      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border p-3 w-full mb-6 rounded"
      />

      {/* PAYMENT METHOD */}

      <div className="mb-6">

        <h2 className="text-lg font-semibold mb-3">
          Select Payment Method
        </h2>

        <div className="space-y-3">

          {/* CASH */}

          <label className="flex items-center gap-3 border p-4 rounded cursor-pointer">

            <input
              type="radio"
              name="paymentMethod"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />

            <span>
              💵 Cash on Delivery
            </span>

          </label>


          {/* ONLINE */}

          <label className="flex items-center gap-3 border p-4 rounded cursor-pointer">

            <input
              type="radio"
              name="paymentMethod"
              value="ONLINE"
              checked={paymentMethod === "ONLINE"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />

            <span>
              💳 Online Payment
            </span>

          </label>

        </div>

      </div>


      {/* QR CODE */}

      {paymentMethod === "ONLINE" && (

        <div className="border rounded-lg p-6 mb-6 text-center">

          <h2 className="text-xl font-semibold mb-3">
            Scan & Pay
          </h2>

          <p className="text-gray-600 mb-4">
            Scan the QR code using any UPI app
          </p>

          <img
            src="/images/qr.jpeg"
            alt="Online Payment QR Code"
            className="w-64 h-64 object-contain mx-auto border rounded"
          />

          <p className="text-sm text-gray-500 mt-4">
            After completing the payment, click "I Have Paid".
          </p>

        </div>

      )}


      {/* ORDER BUTTON */}

      <button
        onClick={placeOrder}
        className="bg-black text-white px-6 py-3 rounded w-full"
      >

        {paymentMethod === "ONLINE"
          ? "I Have Paid - Place Order"
          : "Place Order"
        }

      </button>

    </div>

  )
}