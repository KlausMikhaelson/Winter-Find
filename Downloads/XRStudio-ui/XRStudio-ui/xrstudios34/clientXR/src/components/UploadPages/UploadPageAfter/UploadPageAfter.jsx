import React from 'react'
import "./UploadPageAfter.css"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import uploadBeforeBackground from "../../ProjectImages/uploadBgc.png"

const UploadPageAfter = () => {
  return (
    <div className="uploadPageAfter-superContainer">
      <span className="uploadPage-closeButton">
        <CloseOutlinedIcon />
      </span>
      <div className="uploadHeading">
          <h1>Upload a new model</h1>
        </div>
      <div className="uploadPageAfter-mainContainer">
        
        <div className="uploadContent">
          <div className="uploadPageAfter-loadingStatus">

            {/* <img src={uploadBeforeBackground} alt="" /> */}
          </div>
          <div className="uploadContent-subHeading">
            <div>
              <h1 className="topHeading" >Drag & Drop or  <span>browse</span> </h1>
            </div>
          </div>
        
        </div>
        <div className="uploadContent-buttonSection">
            <div><button>Cancel</button></div>
            <div><button>Upload Files</button></div>
            
          </div>
          
      </div>
    </div>
  )
}

export default UploadPageAfter