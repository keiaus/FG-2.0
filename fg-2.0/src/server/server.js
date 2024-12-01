require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const url = `${process.env.DBURL}`;

mongoose.connect(url)
    .then(() => console.log("Connected!"))
    .catch((error) => {
        console.log(`Error connecting to db: ${error}`);
    })

const port = process.env.PORT || 3111;

const api = require('../server/routes/api');

app.use('/', cors(), api);

// app.on('ready', cors(), () => {
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
// }); 