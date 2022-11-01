import React from "react";
import "./UsecaseCard.css";
import userCard from "../ProjectImages/userCard.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const UsecaseCard = () => {
  return (
    <div className="userCard-mainContainer">
      <div className="userCard-userInfo">
        <div className="userCard-leftSection">
          <div className="userLogo">
            <img src={userCard} alt="" />
          </div>
          <div className="userInfoName">
            <h1>Andy Carrol</h1>
          </div>
        </div>
        <div className="userCard-rightSection">
          <div className="user-data">
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className="userPositionState">
            <h1>Users</h1>
          </div>
          <div className="viewState">
            <div>
              <AccountCircleOutlinedIcon
                style={{
                  fontSize: "18px",
                  marginTop: "0.3rem",
                  marginRight: "0.2rem",
                }}
              />
            </div>
            <div>
              <h1>View Profile</h1>
            </div>
          </div>
          <div className="removeState">
            <div>
              <DeleteOutlinedIcon
                style={{
                  fontSize: "18px",
                  marginTop: "0.3rem",
                  marginRight: "0.1rem",
                }}
              />
            </div>
            <div>
              <h1>Remove</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsecaseCard;
