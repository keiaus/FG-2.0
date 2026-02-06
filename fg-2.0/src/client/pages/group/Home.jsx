import Calendar from "react-calendar";
import NewGroup from "../group/NewGroup";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";

const Home = () => {
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

export default Home;



