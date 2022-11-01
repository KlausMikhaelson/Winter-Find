import React, { useEffect } from "react";
import "./Dashboard.css";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Navbar from "../Navbar/Navbar";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import Barchart from "./Barchart";
import Linechart from "./Linechart";
import cases from "../../images/cases.svg";
import cases2 from "../../images/cases2.svg";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUserDetails } from "../Redux/actions";
const Dashboard = () => {
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
          <div className="dashboard-superContainer">
            <LeftSidePanel />
            <div className="dashboard-mainContainer">
              <Navbar pageName={"Dashboard"} />

              {/* graph div */}
              <div className="graph-container">
                <div className="bar-graph">
                  <Barchart />
                </div>
              </div>
              <div className="dashboard-cases-container">
                <div className="dashboard-cases">
                  <h2 className="cases-heading">Cases</h2>
                  <div className="dashboard-total-cases">
                    <img src={cases} alt="" />
                    <p>Total Cases</p>
                    <p className="case-value">800</p>
                  </div>
                  <div className="dashboard-total-cases-solved">
                    <img src={cases} alt="" />
                    <p>Total Cases</p>
                    <p className="case-value">800</p>
                  </div>
                </div>
                <div className="dashboard-insights">
                  <h2 className="insights-heading">Insights</h2>
                  <div className="dashboard-total-users">
                    <img src={cases} alt="" />
                    <p>Total Cases</p>
                    <p className="case-value">800</p>
                  </div>
                  <div className="dashboard-total-product">
                    <img src={cases} alt="" />
                    <p>Total Cases</p>
                    <p className="case-value">800</p>
                  </div>
                  <div className="dashboard-total-views">
                    <img src={cases} alt="" />
                    <p>Total Cases</p>
                    <p className="case-value">800</p>
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

export default Dashboard;
