const UserData = require('../models/user/userModel');

/**
 * Inserts a new user to the collection
 * @param {*} req 
 * @param {*} res - returns the response status
 */
exports.createUser = async (req, res) => {

    console.log("request in userCntrl: ", req);
    
    let addResponse = null;
    
    try {
        // res.setHeader('Access-Control-Allow-Origin', '*');
        addResponse = await UserData.collection.insertMany([req.body]);
        console.log("addResponse: ", addResponse);
        
        res.status(200).json(addResponse[0]);
    } catch (error) {
        console.error(error);
    }
    
}