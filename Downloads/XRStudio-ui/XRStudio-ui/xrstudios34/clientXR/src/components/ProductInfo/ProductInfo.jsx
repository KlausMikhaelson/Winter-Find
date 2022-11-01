import React, { useEffect } from "react";
import "./ProductInfo.css";
import productInfoTop from "../../img/productInfoTop.svg";
import NavBar from "../molecules/NavBar";
import lab1 from "../../img/lab-1.svg";
import lab2 from "../../img/lab-2.svg";
import lab3 from "../../img/lab-3.svg";
import Footer from "../molecules/Footer";
import {
  DeleteModel,
  GetAllModels,
  GetCurrentUserDetails,
} from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProductInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllModels());
  }, []);
  const user = useSelector((state) => state.checkAuthReducer);

  

  const deleteProducts = (id) => {
    dispatch(GetCurrentUserDetails());
    dispatch(DeleteModel(id));
  };
  // function renderBtn() {
  //   if (user.role === "admin") {
  //     return (
  //       <button
  //         onClick={(e) => deleteProducts(model._id)}
  //         style={{ float: "right" }}
  //       >
  //         Delete
  //       </button>
  //     );
  //   }
  // }
  let models = useSelector((state) => state.modelReducer);
  console.log(models);
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="productInfo-superContainer">
          <div className="productInfo-mainContainer">
            <div className="productInfo-topSection">
              <img src={productInfoTop} alt="" />
            </div>

            <div className="productInfo-cardSection">
              {models.length ? (
                models.map((model) => (
                  <>
                    <div className="productInfo-card">
                      <div className="productInfo-cardImg">
                        <img
                          src={
                            "data:image/jpg;base64," + model.coverImage?.base64
                          }
                          alt=""
                        />
                      </div>
                      <div className="productInfo-cardhead">
                        {model.productTitle}
                      </div>
                      <div className="productInfo-cardBtn">
                        <Link to={`/user/${model._id}/add-to-cart`}>
                          <button>View</button>
                        </Link>

                        {user.role === "admin" ? (
                          <>
                            <button
                              onClick={(e) => deleteProducts(model._id)}
                              style={{ float: "right" }}
                            >
                              Delete
                            </button>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductInfo;
