const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();
const url = `${process.env.DBURL}`;

const main = async () => {
    const client = new MongoClient(url);

    try {
        await mongoose.connect(url);
        await client.connect();
        await listDatabases(client)
    } catch (oError) {
        console.error(oError)
    }

    finally {
        await client.close();
    }
}

main().catch(err => console.log(err));

const listDatabases = async (client) => {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases");
    databasesList.databases.forEach(db => console.log(` - ${db.name} `));
}