const express = require('express');
const router = express.Router();
const cors = require('cors');

// Controllers
const AdminCntrl = require('../controllers/adminCntrl');
const BookingCntrl = require('../controllers/bookingCntrl');
const FlightCntrl = require('../controllers/flightCntrl');
const UserCntrl = require('../controllers/userCntrl');

// For api tests
// router.get('/test', SatdataController.test);

// Data Api
// router.get('/getalldata', SatdataController.getAllData);
// router.get('/get24hourdata', SatdataController.get24hourData);
// router.get('/getndata/:numberd', SatdataController.getNdata);
// router.get('/gethistorydata/:times', SatdataController.getHistoryData);

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
            token: '08Ueg%62**9sh10e'
        })
    } catch (error) {
        res.send(error);
    }

})

router.post('/login', async (req, res) => {
    try {
        let response = await UserCntrl.getUser(req.body.body);
        res.status(200).json({data: response});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})

module.exports = router;