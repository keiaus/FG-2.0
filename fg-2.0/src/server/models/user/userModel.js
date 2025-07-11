//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../../', '.env') });
const uri = `${process.env.URI}`;
const COLLECTION_A = `${process.env.COLLECTION_A}`;
const db = `${process.env.DB_NAME}`;

console.log("start userModel in user");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true,
            maxLength: [50, "First name cannot exceed 50 characters"],
            minLength: [3, "First name cannot be less than 3 characters"]
        },
        lastName: {
            type: String,
            trim: true,
            required: true,
            maxLength: [50, "Last name cannot exceed 50 characters"],
            minLength: [3, "Last name cannot be less than 3 characters"]
        },
        email: {
            type: String,
            trim: true,
            required: true,
            maxLength: [254, "Email cannot exceed 254 characters"],
            minLength: [3, "First name cannot be less than 3 characters"]
        },
        username: {
            type: String,
            trim: true,
            required: true,
            maxLength: [32, "Username cannot exceed 32 characters"]
        },
        password: {
            type: String,
            trim: true,
            required: true,
            maxLength: [64, "Password cannot exceed 64 characters"],
            minLength: [14, "Password cannot be less than 14 characters"]
        },
    },
    { versionKey: false }
);
const client = new MongoClient(uri);

try {
    client.connect();
} catch (error) {
    console.log(error);
}

finally {
    client.close();
}

const UserData = mongoose.model(COLLECTION_A, userSchema);

module.exports = {
    UserData,
    mongoose,
    MongoClient,
    uri,
    COLLECTION_A,
    db
};