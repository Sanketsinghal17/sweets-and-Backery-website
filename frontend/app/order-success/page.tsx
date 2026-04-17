"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import jsPDF from "jspdf"

function OrderContent(){

  const params = useSearchParams()

  const name = params.get("name")
  const total = params.get("total")

  function downloadPDF(){

    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text("Variety Sweets & Bakers", 20, 20)

    doc.setFontSize(12)
    doc.text(`Customer: ${name}`, 20, 40)
    doc.text(`Total: Rs.${total}`, 20, 50)
    doc.text(`Thank you for your order!`, 20, 70)

    doc.save("invoice.pdf")
  }

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

      <button
        onClick={downloadPDF}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Download Invoice
      </button>

    </div>
  )
}

export default function OrderSuccess(){
  return(
    <Suspense fallback={<p className="text-center py-20">Loading...</p>}>
      <OrderContent />
    </Suspense>
  )
}