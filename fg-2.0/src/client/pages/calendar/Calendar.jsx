import Calendar from "react-calendar";
import Layout from "../../../components/Layout/Layout";
import Footer from "../../../components/Footer/Footer";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

const CalendarPage = () => {
    const [dateRange, setDateRange] = useState(new Date());

    console.log("dateRange: ", dateRange);
    

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

                </div>

                <Footer />
            </div>
        </>
    )
}

export default CalendarPage;