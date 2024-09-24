import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import "./maincontent.css";
import img from "./img/Engineering.jpg";

const Engineering = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <div className="imgCon">
          <img className="img-container" src={img} alt="" />
        </div>
        <div className="main-content">
          <h2 className="main-title">Engineer</h2>
          <div className="line" />
          <p className="desc">
            An engineer is a technical professional. He or she is responsible
            for supervision of designing, manufacturing as well as the building
            processes and other technical staff. an engineer researches, designs
            and develops equipment, devices and other components of a machine,
            building or even a software. During one’s career as engineer, he or
            she works with other engineers for successful completion of the
            project.
          </p>
          <p className="desc">
            Career as engineer involves work like designing machines,
            constructing buildings, and oversees public works. Career as
            engineer is about dealing with the needs of the community and its
            problems on many other levels. To a large extent, an engineer
            monitors the flow of pollutants through the soil to clean up oil
            spills, abandoned industrial areas and other biohazards. At the
            galactic level, he or she designs a spacecraft to explore other
            planets. At the atomic level, one increases data storage which
            focuses on the rotation of electrons in atoms. Clean drinking water,
            safe food storage, and environmental protection are also under the
            umbrella of engineering.
          </p>

          <h2 className="main-title">Career Options</h2>
          <div className="line" />
          <ul className="options">
            <li>Aeronautical Engineering</li>
            <li>Aerospace Engineering</li>
            <li>Architecture Engineering</li>
            <li>Automobile Engineering</li>
            <li>Biomedical Engineering</li>
            <li>Biotechnology Engineering</li>
            <li>Ceramics Engineering</li>
            <li>Chemical Engineering</li>
            <li>Civil Engineering</li>
            <li>Computer Science Engineering</li>
            <li>Electrical and Electronics Engineering</li>
            <li>Electronics and Communication Engineering</li>
            <li>Industrial Engineering</li>
            <li>Instrumentation Engineering</li>
            <li>Manufacturing Science and Engineering</li>
            <li>Marine Engineering</li>
            <li>Medical Electronics Engineering</li>
            <li>Metallurgy</li>
            <li>Meteorology</li>
            <li>Mining Engineering</li>
            <li>Naval Architecture Engineering</li>
            <li>Polymer Engineering</li>
            <li>Robotics</li>
            <li>Textile Engineering</li>
          </ul>

          <h2 className="main-title">Eligibility</h2>
          <div className="line" />
          <p className="desc">
            (10+2) examination with biology, maths and chemistry. For IITs, It
            is mandatory to qualify in the Joint Entrance Examinations (J.E.E).
            The duration for the course is 4 years.
          </p>

          <h2 className="main-title">Courses</h2>
          <div className="line" />
          <ul className="options">
            <li>B. Tech/ B.E.</li>
            <li>M. Tech/ M.E.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Engineering;
