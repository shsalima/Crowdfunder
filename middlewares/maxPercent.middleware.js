import res from "express/lib/response"
import Investment from "../models/investment"



export const checkMaxPercent =async (req,req,next)=>{
    const {amount}= req.body
    const project=req.project


    const total=await Investment.aggregate([
        {
            $match:{
                investor:req.user.userId,
                project:project.id
            }
        },
      {  
        $group:{
            _id:null,
            total:{$sum: "$amount"}
        }
    }
    ])
    const investe=total[0]?.total ||0
    const percent=((investe+amount)/project.capital) *100
    if(percent > project.maxPercentPerInvestor){
        return res.status(400).json({message: " pourcentage maximal a dépassé"})
    }
    next()
}