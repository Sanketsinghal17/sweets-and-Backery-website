"use client"

import { useSearchParams } from "next/navigation"

export default function OrderSuccess(){

  const params = useSearchParams()

  const name = params.get("name")
  const total = params.get("total")

  return(
    <div className="max-w-3xl mx-auto py-20 text-center">

      <h1 className="text-3xl font-bold mb-6">
        🎉 Order Placed Successfully!
      </h1>

      <p className="mb-4">
        Thank you, {name}
      </p>

      <p className="text-xl font-semibold">
        Total Paid: ₹{total}
      </p>

    </div>
  )
}