// const path = require('path');
// console.log("server: ", require('dotenv').config({ path: path.join(__dirname + 'fg-2.0\.env') }));
const express = require('express');
const app = express();
const cors = require('cors');

/**
 * Fix for MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. 
 * One common reason is that you’re trying to access the database from an IP that isn’t whitelisted
 * 
 * npm uninstall mongoose
 * npm install mongoose@8.3.4
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../', '/.env') });
const mongoose = require('mongoose');
const url = `${process.env.URI}`;

mongoose.connect(url)
    .then(() => console.log("Connected!"))
    .catch((error) => {
        console.error(`Error connecting to db: ${error}`);
    })

const port = process.env.PORT;

const api = require('./routes/api');

app.use('/', cors(), api);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})