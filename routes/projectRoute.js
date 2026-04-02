import express from "express";
import { verferToken } from "../middlewares/authMiddleware.middleware.js";
import { createProject, getAllProjects, getProjectById } from "../controllers/projectController.controller.js";
import { createProjectValidation } from "../middlewares/projectMiddleware.middleware.js";


const projectRoutes=express.Router()

projectRoutes.post("/create",verferToken,createProjectValidation,createProject)

projectRoutes.get("/",verferToken,getAllProjects)
projectRoutes.get("/:id",verferToken,getProjectById)



export default projectRoutes