# 🛒 E-Commerce – MERN Application

**E-Commerce** is a full-stack web application enabling users to browse products, manage their shopping carts, and securely complete purchases online. Admin users can efficiently manage inventory and order processing.

---

## 🌟 Project Scope & Goals

### 🎯 Role-Based Access Control
Provide separate interfaces and permissions for admins (product & inventory management) and customers (shopping & order history).

### 💳 Real-Time Payment Processing
Integrate a secure, seamless payment workflow using Stripe.

### 🔐 Optimized Session Management
Leverage JWT-based authentication with access and refresh tokens for secure user sessions.

### ⚡ Scalable & Performant Architecture
Use Redis caching (Upstash) to accelerate token validation and reduce latency.

---

## ✨ Features

- ✅ **User Authentication & Authorization**
  - JWT-based access and refresh tokens
  - Role-based permissions (admin, customer)

- ✅ **Product Management (Admin)**
  - Create, update, and delete products
  - Inventory tracking

- ✅ **Shopping Cart & Checkout**
  - Add/remove items from cart
  - Order placement workflow
  - Stripe integration for secure payments

- ✅ **Caching & Performance**
  - Redis caching via Upstash to speed up authentication and validation

---

## 🛠️ Tech Stack & Implementation

### 🎨 Frontend
- **React (JavaScript)** – UI components and state management
- **Axios** – API requests
- 
### 🖥️ Backend
- **Node.js + Express.js** – REST API server with modular routing and controllers
- **JavaScript** – Application logic

### 🗄️ Database
- **MongoDB** – NoSQL database for products, orders, and users
- **Mongoose** – Schema modeling and validation

### 🔐 Authentication
- **JWT** – Access and refresh tokens for stateless authentication
- **Redis (Upstash)** – Token validation caching

### 🌐 API Design
- RESTful endpoints for products, carts, orders, and authentication

---

## 🚀 Live Demo

[[Live Demo Link](https://e-commerce-app-s82w.onrender.com)]

---
