import express from "express"
import { login, registerUser } from "../controllers/authController.controller.js"

const router=express.Router()

router.post("/signUp",registerUser)
router.post("/login",login)


export default router;