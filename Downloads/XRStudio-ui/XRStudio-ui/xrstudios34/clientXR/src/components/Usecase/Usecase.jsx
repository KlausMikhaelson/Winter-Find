import React, { useEffect, useState } from "react";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import "./Usecase.css";
import userProfileLogo from "../ProjectImages/userprofileLogo.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UsecaseCard from "./UsecaseCard";
import userCard from "../ProjectImages/userCard.jpg";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCase } from "../Redux/actions";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";

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

  const id = useParams().id;
  const dispatch = useDispatch();

  let details = useSelector((state) => state.modelReducer);
  useEffect(() => {
    console.log(id);
    dispatch(GetAllCase());
  }, [details.productTitle]);

  console.log(details);
  useEffect(() => {
    dispatch(GetCurrentUserDetails());
  }, []);

  const user = useSelector((state) => state.checkAuthReducer);
  console.log(user);

  function render() {
    if (user.role && user.role === "admin") {
    } else {
      return <div>Nothing here</div>;
    }
  }

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
              <div className="custom-case-mid">
                <div className="custom-case-today">
                  {/* <h2>Today</h2> */}
                  {details.length ? (
                    details.map((cases) => (
                      <>
                        <div className="custom-case-table useCase-table">
                          <div>
                            <img src={userCard} alt="" />
                            <p>{cases.caseTitle}</p>
                          </div>
                          <p>{cases.caseRequirements}</p>
                          <p
                            style={{
                              fontWeight: "bold",
                              marginRight: "1rem",
                            }}
                          >
                            10:33
                          </p>
                          <p style={{ fontWeight: "bold" }}>Submitted</p>
                        </div>
                      </>
                    ))
                  ) : (
                    <Loader />
                  )}
                </div>
                <div className="custom-case-today">
                  <div className="custom-case-table useCase-table">
                    <h2>Yesterday</h2>
                    <div>
                      <img src={userCard} alt="" />
                      <p>Chris Henderson</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim, ipsum.
                    </p>
                    <p style={{ fontWeight: "bold", marginRight: "1rem" }}>
                      10:33
                    </p>
                    <p style={{ fontWeight: "bold" }}>Submitted</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Usecase;
