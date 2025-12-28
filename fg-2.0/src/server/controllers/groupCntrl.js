const GroupNameData = require('../models/group/groupModel');
const client = new GroupNameData.MongoClient(GroupNameData.uri);

try {
    GroupNameData.mongoose.connect(`${GroupNameData.uri}`);
} catch (error) {
    console.error(error);
}

exports.createNewGroup = async (req, res) => {
    let db = null;
    let coll = null;

    try {
        db = client.db(GroupNameData.db);
        coll = db.collection(GroupNameData.COLLECTION_C);
    } catch (error) {
        console.error(error);
    }

    if (null !== db && null !== coll) {
        let createResponse = null;
        let error = null;

        try {
            var newGroup = new GroupNameData.GroupNameData({
                groupName: req.groupData.groupName
            })

            await newGroup.save();

        } catch (err) {
            console.error(err, "error saving new group");
            error = err;
            return error;
        }

        if (null == error) {
            try {
                createResponse = await coll.insertOne(req);
            } catch (error) {
                console.error("Error inserting new group: ", error);
            }
        }
    }

    else {
        console.error("error connecting to db");
    }
}

exports.joinGroup = async (req, res) => {

}

exports.leaveGroup = async (req, res) => {
    
}