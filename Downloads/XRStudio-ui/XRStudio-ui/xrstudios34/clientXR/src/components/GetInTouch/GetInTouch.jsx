import React, { useEffect } from "react";
import NavBar from "../molecules/NavBar";
import "./GetInTouch.css";

const GetInTouch = () => {
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#181918";
  }, []);
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in Touch With US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, in
            integer quis non eget a quam mauris. Ornare quis mauris ornare
            malesuada etiam feugiat sem.
          </p>
        </div>
        <div className="contact-right">
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Conatact Number" />
            <input type="text" placeholder="Email Id" />

            <textarea
              className="contact-textarea"
              name=""
              id=""
              cols="50"
              rows="10"
              placeholder="Type you message here"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
