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

    const [monthName, setMonthName] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [clicked, setClicked] = useState(false);

    const handleDayClicked = () => {
        setClicked(true);
    }

    const handleForwardArrow = () => {
        setMonthName(prevIndex => (prevIndex + 1) % 12);
        if (month[monthName] === "December") {
            setYear(prevIndex => (prevIndex + 1));
        }
    }

    const handleBackArrow = () => {
        setMonthName(prevIndex => (prevIndex - 1 + 12) % 12);
        if (month[monthName] === "January") {
            setYear(prevIndex => (prevIndex - 1));
        }
    }

    const renderDays = () => {
        const monthName2 = month[monthName];
        const daysInMonth = getDaysInMonth(monthName2);
        const days = [];

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(<button key={i} id="day-button">{i}</button>);
        }
        return days;
    };

    const getDaysInMonth = (monthName2) => {
        if (["April", "June", "September", "November"].includes(monthName2)) {
            return 30;
        } else if (monthName2 === "February") {
            // Assuming a simple calculation for February's days, you may need a more complex logic to handle leap years
            return 28;
        } else {
            return 31;
        }
    };


    return (
        <>
            <div>
                <title>Calendar | FG-2.0</title>
                <Layout />
                <body id="calendar-body">
                    
                    <div id="calendar-div">
                        <i id="back-arrow" class="fa-solid fa-arrow-left" onClick={handleBackArrow}></i>
                        <label id="month-label">{month[monthName]}</label>
                        <label id="year-label">{year}</label>
                        <i id="forward-arrow" class="fa-solid fa-arrow-right" onClick={handleForwardArrow}></i>
                        <table>
                            <tr>
                                {renderDays()}
                            </tr>
                        </table>
                    </div>
                </body>
                <Footer />
            </div>
        </>
    )
}

export default CalendarPage;