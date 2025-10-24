import Calendar from "react-calendar";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";

/**
 * TODO: Add buttons for group CRUD actions (this should be on the right side of the calendar)
 * @returns CalendarPage screen
 */

const CalendarPage = () => {
    const [userId, setUserId] = useState();
    const [tokenId, setTokenId] = useState();
    const [dateRange, setDateRange] = useState(new Date());
    const [newGroup, setNewGroup] = useState({});
    const [leaveGroup, setLeaveGroup] = useState(false);
    const [joinGroup, setJoinGroup] = useState(false);

    if (localStorage.getItem("token") != "") {
        useEffect(() => {
            setTokenId(JSON.parse(localStorage.getItem("token")));
        })
    }

    else {
        return alert("Missing token");
    }

    if (localStorage.getItem("userId") != "") {
        useEffect(() => {
            setUserId(localStorage.getItem("userId"));
        })
    }

    else {
        return alert("Missing username");
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();

        try {
            const body = {
                "calendarId": 0,
                "tokenId": tokenId,
                "userId": userId,
                "dateRange": dateRange
            }

            axios.post("/api/calendar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: body
            })
                .then(async (response) => {
                    if (response.status === 200 && response.data.data.length != 0) {
                        alert("Dates saved successfully");
                    }
                })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div>
                <title>Calendar | FG-2.0</title>
                {/* <Layout /> */}
                <header>
                    <h1 id="calendar-title">Calendar</h1>
                </header>
                <div id="calendar-div">
                    <Calendar onChange={setDateRange} value={dateRange} selectRange={true} />
                    <br />
                    {dateRange.length > 0 ? (
                        <p className="text-container">
                            <span className="bold">Start:</span>{' '}
                            {dateRange[0].toDateString()}
                            &nbsp;|&nbsp;
                            <span className="bold">End:</span> {dateRange[1].toDateString()}
                        </p>
                    ) : (
                        <p className="text-container">
                            <span className="bold">Today's Date:</span>{' '}
                            {dateRange.toDateString()}
                        </p>
                    )}

                    <form onSubmit={onSubmitForm}>
                        <input type="submit" id="calendar-submit" value={"Confirm"} />
                    </form>

                </div>
            </div>
        </>
    )
}

export default CalendarPage;