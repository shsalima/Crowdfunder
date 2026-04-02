import Project from "../models/project.js";

export const createProject=async(req,res)=>{
    try{
        const {title,description,capital,initialInvestment, maxPercentPerInvestor}=req.body


        const project= await Project.create({
            title,
            description,
            capital,
            owner:req.user.userId,
           currentAmount: initialInvestment ||0,
           maxPercentPerInvestor: maxPercentPerInvestor || 50
        })
        res.status(201).json(project)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}






export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find()
            .populate("owner", "name email role") // kay afficher les donnez dyal owner
            .sort({ createdAt: -1 }); // آakhir projet howa lawl
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};