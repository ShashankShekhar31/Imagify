import express from 'express'
import { generateImage } from '../controllers/imageController.js'
import userAuth from '../middlewares/auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image', userAuth, generateImage)

router.get(
  "/history",
  userAuth,
  getUserImages
);

export default imageRouter

// http://localhost:3000/api/image/generate-image