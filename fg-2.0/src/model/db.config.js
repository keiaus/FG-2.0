require('dotenv').config();
const process = require("process");
const { Pool } = require('pg');

// Creates the database connection
export const pool = new Pool ({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    port: process.env.PGPORT,
    password: process.env.PGPASS,
})