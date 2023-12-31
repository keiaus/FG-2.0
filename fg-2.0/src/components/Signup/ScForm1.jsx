import React from "react";
import Layout from "../Layout/Layout";
import { useState, useEffect } from "react";

const ScForm1 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");

    if (pass && pass2) {
        handlePassChecker();
    }

    // Sets the pass state varibale to the value given by the user
    const handlePassEntry = (event) => {
        setPass(event.target.value);
    }

    // Sets the pass2 state varibale to the value given by the user
    const handlePass2Entry = (event) => {
        setPass2(event.target.value);
    }

    const handlePassChecker = (event) => {
        try {
            if (pass == pass2) {
                onSubmitForm();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const body = { firstName, lastName, email, username, pass };
            const response = await fetch("http://localhost:6500/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(body)
            });
            
            console.log(response);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <div>
                <Layout />
            </div>
            <div id="sform1-div">
                <h1 id="signup-h1">Sign Up</h1>
                <form onSubmit={ handlePassChecker }>
                    <label for="firstName">First Name: </label><br />
                    <input type="text" id="firstName" value={firstName} onChange={event => setFirstName(event.target.value)}></input><br />
                    <br />
                    <label for="lastName">Last Name: </label><br />
                    <input type="text" id="lastName" value={lastName} onChange={event => setLastName(event.target.value)}></input><br />
                    <br />
                    <label for="email">Email: </label><br />
                    <input type="text" id="email" value={email} onChange={event => setEmail(event.target.value)}></input><br />
                    <br />
                    <label for="username">Username: </label><br />
                    <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)}></input><br />
                    <br />
                    <label for="pass">Password: </label><br />
                    <input type="text" id="pass" value={pass} onChange={ handlePassEntry }></input><br />
                    <br />
                    <label for="pass2">Confirm Password: </label><br />
                    <input type="text" id="pass2" value={pass2} onChange={ handlePass2Entry }></input><br />
                    <br />
                    <input type="submit" id="submit" value={"Submit"}></input>
                </form>
            </div>
        </>
    )
}

export default ScForm1;