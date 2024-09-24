import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import img from "./img/medicalimg.jpg";

const Medical = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="main-content">
                <div>
                    <img className="img-container" src={img} alt="" />
                </div>
                <h2 className="main-title">Medical</h2>
                <div className="line" />
                <p className className="desc">
                    Medicine is a vast field, and especially so in India.
                    Medical careers are available across a multitude of
                    educational and skill levels, but also in diverse fields
                    such as homeopathy or allopathy.Medicine falls into two
                    categories:
                    <ul className="options">
                        <li>
                            traditional, also known as alternative,
                            homoeopathic, or holistic;
                        </li>
                        <li>modern, also known as Western, or allopathic.</li>
                    </ul>{" "}
                    Sometimes there is overlap between the two, and given that
                    there has been resurgence in popularity of traditional
                    medicine over the last few years, more overlap is likely to
                    come as there is an increasing push to incorporate and
                    combine the two fields. At present, though, when choosing a
                    career in medicine to work toward, you should still choose
                    to focus on either one or the other, so as to know which
                    educational track to follow. Below is a list of healthcare
                    career options in India, along with a brief description of
                    each and its minimum required educational
                    training/background.
                </p>

                <h2 className="main-title">Career Options</h2>
                <div className="line" />
                <ul className="options">
                    <li>Audiology</li>
                    <li>Ayurveda</li>
                    <li>Dentist</li>
                    <li>Electropathy</li>
                    <li>Homeopathy</li>
                    <li>Medical Lab Technologist </li>
                    <li>Microbiology</li>
                    <li>Naturopathy</li>
                    <li>Nurse</li>
                    <li>Nutritionist/ Dietician</li>
                    <li>Ophthalmologist</li>
                    <li>Orthopedics</li>
                    <li>Optometry</li>
                    <li>Occupational Therapist</li>
                    <li>Pathology</li>
                    <li>Pharmacognosy</li>
                    <li>Pharmacovigilance</li>
                    <li>Pharmacist</li>
                    <li>Physiotherapist</li>
                    <li>Psychiatrist</li>
                    <li>Radiography</li>
                    <li>Speech Therapy</li>
                    <li>Sports Medicine</li>
                    <li>Veterinary Science</li>
                    <li>Yoga teacher</li>
                </ul>
                <h2 className="main-title">Eligibility</h2>
                <div className="line" />
                <ol className="options">
                    <li>
                        The student must have completed his/her 10+2 level of
                        education with Chemistry, Biology and Physics as
                        compulsory subjects.
                    </li>
                    <li>
                        The minimum score required by the student of the general
                        category is 50% and 40% for a student belonging to the
                        reserved category to appear for the corresponding
                        entrance exam and pursue the course.
                    </li>
                    <li>
                        The minimum age to apply for the course is 17 years.
                    </li>
                    <li>
                        The maximum age to apply for the course is 25 years.
                    </li>
                    <li>
                        The applicant must have also compulsorily cracked the
                        entrance exam for pursuing the course further i.e. NEET.
                    </li>
                    <li>
                        All applicants must also fulfill the additional
                        eligibility conditions laid out for MBBS by the
                        regulatory authorities i.e. Medical Council of India.
                    </li>
                </ol>

                <h2 className="main-title">Courses</h2>
                <div className="line" />
                <ol className="options">
                    <li>MBBS (Bachelor of Medicine and Bachelor of Surgery)</li>
                    <li>BDS (Bachelor of Dental Surgery)</li>
                    <li>BHMS (Bachelor of Homeopathic Medicine and Surgery)</li>
                    <li>BAMS (Bachelor of Ayurvedic Medicine and Surgery)</li>
                    <li>DHMS (Diploma in Homeopathic Medicine and Surgery)</li>
                    <li>BUMS (Bachelor in Unani Medicine)</li>
                    <li>
                        B.V.Sc &amp; AH (Bachelor of Veterinary Sciences &amp;
                        Animal Husbandry)
                    </li>
                    <li>B.Pharma (Bachelor of Pharmacy)</li>
                    <li>D. Pharma (Diploma of Pharmacy)</li>
                    <li>BOT (Bachelor of Occupational Therapy)</li>
                    <li>BMLT (Bachelor of Medical Laboratory Technology)</li>
                    <li>BPT (Bachelor of Physiotherapy)</li>
                    <li>B.Sc. Nursing (Bachelor of Science in Nursing)</li>
                    <li>
                        BNYS&nbsp; (Bachelor of Naturopathy and Yogic Sciences
                    </li>
                </ol>
            </div>
            <Footer />
        </>
    );
};

export default Medical;
