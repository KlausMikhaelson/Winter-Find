import React, { useEffect } from "react";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import "./ModelDashboard.css";
import userProfileLogo from "../ProjectImages/userprofileLogo.jpg";
import ModelCard from "../ModelCard/ModelCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllModels, GetCurrentUserDetails } from "../Redux/actions";
import Loader from "../Loader/Loader";

const ModelDashboard = () => {
  const user = useSelector((state) => state.checkAuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCurrentUserDetails());
    dispatch(GetAllModels());
  }, []);
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#fff";
  }, []);

  let models = useSelector((state) => state.modelReducer);
  console.log(models);
  function render() {
    if (user.role && user.role === "admin") {
      return (
        <>
          <div className="modelDashboard-superContainer">
            <LeftSidePanel />
            <div className="modelDashboard-mainContainer">
              <Navbar pageName={"Products"} />
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

                <div className="addProduct-button">
                  <Link to="/admin/create-products">
                    <button>Add Product</button>
                  </Link>
                </div>
              </div>
              <div className="modelDashboard-modelArea">
                {models.length ? (
                  models.map((model) => (
                    <div className="first-model">
                      <ModelCard
                        modelName={model.productTitle}
                        id={model._id}
                        coverImage={model.coverImage}
                      />
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
export default ModelDashboard;
