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


export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id)
            .populate("owner", "name email role");

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, capital, maxPercentPerInvestor } = req.body;

        const project = await Project.findById(id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        // 3and l7a9 ghir owneer
        if (project.owner.toString() !== req.user.userId) {
            return res.status(403).json({ message: "Not authorized" });
        }

        // ghir les project li open
        if (project.status === "closed") {
            return res.status(400).json({ message: "Project is closed, cannot be updated" });
        }

       
        project.title = title || project.title;
        project.description = description || project.description;
        project.capital = capital || project.capital;

        if (maxPercentPerInvestor) {
            project.maxPercentPerInvestor = Math.min(maxPercentPerInvestor, 10);
        }

        await project.save();

        res.status(200).json(project);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

       
        if (project.owner.toString() !== req.user.userId) {
            return res.status(403).json({ message: "Not authorized" });
        }

        await project.remove();
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
