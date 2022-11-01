import React from "react";
import NavBar from "../molecules/NavBar";
import "./About.css";
import aboutUsImage from "../../img/about-us-cover.svg";
import visionImg from "../../img/vision.svg";
import missionImg from "../../img/mission.svg";
import bottomIcon1 from "../../img/About-us-1.svg";
import bottomIcon2 from "../../img/About-us-2.svg";
import bottomIcon3 from "../../img/About-us-3.svg";
import bottomIcon4 from "../../img/About-us-4.svg";
import bottomIcon5 from "../../img/About-us-5.svg";
import bottomIcon6 from "../../img/About-us-6.svg";
import Footer from "../molecules/Footer";

const About = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="about-us-container">
          <div className="about-us-section-1">
            <div className="about-us-section-top">
              <img src={aboutUsImage} alt="" />
              <div>
                <h1>Creating an ecosystem to learn, create and collaborate</h1>
              </div>
            </div>
            <div className="about-us-section-1-bottom">
              <h2>
                Ready to explore the world of Immersive Healthcare with us
              </h2>
              <p>
                {" "}
                Machenn is an Immersive Healthcare Simulation company providing
                Virtual Reality based solutions to the healthacre manufacturing
                companies and institutions to bridge the gap between the
                adavancements of the healthacre technology and the stakeholders.
              </p>
              <p>
                The trend towards competency-based resident training and the
                increasing cost of conventional techniques, just as in the
                healthcare industry, drive The use of VR technology fills in the
                gaps caused by fragmented exposure and combines the acquisition
                of knowledge and technical skills. As a company, we are working
                to develop products and services that will meet the design,
                production, and training needs of healthcare and other
                manufacturers worldwide.
              </p>
            </div>
          </div>
          <div className="about-us-section-2">
            <div className="about-us-section-body">
              <div className="about-us-section-2-left">
                <img src={visionImg} alt="" />
              </div>
              <div className="about-us-section-2-right">
                <h2>Vision</h2>
                <p>To ensure complete and quality healthcare to every human.</p>
              </div>
            </div>
            <div className="about-us-section-body">
              <div className="about-us-section-2-left">
                <h2>Mission</h2>
                <p>
                  Creating a million future ready professionals through
                  affordable immersive training solutions
                </p>
              </div>
              <div className="about-us-section-2-right">
                <img src={missionImg} alt="" />
              </div>
            </div>
          </div>
          <div className="about-us-section-3">
            <div className="about-us-section-3-list-left">
              <div className="about-us-section-3-list-left-body">
                <div>
                  <h3>Structured training modules</h3>
                </div>
                <img src={bottomIcon1} alt="" />
              </div>
              <div className="about-us-section-3-list-left-body">
                <div>
                  <h3>Making affordable and time efficient simulators</h3>
                </div>
                <img src={bottomIcon2} alt="" />
              </div>
              <div className="about-us-section-3-list-left-body">
                <div>
                  <h3>Accurate procedural workflows</h3>
                </div>
                <img src={bottomIcon3} alt="" />
              </div>
            </div>
            <div className="about-us-section-3-list-right">
              <div className="about-us-section-3-list-right-body">
                <img src={bottomIcon4} alt="" />
                <div>
                  <h3>Powerful Training Analytics</h3>
                </div>
              </div>
              <div className="about-us-section-3-list-right-body">
                <img src={bottomIcon5} alt="" />
                <div>
                  <h3>Validated by Healthcare experts</h3>
                </div>
              </div>
              <div className="about-us-section-3-list-right-body">
                <img src={bottomIcon6} alt="" />
                <div>
                  <h3>Real time data management </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
