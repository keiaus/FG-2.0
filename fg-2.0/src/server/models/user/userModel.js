const mongoose = require('mongoose');
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
        firstName: {
            type: String,
            trim: true, 
            default: null
        },
        lastName: {
            type: String,
            trim: true, 
            default: null
        },
        email: {
            type: String,
            trim: true, 
            default: null
        },
        username: {
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

const UserData = mongoose.model('userModel', userSchema);

module.exports = UserData;