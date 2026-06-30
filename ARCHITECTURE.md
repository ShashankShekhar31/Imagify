# 🏗️ Imagify – System Architecture

## Overview

Imagify is a full-stack AI SaaS application that converts text prompts into AI-generated images. The application follows a client-server architecture with a React frontend, a Node.js/Express backend, MongoDB Atlas for persistent storage, and the ClipDrop AI API for image generation.

---

# High-Level Architecture

```text
                    ┌─────────────────────┐
                    │        User         │
                    └──────────┬──────────┘
                               │
                               ▼
                React + Vite Frontend (Vercel)
                               │
                    HTTPS REST API Requests
                               │
                               ▼
               Node.js + Express Backend (Render)
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
 MongoDB Atlas            JWT Authentication     ClipDrop AI API
(User Data)              Authorization          Image Generation
(Image History)
```

---

# Project Structure

```text
Imagify/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── README.md
├── DEPLOYMENT.md
└── ARCHITECTURE.md
```

---

# Backend Architecture

The backend follows a layered architecture.

```text
Routes
   │
   ▼
Controllers
   │
   ▼
Business Logic
   │
   ▼
Models (MongoDB)
```

### Responsibilities

### Routes

* Receive HTTP requests
* Apply authentication middleware
* Forward requests to controllers

---

### Controllers

Controllers contain application logic.

Examples:

* User Registration
* Login
* Credit Management
* AI Image Generation
* Dashboard
* Image History
* Delete Image
* Favorite Images

---

### Models

MongoDB collections:

* Users
* Images

---

### Middlewares

Current middlewares:

* JWT Authentication
* CORS
* Helmet
* Morgan
* 404 Handler
* Global Error Handler

---

# Authentication Flow

```text
User Login

      │

      ▼

Email + Password

      │

      ▼

Password Verification

      │

      ▼

JWT Token Generated

      │

      ▼

Frontend stores token

      │

      ▼

Every protected request

Authorization Header

      │

      ▼

JWT Middleware

      │

      ▼

Protected Controller
```

---

# AI Image Generation Flow

```text
User enters prompt

        │

        ▼

Frontend

(Result.jsx)

        │

POST /api/image/generate-image

        │

        ▼

Authentication Middleware

        │

        ▼

Credit Validation

        │

        ▼

ClipDrop AI API

        │

        ▼

Generated Image

        │

        ▼

Save Image in MongoDB

        │

        ▼

Return Base64 Image

        │

        ▼

Display on Frontend
```

---

# Image History Flow

```text
User

    │

History Page

    │

POST /api/image/history

    │

JWT Authentication

    │

MongoDB

    │

Return Images

    │

Display Cards
```

---

# Dashboard Flow

```text
Dashboard Page

      │

GET /api/image/dashboard

      │

Authentication

      │

MongoDB

      │

Calculate

• Credits

• Total Images

• Latest Prompt

      │

Return Dashboard Data
```

---

# Database Design

## User Collection

```text
User

├── _id

├── name

├── email

├── password

└── creditBalance
```

---

## Image Collection

```text
Image

├── _id

├── userId

├── prompt

├── imageUrl

├── favorite

├── createdAt

└── updatedAt
```

---

# API Structure

## User APIs

```text
POST   /api/user/register

POST   /api/user/login

GET    /api/user/credits
```

---

## Image APIs

```text
POST    /api/image/generate-image

POST    /api/image/history

GET     /api/image/dashboard

DELETE  /api/image/delete/:id

PUT     /api/image/favorite/:id
```

---

# Security Architecture

The application includes multiple security layers.

* JWT Authentication
* Password Hashing (bcrypt)
* Protected Routes
* Helmet Security Headers
* CORS Protection
* Environment Variables
* Global Error Handling
* 404 Middleware
* Rate Limiting

---

# Deployment Architecture

```text
                GitHub Repository

                       │

         ┌─────────────┴─────────────┐

         ▼                           ▼

Frontend (Vercel)            Backend (Render)

         │                           │

         └─────────────┬─────────────┘

                       ▼

                 MongoDB Atlas

                       │

                       ▼

                ClipDrop AI API
```

---

# Scalability Considerations

The project is designed so that future features can be added without major architectural changes.

Possible improvements include:

* Razorpay Payment Integration
* Cloudinary Image Storage
* Redis Caching
* Docker Deployment
* GitHub Actions CI/CD
* AI Style Presets
* Image Collections
* Prompt Templates
* Admin Dashboard

---

# Engineering Highlights

* Modular MVC architecture
* RESTful API design
* JWT-based authentication
* Secure password hashing
* Environment-based configuration
* Responsive React frontend
* Production deployment on Vercel and Render
* MongoDB Atlas cloud database
* AI image generation integration
* Dashboard analytics
* Image history with favorites and deletion
* Health check endpoint
* Centralized error handling
* Security middleware with Helmet

---

# Future Architecture

```text
                Load Balancer

                      │

          ┌───────────┴───────────┐

          ▼                       ▼

     Backend Instance 1     Backend Instance 2

          │                       │

          └───────────┬───────────┘

                      ▼

                  MongoDB Atlas

                      │

                Cloudinary Storage

                      │

                External AI APIs
```