const UserData = require('../models/user/userModel');
const client = new UserData.MongoClient(UserData.uri);

/**
 * Inserts a new user to the collection
 * @param {*} req 
 * @param {*} res - returns the response status
 */
exports.createUser = async (req, res) => {

    console.log("request in userCntrl: ", req);

    let addResponse = null;

    try {
        UserData.mongoose.connect(`${UserData.uri}`);
        console.log("CONNECTION IS GOOD");

    } catch (error) {
        console.error(error);
    }

    try {
        const db = client.db(UserData.db);
        const coll = db.collection(UserData.COLLECTION_A);
        console.log("req: ", req);
        addResponse = await coll.insertOne(req);
        console.log("addResponse: ", addResponse);
    } catch (error) {
        console.error(error);
    }

}