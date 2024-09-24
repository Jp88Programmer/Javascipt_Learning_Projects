import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import Roadmap from "./roadmap";
import data from "./orthdata";
const Orthopedics = () => {
    return (
        <>
            <Header />
            <Navbar />
            <h1 className="main-title">Orthopedic Roadmap</h1>
            <div className="line" />
            <Roadmap data={data} />
            <Footer />
        </>
    );
};

export default Orthopedics;
