//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const envPath = path.resolve(__dirname, '..', '..', '.env');
dotenv.config({ path: envPath });
const users = `${process.env.USERS}`;

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            default: null
        },
        lastName: {
            type: String,
            trim: true,
            default: null
        },
        email: {
            type: String,
            trim: true,
            default: null
        },
        username: {
            type: String,
            trim: true,
            default: null
        },
        password: {
            type: String,
            trim: true,
            default: null
        },
    },
    { versionKey: false }
);

// const client = new MongoClient(url);

// try {
//     await client.connect();
// } catch (error) {
//     console.log(error);
// }

// finally {
//     await client.close();
// }

// var db = client.db(dbName);

// const collection = db.collection('users');

const UserData = mongoose.model(users, userSchema);

module.exports = {
    UserData
};