import React, { useState }from "react";
import Layout from "../Layout/Layout";

const LcForm = () => {

    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
    
    const onSubmitForm = async (event) => {
        event.preventDefault();
        
    }

    return (
        <>
            <div>
                <Layout />
            </div>
            <div id="lform-div">
                <h1 id="login-h1">Log In</h1>
                <form onSubmit={ onSubmitForm }>
                    <label for="username">Username: </label><br />
                    <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)}></input><br />
                    <br />
                    <label for="pass">Password: </label><br />
                    <input type="password" id="pass" value={pass} onChange={event => setPass(event.target.value)}></input><br />
                    <br/>
                    <input type="submit" id="submit" value={"Log In"}></input>
                </form>
            </div>
        </>
    )
}

export default LcForm;