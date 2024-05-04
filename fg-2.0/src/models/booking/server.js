"use strict";

const express = require('express');
const cors = require('cors');
const app = express();
const process = require("process");
const { Pool } = require('pg');
require('dotenv').config();

// Creates the database connection
const pool = new Pool ({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    port: process.env.PGPORT,
    password: process.env.PGPASS,
})

module.exports = pool;