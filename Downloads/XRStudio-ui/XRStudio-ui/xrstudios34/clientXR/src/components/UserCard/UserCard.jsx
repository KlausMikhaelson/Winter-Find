import React from "react";
import "./UserCard.css";
import userCard from "../ProjectImages/userCard.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
import axios from "axios";

const UserCard = ({ userName, id }) => {
  const handleRemove = async () => {
    console.log(id);
    const res = await axios.delete(`/user/${id}`);
    window.location.reload();
  };
  return (
    <div className="userCard-mainContainer">
      <div className="userCard-userInfo">
        <div className="userCard-leftSection">
          <div className="userLogo">
            <img src={userCard} alt="" />
          </div>
          <div className="userInfoName">
            <h1>{userName}</h1>
          </div>
        </div>
        <div className="userCard-rightSection">
          <div className="activeState">{/* <h1>Active</h1> */}</div>
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
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to={`/admin/${id}/info`}
              >
                <h1>View Profile</h1>
              </Link>
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
              <h1 style={{ cursor: "pointer" }} onClick={handleRemove}>
                Remove
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
