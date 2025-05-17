const UserData = require('../models/user/userModel');
const client = new UserData.MongoClient(UserData.uri);

try {
    UserData.mongoose.connect(`${UserData.uri}`);
} catch (error) {
    console.error(error);
}

/**
 * Inserts a new user to the collection
 * @param {*} req 
 * @param {*} res - returns the response status
 */
exports.createUser = async (req, res) => {
    let addResponse = null;

    try {
        const db = client.db(UserData.db);
        const coll = db.collection(UserData.COLLECTION_A);
        addResponse = await coll.insertOne(req);
    } catch (error) {
        console.error(error);
    }

}

/**
 * Gets the user's credentials for logging in
 * @param {*} req 
 * @param {*} res - returns the response status
 */
exports.getUser = async (req, res) => {

    console.log("in getUser");
    
    let getResponse = null;
    
    try {
        const db = client.db(UserData.db);
        const coll = db.collection(UserData.COLLECTION_A);
        getResponse = await coll.find({"userData.username": req.username, "userData.pass": req.pass}).toArray();
        return getResponse;
    } catch (error) {
        console.error(error);
    }
}