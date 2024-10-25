const UserData = require('../models/user/userModel');
const axios = require('axios').default;
// const PageInfo = require('../../client/pages/signup/SignupForm');

const newUser = async () => {
    try {
        const response = axios.get('http://localhost:5173/signup');

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }

    
}


// Create a new user and insert into database
// const newUser = await UserData.create({
//     firstName: PageInfo.firstName,
//     lastName: PageInfo.lastName,
//     email: PageInfo.email,
//     username: PageInfo.username,
//     password: PageInfo.password,
//   });
  
// console.log(newUser);

// // ---------- ALL HAS TO BE REFACTORED ---------- //
// //delete a user record
// const deleteUser = (id) => {
//     return new Promise((resolve, reject) => {
//         pool.query(
//             "DELETE FROM Users WHERE _id = $1",
//             [id],
//             (error, results) => {
//                 if (error) {
//                     reject(error);
//                 }
//                 resolve(`User deleted with _id: ${id}`);
//             }
//         );
//     });
// };


// //update a user record
// const updateUser = (id, body) => {
//     return new Promise((resolve, reject) => {
//         const { name, email } = body;
//         pool.query(
//             "UPDATE Users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
//             [name, email, id],
//             (error, results) => {
//                 if (error) {
//                     reject(error);
//                 }
//                 if (results && results.rows) {
//                     resolve(`Merchant updated: ${JSON.stringify(results.rows[0])}`);
//                 } else {
//                     reject(new Error("No results found"));
//                 }
//             }
//         );
//     });
// };


// // get a user 
// const getUser = async (id) => {
//     try {
//         return await new Promise(function (resolve, reject) {
//             pool.query("SELECT * FROM Users WHERE UserID = $1", 
//             [id], 
//             (error, results) => {
//                 if (error) {
//                     reject(error);
//                 }
//                 if (results && results.rows) {
//                     resolve(results.rows);
//                 } else {
//                     reject(new Error("No results found"));
//                 }
//             });
//         });
//     } catch (error_1) {
//         console.error(error_1);
//         throw new Error("Internal server error");
//     }
// };


// // get all users
// const getUsers = async () => {
//     try {
//         return await new Promise(function (resolve, reject) {
//             pool.query("SELECT * FROM Users", (error, results) => {
//                 if (error) {
//                     reject(error);
//                 }
//                 if (results && results.rows) {
//                     resolve(results.rows);
//                 } else {
//                     reject(new Error("No results found"));
//                 }
//             });
//         });
//     } catch (error_1) {
//         console.error(error_1);
//         throw new Error("Internal server error");
//     }
// };

module.exports = {
    newUser,
    // deleteUser,
    // updateUser,
    // getUser,
    // getUsers
};
