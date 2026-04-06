const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const auth = require('../middleware/auth');

// Controllers
const UserCntrl = require('../controllers/userCntrl');
const GroupCntrl = require('../controllers/groupCntrl');
const CalendarCntrl = require('../controllers/calendarCntrl');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: { message: 'Too many attempts, please try again later' }
});

router.get('/status', (req, res) => {
    res.json({ status: 'Running' });
});

// ********** USER ROUTES ********** //

router.post('/signup', authLimiter, async (req, res) => {
    try {
        await UserCntrl.createUser(req.body, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/login', authLimiter, async (req, res) => {
    try {
        const user = await UserCntrl.getUser(req.body);
        if (!user) return res.status(401).json({ message: 'Invalid username or password' });

        const token = jwt.sign({ userId: user.username }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ userId: user.username });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logged out' });
});

// ********** GROUP ROUTES ********** //

router.post('/newGroup', auth, async (req, res) => {
    try {
        await GroupCntrl.createNewGroup(req.body, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ********** CALENDAR ROUTES ********** //

router.post('/calendar', auth, async (req, res) => {
    try {
        await CalendarCntrl.create(req.body, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/calendar', auth, async (req, res) => {
    try {
        await CalendarCntrl.retrieve(req.query, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/calendar/leave', auth, async (req, res) => {
    try {
        await CalendarCntrl.leave(req.body, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
