import React from "react";
import Layout from "../../../../components/Layout/Layout";
import Footer from "../../../../components/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <Layout />
            <div id="home">
            <title>Home | FG-2.0</title>
                <h1 id="fg-header">Welcome to FG 2.0</h1>
                <p id="fg-paragraph">Make booking trips with friends and family a piece of cake</p>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;