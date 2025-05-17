import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Footer from "../../../components/Footer/Footer";
import PropTypes from 'prop-types';
import axios from "axios";

const loginUser = async (credentials) => {
    const body = {
        "username": credentials.username,
        "pass": credentials.pass
    }

    return await axios.get('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    })
        .then(async (response) => {
            console.log("response: ", response);
            return response;
        })
        .catch(async (error) => {
            console.log("error: ", error);

        })
}

const LoginForm = ({ setToken }) => {

    const [username, setUsername] = useState();
    const [pass, setPass] = useState();

    const onSubmitForm = async (event) => {
        event.preventDefault();

        if (username == null || pass == null) {
            alert("Please enter a username and password.")
        }

        if (username != null && pass != null) {
            try {
                const body = {
                    "username": username,
                    "pass": pass
                }
                axios.post("/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: body
                })
                    .then(async (response) => {
                        if (response.status === 200 && response.data.data.length != 0) {
                            return await loginUser({
                                username,
                                pass
                            }).then((res) => {
                                let token = res?.data;
                                setUsername(username);
                                setPass(pass);
                                setToken(token);
                                alert(`Logged in as ${username}`);
                            }).catch((error) => {
                                console.error(error);
                            })

                        }

                        else {
                            alert("Username or password is incorrect")
                        }
                    })
                    .catch(async (error) => {
                        console.error(error);
                    })
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
                <form onSubmit={onSubmitForm}>
                    <label htmlFor="username">Username: </label><br />
                    <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)}></input><br />
                    <br />
                    <label htmlFor="pass">Password: </label><br />
                    <input type="password" id="pass" value={pass} onChange={event => setPass(event.target.value)}></input><br />
                    <br />
                    <input type="submit" id="submit" value={"Log In"}></input>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default LoginForm;

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}