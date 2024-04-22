const express=require("express")
const app=express()
const port=5001
const Database=require('./db');
const mongoose=require('mongoose')
const router=express.Router();
const UsersModel=require('./models/toolsample');
const cors=require('cors');
const authuser = require("./routers/Authuser");
app.use(cors())
const bcrypt=require('bcrypt')
mongoose.connect('mongodb+srv://bharath6456:bharath6456@cluster0.ilynjgs.mongodb.net/toolsgo?retryWrites=true&w=majority');





app.use(express.json());

app.post('/register',async(req,res)=>{
    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const user = await UsersModel.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }});
app.post('/login', authuser
);


  
app.listen(port,()=>{
    
    console.log('example is listening on ',port);
   
})
 Database();

