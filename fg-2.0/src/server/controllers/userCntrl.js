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
    let db = null;
    let coll = null;

    try {
        db = client.db(UserData.db);
        coll = db.collection(UserData.COLLECTION_A);
    } catch (error) {
        console.error(error);
    }

    if (db !== null && coll !== null) {
        let addResponse = null;
        let retrieveResponse = null;

        try {
            retrieveResponse = await coll.find({}).toArray();

        } catch (error) {
            console.error(error);
        }

        if (retrieveResponse != null && retrieveResponse.length !== 0) {
            let existingUsername = await coll.find({ "userData.username": req.userData.username }).toArray();
            let existingEmail = await coll.find({ "userData.email": req.userData.email }).toArray();

            if (existingUsername.length > 0) {
                let returnStruct = {
                    "message": "This username is already taken",
                    "existingUsername": existingUsername
                }
                return returnStruct;
            }
            if (existingEmail.length > 0) {
                let returnStruct = {
                    "message": "This email is already associated with another account",
                    "existingEmail": existingEmail
                }
                return returnStruct;
            }

            if (existingUsername.length === 0 && existingEmail.length === 0) {
                let error = null;

                try {
                    var newUser = new UserData.UserData({
                        firstName: req.userData.firstName,
                        lastName: req.userData.lastName,
                        email: req.userData.email,
                        username: req.userData.username,
                        password: req.userData.pass
                    });

                    await newUser.save();
                    

                } catch (err) {
                    console.error(err, "error saving new user");
                    error = err;
                    return error;
                }

                if (error == null) {
                    try {
                        addResponse = await coll.insertOne(req);
                    } catch (error) {
                        console.error("Error inserting new user: ", error);
                    }
                    
                }
            }
        }
    }

    else {
        console.error("error connecting to db");
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
        getResponse = await coll.find({ "userData.username": req.username, "userData.pass": req.pass }).toArray();
        return getResponse;
    } catch (error) {
        console.error(error);
    }
}