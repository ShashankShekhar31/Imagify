import express from 'express'
import {
  generateImage,
  getUserImages
} from '../controllers/imageController.js'

import userAuth from '../middlewares/auth.js'

const imageRouter = express.Router()

imageRouter.post(
  '/generate-image',
  userAuth,
  generateImage
);

imageRouter.post(
    "/history",
    userAuth,
    getUserImages
);

export default imageRouter;