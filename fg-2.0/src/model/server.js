
const process = require("pg");

require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PGPORT;

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
})