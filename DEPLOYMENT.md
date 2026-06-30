# 🚀 Imagify – Deployment Guide

## Project Overview

Imagify is a full-stack AI SaaS application that allows authenticated users to generate AI images from text prompts. The application uses JWT authentication, MongoDB Atlas for data storage, and the ClipDrop AI API for image generation. The frontend is deployed on Vercel, while the backend API is hosted on Render.

---

# Architecture

```
                User
                  │
                  ▼
        React + Vite Frontend
             (Vercel)
                  │
        HTTPS REST API Calls
                  │
                  ▼
       Node.js + Express Backend
              (Render)
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
 MongoDB Atlas        ClipDrop API
(User & Images)     (Image Generation)
```

---

# Technology Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router
* React Toastify

## Backend

* Node.js
* Express.js
* JWT Authentication
* Helmet
* Morgan
* Express Rate Limit

## Database

* MongoDB Atlas
* Mongoose

## AI API

* ClipDrop Text-to-Image API

---

# Environment Variables

## Backend (.env)

```
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIPDROP_API=your_clipdrop_api_key

NODE_ENV=production
```

---

## Frontend (.env)

```
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

---

# MongoDB Atlas Setup

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Allow network access.
4. Copy the connection string.
5. Add it to:

```
MONGODB_URI
```

6. Restart the backend.

---

# Backend Deployment (Render)

1. Push the backend code to GitHub.
2. Create a new Web Service on Render.
3. Connect the GitHub repository.
4. Configure:

```
Root Directory:
server

Build Command:
npm install

Start Command:
npm start
```

5. Add all backend environment variables.

6. Deploy.

---

# Frontend Deployment (Vercel)

1. Import the GitHub repository.
2. Select:

```
Root Directory:
client
```

3. Framework:

```
Vite
```

4. Build Command:

```
npm run build
```

5. Output Directory:

```
dist
```

6. Add:

```
VITE_BACKEND_URL
```

7. Deploy.

---

# Health Endpoint

The backend exposes a health endpoint for production monitoring.

```
GET /health
```

Example Response

```json
{
  "success": true,
  "status": "OK",
  "uptime": 1234.56,
  "environment": "production",
  "timestamp": "2026-06-30T12:30:00Z"
}
```

---

# Security Features

* JWT Authentication
* Protected API Routes
* Helmet Security Headers
* CORS Configuration
* Rate Limiting
* Password Hashing (bcrypt)
* Environment Variable Validation
* Global Error Handler
* 404 Middleware

---

# Deployment Workflow

```
Developer

      │

git push

      │

      ▼

 GitHub Repository

      │

      ├───────────────┐

      ▼               ▼

 Vercel          Render

Frontend         Backend

      │               │

      └──────┬────────┘

             ▼

         Production
```

---

# Troubleshooting

## CORS Error

Verify:

* Frontend URL is added to the backend CORS configuration.
* Backend URL is correctly configured in Vercel.

---

## MongoDB Connection Error

Check:

* MONGODB_URI
* IP Whitelist
* Database User Credentials

---

## Unauthorized Error

Verify:

* JWT token exists.
* Token is sent in request headers.
* JWT_SECRET matches the signing key.

---

## Build Failed

Frontend

```
npm run build
```

Backend

```
npm install
```

Check package versions and environment variables.

---

## AI Image Generation Failed

Verify:

* ClipDrop API key
* Internet connectivity
* API request limits
* Backend logs

---

# Live Application

## Frontend

```
https://imagify-dusky.vercel.app
```

## Backend

```
https://imagify-backend-1dju.onrender.com
```

## Health Check

```
https://imagify-backend-1dju.onrender.com/health
```

---

# Future Improvements

* Razorpay Payment Integration
* Image Collections
* Prompt Templates
* AI Style Presets
* Docker Deployment
* GitHub Actions CI/CD
* Sentry Error Monitoring
* Cloudinary Image Storage

---

# Author

**Shashank Shekhar**