import React, { useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import Navbar from "../Navbar/Navbar";
import "./Transactions.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUserDetails } from "../Redux/actions";

const Transaction = () => {
  const user = useSelector((state) => state.checkAuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCurrentUserDetails());
  }, []);
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
              <Link
                to="/admin/transaction-details"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <table className="transaction-table">
                  <tr>
                    <th>S.no</th>
                    <th>Transaction Id</th>
                    <th>Paid</th>
                    <th>Card type</th>
                    <th>Date</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>#93439</td>
                    <td>₹2300</td>
                    <td>Razorpay</td>
                    <td>Friday, 22nd July , 3:05pm</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>#93439</td>
                    <td>₹2300</td>
                    <td>Razorpay</td>
                    <td>Friday, 22nd July , 3:05pm</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>#93439</td>
                    <td>₹2300</td>
                    <td>Razorpay</td>
                    <td>Friday, 22nd July , 3:05pm</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>#93439</td>
                    <td>₹2300</td>
                    <td>Razorpay</td>
                    <td>Friday, 22nd July , 3:05pm</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>#93439</td>
                    <td>₹2300</td>
                    <td>Razorpay</td>
                    <td>Friday, 22nd July , 3:05pm</td>
                  </tr>
                </table>
              </Link>
            </div>
          </div>
        </>
      );
    } else {
    }
  }
  return render();
};

export default Transaction;
