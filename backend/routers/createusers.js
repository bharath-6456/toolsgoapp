const express=require('express')
const users=require("../models/toolsample")
const router=express.Router()
const db=require('../db')
async function userss(){
    try{
      users.create({
            name:"bharath",
            location:"hyd",
            contact:"87593",
            email:"nahsf@gmasik.com",
            password:"3456",
            contactno:'852654'

        },{wtimeout:20000});
        console.log('success');
        
    }catch(err){
        console.log(err);
        
    }
}
module.exports=userss;
