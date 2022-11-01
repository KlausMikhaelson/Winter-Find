import React, { useEffect } from "react";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import Navbar from "../Navbar/Navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Transactions.css";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUserDetails } from "../Redux/actions";

const TransactionDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCurrentUserDetails());
  }, []);
  const user = useSelector((state) => state.checkAuthReducer);
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#fff";
  }, []);

  function render() {
    if (user.role && user.role === "admin") {
      return (
        <>
          <div className="transaction-super-container">
            <LeftSidePanel />
            <div className="transaction-container">
              <Navbar pageName={"Transactions"} />
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
              <div className="transaction-details-container">
                <h2>Transaction details</h2>
                <div className="transaction-details">
                  <div className="transaction-details-row-1">
                    <h3>Billing Name:</h3>
                    <p>Billing Name</p>
                  </div>
                  <div className="transaction-details-row-2">
                    <h3>Date:</h3>
                    <p>Friday, 22nd July , 3:05pm </p>
                  </div>
                  <div className="transaction-details-row-3">
                    <h3>Billing address: </h3>
                    <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                  </div>
                  <div className="transaction-details-row-4">
                    <h3>Email: </h3>
                    <p>VictoriaDav@gmail.com</p>
                  </div>
                  <div className="transaction-details-row-5">
                    <h3>Item purchased: </h3>
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                  </div>
                  <div className="transaction-details-row-6">
                    <h3>Payment Method: </h3>
                    <p>Razorpay</p>
                  </div>
                  <div className="transaction-details-row-7">
                    <h3>Paid: </h3>
                    <p>₹2300</p>
                  </div>
                  <div className="transaction-details-row-8">
                    <button>Share Receipe</button>
                  </div>
                </div>
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

export default TransactionDetails;
