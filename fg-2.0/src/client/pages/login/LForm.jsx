import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Footer from "../../../components/Footer/Footer";
// import propTypes from 'prop-types';

// const loginUser = async (credentials) => {
//     return fetch('http://localhost:6500/lform', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
// }

const LForm = () => {

    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
    
    const onSubmitForm = async (event) => {
        event.preventDefault();

        if (username == null || pass == null) {
            alert("Please enter a username and password.")
        }

        if (username != null && pass != null) {
            try {
                const body = { username, pass };
                const response = await fetch("http://localhost:6500/login", {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                })
                alert("You're logged in as");
                console.log(response);
            } catch (error) {
                console.error(error.message);
            }
        }
        
    }

    return (
        <>
            <title>Log In | FG-2.0</title>
            <div>
                <Layout />
            </div>
            <div id="lform-div">
                <h1 id="login-h1">Log In</h1>
                <form onSubmit={ onSubmitForm }>
                    <label htmlFor="username">Username: </label><br />
                    <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)}></input><br />
                    <br />
                    <label htmlFor="pass">Password: </label><br />
                    <input type="password" id="pass" value={pass} onChange={event => setPass(event.target.value)}></input><br />
                    <br/>
                    <input type="submit" id="submit" value={"Log In"}></input>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default LForm;

// LForm.propTypes = {
//     setToken: propTypes.func.isRequired
// }