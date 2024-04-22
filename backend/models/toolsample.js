const mongoose=require( 'mongoose');

const userschema= new mongoose.Schema ({
    name:{
        type:String,
        required:[true,"please add the toolname"],
    },

    email:{
        type:String,
        required:[true,"please add the email"],
    },
    password:{
        type:String,
        required:[true]
    }
});
const UsersModel= new mongoose.model('Users',userschema);

 module.exports=UsersModel;
