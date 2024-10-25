const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const url = `${process.env.DBURL}`;

const mongoose = require("mongoose");
mongoose.connect(url);

const User = require("../models/user/userModel"); // Create the User Model

// API routes
app.post("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const { MongoClient } = require("mongodb");
// require('dotenv').config();
 
// // Replace the following with your Atlas connection string 
// //"mongodb+srv://<username>:<password>@cluster0.id6tcy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" (Should be in .env)                                                                                                                            
// const url = `${process.env.DBURL}`;

// // Connect to your Atlas cluster
// const client = new MongoClient(url);

// const run = async () => {
//     try {
//         await client.connect();
//         console.log("Successfully connected to Atlas");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     // finally {
//     //     await client.close();
//     // }
// }

// run().catch(console.dir);