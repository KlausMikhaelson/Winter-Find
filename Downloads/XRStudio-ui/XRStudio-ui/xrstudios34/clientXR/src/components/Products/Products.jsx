import React, { useEffect, useState } from "react";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import Navbar from "../Navbar/Navbar";
import "./Products.css";
import productImage from "../../images/productImage.svg";
import productImage2 from "../../images/productImage2.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUserDetails } from "../Redux/actions";
import { style } from "@mui/system";
import Dropzone from "../Dropzone/Dropzone";
import CoverDropzone from "../Dropzone/CoverDropzone";

const Products = () => {
  const [productPhotos, setProductPhotos] = useState(null);
  const [img2upload, setImg2upload] = useState(null);
  const [productDetails, setProductDetails] = useState({
    productTitle: "",
    productDesc: "",
    productLink: "",
    productPrice: "",
  });
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#fff";
  }, []);
  // console.log(productPhotos);
  const [coverImage, setCoverImage] = useState("");
  console.log(coverImage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCurrentUserDetails());
  }, []);
  const uploadImages = (e) => {
    // console.log(e.target.files);
    setImg2upload(e.target.files);
    // let arr = [];
    // e.target.files.map((idx) => arr.push(e.target.files[idx]));
    // console.log(arr);

    if (
      e.target.files[0] &&
      e.target.files[1] &&
      e.target.files[2] &&
      e.target.files[3]
    ) {
      setProductPhotos({
        ...productPhotos,
        image1: URL.createObjectURL(e.target.files[0]),
        image2: URL.createObjectURL(e.target.files[1]),
        image3: URL.createObjectURL(e.target.files[2]),
        image4: URL.createObjectURL(e.target.files[3]),
      });
    } else if (e.target.files[0] && e.target.files[1] && e.target.files[2]) {
      setProductPhotos({
        ...productPhotos,
        image1: URL.createObjectURL(e.target.files[0]),
        image2: URL.createObjectURL(e.target.files[1]),
        image3: URL.createObjectURL(e.target.files[2]),
      });
    } else if (e.target.files[0] && e.target.files[1]) {
      setProductPhotos({
        ...productPhotos,
        image1: URL.createObjectURL(e.target.files[0]),
        image2: URL.createObjectURL(e.target.files[1]),
      });
    } else {
      setProductPhotos({
        ...productPhotos,
        image1: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  console.log(productPhotos);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    let newArr = [];

    console.log(img2upload);

    for (let image in img2upload) {
      formData.append("product-images", img2upload[image]);
    }

    for (let image in coverImage) {
      formData.append("cover-image", coverImage[image]);
    }

    for (let key in productDetails) {
      formData.append(key, productDetails[key]);
    }

    for (var key of formData.entries()) {
      console.table(key[0] + ", " + key[1]);
    }

    setProductPhotos(null);
    setProductDetails({
      productTitle: "",
      productPrice: "",
      productDesc: "",
      productLink: "",
    });
    // console.log(res.data);
    axios
      .post("/products/create-product", formData, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => res.data);
  };
  const user = useSelector((state) => state.checkAuthReducer);

  const handleCover = (e) => {
    // setCoverImage(URL.createObjectURL(e.target.files[0]));
    setCoverImage(e.target.files[0]);
    console.log(coverImage);
  };

  function render() {
    if (user.role && user.role === "admin") {
      return (
        <>
          <div className="products-super-container">
            <LeftSidePanel />
            <div className="products-container">
              <Navbar pageName={"Products"} />
              <form
                method="POST"
                onSubmit={(e) => handleSubmit(e)}
                encType="multipart/form-data"
                action="file-upload"
              >
                <div className="product-detail-container">
                  <div className="product-title">
                    <div>Product title</div>
                    <input
                      type="text"
                      value={productDetails.productTitle}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productTitle: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="product-descriptions">
                    <div>Product description</div>
                    <textarea
                      name=""
                      id="textarea"
                      cols="50"
                      rows="5"
                      value={productDetails.productDesc}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productDesc: e.target.value,
                        })
                      }
                    ></textarea>
                        <div className="product-price">
                          <div>Price</div>
                          <input
                            type="number"
                            value={productDetails.productPrice}
                            onChange={(e) =>
                              setProductDetails({
                                ...productDetails,
                                productPrice: e.target.value,
                              })
                            }
                          />
                        </div>
                  </div>
                  <div className="product-title product-link">
                    <div>Add Link</div>
                    <input
                      type="text"
                      value={productDetails.productLink}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productLink: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="product-image-video">
                    <p>Add Product Images and Video</p>
                    <div className="product-video">
                      <Dropzone setImg2upload={setImg2upload}></Dropzone>
                      <button>Publish</button>
                    </div>
                    <p>Add Cover Image for the product</p>
                    <div className="product-video">
                      <CoverDropzone setCoverImage={setCoverImage} />
                      <button>Publish</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>Nothing here</div>
        </>
      );
    }
  }

  return render();
};

export default Products;
