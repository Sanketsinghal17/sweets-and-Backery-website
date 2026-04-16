import Order from "../models/Order.js"
import Product from "../models/Product.js"
import axios from "axios"

// Create Order
export const createOrder = async (req, res) => {
  try {
    console.log("🔥 CREATE ORDER API HIT")

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

      product.stock -= item.quantity
      await product.save()

      calculatedTotal += product.price * item.quantity
    }

    const order = new Order({
      customerName,
      phone,
      address,
      orderItems,
      totalAmount: calculatedTotal,
      paymentMethod
    })

    const savedOrder = await order.save()

    console.log("✅ Order saved")

    // 🔔 TELEGRAM NOTIFICATION
    console.log("📤 Sending Telegram...")
    const TELEGRAM_TOKEN = "8630182529:AAFU3-w7UjQmolGUMY0AZjZjP6VI1TfzlxE"
    const CHAT_ID = "5971597612"

    const message = `🛒 New Order!
    👤 Name: ${customerName}
    📞 Phone: ${phone}
    💰 Total: ₹${calculatedTotal}`

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=Order Placed`

    try {
      await fetch(url)
      console.log("Telegram sent")
    } catch (err) {
      console.log("Telegram error", err)
    }

    res.status(201).json(savedOrder)

  } catch (error) {
    console.log("❌ Order error:", error)
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