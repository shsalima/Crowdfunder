import Balance from "../models/balance.js"



export const createBalance =async(req,res)=>{
    try{
        const {amount}=req.body

        if(amount ==null || amount <0){
            return res.status(400).json({message:"amount import et supérieur à 0"})
        }


        // kaycheck wach déjà kayn :chi balance 3and had investor
       const existBalance=await Balance.findOne({
        user:req.user.userId
       })

       if(existBalance){
        return res.status(400).json({message:"balance déjà trouvé"})
       }
       const balance=await Balance.create({
        user:req.user.userId,
        amount:amount

       })
       res.status(201).json(balance)
    }catch(err){
        res.status(500).json({ message: err.message });

    }
}