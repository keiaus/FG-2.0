//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({path:path.join(__dirname, '../../../../', '.env')});
const uri = `${process.env.URI}`;
const COLLECTION_B = `${process.env.COLLECTION_B}`;
const db = `${process.env.DB_NAME}`;

console.log("start userModel in calendar");

/**
 * TODO: Create validation checks for each parameter
 */

const calendarSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            trim: true,
            default: null
        },
        tokenId: {
            type: String,
            trim: true,
            default: null
        },
        calendarId: {
            type: Number,
            trim: true,
            default: null
        },
        dateRange: {
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
    
} catch (error) {
    console.log(error);
}

finally {
    client.close();
}

const CalendarData = mongoose.model(COLLECTION_B, calendarSchema);

module.exports = {
    CalendarData,
    mongoose,
    MongoClient,
    uri,
    COLLECTION_B,
    db
};