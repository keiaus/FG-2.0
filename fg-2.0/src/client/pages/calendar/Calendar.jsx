import Calendar from "react-calendar";
import Layout from "../../../components/Layout/Layout";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

const CalendarPage = () => {
    const [calendarId, setCalendarId] = useState();
    const [userId, setUserId] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [dateRange, setDateRange] = useState(new Date());

    const onSubmitForm = async (event) => {
        event.preventDefault();

        try {
            const body = {
                "calendarId": 0,
                "tokenId": "",
                "userId": "",
                "dateRange": dateRange
            }

            axios.post("/api/calendar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: body
            })
                .then(async (response) => {

                    console.log("response in submitform: ", response);
                    
                    if (response.status === 200 && response.data.data.length != 0) {

                        console.log("response in submit cal: ", response);
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
                <Layout />
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
                            <span className="bold">Default selected date:</span>{' '}
                            {dateRange.toDateString()}
                        </p>
                    )}

                    <form onSubmit={onSubmitForm}>
                        <input type="submit" id="calendar-submit" value={"Confirm"} />
                    </form>

                </div>

                <Footer />
            </div>
        </>
    )
}

export default CalendarPage;