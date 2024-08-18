//DATABASE SCHEMA

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

const main = async () => {
    await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const flightSchema = new mongoose.Schema(
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
        pass: {
            type: String,
            trim: true, 
            default: null
        },
    },
    { versionKey: false }
);

const UserData = mongoose.model('userModel', userSchema);

module.exports = UserData;