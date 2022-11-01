import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./molecules/Footer";
import NavBar from "./molecules/NavBar";
// import {firestore} from './Firebase'

const ContactUs = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const handleSubmitForm = (e) => {
    //     e.preventDefault();
    //     firestore
    //       .collection("Contact_Form")
    //       .add({
    //         User_name: senderName,
    //         User_email: senderEmail,
    //         User_message: senderMessage,
    //       })
    //       .then(() => {
    //         toast.success("Message Submitted", {
    //           position: "top-center",
    //           autoClose: 2000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //         });
    //       })
    //       .catch((error) => {
    //         alert(error.message);
    //       });
    //     setSenderName("");
    //     setSenderEmail("");
    //     setSenderMessage("");
  };

  return (
    <>
      <NavBar />
      <div className="contact_us_body">
        <div className="contact_us_container">
          <div className="contact_us_content">
            <div className="contact_us_left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Address</div>
                <div className="text-one">Machenn innovations</div>
                <div className="text-two">Coimbatore-641006</div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+91-8903772381 </div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">info@machenn.com</div>
              </div>
            </div>
            <div className="contact_us_right_side">
              <div className="text_heading">Send us a message</div>

              <form className="form" onSubmit={handleSubmitForm}>
                <div className="contact_us_input_box">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    required
                  />
                </div>
                <div className="contact_us_input_box">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="contact_us_input_box message-box">
                  <textarea
                    name="messageText"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Type your Message"
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    required
                    maxLength="400"
                  >
                    "
                  </textarea>
                </div>
                <div className="contact_us_button">
                  <input type="submit" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Toastify Component */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ContactUs;
