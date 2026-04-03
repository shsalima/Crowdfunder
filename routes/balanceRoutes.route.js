import express from "express";
import { createBalance } from "../controllers/balanceController.controller.js";
import { verferToken } from "../middlewares/authMiddleware.middleware.js";
import { isInvestor } from "../middlewares/balance.middleware.js";


const balanceRoute=express.Router()

balanceRoute.post("/createBalance",verferToken,isInvestor,createBalance)

export default balanceRoute