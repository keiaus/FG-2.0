require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("../models/user/userModel"); // Create the user model

const url = `${process.env.DBURL}`;

mongoose.connect(url)
  .then(() => console.log("Connected!"))
  .catch((error) => {
    console.log(`Error connecting to db: ${error}`);
  })

const port = process.env.PORT || 5173;

app.use(cors());
// app.on('ready', () => {

// ***USER ROUTES***
app.get("/signup", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
// }); 