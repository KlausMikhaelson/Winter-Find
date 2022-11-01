import React, { useState, useContext } from "react";
import NavBar from "../molecules/NavBar";
// import { storage, generateModelDocument, getModal2Document } from "../Firebase";
// import { AuthContext } from "../../Pages/Auth";
import "./style.css";

const Upload = () => {
  // const [image, setImage] = useState(null);
  // const [filename, setfilename] = useState("");

  // const [coverimage, setcoverimage] = useState(null);
  // const [covername, setcovername] = useState("");

  // const [modelname, setmodelname] = useState("");

  // const { currentUser } = useContext(AuthContext);
  // const [datas, setdatas] = useState([]);

  // const onImageChange = (e) => {
  //   const reader = new FileReader();
  //   let file = e.target.files[0];
  //   setfilename(file["name"]);

  //   if (file) {
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         console.log(file);
  //         setImage(file);
  //       }
  //     };
  //     reader.readAsDataURL(e.target.files[0]);
  //     // if there is no file, set image back to null
  //   } else {
  //     setImage(null);
  //   }
  // };

  // const onImageChange2 = (e) => {
  //   const reader = new FileReader();
  //   let file = e.target.files[0];
  //   setcovername(file["name"]);

  //   if (file) {
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         console.log(file);
  //         setcoverimage(file);
  //       }
  //     };
  //     reader.readAsDataURL(e.target.files[0]);
  //     // if there is no file, set image back to null
  //   } else {
  //     setcoverimage(null);
  //   }
  // };
  // const uploadToFirebase = async () => {
  //   //1.
  //   if (modelname) {
  //     if (image && coverimage) {
  //       //2.
  //       let Objurl = "";
  //       let Imgurl = "";
  //       const storageRef = storage.ref();
  //       //3.
  //       const imageRef = storageRef.child(image.name);
  //       //4.
  //       imageRef.put(image).then(async () => {
  //         await imageRef.getDownloadURL().catch((error) => {
  //           throw error;
  //         });
  //       });
  //       Objurl = await imageRef.getDownloadURL().catch((error) => {
  //         throw error;
  //       });

  //       const storageRef2 = storage.ref();
  //       //3.
  //       const imageRef2 = storageRef.child(coverimage.name);
  //       //4.
  //       await imageRef2.put(coverimage).then(async () => {
  //         await imageRef2.getDownloadURL().catch((error) => {
  //           throw error;
  //         });
  //       });
  //       Imgurl = await imageRef2.getDownloadURL().catch((error) => {
  //         throw error;
  //       });

  //       console.log(Objurl);
  //       console.log(Imgurl);
  //       console.log(modelname);
  //       await generateModelDocument(currentUser, {
  //         Model_Name: modelname,
  //         image_path: Imgurl,
  //         upload_path: Objurl,
  //       });
  //       document.location = "/publicgallery";
  //     } else {
  //       alert("Please upload an image first.");
  //     }
  //   } else {
  //     alert("sorry,You havent uploaded the model/cover image");
  //   }
  // };

  return (
    <>
      <NavBar />
      <div class="container2">
        Model-name:
        <input
          type="text"
          // value={modelname}
          // onChange={(e) => {
          //   setmodelname(e.target.value);
          // }}
        />
        <br />
        <div class="upload-btn-wrapper">
          {/* <button class="btn3">{filename ? filename : ""}</button> */}
          <button class="btn2 ">Upload 3D Model</button>
          <input
            // onChange={(e) => {
            //   onImageChange(e);
            // }}
            type="file"
            name="file"
          />
        </div>
        <br />
        <div class="upload-btn-wrapper">
          {/* <button class="btn3">{covername ? covername : ""}</button> */}
          <button class="btn2 ">{""}Upload Cover Image</button>
          <input
            // onChange={(e) => {
            //   onImageChange2(e);
            // }}
            type="file"
            name="file"
          />
        </div>
        <br />
        <button
          // onClick={uploadToFirebase}
          class="btn2"
        >
          Upload
        </button>
        <br />
        <div>
          <h5>Supported 3D formats:FBX,OBJ,STL</h5>
        </div>
        <div>
          <h5>Note: maximum limit per model 40mb</h5>
        </div>
      </div>
    </>
  );
};

export default Upload;
