//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
// const path = require('path');
// const dotenv = require('dotenv');
// const envPath = path.resolve(__dirname, '..', '..', '.env');
// dotenv.config({ path: envPath });
// const url = `${process.env.DBURL}`;
// const dbName = `${process.env.DBNAME}`;

// const main = async () => {
//     const client = new MongoClient(url);

//     try {
//         await mongoose.connect(url);
//         await client.connect();
//         await listDatabases(client);
//         await getSampleData(client);
//     } catch (oError) {
//         console.error(oError)
//     }

//     finally {
//         await client.close();
//     }
// }

// main().catch(err => console.log(err));

// const listDatabases = async (client) => {
//     databasesList = await client.db().admin().listDatabases();
//     console.log("Databases");
//     databasesList.databases.forEach(db => console.log(` - ${db.name} `));
// }

// const getSampleData = async (client) => {
//     var db = client.db('sample_mflix');
//     const collection = db.collection('users');
//     const cursor = collection.find({});
//     const documents = await cursor.toArray();
//     console.log("Documents: ", documents);

// }

// const getUsersData = async (client) => {
//     var db = client.db('sample_mflix');
//     const collection = db.collection('users');
//     const cursor = collection.find({});
//     const documents = await cursor.toArray();
//     console.log("Documents: ", documents);

// }

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

const UserData = mongoose.model('users', userSchema);

module.exports = {
    UserData
};