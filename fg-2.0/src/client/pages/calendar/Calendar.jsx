import Calendar from "react-calendar";
import Layout from "../../../components/Layout/Layout";
import Footer from "../../../components/Footer/Footer";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
            <div>
                <title>Calendar | FG-2.0</title>
                <Layout />
                <header>
                    <h1 id="calendar-title">Calendar</h1>
                </header>
                <div id="calendar-div">
                    <Calendar onChange={setDate} value={date} />
                </div>
                <p className="text-container">
                    <span className="bold">Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
                <Footer />
            </div>
        </>
    )
}

export default CalendarPage;