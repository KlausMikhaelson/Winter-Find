import React from "react";
import NavBar from "../components/molecules/NavBar";
import Footer from "./molecules/Footer";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      {/* Main container */}
      <div className="aboutUsContainer">
        {/* Heading content (We are Brand Name) */}
        <div className="main_Heading">
          <h1 className="we_Are">We are</h1>
          <h1 className="brand_Name">xrstudio</h1>
        </div>
        {/* Middel section Left side(picture content and right side Info with p tag) */}
        <div className="mid_section">
          <div className="left_mid_content"></div>

          <div className="right_mid_content">
            <h1>We develop</h1>
            <p>
              An immersive multifunctional platform providing establishment of a
              laboratory to learn, design, develop and explore ar/vr and mr (xr
              studio), industrial training and access to xr-tech mobile app with
              unlimited database.
              <br />A wide spectrum of hardware and software. unlimited
              educational resources and xr concepts.
            </p>
          </div>
        </div>

        {/* Bottom section parent |  Left side info and right side pic  */}
        <div className="bottom_section">
          {/* *Bottom section child : 1  * */}
          <div className="left_bottom_content">
            <h1>We Create and</h1>
            <p>
              Explore and visualize the 3D models with unlimited database
              resource.
            </p>
          </div>
          {/*Bottom section child : 2  */}
          <div className="right_bottom_content">{/* Image place */}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
