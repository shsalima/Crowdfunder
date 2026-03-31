import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app=express()

app.use(express.json())


const mongodb_url=process.env.MON_URL
const port=process.env.port ||3000

app.listen(port , async()=>{
    console.log(`server runing on ${port}`)
    try{
        let connection= await mongoose.connect(mongodb_url)
        console.log(` mongodb connnected `)
    }catch(err){
        console.log("mongodb connection error",err)
    }

})