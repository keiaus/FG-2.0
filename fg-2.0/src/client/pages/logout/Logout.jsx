import { useEffect } from "react";
import Home from "../home/Home";

/**
 * This method logs the user out
 * @returns the HomePage screen after the user logs out successfully
 */
const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("token");
        localStorage.setItem("loggedOut", true);
    })

    return <Home />
}

export default Logout;