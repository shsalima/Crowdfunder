import express from "express";
import { createBalance } from "../controllers/balanceController.controller.js";
import { verferToken } from "../middlewares/authMiddleware.middleware.js";


const balanceRoute=express.Router()

balanceRoute.post("/createBalance",verferToken,createBalance)

export default balanceRoute