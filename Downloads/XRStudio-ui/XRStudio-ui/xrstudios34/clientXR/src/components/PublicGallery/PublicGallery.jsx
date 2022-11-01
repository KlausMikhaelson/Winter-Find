import React, { useState, useContext, useEffect } from "react";
import Navbar from "../molecules/NavBar";
import Footer from "../molecules/Footer";
import "./style.css";
// import { Link, NavLink } from "react-router-dom";
// import PhotoCard from "./PhotoCard";
// import { storage, generateModelDocument, getModal2Document } from "../Firebase";
// import { AuthContext } from "../../Pages/Auth";
import ModelCard from "../ModelCard/ModelCard";
import { useDispatch, useSelector } from "react-redux";
import { GetAllModels } from "../Redux/actions";
import Loader from "../Loader/Loader";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const PublicGallery = () => {
  // const [image, setImage] = useState(null);
  // const { currentUser } = useContext(AuthContext);
  // const [datas, setdatas] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllModels());
  }, []);
  let models = useSelector((state) => state.modelReducer);
  console.log(models);

  return (
    <>
      <div className="modelDashboard-mainContainer">
        <Navbar pageName={"Products"} />
        <h1 className="product-heading">Products</h1>
        <div className="modelDashboard-modelArea-client-container">
          <div className="modelDashboard-modelArea-client">
            {/* <div className="first-model">
              <ModelCard />
            </div>
            <div>
              <ModelCard />
            </div>
            <div>
              <ModelCard />
            </div>
            <div>
              <ModelCard />
            </div>
            <div>
              <ModelCard />
            </div> */}
            {/* <div>
            <ModelCard />
          </div> */}
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
      <Footer />
    </>
  );
};

export default PublicGallery;
