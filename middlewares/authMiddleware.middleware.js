// import {body,validationResult} from "express-validator"J
import jwt from "jsonwebtoken"
import User from "../models/User.js"



export const verferToken=(req,res,next)=>{
    try{

        const header=req.header.authorization
        if(!header){
            return res.status(401).json({message:"ne trouve pas  token"})
        }

        const token=header.split(" ")[1]
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded // id w role kayb9aw f req.user
        next()
    }catch(err){
        res.status(401).json({message:"Token invalid"})

    }
}


export const checkEmail= async(req,res,next)=>{
    try{
        const {email}=req.body

        const emailEsxist=await User.findOne({email})
        if(emailEsxist){
            res.status(500).json({message:"déjà exist cette email"})
        }
        next()

    }catch(err){
        res.status(500).json({ message: "Erreur serveur", error: err.message })
    }


}
export const checkAdminExists = async (req, res, next) => {
    try {
        const { role } = req.body

        if (role === "admin") {
            const adminExist = await User.findOne({ role: "admin" })
            if (adminExist) {
                // 400 => bad req
                return res.status(400).json({ message: "Admin déjà créé" })
            }
        }

        next() 
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Erreur serveur", error: err.message })
    }
}