//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({path:path.join(__dirname, '../../../../', '.env')});
const uri = `${process.env.URI}`;
const COLLECTION_A = `${process.env.COLLECTION_A}`;
const db = `${process.env.DB_NAME}`;

console.log("start userModel in user");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            maxLength: [50, "First name cannot exceed 50 characters"],
            minLength: [3, "First name cannot be less than 3 characters"],
            default: null
        },
        lastName: {
            type: String,
            trim: true,
            maxLength: [50, "Last name cannot exceed 50 characters"],
            minLength: [3, "Last name cannot be less than 3 characters"],
            default: null
        },
        email: {
            type: String,
            trim: true,
            maxLength: [254, "Email cannot exceed 254 characters"],
            minLength: [3, "First name cannot be less than 3 characters"],
            default: null
        },
        username: {
            type: String,
            trim: true,
            maxLength: [32, "Username cannot exceed 32 characters"],
            default: null
        },
        password: {
            type: String,
            trim: true,
            maxLength: [64, "Password cannot exceed 64 characters"],
            minLength: [14, "Password cannot be less than 14 characters"],
            default: null
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

const userData = new UserData();

let error;
try {
  await userData.save();
} catch (err) {
  error = err;
  console.log("errors: ", error);
  
}

// assert.equal(error.errors['firstName'].message,
//   'Path `name` is required.');

// error = userData.validateSync();
// assert.equal(error.errors['name'].message,
//   'Path `name` is required.');


module.exports = {
    UserData,
    mongoose,
    MongoClient,
    uri,
    COLLECTION_A,
    db
};