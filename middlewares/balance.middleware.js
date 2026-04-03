import { status } from "express/lib/response.js";
import Balance from "../models/balance.js";

export const checkBalance = async (req, res, next) => {
    try {
    const balance=await Balance.findOne({user:req.user.userId})
    if(!balance || balance.amount <req.body.amount){
        return res.status(400).json({message:"ne peut pas invester ton capital inferieur cette montant"})
    }
    req.balance=balance
    next()

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};