import Layout from "../../../components/Layout/Layout";

const AboutPage = () => {
    return (
        <>
            <div id="about-page-div">
                <title>About | FG-2.0</title>
                <Layout />
                <header>
                    <h1 id="about-h1">What is FG-2.0?</h1>
                </header>
                <p id="about-p">FG-2.0 is a web application designed to make traveling with large groups of people<br /> less of a headache.
                    Instead of having to reach out to a group chat for a date range, <br />FG-2.0 encourages group planning through a calendar.
                </p>
            </div>
        </>
    )
}

export default AboutPage;