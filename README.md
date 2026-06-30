# 🚀 Imagify - AI Text-to-Image Generator

<p align="center">

AI-powered Text-to-Image SaaS built using the MERN Stack. Generate stunning AI images from text prompts with user authentication, credit management, image history, favorites, dashboards, and secure cloud deployment.

</p>

---

# 📌 Live Demo

### 🌐 Frontend
> https://imagify-a4x18j0w1-shashank-shekhars-projects.vercel.app/

### 🚀 Backend API
> https://imagify-backend-1dju.onrender.com

---

# 📸 Project Screenshots

## 🏠 Home Page

> <img width="1900" height="930" alt="Image" src="https://github.com/user-attachments/assets/0e5d15c8-2503-4e17-9ccc-f3ae08004085" />

---

## 🎨 About the AI Generator

> <img width="1897" height="927" alt="Image" src="https://github.com/user-attachments/assets/cb1e1922-8d59-4caa-9250-5d854bf004c5" />

---

## 🔐 Login / Signup

> <img width="1917" height="930" alt="Image" src="https://github.com/user-attachments/assets/6042d300-fe73-47bb-a61e-2b38a9fd285f" />

---

## ⚙️ How It Works

> <img width="1897" height="832" alt="Image" src="https://github.com/user-attachments/assets/0a7999e7-a852-4f81-b5d0-88fe752fef50" />

---

## 🎨 Image Generation

> <img width="1900" height="927" alt="Image" src="https://github.com/user-attachments/assets/6bd3b466-6eb3-4406-b5a7-b586ecbd0c49" />

---

## 📜 Image History

> <img width="1900" height="927" alt="Image" src="https://github.com/user-attachments/assets/96fa655a-3180-4233-bea3-7259507bea96" />

---

## 📊 User Dashboard

> <img width="1917" height="925" alt="Image" src="https://github.com/user-attachments/assets/cbbcd1a9-583a-4643-b509-e86aeafa09d2" />

---

## 💳 Pricing Page

> <img width="1902" height="922" alt="Image" src="https://github.com/user-attachments/assets/48c27f51-939d-4864-ad6b-f5325d70f1c6" />

---

## ⭐ Customer Review Page

> <img width="1897" height="927" alt="Image" src="https://github.com/user-attachments/assets/d5a6b9ca-8c2b-4593-8a23-3f49282e48ce" />

---

# ✨ Features

## AI Image Generation

- Generate images using text prompts
- High-quality AI generated images
- Instant image generation
- Download generated images

---

## Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Persistent Sessions

---

## User Dashboard

- Total Images Generated
- Credits Remaining
- Latest Prompt
- Personalized Dashboard

---

## Image History

- View all generated images
- Download previous images
- Delete generated images
- Favorite important images

---

## Credit System

- Credit deduction after every generation
- Live credit updates
- Dashboard integration
- Navbar credit counter

---

## Responsive UI

- Desktop
- Tablet
- Mobile Friendly

---

## Cloud Deployment

- Frontend deployed on Vercel
- Backend deployed on Render
- MongoDB Atlas Database

---

# 🏗 Project Architecture

```
                     User

                      │

                      ▼

              React Frontend
                 (Vercel)

                      │
          REST API (Axios + JWT)

                      ▼

             Express.js Backend
                 (Render)

      ┌──────────────┴──────────────┐

      ▼                             ▼

 MongoDB Atlas               AI Image API

      │

      ▼

 User Data
 Images
 Favorites
 Credits
```

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- Tailwind CSS
- Axios
- React Toastify

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- Bcrypt
- Multer

---

## Database

- MongoDB Atlas
- Mongoose ODM

---

## Deployment

- Vercel
- Render

---

## AI Services

- ClipDrop API

---

# 📂 Folder Structure

```
Imagify
│
├── client
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── README.md
├── API.md
├── ARCHITECTURE.md
├── DEPLOYMENT.md
└── LICENSE
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/ShashankShekhar31/Imagify.git
```

---

## Client

```bash
cd client

npm install

npm run dev
```

---

## Server

```bash
cd server

npm install

npm run server
```

---

# 🔐 Environment Variables

## Client (.env)

```env
VITE_BACKEND_URL=YOUR_BACKEND_URL
```

---

## Server (.env)

```env
MONGODB_URI=
JWT_SECRET=

CLIPDROP_API=

CURRENCY=

FRONTEND_URL=
```

---

# 📡 API Overview

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/user/register | Register User |
| POST | /api/user/login | Login User |
| GET | /api/user/credits | Get User Credits |
| POST | /api/image/generate-image | Generate Image |
| POST | /api/image/history | Image History |
| DELETE | /api/image/delete/:id | Delete Image |
| PATCH | /api/image/favorite/:id | Toggle Favorite |

Detailed API documentation is available in **API.md**

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using Bcrypt
- Protected Routes
- Environment Variables
- MongoDB Validation
- Authentication Middleware
- User Authorization
- Secure API Requests

---

# 📈 Production-Level Engineering

This project follows production-oriented software engineering practices:

- Modular Backend Architecture
- MVC Folder Structure
- Context API for Global State
- Reusable React Components
- RESTful API Design
- Environment Variable Management
- Error Handling
- Loading States
- Toast Notifications
- Secure Authentication
- Cloud Deployment

---

# 🚀 Scalability

The application is designed with scalability in mind:

- Component-based React architecture
- Modular Express controllers and routes
- Easily replaceable AI provider
- MongoDB Atlas cloud database
- Stateless JWT authentication
- REST API architecture
- Ready for Redis caching
- Easy integration with payment gateways
- Suitable for horizontal backend scaling

---

# 🌍 Deployment

## Frontend

Hosted on

**Vercel**

---

## Backend

Hosted on

**Render**

---

## Database

Hosted on

**MongoDB Atlas**

---

Deployment guide is available in **DEPLOYMENT.md**

---

# 🔮 Future Improvements

- Google OAuth
- Razorpay Payment Gateway
- Email Verification
- Password Reset
- AI Prompt Templates
- Image Collections
- Image Sharing
- Prompt History Search
- Admin Dashboard
- Usage Analytics
- Dark Mode
- PWA Support

---

# 📊 Project Highlights

✔ AI Powered SaaS

✔ MERN Stack

✔ JWT Authentication

✔ Credit Management System

✔ Dashboard Analytics

✔ Image History

✔ Favorite Images

✔ Delete Images

✔ Secure REST APIs

✔ MongoDB Atlas

✔ Responsive UI

✔ Cloud Deployment

---

# 🧪 Testing

Manual testing performed for:

- User Registration
- Login
- Authentication
- Credit Deduction
- Image Generation
- Dashboard
- Image History
- Delete Image
- Favorite Images
- Protected APIs

---

# 👨‍💻 Author

**Shashank Shekhar**

GitHub

https://github.com/ShashankShekhar31

LinkedIn

(Add your LinkedIn URL)

---

# 📄 License

This project is licensed under the MIT License.

---
