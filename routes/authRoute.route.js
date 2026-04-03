import express from "express"
import { login, registerUser } from "../controllers/authController.controller.js"
import { checkAdminExists, checkEmail, loginValidation, registerValidation, verferToken } from "../middlewares/authMiddleware.middleware.js"

const router=express.Router()

router.post("/signUp",registerValidation,checkEmail,checkAdminExists,registerUser)
router.post("/login",loginValidation,login,verferToken)


export default router;