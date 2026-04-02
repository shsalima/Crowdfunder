import express from "express";
import { validate, verferToken } from "../middlewares/authMiddleware.middleware.js";
import { createProject, getAllProjects, getProjectById } from "../controllers/projectController.controller.js";
import { createProjectValidation, onlyOwner } from "../middlewares/projectMiddleware.middleware.js";


const projectRoutes=express.Router()

projectRoutes.post("/create",verferToken,onlyOwner,createProjectValidation,createProject)

projectRoutes.get("/",verferToken,getAllProjects)
projectRoutes.get("/:id",verferToken,getProjectById)




export default projectRoutes