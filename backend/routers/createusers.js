const express=require('express')
const Users=require("../models/toolsample");

const asynchandle=require('express-async-handler');
const userapp=express.Router()
userapp.use(express.json())
let userscollection;
userapp.post('/newuser',async(req,res)=>{
    userscollection=req.app.get('userscollection');
    const {name,email,password}=req.body;
    
    const user=await userscollection.insertOne({name,email,password});
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
           
        });
   
    }else{
        res.status(400);
        throw new Error ("eroor ocuured");
    }
    res.send({
        message:"bharath"
    });
    console.log(userscollection);
})

module.exports=userapp;
