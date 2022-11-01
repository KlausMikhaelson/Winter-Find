import React from "react";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import "./ManageAdmin.css";
import userProfileLogo from "../ProjectImages/userprofileLogo.jpg";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AdminCard from "../AdminCard/AdminCard";

const ManageAdmin = () => {
  return (
    <div className="manageAdminDashboard-superContainer">
      <LeftSidePanel />
      <div className="manageAdminDashboard-mainContainer">
        <div className="navbarMangeAdmin-mainContainer">
          <div className="navbarMangeAdmin-subContainer">
            <div className="navbarMangeAdmin-leftSideContent">
              <div className="navbarMangeAdmin-mainHeading">
                <h1>Manage Admin</h1>
              </div>
            </div>

            <div className="navbarMangeAdmin-rightSideContent">
              <div className="navbarMangeAdmin-userProfile">
                <div className="navbarMangeAdmin-userProfile-nameInfo">
                  <div className="navbarMangeAdmin-userProfile-name">
                    John Adams
                  </div>
                  <div className="navbarMangeAdmin-userProfile-position">
                    Super Admin
                  </div>
                </div>
                <div className="navbarMangeAdmin-userProfile-logoSection">
                  <img src={userProfileLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="addAdmin-searchBar-area">
          <div className="searchBar-area">
            <div>
            <input id="search" type="search" pattern=".*\S.*" required  placeholder="Type for Search"/>
            </div>
              <div>
              <SearchOutlinedIcon style={{marginLeft:"0.2rem",marginTop:"0.2rem",color:"#131212" , fontSize:"14px"}} /> 
              </div>
      
       
          </div>
          
          <div className="addAdmin-button">
            <button>Add Admin</button>
          </div>
        </div>

        <div> <AdminCard/> </div>
        <div> <AdminCard/> </div>
        <div> <AdminCard/> </div>
      </div>
    </div>
  );
};

export default ManageAdmin;
