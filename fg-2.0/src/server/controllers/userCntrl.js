const UserData = require('../models/user/userModel');

// CRUD stuff for the user

// For api tests
exports.test = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({'test': 'okay'});
}

/**
 * Inserts a new user to the collection
 * @param {*} req 
 * @param {*} res - returns the response status
 */
exports.createUser = async (req, res) => {

    console.log("request: ", req);
    
    let addResponse = null;
    
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        addResponse = await UserData.collection.insertMany([req.body]);
        res.status(200).json(addResponse[0]);
    } catch (error) {
        console.error(error);
    }
    
}