import {body,validationResult} from "express-validator"
import jwt from "jsonwebtoken"
import User from "../models/User"



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