const express = require("express");
const app = express();
const port = 5001;
const Database = require('./db');
const mongoose = require('mongoose');
const UsersModel = require('./models/toolsample');
const cors = require('cors');
const authuser = require("./routers/Authuser");
const AddTool = require("./models/toolsModel");
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://bharath6456:bharath6456@cluster0.ilynjgs.mongodb.net/toolsgo?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const user = await UsersModel.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/login', authuser);

app.post('/addtool', async (req, res) => {
    try {
        const tool = await AddTool.create(req.body);
        res.status(201).json({
            _id: tool._id,
            toolname: tool.Toolname,
            dealerName: tool.DealerName,
            phonenumber: tool.PhoneNumber,
            price:tool.Price,
            Image: tool.Image,
            location: tool.Location
        });
    } catch (error) {
        console.error("Error adding tool:", error);
        res.status(400).json({ message: "Error occurred while adding tool" });
    }
});

app.get('/gettools',async(req,res)=> {
    try {
        const tools = await AddTool.find({})
        res.send({payload:tools})
    }
    catch(error) {
        console.error("Error adding tool:", error);
        res.status(400).json({ message: "Error occurred while fetching tools" });
    }
})

app.put('/removeTool:id',async(req,res)=> {
    const id = req.params.id
    const deleteObj = req.body
    await AddTool.update({_id:id},{$set:{...deleteObj,Status:false}})
})

app.get('/filter',async(req,res)=>{
    let body = req.body
    let tools
    if(body.location!=null && body.price==null)
        tools = await AddTool.find({Location:body.location})
    else if(body.price!=null && body.location==null)
        tools = await AddTool.find({Price:{$lte:body.price}})
    else if(body.price!=null && body.location!=null)
        tools = await AddTool.find({$and:[{Price:{$lte:body.price}},{Location:body.location}]})
    res.send({payload:tools})
})

app.listen(port, () => {
    console.log('Example app listening on port', port);
    Database();
});
