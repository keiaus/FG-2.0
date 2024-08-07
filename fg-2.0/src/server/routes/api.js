const express = require('express');
const router = express.Router();

// Controllers
const adminCntrl = require('../controllers/adminCntrl');
const bookingCntrl = require('../controllers/bookingCntrl');
const flightCntrl = require('../controllers/flightCntrl');
const userCntrl = require('../controllers/userCntrl');

// For api tests
router.get('/test', SatdataController.test);

// Data Api
router.get('/getalldata', SatdataController.getAllData);
router.get('/get24hourdata', SatdataController.get24hourData);
router.get('/getndata/:numberd', SatdataController.getNdata);
router.get('/gethistorydata/:times', SatdataController.getHistoryData);

module.exports = router;