import React from "react";
import Layout from "../../../../components/Layout/Layout";
import Footer from "../../../../components/Footer/Footer";

const AboutPage = () => {
    return (
        <>
            <div id="about-page-div">
                <Layout />
                <h1 id="about-h1">What is FG?</h1>
                <p id="about-p">FG is a way to connect with friends and family through flight booking to make traveling with large parties more organized.</p>
                <Footer />
            </div>
        </>
    )
}

export default AboutPage;