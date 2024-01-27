const mongoose=require('mongoose');

const userschema= new  mongoose.Schema({
    name:{
        type:String,
        required:[true,"please add the toolname"],
    },
    location:{
        type:String,
        required:[true,"please add the dealername"],
    },
    contactno:{
        type:String,
        required:[true,"please add the contactno"],

    },
    email:{
        type:String,
        required:[true,"please add the image"],
    },
    password:{
        type:String,
        required:[true]
    }
});
const users= new mongoose.model('users',userschema);

 
module.exports=users;
