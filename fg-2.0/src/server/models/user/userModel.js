//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({path:path.join(__dirname, '..', '.env')});
const uri = `${process.env.URI}`;

console.log("start userModel");

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
const client = new MongoClient(uri);

try {
    client.connect();
    console.log("client: ", client);
    
} catch (error) {
    console.log(error);
}

finally {
    client.close();
}

const UserData = mongoose.model(process.env.COLLECTION_A, userSchema);

console.log("UserData: ", UserData);


module.exports = {
    UserData
};