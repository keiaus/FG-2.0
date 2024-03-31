import React from "react";
import Layout from "../../../../components/Layout/Layout";
import Footer from "../../../../components/Footer/Footer";

const AboutPage = () => {
    return (
        <>
            <div id="about-page-div">
            <title>About | FG-2.0</title>
                <Layout />
                <h1 id="about-h1">What is FG?</h1>
                <p id="about-p">Make traveling with large parties more organized.</p>
                <Footer />
            </div>
        </>
    )
}

export default AboutPage;