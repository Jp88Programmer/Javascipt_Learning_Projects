import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import img from "./img/finance.jpg";
const Finance = () => {
    return (
      <>
        <Header />
        <Navbar />
        <div>
          <img className="img-container" src={img} alt="" />
        </div>
        <div className="main-content">
          <h2 className="main-title">Finance</h2>
          <div className="line" />
          <p className="desc">
            Investment Banking, Risk Management, Investment Management,
            Commercial Banking, Equity Research, and a number of other areas of
            special interest in finance require people with expert knowledge and
            a certain skill set to fill in the shoes. This trend of continuing
            focus on expertise in specific functional areas of finance has made
            it that much more difficult to make a choice of career in Finance.
            Here we would attempt to provide an overview of some of the most
            popular career roles in finance and what it takes to be successful
            at them.
          </p>

          <h2 className="main-title">Career Options</h2>
          <div className="line" />
          <ul className="options">
            <li>Investment Banking</li>
            <li>Asset Management</li>
            <li>Commercial Banking</li>
            <li>Equity Research</li>
            <li>Corporate Finance</li>
            <li>Risk Management</li>
          </ul>

          <h2 className="main-title">Eligibility</h2>
          <div className="line" />
          <p className="desc">
            Bachelors- 10+2 MBA- Graduate or Equivalent M.Sc.- Graduate or
            Equivalent
          </p>

          <h2 className="main-tile">Courses</h2>
          <div className="line" />
          <ul className="options">
            <li>Bachelors- Undergraduate</li>
            <li>MBA- Post Graduation</li>
            <li>M.Sc.- Post Graduation</li>
          </ul>
        </div>
        <Footer />
      </>
    );
};

export default Finance;
