import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Invite.css";
import validator from "email-validator";
import { sendMail } from "../Redux/actions";

const Invite = ({ handleAddUser }) => {
  const [email, setEmail] = useState({
    userEmail: "",
  });
  const dispatch = useDispatch();
  const handleInvite = (e) => {
    // console.log(email.userEmail);

    if (validator.validate(email.userEmail)) {
      let obj = {
        email: email.userEmail,
      };

      handleAddUser();
      dispatch(sendMail(obj));
    } else {
      alert("Enter a valid email");
    }
  };
  return (
    <>
      <div className="inviteBox-fixedContainer">
        <div className="inviteBox-mainContainer">
          <div className="inviteBox-innerContainer">
            <div className="inviteLabel">Email</div>
            <div className="invite-input-section">
              <input
                type="text"
                placeholder="Enter Email to send link"
                value={email.userEmail}
                onChange={(e) => setEmail({ email, userEmail: e.target.value })}
                required
              />
              <button
                className="inviteBox-button"
                onClick={handleInvite}
                style={{ cursor: "pointer" }}
              >
                Send link
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invite;
