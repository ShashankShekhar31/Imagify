import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())

const allowedOrigins = [
  "http://localhost:5173",
  "https://imagify-one-theta.vercel.app",
  "https://imagify-9u2f7cx0s-shashank-shekhars-projects.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res)=> res.send("API Working"))

app.get('/test', (req, res) => {
    res.json({
        success: true,
        message: "Backend working",
        timestamp: new Date()
    })
})

app.listen(PORT, ()=> console.log('Server running on port ' + PORT))