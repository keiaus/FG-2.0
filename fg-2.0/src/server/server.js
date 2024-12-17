console.log("server: ", require('dotenv').config({ path: process.env.SERVER_PATH }));
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const url = `${process.env.DB_URL}`;

mongoose.connect(url)
    .then(() => console.log("Connected!"))
    .catch((error) => {
        console.log(`Error connecting to db: ${error}`);
    })

const port = process.env.PORT;

const api = require('./routes/api');

app.use('/', cors(), api);

// app.on('ready', cors(), () => {
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
// }); 