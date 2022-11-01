import React, { useEffect } from "react";
import "./ModelCard.css";
import modelCardImage from "../ProjectImages/modelCardImg.jpeg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteModel, GetCurrentUserDetails } from "../Redux/actions";
const ModelCard = ({ modelName, id, coverImage }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.checkAuthReducer);

  const deleteProducts = () => {
    dispatch(GetCurrentUserDetails());
    dispatch(DeleteModel(id));
  };
  function renderBtn() {
    if (user.role === "admin") {
      return (
        <button onClick={deleteProducts} style={{ float: "right" }}>
          Delete
        </button>
      );
    }
  }

  return (
    <div className="modelCard-mainContainer">
      <div className="modelCard-imageSection">
        <img src={"data:image/jpg;base64," + coverImage?.base64} alt="" />
      </div>
      <div className="modelCard-titleSection">
        <h1>{modelName}</h1>
      </div>
      <div className="modelCard-buttonSection">
        <Link to={`/user/${id}/add-to-cart`}>
          <button>View</button>
        </Link>
        {renderBtn()}
      </div>
    </div>
  );
};

export default ModelCard;
