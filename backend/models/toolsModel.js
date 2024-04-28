const mongoose=require( 'mongoose');

const toolSchema= new mongoose.Schema ({
    Toolname:{
        type:String,
        required:[true,"please add the toolname"],
    },
    DealerName:{
        type:String,
        required:[true,"please add the dealerName"]
    },
    PhoneNumber:{
        type:String,
        required:[true, "please add phone number"],
        minlength: [10, "Phone number must be 10 digits long"],
        maxlength: [10, "Phone number must be 10 digits long"]
    },
    Price:{
        type:Number,
        required:[true, "please add price"],
        min: [1000, "Price must be min"],
        max: [3500, "Price must be min"]
    },
    Image:{
        type:String,
        required:[true,"please add the Image"],
    },
    Location:{
        type:String,
        required:[true,"please add Location"]
    },
    Status:{
        type:Boolean
    }

});
const ToolsModel= new mongoose.model('tools',toolSchema);

 module.exports=ToolsModel;
