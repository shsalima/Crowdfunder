import Project from "../models/project";

export const createProject=async(req,res)=>{
    try{
        const {title,description,capital}=req.body


        const project= await Project.create({
            title,
            description,
            capital,
            owner:req.user.userId
        })
        res.status(201).json(project)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}