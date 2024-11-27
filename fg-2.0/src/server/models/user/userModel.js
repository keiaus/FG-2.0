const mongoose = require('mongoose');
// const { default: TestForm } = require('../../../client/pages/test123/TestForm');
require('dotenv').config();
const url = `${process.env.DBURL}`;

const main = async () => {
    try {
        await mongoose.connect(url);
    } catch (oError) {
        console.error(oError)
    }
}

main().catch(err => console.log(err));

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true, 
            default: null
        },
        email: {
            type: String,
            trim: true, 
            default: null
        },
        password: {
            type: String,
            trim: true, 
            default: null
        },
    },
    { versionKey: false }
);

// const userSchema = new mongoose.Schema(
//     {
//         firstName: {
//             type: String,
//             trim: true, 
//             default: null
//         },
//         lastName: {
//             type: String,
//             trim: true, 
//             default: null
//         },
//         email: {
//             type: String,
//             trim: true, 
//             default: null
//         },
//         username: {
//             type: String,
//             trim: true, 
//             default: null
//         },
//         password: {
//             type: String,
//             trim: true, 
//             default: null
//         },
//     },
//     { versionKey: false }
// );

const UserData = mongoose.model('sample_mflix', userSchema);

module.exports = {
    UserData
};