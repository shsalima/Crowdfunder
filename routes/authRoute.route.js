import express from "express"
import { login, registerUser } from "../controllers/authController.controller.js"
import { checkEmail, verferToken } from "../middlewares/authMiddleware.middleware.js"

const router=express.Router()

router.post("/signUp",checkEmail,registerUser)
router.post("/login",verferToken,login)


export default router;