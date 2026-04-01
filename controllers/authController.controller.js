import User from "../models/User.js"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv  from "dotenv";

export const registerUser =async(req,res)=>{
    const {name,email,password,role}=req.body

    try{
        const existUserEmail=await User.findOne({email})
        if(existUserEmail){
            return res.status(400).json({message:"email déjà trouvé "})

        }
        const hashage=await bcrypt.hash(password,10)
        const newUser=await User.create({
            name,
            email,
            password:hashage,
            role
        })
        const token=jwt.sign({
            userId:newUseruser._id,
            role:newUser.role
        },
        process.env.JWT_SECRET,
        {expiresIn:"7d"}
    )
    res.status(201).json({newUser,token})

    }catch(err){
        res.status(5000).json({msg:err.message})
    }


}