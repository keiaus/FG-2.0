import React, { useState } from "react";
import axios from "axios";

const TestForm = async () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <>
            <title>TESTING</title>
            <div id="test-div">
                <h1 id="test-id">USERS</h1>
                <div>
                    <input readOnly value={findUserData}></input>
                </div>
            </div>
        </>
    )


}

export default TestForm;