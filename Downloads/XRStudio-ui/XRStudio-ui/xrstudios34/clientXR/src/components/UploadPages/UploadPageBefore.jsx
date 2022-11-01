import React, { useState } from "react";
import "./UploadPageBefore.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import uploadBeforeBackground from "../ProjectImages/uploadBgc.png";
import { Link } from "react-router-dom";
import Progressbar from "./Progressbar";

const UploadPageBefore = () => {
  const [modelDropped, setModel] = useState({
    model: "",
  });

  const handleDragOver = (e) => {
    // console.log("drag");
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    console.log("drop");
    let data = e.dataTransfer.files[0];
    console.log(data);
    setModel({ model: data });
    setTimeout(() => {
      document.querySelector(".upload-file-name").innerHTML = data.name;
    }, 1000);
  };

  return (
    <div className="uploadPageBefore-superContainer">
      <span className="uploadPage-closeButton">
        <Link className="linkedRoute" to="/">
          <CloseOutlinedIcon style={{ color: "black" }} />
        </Link>
      </span>
      <div className="uploadHeading">
        <h1>Upload a new model</h1>
      </div>
      <div className="uploadPageBefore-mainContainer">
        {modelDropped.model === "" ? (
          <>
            {" "}
            <div
              className="uploadContent"
              onDrop={(e) => handleDrop(e)}
              onDragOver={handleDragOver}
            >
              <div className="uploadPageBefore-backgroundImage drag-area">
                <img src={uploadBeforeBackground} alt="" />
              </div>
              <div className="uploadContent-subHeading">
                <div>
                  <h1 className="topHeading">
                    Drag & Drop or <span>browse</span>{" "}
                  </h1>
                </div>
                <div>
                  <h1 className="bottomHeading">
                    {" "}
                    <span> We support</span>FBX, OBJ, STL
                  </h1>
                </div>
              </div>
            </div>
            <div className="uploadContent-buttonSection">
              <Link className="linkedRoute" to="/">
                <button>Cancel</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="uploadContent">
              <div className="uploadPageAfter-loadingStatus">
                <h1 className="upload-file-name"></h1>
                <div>
                  <Progressbar done={100} />
                </div>
                {/* <img src={uploadBeforeBackground} alt="" /> */}
              </div>
              <div className="uploadContent-subHeading">
                <div>
                  <h1 className="topHeading">
                    Drag & Drop or <span>browse</span>{" "}
                  </h1>
                </div>
              </div>
            </div>
            <div className="uploadContent-buttonSection">
              <div>
                <Link to="/">
                  <button>Cancel</button>
                </Link>
              </div>
              <div>
                <Link to="/editpage">
                  <button>Upload Files</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadPageBefore;
