"use strict";

const express = require('express');
const cors = require('cors');
const pool = require('../db.config');
const app = express();
const userModel = require('./user/userModel');

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

// REST API stuff

// routes

// create a user
app.post("/signup", async (req, res) => {
    userModel.createUser(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

// get all users
// app.get("/viewFriends", async (req, res) => {
//     userModel.getUsers()
//     .then(response => {
//         res.status(200).send(response)
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

// get a user
// app.get("/login/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await pool.query("SELECT * FROM Users WHERE userId = $1", [id]);
//         res.json(user.rows[0]);
//     } catch (error) {
//         console.error(error.message);
//     }
// })

// update a user
app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    userModel.updateUser(id, body)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

// delete a user
app.delete("/users/:id", async (req, res) => {
    userModel.deleteUser(req.params.id)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

// Port number must be different from vite and postgres default
app.listen(6500, () => {
    console.log("Server is running on port 6500");
})