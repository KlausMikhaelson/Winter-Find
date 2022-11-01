import React from "react";
import xrLogo from "../../images/dashBoardLogo-image@2x.png";
import "./ClientNavbar.css";

const ClientNavbar = () => {
  return (
    <>
      <div className="client-nav-container">
        <div className="client-nav-left">
          <img src={xrLogo} alt="" />
        </div>
        <div className="client-nav-right">
          <div>Home</div>
          <div>Products</div>
          <div>Use Cases</div>
          <div>About us</div>
          <div>Logout</div>
        </div>
      </div>
    </>
  );
};

export default ClientNavbar;
