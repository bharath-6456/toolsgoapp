const { MongoClient } = require("mongodb");
const express=require('express')
const app=express();

// Connection URI
const mongoURI = 'mongodb+srv://bharath6456:bharath6456@cluster0.ilynjgs.mongodb.net/toolsgo?retryWrites=true&w=majority';

async function Database() {
  let client;

  try {
    // Connect to MongoDB
    client = new MongoClient(mongoURI);
    await client.connect();
    console.log('Connected to MongoDB');

    // Access the database and collection
    const db = client.db('toolsgo');
    const collection = db.collection('users');
    
    app.set('usercollection',collection);
    // Fetch data from collection
    //  await collection.insertOne({"name":"bharath","email":"jfhd","password":"jfakdjsf"});
    
  } catch (err) {
    console.error('Error:', err);
  } 
}

// Call the Database function to connect and retrieve data
module.exports = Database;
