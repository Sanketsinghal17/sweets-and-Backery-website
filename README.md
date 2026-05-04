# 🍰 Variety Sweets & Bakers

A full-stack bakery e-commerce website built for **Variety Sweets & Bakers**, allowing customers to browse products, add items to cart, place orders, download invoices, and enabling admin to manage products/orders.

---

## 🚀 Live Demo

### Frontend
https://sweets-and-backery-website.vercel.app/

### Backend API
https://sweets-and-backery-website.onrender.com/

---

# 📌 Features

## Customer Side
- Browse bakery products
- Category-based product filtering
- Add to cart functionality
- Checkout system
- Place order
- Auto delivery charge calculation
- Order success page
- Download PDF invoice
- Contact form
- Telegram order notifications

---

## Admin Side
- Admin login
- Add products
- Edit products
- Delete products
- Manage stock
- View all orders
- Update order status:
  - Processing
  - Preparing
  - Delivered
  - Cancelled

---

# 🛠 Tech Stack

## Frontend
- Next.js
- React
- Tailwind CSS
- TypeScript
- jsPDF

---

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Axios

---

## Deployment
- Vercel → Frontend
- Render → Backend
- MongoDB Atlas → Database

---

# Folder Structure

```bash
Sweets-Bakery-Shop/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── hooks/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
Major Functionalities

1. Product Management

Admin can:

Add products
Update products
Delete products
Manage stock quantity

2. Order Management

Customers can:

Place orders

Admin can:

View orders
Update status

3. Telegram Notifications

Whenever:

Customer places order
Customer sends contact form

Telegram bot instantly sends notification.

4. Invoice Generation

After successful order:

Customer can download PDF invoice

Includes:

Product details
Quantity
Delivery charge
Final total
Delivery Charge Logic
if(subtotal < 500){
   deliveryCharge = 30
}else{
   deliveryCharge = 0
}

Installation Guide
Clone Repository
git clone https://github.com/your-username/sweets-bakery-shop.git
Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:3000
Backend Setup
cd backend
npm install
npm run dev

Backend runs on:

http://localhost:5000
Environment Variables

Create .env file in backend folder:

MONGO_URI=your_mongodb_connection_string
TELEGRAM_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
PORT=5000
API Routes
Products
GET /api/products
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
Orders
POST /api/orders
GET /api/orders
PATCH /api/orders/:id/status
Contact
POST /api/contact
Future Improvements
Fix product image upload issue
Fix category auto-selection issue
Online payment integration
Authentication system
Order tracking
Customer accounts
Analytics dashboard
Challenges Faced
Image upload handling
Order response issues
Telegram API failures
Delivery charge calculations
Invoice generation bugs
Learnings

Through this project I learned:

Full stack development
REST APIs
MongoDB integration
Deployment
Error debugging
Git version control
Payment/order flow logic
Author

Sanket Singhal

B.Tech CSE (Data Science)
ABES Engineering College

GitHub: https://github.com/Sanketsinghal17

License

This project is for educational and portfolio purposes.