import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import "./ExploreCase.css";
import Footer from "../molecules/Footer";
import singleCaseUserImg from "../../img/singleCaseuserImg.jpg";

import ClientNavbar from "./ClientNavbar";
import NavBar from "../molecules/NavBar";

const ExploreCase = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const [details, setDetails] = useState("");
  const [useCase, setUseCase] = useState();
  useEffect(() => {
    getCase();
    getDetails();
    // dispatch(GetCurrentUserDetails());
  }, []);
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#181918";
  }, []);

  async function getDetails() {
    const res = await axios.get(`/case/single/${id}`);
    setDetails(res.data);
  }
  console.log(details);

  async function getCase() {
    const res = await axios({
      url: `/case/single/${id}/download`,
      method: "get",
      headers: {
        "Content-Type": "application/zip",
        withCredentials: true,
      },
      responseType: "arraybuffer",
    })
      .then((response) => {
        console.log(response.data);
        const url = window.URL.createObjectURL(new Blob([response.data]));

        setUseCase(url);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <NavBar />
      <div className="explore-case-main-container">
        <div className="explore-case-heading">
          <h2>Explore cases</h2>
        </div>
        <div className="singleCase-contentContainer explore-case-container">
          <div className="singleCase-userInfo">
            <div className="singleCase-userInfo-left">
              <div className="singleCase-userImg">
                <img src={singleCaseUserImg} alt="" />
              </div>
              <div className="singleCase-userName">
                <h1 className="singleCase-userInfo">{details.userName}</h1>
                <h2 className="singleCase-userCountry">Netherland</h2>
              </div>
            </div>
            <div className="singleCase-userInfo-right">
              <p>10:33</p>
            </div>
          </div>
          <div className="singleCase-contentArea">
            <div className="singleCase-content">
              <h6>{details?.title}</h6>
              <p>{details?.requirements}</p>
            </div>
            <div className="singleCase-contentImages">
              {/* <a href={useCase} download={"useCaseDoc.zip"}>
                Attachment
              </a> */}

              <div className="singleCase-contentImagesSecond"></div>
            </div>
          </div>
          {/* <div className="singleCase-solveBtn">
            <button>Solve</button>
          </div> */}
        </div>
        <div className="explore-download">
          <a href={useCase} download={"useCaseDoc.zip"}>
            Download
          </a>
        </div>
      </div>
    </>
  );
};

export default ExploreCase;
