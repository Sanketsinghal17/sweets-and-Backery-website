"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import jsPDF from "jspdf"

function OrderContent(){

  const params = useSearchParams()

  const name = params.get("name")
  const total = Number(params.get("total"))
  const delivery = Number(params.get("delivery")) || 0

  // ⚠️ For now using dummy items (we will upgrade later to real items)
  const items = JSON.parse(params.get("items") || "[]")

  function downloadPDF(){

    const doc = new jsPDF()

    // HEADER
    doc.setFontSize(18)
    doc.text("Variety Sweets & Bakers", 20, 20)

    doc.setFontSize(10)
    doc.text("Fresh Cakes | Premium Quality", 20, 26)

    // CUSTOMER INFO
    doc.setFontSize(12)
    doc.text(`Customer: ${name}`, 20, 40)
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 48)

    // TABLE HEADER
    let y = 65

    doc.setFontSize(12)
    doc.text("Item", 20, y)
    doc.text("Qty", 110, y)
    doc.text("Price", 130, y)
    doc.text("Total", 160, y)

    y += 5
    doc.line(20, y, 190, y)

    y += 10

    let subtotal = 0

    // ITEMS LOOP
    items.forEach((item) => {
      const itemTotal = item.price * item.quantity
      subtotal += itemTotal

      doc.text(item.name, 20, y)
      doc.text(String(item.quantity), 110, y)
      doc.text(`₹${item.price}`, 130, y)
      doc.text(`₹${itemTotal}`, 160, y)

      y += 10
    })

    // LINE
    doc.line(20, y, 190, y)
    y += 10

    // SUBTOTAL
    doc.text(`Subtotal: ₹${subtotal}`, 130, y)
    y += 10

    // DELIVERY
    doc.text(`Delivery: ₹${delivery}`, 130, y)
    y += 10

    // FINAL TOTAL
    doc.setFontSize(14)
    doc.text(`Total: ₹${total}`, 130, y)

    y += 20

    // FOOTER
    doc.setFontSize(11)
    doc.text("Thank you for your order!", 20, y)
    doc.text("Visit Again ❤️", 20, y + 8)

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
        className="mt-6 bg-black text-white px-6 py-3 rounded"
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