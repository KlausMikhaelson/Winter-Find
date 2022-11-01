import React, { useEffect } from "react";
import homeIcon from "../../images/sidePanel/Home.svg";
import usersIcon from "../../images/sidePanel/Users.svg";
import productsIcon from "../../images/sidePanel/Products.svg";
import useCasesIcon from "../../images/sidePanel/useCases.svg";
import transactionIcon from "../../images/sidePanel/Transaction.svg";
import xrLogo from "../../images/dashBoardLogo-image@2x.png";
import "./LeftSidePanel.css";
import { Link } from "react-router-dom";
import { GetCurrentUserDetails } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const LeftSidePanel = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.checkAuthReducer);

  useEffect(() => {
    dispatch(GetCurrentUserDetails());
  }, []);
  // console.log(user);

  return (
    <>
      <div className="side-panel-container">
        <div className="side-panel-top">
          <img src={xrLogo} alt="" />
          <hr />
          <p>Admin</p>
        </div>
        <div className="side-panel-bottom">
          <div className="side-panel-options">
            <div className="side-panel-option-1">
              <Link className="linked" to="/admin">
                <img src={homeIcon} alt="" />
                <p>Home</p>
              </Link>
            </div>
            <div className="side-panel-option-2">
              <Link className="linked" to="/admin/manage-users">
                <img src={usersIcon} alt="" />
                <p>Users</p>
              </Link>
            </div>
            <div className="side-panel-option-3">
              <Link className="linked" to="/admin/view-products">
                <img src={productsIcon} alt="" />
                <p>Products</p>
              </Link>
            </div>
            <div>
              <Link className="linked" to="/admin/usecases">
                <img src={useCasesIcon} alt="" />
                <p>Use cases</p>
              </Link>
            </div>
            <div>
              <Link className="linked" to="/admin/transactions">
                <img src={transactionIcon} alt="" />
                <p>Transactions</p>
              </Link>
            </div>
            <div>
              <Link className="linked" to="/">
                {/* <img src={transactionIcon} alt="" /> */}
                <p>Go to User Page</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidePanel;
