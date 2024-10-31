require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const url = `${process.env.DBURL}`;

mongoose.connect(url)
  .then(() => console.log("Connected!"))
  .catch((error) => {
    console.log(`Error connecting to db: ${error}`);

  })

const api = require('../routes/api');
api.use('/', api);

const port = process.env.PORT || 5173;
// app.on('ready', () => {
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
// }); 