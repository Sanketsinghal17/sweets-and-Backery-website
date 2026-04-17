import Order from "../models/Order.js"
import Product from "../models/Product.js"
import axios from "axios"

export const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      address,
      orderItems,
      paymentMethod
    } = req.body

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" })
    }

    let calculatedTotal = 0
    let itemsText = ""

    // ✅ NEW ARRAY FOR INVOICE
    let orderItemsWithDetails = []

    for (const item of orderItems) {
      const product = await Product.findById(item.product)

      if (!product) {
        return res.status(404).json({ message: "Product not found" })
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `Not enough stock for ${product.name}`
        })
      }

      // Reduce stock
      product.stock -= item.quantity
      await product.save()

      // Calculate total
      calculatedTotal += product.price * item.quantity

      // Telegram items text
      itemsText += `• ${product.name} x ${item.quantity}\n`

      // ✅ ADD THIS FOR INVOICE
      orderItemsWithDetails.push({
        name: product.name,
        price: product.price,
        quantity: item.quantity
      })
    }

    // 🚚 DELIVERY LOGIC (KEEP CONSISTENT EVERYWHERE)
    let deliveryCharge = 0

    if (calculatedTotal < 500) {
      deliveryCharge = 50   // ✅ FIXED (keep same everywhere)
    }

    const finalTotal = calculatedTotal + deliveryCharge

    const order = new Order({
      customerName,
      phone,
      address,
      orderItems,
      totalAmount: finalTotal,
      deliveryCharge: deliveryCharge,
      paymentMethod
    })

    const savedOrder = await order.save()

    // 🔔 TELEGRAM NOTIFICATION
    const BOT_TOKEN = "8630182529:AAFU3-w7UjQmolGUMY0AZjZjP6VI1TfzlxE"
    const CHAT_ID = "5971597612"

    const message = `
🛒 New Order Received!

👤 Name: ${customerName}
📞 Phone: ${phone}
📍 Address: ${address}

📦 Items:
${itemsText}

💰 Subtotal: ₹${calculatedTotal}
🚚 Delivery: ₹${deliveryCharge}
💵 Total: ₹${finalTotal}
    `

    await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: message
      }
    )

    // ✅ UPDATED RESPONSE (VERY IMPORTANT)
    res.status(201).json({
      ...savedOrder.toObject(),
      orderItemsWithDetails
    })

  } catch (error) {
    console.error("ORDER ERROR:", error.message)
    res.status(500).json({ message: error.message })
  }
}

// Get All Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("orderItems.product")
    res.status(200).json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update Order Status
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body

    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    // If order cancelled → restore stock
    if (orderStatus === "Cancelled") {
      for (const item of order.orderItems) {
        const product = await Product.findById(item.product)

        if (product) {
          product.stock += item.quantity
          await product.save()
        }
      }
    }

    order.orderStatus = orderStatus
    await order.save()

    res.status(200).json(order)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}