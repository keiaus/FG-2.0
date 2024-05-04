"use strict";

const express = require('express');
const cors = require('cors');
const pool = require('../db.config');
const app = express();


// ALL SQL calls happen here

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a user
app.post("/signup", async(req, res) => {
    try {
        const { firstName } = req.body;
        const { lastName } = req.body;
        const { email } = req.body;
        const { username } = req.body;
        const { pass } = req.body;
        const newUser = await pool.query("INSERT INTO Users (firstName, lastName, email, username, pass) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
            [firstName, lastName, email, username, pass]
        );
        res.json(newUser);
    } catch (error) {
        console.error(error.message);
    }
})

// get all users
app.get("/login", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM Users");
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// get a user
app.get("/login/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM Users WHERE userId = $1", [id]);
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// update a user
app.put("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { firstName } = req.body;
        const { lastName } = req.body;
        const updateUser = await pool.query("UPDATE Person SET firstName = $1, lastName = $2 WHERE personId = $3",
            [firstName, lastName, id]
        );
        res.json("User was updated!");
    } catch (error) {
        console.error(error.message);
    }
})

// delete a user
app.delete("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM Person WHERE personId = $1", 
            [id]
        );
        res.json("User was deleted!")
    } catch (error) {
        console.error(error.message);
    }
})

// Port number must be different from vite and postgres default
app.listen(6500, () => {
    console.log("Server is running on port 6500");
})