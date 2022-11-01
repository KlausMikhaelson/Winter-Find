import React, { useEffect, useState } from "react";
import ClientNavbar from "../Usecase/ClientNavbar";
import productImage from "../../images/productImage.svg";
import "./AddToCart.css";
import NavBar from "../molecules/NavBar";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleModel } from "../Redux/actions";
import Loader from "../Loader/Loader";
import shoeImg from "../../img/shoe.svg";
import axios from "axios";
import { post } from "../../utils/paytm";

const AddToCart = () => {
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
    setPreviewImage();
    dispatch(GetSingleModel(id));
    if (details) {
      setModelInfo({
        ...modelInfo,
        title: details.productTitle,
        desc: details.productDesc,
        price: details.productPrice,
        image1: details.productImage1?.base64,
        image2: details.productImage2?.base64,
        image3: details.productImage3?.base64,
        image4: details.productImage4?.base64,
      });
    }
  }, [details.productTitle]);
  console.log(details);

  const setPreviewImage = () => {
    let allImages = document.querySelectorAll(".cart-image-select");

    allImages.forEach((el) => {
      el.addEventListener("click", (e) => {
        // console.log(e.target.src);
        let coverImage = document.querySelector(".cart-preview-image");
        // console.log(coverImage);
        coverImage.src = e.target.src;
      });
    });
  };
  // res.cookie("userToken", token)
  // const getData = (data) => {
  //   return fetch(`http://localhost:5000/products/paynow`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       // "token": Cookie
  //     },
  //     body: JSON.stringify(data)
  //   }).then(response => response.json()).catch(err => console.log(err))
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/products/paynow", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => res.data).catch(err => console.log(err))
  }


  // const makePayment = () => {
  //   getData({ amount: 1, email: "abc@gmail.com" }).then(response => {
  //     var information = {
  //       action: "https://securegw.paytm.in/theia/processTransaction",
  //       params: response
  //     }
  //     post(information)
  //   })
  // }

  // const makePayment = () => {
  //   getData({ amount: 1, email: "abc@gmail.com" }).then(response=> console.log(response))
  // }

  return (
    // <>
    //   <NavBar />
    //   {modelInfo.desc ? (
    //     <>
    //       <div className="cart-heading">
    //         <h1>Product</h1>
    //       </div>
    //       <div className="cart-container">
    //         <div className="cart-left">
    //           <div className="cart-product-images">
    //             <img src={"data:image/jpg;base64," + modelInfo.image1} alt="" />
    //             <img src={"data:image/jpg;base64," + modelInfo.image2} alt="" />
    //             <img src={"data:image/jpg;base64," + modelInfo.image3} alt="" />
    //             <img src={"data:image/jpg;base64," + modelInfo.image4} alt="" />
    //           </div>
    //         </div>
    //         <div className="cart-right">
    //           <h2>{modelInfo.title}</h2>
    //           <h3>{modelInfo.price}$</h3>
    //           <div className="cart-wishlist">
    //             <p>ADD TO WISHLIST</p>
    //           </div>
    //           <div className="cart-product-description">
    //             <h4>Description</h4>
    //             <p>{modelInfo.desc}</p>
    //           </div>
    //           <button>Buy</button>
    //         </div>
    //       </div>
    //     </>
    //   ) : (
    //     <Loader />
    //   )}
    // </>
    <>
      {/* <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/> */}
      <div className="container">
        <NavBar />
        {modelInfo ? (
          <>
            <div className="cart-container">
              <div className="cart-left">
                <div className="cart-images">
                  <img
                    className="cart-preview-image"
                    src={"data:image/jpg;base64," + modelInfo.image1}
                    alt=""
                  />
                  <div className="cart-image-select">
                    <img
                      className="cart-image-1"
                      src={"data:image/jpg;base64," + modelInfo.image1}
                      alt=""
                    />
                    <img
                      className="cart-image-2"
                      src={"data:image/jpg;base64," + modelInfo.image2}
                      alt=""
                    />
                    <img
                      className="cart-image-3"
                      src={"data:image/jpg;base64," + modelInfo.image3}
                      alt=""
                    />
                    <img
                      className="cart-image-4"
                      src={"data:image/jpg;base64," + modelInfo.image4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="cart-right">
                <div>
                  <h3>{modelInfo.title}</h3>
                  <h4>Description</h4>
                  <p>{modelInfo.desc}</p>
                  <button onClick={handleSubmit}>Buy Now</button>
                  {/* <Payment /> */}
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default AddToCart;
