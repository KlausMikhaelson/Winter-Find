import React, { useEffect } from "react";
import "./SingleCase.css";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import Navbar from "../Navbar/Navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import singleCaseUserImg from "../../img/singleCaseuserImg.jpg";
import singleCaseContentImg from "../../img/singleCaseContentImg.jpg";
import singleCaseContentImgTwo from "../../img/singleCaseContentImgTwo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUserDetails, GetSingleCase } from "../Redux/actions";
import FileViewer from "react-file-viewer";
// import { CustomErrorComponent } from "custom-error";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";

const SingleCase = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  useEffect(() => {
    getCase();
    getDetails();
    // dispatch(GetCurrentUserDetails());
  }, []);
  // const user = useSelector((state) => state.checkAuthReducer);
  const [useCase, setUseCase] = useState();
  const [details, setDetails] = useState("");

  async function getDetails() {
    const res = await axios.get(`/case/single/${id}`);
    setDetails(res.data);
  }
  console.log(useCase);
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
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#fff";
  }, []);

  return (
    <>
      <div className="singleCase-superContainer">
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
          </div>
          <div className="singleCase-contentContainer">
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
              <div className="singleCase-contentImages ">
                <a href={useCase} download={"useCaseDoc.zip"}>
                  Download Attachment
                </a>

                <div className="singleCase-contentImagesSecond"></div>
              </div>
            </div>
            <div className="singleCase-solveBtn">
              <button>Solve</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleCase;
