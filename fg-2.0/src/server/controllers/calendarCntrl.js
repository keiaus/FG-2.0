const CalendarData = require('../models/calendar/calendarModel');

/**
 * Creates or joins a calendar group entry
 * @param {*} req
 * @param {*} res - returns the response status
 */
exports.create = async (req, res) => {
    const all = await CalendarData.CalendarData.find({}).lean();

    const calendarId = req.calendarId && Number(req.calendarId) !== 0
        ? Number(req.calendarId)
        : (all.length === 0 ? 1 : Math.max(...all.map(d => d.calendarId)) + 1);

    const entry = new CalendarData.CalendarData({
        calendarId,
        userId: req.userId,
        tokenId: req.tokenId,
        dateRange: JSON.stringify(req.dateRange)
    });

    await entry.save();
    return res.status(200).json({ calendarId });
}

/**
 * Gets all member date entries for a given calendar group
 * @param {*} req
 * @param {*} res - returns the response status
 */
exports.retrieve = async (req, res) => {
    const data = await CalendarData.CalendarData.find({ calendarId: Number(req.calendarId) }).lean();
    return res.status(200).json({ data });
}

/**
 * Removes a user's entry from a calendar group
 * @param {*} req
 * @param {*} res - returns the response status
 */
exports.leave = async (req, res) => {
    await CalendarData.CalendarData.deleteOne({ calendarId: Number(req.calendarId), userId: req.userId });
    return res.status(200).json({ message: 'Left group successfully' });
}
