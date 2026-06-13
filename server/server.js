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

app.use(
  cors({
    origin: [
        "http://localhost:5173",
        "https://imagify-one-theta.vercel.app"
    ],
    credentials: true
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