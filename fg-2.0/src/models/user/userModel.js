"use strict";

require('dotenv').config();
const pool = require('../db.config');

//create a user record
const createUser = (body) => {
    return new Promise((resolve, reject) => {
        const { firstName } = body;
        const { lastName } = body;
        const { email } = body;
        const { username } = body;
        const { pass } = body;
        const newUser = pool.query("INSERT INTO Users (firstName, lastName, email, username, pass) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [firstName, lastName, email, username, pass],
            (error, results) => {
                if (error) {
                    reject(error);
                }

                if (results && results.rows) {
                    resolve(
                        `A new user has been added: ${JSON.stringify(results.rows[0])}`
                    );
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
        res.json(newUser);
    })
}


//delete a user record
const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "DELETE FROM Users WHERE UserID = $1",
            [id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(`User deleted with ID: ${id}`);
            }
        );
    });
};


//update a user record
const updateUser = (id, body) => {
    return new Promise((resolve, reject) => {
        const { name, email } = body;
        pool.query(
            "UPDATE Users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(`Merchant updated: ${JSON.stringify(results.rows[0])}`);
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

// get a user 
const getUser = async (id) => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM Users WHERE UserID = $1", 
            [id], 
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

// get all users
const getUsers = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM Users", (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getUsers
};
