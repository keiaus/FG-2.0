const express = require('express');
const router = express.Router();
const cors = require('cors');
const axios = require('axios');

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
        "Status": "Running in POSTMAN"
    };
    response.send(status);
})

// ********** USER ROUTES ********** //
router.post('/signup', (req, res) => {

    console.log("In post");
    console.log("body is: ", req.body);
    //res.send(req.body);

    try {
        const newUser = UserCntrl.createUser(req.body);

        console.log("new user: ", newUser);

        res.status(200).json(newUser[0]);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

// router.post('/signup', (req, res) => {
//     const status = {
//         "Status": "User created"
//     }
//     res.send(status);
// });

// router.post('/signup', (req, res) => {
//     res.send("Got a post request");
// })

module.exports = router;