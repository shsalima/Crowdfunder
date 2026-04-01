import express from "express"
import { registerUser } from "../controllers/authController.controller.js"

const router=express.Router()

router.post("/signUp",registerUser)


export default router;