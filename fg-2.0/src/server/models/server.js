const { MongoClient } = require("mongodb");
require('dotenv').config();
 
// Replace the following with your Atlas connection string 
//"mongodb+srv://<username>:<password>@cluster0.id6tcy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" (Should be in .env)                                                                                                                            
const url = `${process.env.DBURL}`;

// Connect to your Atlas cluster
const client = new MongoClient(url);

const run = async () => {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    // finally {
    //     await client.close();
    // }
}

run().catch(console.dir);