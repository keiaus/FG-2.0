import { useEffect } from "react";
import Home from "../home/Home";

/**
 * This method logs the user out
 * @returns the Home screen after the user logs out
 * TODO: Fix duplicate alerts on screen
 */
const Logout = () => {
    if (localStorage.getItem("token") != "") {
        useEffect(() => {
            localStorage.removeItem("token");
            const items = {...localStorage};
            console.log("ITEMS => ", items);
            alert("Token removed");
        })
    }

    alert("Logged out successfully");

    return <Home/>
}

export default Logout;