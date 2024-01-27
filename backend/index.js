const express=require("express")
const app=express()
const port=5001
const Database=require('./db');
const tools=require('./models/toolsample');
const userss=require('./routers/createusers')



app.get('/',(req,res)=>{
    res.json({Message:"this is home page "});

});
app.get('/users',(req,res)=>{
    res.json({Message:'this is user page on ${port}',port});

});
Database();
userss();

app.use(express.json())
app.post('api',require("./routers/createusers"));

app.listen(port,()=>{
    console.log('example is listening on ',port);
})
