import React, { useEffect, useState } from "react";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import "./ManageAdminUser.css";
import userProfileLogo from "../ProjectImages/userprofileLogo.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UserCard from "../UserCard/UserCard";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers, GetCurrentUserDetails } from "../Redux/actions";
import Loader from "../Loader/Loader";
import Invite from "./Invite";

const ManageAdminUser = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.checkAuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllUsers());
    dispatch(GetCurrentUserDetails());
  }, []);
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#fff";
  }, []);

  const users = useSelector((state) => state.userReducer);
  console.log(users);

  const handleAddUser = () => {
    setShowModal(!showModal);
  };

  function render() {
    if (user.role && user.role === "admin") {
      return (
        <>
          <div className="manageAdminUserDashboard-superContainer">
            {/* Need to add condition to no render Upload button in dashboard for admin */}
            <LeftSidePanel />
            <div className="manageAdminUserDashboard-mainContainer">
              <div className="navbarmanageAdminUser-mainContainer">
                <Navbar pageName={"Manage Users"}></Navbar>
              </div>

              <div className="addUser-searchBar-area">
                <div className="searchBar-area">
                  <div>
                    <input
                      id="search"
                      type="search"
                      pattern=".*\S.*"
                      required
                      placeholder="Type for Search"
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

                <div className="addUser-button">
                  <button onClick={handleAddUser}>Add User</button>
                </div>
                {showModal && <Invite handleAddUser={handleAddUser} />}
              </div>
              <div className="users-list-container">
                {users.length ? (
                  users?.map((user) => (
                    <div>
                      {" "}
                      <UserCard userName={user.userName} id={user._id} />{" "}
                    </div>
                  ))
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <div>Nothing here</div>;
    }
  }

  return render();
};

export default ManageAdminUser;
