import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../molecules/Footer";
import NavBar from "../molecules/NavBar";
import ClientNavbar from "./ClientNavbar";
import "./CreateCase.css";

const CreateCase = () => {
  const [useCase, setUseCase] = useState({
    caseTitle: "",
    caseRequirements: "",
    category: "Independent",
  });
  const [caseImages, setCaseImages] = useState(null);
  const [productPhotos, setProductPhotos] = useState(null);
  console.log(useCase);

  const handleSelect = (e) => {
    setUseCase({ ...useCase, category: e.target.value });
    console.log(e.target.value)
  };


  const uploadImages = (e) => {
    // console.log(e.target.files);
    setCaseImages(e.target.files);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    let newArr = [];

    for (let i = 0; i < caseImages.length; i++) {
      formData.append("case-images", caseImages[i]);
    }

    // formData.append("productTitle", productDetails.productTitle);

    for (let key in useCase) {
      console.log(key);
      formData.append(key, useCase[key]);
    }

    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    let res = axios({
      method: "post",
      url: "/case/create-use-case",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    setProductPhotos(null);
    setUseCase({ ...useCase, caseRequirements: "", caseTitle: "" });
    // console.log(res.data);
    // axios.post("/products/create-product", formData).then((res) => res.data);
  };

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#181918";
  }, []);

  return (
    <>
      <NavBar />
      <div className="case-heading">
        <h2>Create Use Case</h2>
      </div>
      <form
        className="create-case-super-container"
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
        encType="multipart/form-data"
        action="file-upload"
      >
        <div className="create-case-container">
          <div>
            <div className="create-case-title">
              <div className="case-title">Title</div>
              <input
                type="text"
                value={useCase.caseTitle}
                onChange={(e) =>
                  setUseCase({ ...useCase, caseTitle: e.target.value })
                }
              />
            </div>
            <div className="create-case-title">
              <select
                name=""
                id=""
                className="case-select"
                onChange={handleSelect}
              >
                <option>Independent</option>
                <option>Collaborator</option>
                <option>Virtual Reality (Simulators/ Marketing & Branding tool)</option>
                <option>Medical</option>
                <option>AR services(Marketing tool/ Medical Guides)</option>
                <option>MR (Education/Medical)</option>
                <option>Custom call</option>
                <option>Others(Generic Industries)</option>
              </select>
            </div>
            <div className="create-case-title">
              <div className="case-title">Tell about your requirements</div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={useCase.caseRequirements}
                onChange={(e) =>
                  setUseCase({ ...useCase, caseRequirements: e.target.value })
                }
              ></textarea>
            </div>
            <div className="create-case-requirements">
              <div className="case-title">
                Add Related Documents and pictures
                {/* <div className="case-image-container">
                  <div className="case-image">
                    <img src={productPhotos?.image1} alt="" />
                  </div>

                  <div className="case-image">
                    <img src={productPhotos?.image2} alt="" />
                  </div>
                  <div className="case-image">
                    <img src={productPhotos?.image3} alt="" />
                  </div>
                  <div className="case-image">
                    <img src={productPhotos?.image4} alt="" />
                  </div>
                </div> */}
              </div>

              {/* <img src="" alt="" /> */}
              {/* <label></label> */}
              <div className="case-requirements-btn">
                <input
                  type="file"
                  multiple
                  id="useCase-files"
                  name="case-images"
                  onChange={uploadImages}
                  style={{ display: "none" }}
                />
                <label for="useCase-files">Add</label>
              </div>
            </div>
          </div>
          <div className="case-submitBtn">
            <button>Submit</button>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
};

export default CreateCase;
