import Layout from "../../../components/Layout/Layout";
import Footer from "../../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";

/**
 * USE `npm run dev -- --host`
 * @returns 
 */

const SignupForm = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
    const [pass2, setPass2] = useState();

    const clearFormData = async () => {
        setFirstName("");
        setLastName("");
        setUsername("");
        setEmail("");
        setPass("");
        setPass2("");
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();
        if (pass !== pass2) {
            alert("Passwords must match");
        }

        if (pass === null && pass2 === null) {
            alert("Please enter a password");
        }

        if (pass === pass2 && pass !== null && pass2 !== null) {

            let userData = {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "username": username,
                "pass": pass
            }

            axios.post("/api/signup", {
                userData
            })
                .then((response) => {
                    console.log("response: ", response);
                    if (response.status === 200) {
                        if (response?.data?.existingUsername?.length > 0) {
                            return alert("This username is already taken")
                        }
                        if (response?.data?.existingEmail?.length > 0) {
                            return alert("This email is already associated with another account")
                        }

                        alert("Account created");

                        clearFormData();
                    }
                })
                .catch((error) => {
                    console.log("error: ", error);
                })
        }
    }

    return (
        <>
            <title>Sign Up | FG-2.0</title>
            <div>
                <Layout />
            </div>
            <div id="sform-div">
                <header>
                    <h1 id="signup-h1">Sign Up</h1>
                </header>
                <form onSubmit={onSubmitForm}>
                    <label htmlFor="firstName">First Name: </label><br />
                    <input type="text" id="firstName" required value={firstName} onChange={event => setFirstName(event.target.value)}></input><br />
                    <br />
                    <label htmlFor="lastName">Last Name: </label><br />
                    <input type="text" id="lastName" required value={lastName} onChange={event => setLastName(event.target.value)}></input><br />
                    <br />
                    <label htmlFor="email">Email: </label><br />
                    <input type="text" id="email" required value={email} onChange={event => setEmail(event.target.value)}></input><br />
                    <br />
                    <label htmlFor="username">Username: </label><br />
                    <input type="text" id="username" required value={username} onChange={event => setUsername(event.target.value)}></input><br />
                    <br />
                    <label htmlFor="pass">Password: </label><br />
                    <input type="password" id="pass" required value={pass} onChange={event => setPass(event.target.value)}></input><br />
                    <br />
                    <label htmlFor="pass2">Confirm Password: </label><br />
                    <input type="password" id="pass2" required value={pass2} onChange={event => setPass2(event.target.value)}></input><br />
                    <br />
                    <input type="submit" id="submit" value={"Sign Up"}></input>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SignupForm;