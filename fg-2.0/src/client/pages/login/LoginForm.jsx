import { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import LoggedInHome from "../home/LoggedInHome";
import PropTypes from 'prop-types';
import axios from "axios";

const LoginForm = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const onSubmitForm = async (event) => {
        event.preventDefault();

        if (!username || !pass) {
            alert("Please enter a username and password.");
            return;
        }

        axios.post("/api/login", { username, pass }, { withCredentials: true })
            .then(response => {
                localStorage.setItem("userId", response.data.userId);
                setToken(response.data.userId);
                alert(`Logged in as ${response.data.userId}`);
                setLoggedIn(true);
            })
            .catch(error => {
                const msg = error.response?.data?.message || "Invalid username or password";
                alert(msg);
            });
    }

    if (loggedIn) {
        return <LoggedInHome />
    }

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
                    <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} /><br />
                    <br />
                    <label htmlFor="pass">Password: </label><br />
                    <input type="password" id="pass" value={pass} onChange={e => setPass(e.target.value)} /><br />
                    <br />
                    <input type="submit" id="submit" value={"Log In"} />
                </form>
            </div>
        </>
    )
}

export default LoginForm;

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}
