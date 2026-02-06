import Layout from "../../../components/Layout/LoggedInLayout";
import CalendarPage from "../calendar/Calendar";

const LoggedInHome = () => {
    return (
        <>
            <Layout />
            <div id="home">
                <title>Home | FG-2.0</title>
                <CalendarPage/>
            </div>
        </>
    )
}

export default LoggedInHome;