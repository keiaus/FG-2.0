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

router.get('/test', UserCntrl.test);

// ********** USER ROUTES ********** //
router.post('/signup', async (req, res) => {

    const {firstName, lastName, email, username, password} = req.body;

    const data = {
        firstName: firstName,
        lastName: lastName, 
        email: email, 
        username: username,
        password: password
    }

    try {

        console.log("post data: ", data);
        
        const newUser = new UserCntrl.createUser(data);

        console.log("new user: ", newUser);
        
        res.status(200).json(newUser[0]);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

module.exports = router;