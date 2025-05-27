const CalendarData = require('../models/calendar/calendarModel');
const client = new CalendarData.MongoClient(CalendarData.uri);

try {
    CalendarData.mongoose.connect(`${CalendarData.uri}`);
} catch (error) {
    console.error(error);
}

/**
 * Creates a new calendar
 * @param {*} req 
 * @param {*} res - returns the response status
 */
exports.create = async (req, res) => {
    let db = null;
    let coll = null;

    try {
        db = client.db(CalendarData.db);
        coll = db.collection(CalendarData.COLLECTION_B);
    } catch (error) {
        console.error(error);
    }

    if (db !== null && coll !== null) {
        let createResponse = null;
        let getResponse = null;

        try {
            getResponse = await coll.find({}).toArray();
        } catch (error) {
            console.error(error);
        }

        if (getResponse != null && getResponse.length !== 0) {

            let maxId = 0;

            console.log("getResponse: ", getResponse);

            for (let i = 0; i < getResponse.length; i++) {
                if (getResponse[i].calendarId > maxId) {
                    maxId = getResponse[i].calendarId;
                }
            }

            req.calendarId = maxId + 1;

            console.log("req after setting: ", req);
            

            try {
                createResponse = await coll.insertOne(req);
                console.log("createResponse: ", createResponse);
                
                return createResponse;
            } catch (error) {
                console.error(error);
            }
            
            
        }
    }
}

/**
 * Gets the user's credentials for logging in
 * @param {*} req 
 * @param {*} res - returns the response status
 */
exports.retrieve = async (req, res) => {

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