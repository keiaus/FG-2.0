const UserData = require('../models/user/userModel');
const client = new UserData.MongoClient(UserData.uri);

/**
 * Inserts a new user to the collection
 * @param {*} req 
 * @param {*} res - returns the response status
 */
exports.createUser = async (req, res) => {
    let addResponse = null;

    try {
        UserData.mongoose.connect(`${UserData.uri}`);
    } catch (error) {
        console.error(error);
    }

    try {
        const db = client.db(UserData.db);
        const coll = db.collection(UserData.COLLECTION_A);
        addResponse = await coll.insertOne(req);
    } catch (error) {
        console.error(error);
    }

}