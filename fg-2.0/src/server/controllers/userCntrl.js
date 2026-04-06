const UserData = require('../models/user/userModel');
const bcrypt = require('bcryptjs');

/**
 * Inserts a new user to the collection
 * @param {*} req - request data from the client
 * @param {*} res - returns the response status
 */
exports.createUser = async (req, res) => {
    if (req.userData.pass !== req.userData.pass2) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    const existing = await UserData.UserData.findOne({
        $or: [{ email: req.userData.email }, { username: req.userData.username }]
    });

    if (existing) {
        const field = existing.email === req.userData.email ? 'Email' : 'Username';
        return res.status(409).json({ message: `${field} is already in use` });
    }

    const hash = await bcrypt.hash(req.userData.pass, 10);

    const user = new UserData.UserData({
        firstName: req.userData.firstName,
        lastName: req.userData.lastName,
        email: req.userData.email,
        username: req.userData.username,
        password: hash
    });

    await user.save();
    return res.status(201).json({ message: 'User created' });
}

/**
 * Verifies user credentials for login
 * @param {*} req - request data from the client
 * @returns user if credentials match, null otherwise
 */
exports.getUser = async (req) => {
    const user = await UserData.UserData.findOne({ username: req.username }).lean();
    if (!user) return null;
    const match = await bcrypt.compare(req.pass, user.password);
    return match ? user : null;
}
