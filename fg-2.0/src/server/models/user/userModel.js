//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../../', '.env') });
const uri = `${process.env.URI}`;
const COLLECTION_A = `${process.env.COLLECTION_A}`;
const db = `${process.env.DB_NAME}`;

console.log("start userModel in user");

/**
 * TODO: Add validation for email having "@" and "." in the wrong places
 * This method creates the user schema for the database
 */

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: [true, "First Name is required"],
            maxLength: [50, "First Name cannot exceed 50 characters"],
            minLength: [3, "First Name cannot be less than 3 characters"]
        },
        lastName: {
            type: String,
            trim: true,
            required: [true, "Last Name is required"],
            maxLength: [50, "Last Name cannot exceed 50 characters"],
            minLength: [3, "Last Name cannot be less than 3 characters"]
        },
        email: {
            type: String,
            trim: true,
            required: [true, "Email is required"],
            validate: {
                validator: ((value) => {
                    return value.includes('@') && value.includes('.');
                }), message: "Email must be in the format of name@domain"
            },
            maxLength: [254, "Email cannot exceed 254 characters"],
            minLength: [11, "Email cannot be less than 11 characters"]
        },
        username: {
            type: String,
            trim: true,
            required: [true, "Username is required"],
            maxLength: [32, "Username cannot exceed 32 characters"],
            minLength: [5, "Username cannot be less than 5 characters"]
        },
        password: {
            type: String,
            trim: true,
            required: [true, "Password is required"],
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