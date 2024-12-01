const UserData = require('../models/user/userModel');

// CRUD stuff for the user


// For api tests
exports.test = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({'test': 'okay'});
}

/**
 * Inserts a new user to the collection
 * @param {*} req 
 * @param {*} res - returns the response status
 */
exports.createUser = async (req, res) => {

    console.log("request: ", req);
    
    let addResponse = null;
    
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        addResponse = await UserData.collection.insertMany([req.body]);
        res.status(200).json(addResponse[0]);
    } catch (error) {
        console.error(error);
    }
    
}


// exports.updateUser = (request, response) => {
//     try {
//         response.setHeader('Access-Control-Allow-Origin', '*');
        
//     } catch (error) {
//         console.error(error);
//     }
    
// }


exports.deleteUser = (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        
    } catch (error) {
        console.error(error);
    }
    
}


// // For api tests
// exports.test = (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.json({ 'test': 'okay' });
// }

// // Return latest entry from db: all datas
// exports.getAllUsers = async (req, res) => {
//     try {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         // Get the latest data entry
//         const data = await UserData.find({}).sort({ _id: -1 }).limit(1);

//         if (data.length == 0) {
//             console.log('Data not found.');
//         }
//         res.status(200).json(data[0]);
//     }
//     catch (err) {
//         res.status(500).json({ message: 'Internal Server Error', err });
//     }
// }

// // Data of last 24 hours
// exports.get24hourData = async (req, res) => {
//     try {
//         res.setHeader('Access-Control-Allow-Origin', '*');

//     }
//     catch (err) {
//         res.status(500).json({ message: 'Internal Server Error', err });
//     }
// }

// //get numbers of data
// exports.getNdata = async (req, res) => {
//     try {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         let numberOfData = parseInt(req.params.numberd);

//         // Get the numberOfData no. of data using Projection
//         const data = await UserData.find({}, {
//             key: '$_id',
//             timestamp: 1,
//             temperature: 1,
//             humidity: 1,
//             pressure: 1,
//             altitude: 1,
//             gas: 1,
//             pollution: 1,
//         })
//             .sort({ _id: -1 })
//             .limit(numberOfData)

//         if (data.length == 0) {
//             console.log('Data not found.');
//         }

//         res.status(200).json(data);
//     }
//     catch (err) {
//         res.status(500).json({ message: 'Internal Server Error', err });
//     }
// }

// // History data
// exports.getHistoryData = async (req, res) => {
//     try {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         let historytime = parseInt(req.params.times);
//         // Convert upper number to minutes; Past X minutes since when we want the data.
//         let timeinterval = Date.now() - (historytime * 60 * 1000);

//         const data = await UserData.find({ timestamp: { $gt: timeinterval } });

//         let TimeArr = data.map((singledata) => {
//             let m = 'am';
//             let date = new Date(singledata.timestamp);
//             let hours = date.getHours();
//             if (hours > 12) {
//                 hours = hours % 12;
//                 m = 'pm';
//             }
//             let minutes = date.getMinutes();
//             let seconds = date.getSeconds();
//             let resultt = hours + ':' + minutes + ':' + seconds + ' ' + m;
//             return resultt;
//         });

//         let TempArr = data.map((singledata) => {
//             let resultt = singledata.temperature;
//             return resultt;
//         });

//         let HumArr = data.map((singledata) => {
//             let resultt = singledata.humidity;
//             return resultt;
//         });

//         let PressArr = data.map((singledata) => {
//             let resultt = singledata.pressure;
//             return resultt;
//         });

//         let GasArr = data.map((singledata) => {
//             let resultt = singledata.gas;
//             return resultt;
//         });

//         let PollutionArr = data.map((singledata) => {
//             let resultt = singledata.pollution;
//             return resultt;
//         });

//         if (data.length == 0) {
//             console.log('Data not found.');
//         }

//         res.status(200).json({
//             'time': TimeArr,
//             'temperaturehistory': TempArr,
//             'humidityhistory': HumArr,
//             'pressurehistory': PressArr,
//             'gashistory': GasArr,
//             'pollutionhistory': PollutionArr
//         });
//     }
//     catch (err) {
//         res.status(500).json({ message: 'Internal Server Error', err });
//     }
// }

// // Array Min Max Functions
// Array.min = function (array) {
//     return Math.min.apply(Math, array);
// };
// Array.max = function (array) {
//     return Math.max.apply(Math, array);
// };