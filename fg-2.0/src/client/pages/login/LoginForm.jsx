import { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import LoggedInHome from "../home/LoggedInHome";
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
            return response;
        })
        .catch(async (error) => {
            console.error("error: ", error);
        })
}

const LoginForm = ({ setToken }) => {

    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

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
                            setUsername(username);
                            setPass(pass);
                            return await loginUser({
                                username,
                                pass
                            }).then((res) => {
                                setToken(res?.data);
                                localStorage.setItem("userId", username);
                                alert(`Logged in as ${username}`);
                                setLoggedIn(true);
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

    if (loggedIn) {
        return <LoggedInHome />
    }

    else {
        return (
            <>
                <title>Log In | FG-2.0</title>
                <div>
                    <Layout />
                </div>
                <div id="lform-div">
                    <header>
                        <h1 id="login-h1">Log In</h1>
                    </header>
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
            </>
        )
    }


}

export default LoginForm;

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}