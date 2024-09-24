import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
// import ImgSildeing from "./ImgSildeing";
import "./maincontent.css";

const About = () => {
    return (
        <div>
            <Header />
            <Navbar />

            <div className="aboutList">
                <div className="main-content">
                    <h4 className="para-img">Developer By</h4>
                </div>

                <div className="main-content paraAboutList">
                    <p className="para-img">Sundanshu Patel</p>
                    <p className="para-img">Jayedra Parmar</p>
                    <p className="para-img">Gautam Nakum</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
