import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import img1 from "./img/img1.png";
// import ImgSildier from "./ImgSilder";
// import ImgSildeing from './ImgSildeing';
// import Sildeing from './ImgAnimation';
import "./maincontent.css";
const MainContent = () => {
    return (
        <div>
            <Header />
            <Navbar />
            {/* <div className="imgContainer">
                <img className="main-img" src={img1} alt="" />
            </div> */}
            <div className="main-content-home">
                <p className="para">
                    Career Roadmap is a comprehensive job family model and pay
                    structure that will provide visibility to career paths for
                    managers and staff to foster equitable, consistent
                    compensation practices across the university and medical
                    center. Choosing the right career path for you requires deep
                    understanding of precisely two things: 1) potential careers
                    and 2) you. We’ll start with understanding “you” first, and
                    we’ll get to the potential careers. Now chances are you
                    already feel like you know something about yourself. And
                    that’s likely very true. But taking a deeper, systematic
                    self-inventory is a very worthwhile endeavor not just for
                    the act of choosing a career path, for the foundation of all
                    major life decisions. Our career roadmap guide is a great
                    place to start – you can search and sort by various
                    criteria, including by personality types or skills. The
                    Career Roadmap Guide we believe that all those who have had
                    success in their careers have a moral responsibility to give
                    back to others. In fact, that’s why we created this website.
                    And it’s what we think you should do too as soon as you
                    reach some level of career success.
                </p>
                <p className="para">
                Career Roadmap is a comprehensive job family model and pay structure that will provide visibility to career paths for managers and staff to foster equitable, consistent compensation practices across the university and medical center. Career Roadmap will enable Ohio State to recruit, retain and inspire the talent needed to fulfill our mission. Career mapping is the process by which employers create methods for individual advancement within their company. Career maps explain the requirements for advancement at each stage of an employee's career. Employees often create their own career maps as they identify their own course of progression within an organization. They create their own progression routes and determine the requirements needed to get from their entry-level position to their goal.
                </p>
                <p className="para">
                    The conclusion of secondary education happens at the end of
                    the 10th standard. However, at this point in your
                    educational journey, you will have to choose between
                    completing senior secondary schooling in either Commerce
                    stream, Arts, or Science stream or opting directly from a
                    long list of courses after 10th standard.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default MainContent;
