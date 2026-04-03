import mongoose from "mongoose";
import Project from "./project";

const investmentSchema=new mongoose.Schema({
    investor:{
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
    },
     percentage: {
        type: Number
    }
},
{
    timeseries:true


}
);
const Investment= mongoose.model("Investment",investmentSchema)
export default Investment