import mongoose from "mongoose";
import Project from "./project";

const investmentSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    Project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},
{
    timeseries:true


}
);
const Investment= mongoose.model("Investment",investmentSchema)
export default Investment