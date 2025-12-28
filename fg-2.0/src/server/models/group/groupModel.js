//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../../', '.env') });
const uri = `${process.env.URI}`;
const COLLECTION_C = `${process.env.COLLECTION_C}`;
const db = `${process.env.DB_NAME}`;

/**
 * This method creates the group name schema for the database
 */

const groupNameSchema = new mongoose.Schema(
    {
        groupName: {
            type: String,
            trim: true,
            required: [true, "Group Name is required"],
            maxLength: [25, "Group Name cannot exceed 25 characters"],
            minLength: [4, "Group Name cannot be less than 3 characters"]
        },
    },
    { versionKey: false }
);
const client = new MongoClient(uri);

try {
    client.connect();
} catch (error) {
    console.error(error);
}

finally {
    client.close();
}

const GroupNameData = mongoose.model(COLLECTION_C, groupNameSchema);

module.exports = {
    GroupNameData,
    mongoose,
    MongoClient,
    uri,
    COLLECTION_C,
    db
};