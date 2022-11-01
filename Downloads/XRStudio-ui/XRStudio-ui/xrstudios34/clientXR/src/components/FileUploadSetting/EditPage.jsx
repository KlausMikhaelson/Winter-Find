import React from "react";
import "./EditPage.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import editPageModel from "../ProjectImages/editPageModel.jpg";
import { Link } from "react-router-dom";

const EditPage = () => {
  return (
    <div className="editPage-mainContainer">
      <div className="editPage-headerSection">
        <h1>Edit Model</h1>
      </div>

      {/* Content Section */}

      <div className="editPage-contentSection">
        <div className="editPage-contentSection-subContainer">
          <div className="contentSection-leftSide-container">
            <div className="contentSection-leftSide-headerSection">
              <img src={editPageModel} alt="" />
            </div>
            <div className="contentSection-leftSide-middleSection">
              <div className="middleSection-items">
                <div className="uploadStatus">
                  <div className="uploadStatus-leftSide">
                    <div>
                      <CheckCircleIcon style={{ color: "#17ACEC" }} />
                    </div>
                    <div className="mainText">UPLOAD</div>
                  </div>
                  <div className="rightMainText">Finished</div>
                </div>
                <div className="processedStatus">
                  <div className="processedStatus-leftSide">
                    <div>
                      <CheckCircleIcon style={{ color: "#17ACEC" }} />
                    </div>
                    <div className="mainText">PROCESSED</div>
                  </div>
                  <div className="rightMainText">Finished</div>
                </div>
                <div className="readyStatus">
                  <div>
                    <CheckCircleIcon style={{ color: "#17ACEC" }} />
                  </div>
                  <div className="mainText">READY TO PUBLISH</div>
                </div>
              </div>
            </div>
            <div className="contentSection-leftSide-bottomSection">
              <div className="bottomSection-content">
                <div className="bottomSection-editButton">
                  <button>EDIT 3D SETTINGS</button>
                </div>
                <div className="reuploadBtton">
                  {/* <div className="reuploadIcon"> <FileUploadOutlinedIcon/> </div> */}
                  <button>
                    <FileUploadOutlinedIcon
                      style={{ marginRight: "0.2rem", fontSize: "15px" }}
                    />
                    REUPLOAD
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="contentSection-rightSide-container">
            <div>
              <label className="rightSide-content-heading">Title</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label className="rightSide-content-heading">Description</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <label className="rightSide-content-heading">Categories</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label className="rightSide-content-heading">Tags</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
      </div>

      <div className="editPage-footerSection">
        <div className="editPage-deleteButton">
          <Link to="/uploadpage-before">
            <button>Delete Model</button>
          </Link>
        </div>
        <div className="editPage-publishButton">
          <button>Publish</button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
