import React, { useEffect, useState } from "react";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import "./Usecase.css";
import userProfileLogo from "../ProjectImages/userprofileLogo.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UsecaseCard from "./UsecaseCard";
import userCard from "../ProjectImages/userCard.jpg";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCase, GetCurrentUserDetails } from "../Redux/actions";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Usecase = () => {
  const [modelInfo, setModelInfo] = useState({
    title: "",
    desc: "",
    price: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#fff";
  }, []);

  const id = useParams().id;
  const dispatch = useDispatch();

  let details = useSelector((state) => state.modelReducer);
  useEffect(() => {
    console.log(id);
    dispatch(GetAllCase());
  }, []);

  console.log(details);
  useEffect(() => {
    dispatch(GetCurrentUserDetails());
  }, []);

  const user = useSelector((state) => state.checkAuthReducer);
  console.log(user);

  function render() {
    if (user?.role && user?.role === "admin") {
      return (
        <>
          <div className="manageAdminUserDashboard-superContainer">
            {/* Need to add condition to no render Upload button in dashboard for admin */}
            <LeftSidePanel />
            <div className="manageAdminUserDashboard-mainContainer">
              <Navbar pageName={"Use Cases"}></Navbar>

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

                {/* <div className="addUser-button">
            <button>Add User</button>
          </div> */}
              </div>

              <>
                <div>
                  {" "}
                  {/* <div className="custom-case-admin"> */}
                  <div className="admin-case-today">
                    {/* <h2>Today</h2> */}
                    {details.length ? (
                      details.map((cases) => (
                        <>
                          {/* <div className="custom-case-table useCase-table">
                              <div>
                                <div>
                                  <img src={userCard} alt="" />
                                  <Link
                                    to={`/admin/usecases/${cases._id}/Single`}
                                    style={{
                                      textDecoration: "none",
                                      color: "#000",
                                    }}
                                  >
                                    <p>{cases.caseTitle}</p>
                                  </Link>
                                </div>
                                <div>
                                  <p
                                    style={{
                                      overflow: "hidden",
                                      // height: "40px",
                                      // width: "50%",
                                      // marginRight: "2rem",
                                    }}
                                  >
                                    {cases.caseRequirements?.slice(0, 50) +
                                      "..."}
                                  </p>
                                </div>
                              </div>
                              <p
                                style={{
                                  marginRight: "1rem",
                                }}
                              >
                                10:33
                              </p>
                              <p>Submitted</p>
                            </div> */}
                          {/* <div className="admin-case-container"> */}
                          <div className="admin-case-block">
                            <div className="admin-case-title">
                              <img src={userCard} alt="" />
                              <Link
                                to={`/admin/usecases/${cases._id}/Single`}
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                              >
                                <p>{cases.caseTitle}</p>
                              </Link>
                            </div>
                            <div className="admin-case-desc">
                              <p>
                                {cases.caseRequirements?.slice(0, 50) + "..."}
                              </p>
                            </div>
                            <div className="admin-case-icon">
                              {/* <p>
                                  {cases.caseRequirements?.slice(0, 50) + "..."}
                                </p> */}
                            </div>
                            <div className="admin-case-time">
                              <Link
                                to={`/admin/usecases/${cases._id}/Single`}
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                              >
                                <p>View</p>
                              </Link>
                              <p>10:30</p>
                            </div>
                          </div>
                          {/* </div> */}
                        </>
                      ))
                    ) : (
                      <Loader />
                    )}
                  </div>
                  {/* </div> */}
                </div>
              </>
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

export default Usecase;
