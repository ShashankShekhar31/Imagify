import express from 'express'
import {
  generateImage,
  getUserImages,
  getDashboard,
  deleteImage,
  toggleFavorite
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

imageRouter.get(
    "/dashboard",
    userAuth,
    getDashboard
);

imageRouter.delete(
  "/delete/:id",
  userAuth,
  deleteImage
);

imageRouter.put(
    "/favorite/:id",
    userAuth,
    toggleFavorite
);

export default imageRouter;