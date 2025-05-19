import React from "react";
import Layout from "../../../components/Layout/Layout";
import Footer from "../../../components/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <Layout />
            <div id="home">
                <title>Home | FG-2.0</title>
                <header>
                    <h1 id="fg-header">Welcome to FG 2.0</h1>
                </header>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;