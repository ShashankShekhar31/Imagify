import express from 'express'
// import { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay} from '../controllers/userController.js'
import { registerUser, loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth, userCredits)
// userRouter.post('/pay-razor', userAuth, paymentRazorpay)
// userRouter.post('/verify-razor', verifyRazorpay)

export default userRouter


// <!> route to verify in postman
// http://localhost:3000/api/user/register
// http://localhost:3000/api/user/login
// http://localhost:3000/api/user/credits
// http://localhost:3000/api/user/pay-razor
// http://localhost:3000/api/user/verify-razor
