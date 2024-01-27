const { MongoClient } = require("mongodb");
const mongoose=require('mongoose')
const users=require("../backend/models/toolsample");


// Replace the uri string with your MongoDB deployment's connection string.
const mongoURI = 'mongodb+srv://bharath6456:bharath6456@cluster0.ilynjgs.mongodb.net/toolsgo?retryWrites=true&w=majority';

async function Database() {
  let client;

  try {
    client = new MongoClient(mongoURI);
    await client.connect();
    console.log("success connecting to database");

    // Database and collection code goes here
    const db = client.db("toolsgo");
    const fdata= await db.collection('toolsample').find().toArray();
    
    
    
  } 
  catch(err){
    console.log(err);
  }
    
}

// Call the Database function to connect and retrieve data
module.exports=Database;
