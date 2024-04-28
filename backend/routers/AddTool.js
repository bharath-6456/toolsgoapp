const express=require('express')
const Tools=require("../models/toolsModel");

const asynchandle=require('express-async-handler');
const toolapp=express.Router()
toolapp.use(express.json())
let toolscollection;
userapp.post('/tooladd',async(req,res)=>{
    toolscollection=req.app.get('toolscollection');
    const {toolname,dealerName,Image,location}=req.body;
    
    const user=await toolscollection.insertOne({toolname,dealerName,Image,location});
    if(user){
        res.status(201).json({
            _id:user._id,
            toolnamename:user.toolname,
            dealerName:user.dealerName,
            Image:user.Image,
            location:user.location
           
        });
   
    }else{
        res.status(400);
        throw new Error ("eroor ocuured");
    }
    res.send({
        message:"bharath"
    });
    console.log(toolscollection);
})

module.exports=userapp;