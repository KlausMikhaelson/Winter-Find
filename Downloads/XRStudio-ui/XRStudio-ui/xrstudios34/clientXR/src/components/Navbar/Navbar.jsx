import React, { useEffect } from "react";
import "./Navbar.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import userProfileLogo from "../ProjectImages/userprofileLogo.jpg";
import { GetCurrentUserDetails } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ pageName }) => {
  const user = useSelector((state) => state.checkAuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCurrentUserDetails());
  }, []);

  return (
    <div className="navbar-mainContainer">
      <div className="navbar-subContainer">
        <div className="navbar-leftSideContent">
          <div className="navbar-mainHeading">
            <h1>{pageName}</h1>
          </div>
        </div>

        <div className="navbar-rightSideContent">
          <div className="navbar-bell-message-icons">
            <div className="navbar-messageIcon">
              {" "}
              <ChatBubbleOutlineOutlinedIcon />{" "}
            </div>
            <div className="navbar-bellIcon">
              {" "}
              <NotificationsOutlinedIcon />{" "}
            </div>
            <hr />
          </div>
          <div className="navbar-userProfile">
            <div className="navbar-userProfile-nameInfo">
              <div className="navbar-userProfile-name">{user.userName}</div>
              <div className="navbar-userProfile-position">Super Admin</div>
            </div>
            <div className="navbar-userProfile-logoSection">
              <img src={userProfileLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
