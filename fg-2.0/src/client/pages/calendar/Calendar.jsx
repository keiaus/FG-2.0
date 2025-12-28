import Calendar from "react-calendar";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";

/**
 * TODO: Create page for newly created groups
 * This method creates the calendar page actions
 * @returns CalendarPage screen
 */

const CalendarPage = () => {
    const [userId, setUserId] = useState();
    const [tokenId, setTokenId] = useState();
    const [dateRange, setDateRange] = useState(new Date());
    const [newGroup, setNewGroup] = useState(false);
    const [leaveGroup, setLeaveGroup] = useState(false);
    const [joinGroup, setJoinGroup] = useState(false);

    if (localStorage.getItem("token") != "") {
        setTokenId(JSON.parse(localStorage.getItem("token")));
    }

    else {
        return alert("Missing token");
    }

    if (localStorage.getItem("userId") != "") {
        setUserId(localStorage.getItem("userId"));
    }

    else {
        return alert("Missing username");
    }

    const handleCreate = async (event) => {
        event.preventDefault();
        setNewGroup(true);
        alert("Create new group clicked");
    }

    const handleJoin = async (event) => {
        event.preventDefault();
        setJoinGroup(true);
        alert("Join group clicked");
    }

    const handleLeave = async (event) => {
        event.preventDefault();
        setLeaveGroup(true);
        alert("Leave group clicked");
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

    if (newGroup) {
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

    else {
        return (
            <>
                <div id="group-div">
                    <div id="create-div">
                        <button id="create-grp-btn" onClick={handleCreate}> Create Group </button>
                    </div>
                    <div id="join-div">
                        <button id="join-grp-btn" onClick={handleJoin}> Join Group </button>
                    </div>
                    <div id="leave-div">
                        <button id="leave-grp-btn" onClick={handleLeave}> Leave Group </button>
                    </div>
                </div>
            </>
        )
    }


}

export default CalendarPage;