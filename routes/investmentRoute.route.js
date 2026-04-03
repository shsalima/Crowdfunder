import express from "express";
import { checkBalance, verferToken } from "../middlewares/authMiddleware.middleware";
import { validateInvestment } from "../middlewares/investment.middleware";
import { checkProject } from "../middlewares/projectMiddleware.middleware";
import { checkMaxPercent } from "../middlewares/maxPercent.middleware";
import { investInProject } from "../controllers/investmentController.controller";

const investRoute=express.Router()


investRoute.post("/:id/invest",verferToken,validateInvestment,checkProject,checkBalance,checkMaxPercent,investInProject)


export default investRoute