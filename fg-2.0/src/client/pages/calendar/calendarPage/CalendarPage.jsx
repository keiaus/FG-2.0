import React, { useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import Footer from "../../../../components/Footer/Footer";


const CalendarPage = () => {

    let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const d = new Date();
    let name = month[d.getMonth()];

    const handleForwardArrow = () => {
        alert(name)
    }

    const handleBackArrow = () => {
        alert("Back arrow clicked!")
    }

    return (
        <>
            <div>
                <title>Calendar | FG-2.0</title>
                <Layout />
                <body id="calendar-body">
                    <p id="select-header">Plan your trip here.</p>
                    <div id="calendar-div">
                        <i id="back-arrow" class="fa-solid fa-arrow-left" onClick={handleBackArrow}></i>
                        <label id="month-label">{name}</label>
                        <i id="forward-arrow" class="fa-solid fa-arrow-right" onClick={handleForwardArrow}></i>
                    </div>
                </body>
                <Footer />
            </div>
        </>
    )
}

export default CalendarPage;