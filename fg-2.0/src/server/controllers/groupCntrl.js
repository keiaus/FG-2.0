const GroupNameData = require('../models/group/groupModel');

/**
 * Creates a new group and returns its generated groupId
 * @param {*} req
 * @param {*} res - returns the response status
 */
exports.createNewGroup = async (req, res) => {
    const all = await GroupNameData.GroupNameData.find({}).lean();
    const groupId = all.length === 0 ? 1 : Math.max(...all.map(d => d.groupId)) + 1;

    const group = new GroupNameData.GroupNameData({
        groupId,
        groupName: req.groupName
    });

    await group.save();
    return res.status(200).json({ groupId });
}

exports.joinGroup = async (req, res) => {

}

exports.leaveGroup = async (req, res) => {

}
