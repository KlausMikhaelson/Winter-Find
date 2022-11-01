import React from "react";
import "./ManageUser.css";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import Navbar from "../Navbar/Navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const ManageUser = () => {
  return (
    <>
      <div className="manageUser-super-container">
        <LeftSidePanel />
        <div className="manageUser-container">
          <Navbar pageName={"Manage User"} />
          <div className="searchBar-area">
            <div>
              <input
                id="search"
                type="search"
                pattern=".*\S.*"
                required
                placeholder="Search"
              />
            </div>
            <div>
              <SearchOutlinedIcon
                style={{
                  marginLeft: "0.2rem",
                  marginTop: "0.2rem",
                  color: "#131212",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
          <div className="user-info-container">
            <div className="back-btn">
              {" "}
              <ArrowBackIosIcon
                style={{ color: "#9e9e9e", fontSize: "small" }}
              />{" "}
              Back
            </div>
            <h3>Account Information </h3>
            <div className="user-name">
              <label>Name:</label>
              <div>Victoria Davidson</div>
            </div>
            <div className="user-email">
              <label>Email:</label>
              <div>VictoriaDav@gmail.com</div>
            </div>
            <div className="user-address">
              <label>Address:</label>
              <div>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
            </div>
            <div className="user-phone">
              <label>Phone no:</label>
              <div>(307) 555-0133</div>
            </div>
            <div className="user-edit">
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
