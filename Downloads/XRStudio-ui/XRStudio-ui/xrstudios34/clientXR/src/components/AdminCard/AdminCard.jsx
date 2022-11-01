import React from "react";
import "./AdminCard.css";
import userCard from "../ProjectImages/userCard.jpg";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const AdminCard = () => {
  return (
    <div className="adminCard-mainContainer">
      <div className="adminCard-userInfo">
        <div className="adminCard-leftSection">
          <div className="userLogo">
            <img src={userCard} alt="" />
          </div>
          <div className="userInfoName">
            <h1>Chris Henderson</h1>
          </div>
        </div>
        <div className="adminCard-rightSection">
          <div className="activeState">
            <h1>Active</h1>
          </div>
          <div className="adminPositionState">
            <h1>Admin</h1>
          </div>
          <div className="viewState">
            <div><AccountCircleOutlinedIcon style={{
                fontSize:"16px",marginTop:"0.4rem",marginRight:"0.2rem"
            }} /></div>
            <div><h1>View Users</h1></div>
            
          </div>
          <div className="removeState">
            <div><DeleteOutlinedIcon style={{
                fontSize:"16px",marginTop:"0.4rem",marginRight:"0.2rem"
            }}/></div>
          <div><h1>Remove</h1></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
