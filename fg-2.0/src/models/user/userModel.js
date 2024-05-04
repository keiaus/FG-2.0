"use strict";

require('dotenv').config();
const process = require("process");
const { Pool } = require('pg');

// Creates the database connection
const pool = new Pool ({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    port: process.env.PGPORT,
    password: process.env.PGPASS,
})


// const createUser = (body) => {
//     return new Promise((resolve, reject) => {
//         const { firstName } = req.body;
//         const { lastName } = req.body;
//         const { email } = req.body;
//         const { username } = req.body;
//         const { pass } = req.body;
//         const newUser = await pool.query("INSERT INTO Users (firstName, lastName, email, username, pass) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
//             [firstName, lastName, email, username, pass]
//         );
//         res.json(newUser);
//     }
// }
