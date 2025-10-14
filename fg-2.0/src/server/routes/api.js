const express = require('express');
const router = express.Router();
const cors = require('cors');

// Controllers
const AdminCntrl = require('../controllers/adminCntrl');
const BookingCntrl = require('../controllers/bookingCntrl');
const FlightCntrl = require('../controllers/flightCntrl');
const UserCntrl = require('../controllers/userCntrl');
const CalendarCntrl = require('../controllers/calendarCntrl');
const Utils = require('../utils/main');

// Data api

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/status", (request, response) => {
    const status = {
        "status": "Running"
    };
    response.send(status);
})

// ********** USER ROUTES ********** //

router.post('/signup', async (req, res) => {

    /**
     * TODO: Implement logic for validation response
     * Should stop the creation process if the validations aren't met
     */

    try {
        const newUser = await UserCntrl.createUser(req.body);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.get('/login', async (req, res) => {
    try {
        res.send({
            token: Utils.tokenGenerator()
        })
    } catch (error) {
        res.send(error);
    }

})

router.post('/login', async (req, res) => {
    try {
        const response = await UserCntrl.getUser(req.body.body);
        res.status(200).json({data: response});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})


// ********** CALENDAR ROUTES ********** //

router.post('/calendar', async (req, res) => {
    try {
        const newCalendar = await CalendarCntrl.create(req.body.body);
        res.status(200).json({data: newCalendar});
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.get('/calendar', async (req, res) => {
    try {
        const getResponse = await CalendarCntrl.retrieve(req.body.body);
        console.log("getResponse: ", getResponse);
        res.status(200).json({data: getResponse});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})


module.exports = router;