import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import NavBar from "../molecules/NavBar";
import { AddInformation, GetGeneralInfo } from "../Redux/actions";
import ClientNavbar from "../Usecase/ClientNavbar";
import "./Information.css";

const ShowInformation = () => {
  const dispatch = useDispatch();
  const id = useParams().id;

  const [user, setUser] = useState({
    name: "",
    email: "",
    designation: "",
    speciality: "",
    interests: "",
    phone: "",
    organization: "",
  });

  useEffect(() => {
    // dispatch(GetGeneralInfo(id));
    checkUserInfo();
  }, []);

  async function checkUserInfo() {
    const res = await axios.get(`/user/${id}/info`);
    console.log(res.data);
    if (
      res.data.name &&
      res.data.email &&
      res.data.designation &&
      res.data.specialty &&
      res.data.interests &&
      res.data.phone &&
      res.data.organization
    ) {
      setUser({
        ...user,
        name: res.data.name,
        email: res.data.email,
        designation: res.data.designation,
        speciality: res.data.specialty,
        interests: res.data.interests,
        phone: res.data.phone,
        organization: res.data.organization,
      });
    }
    // console.log("sfasf");
  }
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#181918";
  }, []);
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="information-heading">
          <h2>General Information</h2>
        </div>

        <div className="information-mainContainer">
          <div className="infoName">
            <label htmlFor="">Name</label>
            <input
              type="text"
              required
              value={user.name}
              // onChange={(e) => setUser({ ...user, name: e.target.value })}
              readOnly
            />
          </div>

          {/* <div className="info-email-phone"> */}
            <div className="infoEmail infoLeft ">
              <label htmlFor="">Email</label>
              <input
                type="text"
                required
                value={user.email}
                //   onChange={(e) => setUser({ ...user, email: e.target.value })}
                readOnly
              />
            </div>
            <div className="infoPhone infoRight ">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                required
                value={user.phone}
                //   onChange={(e) => setUser({ ...user, phone: e.target.value })}
                readOnly
              />
            </div>
          {/* </div> */}

          {/* <div className="info-desig-organization"> */}
            <div className="infoDesig infoLeft">
              <label htmlFor="">Designation</label>
              <input
                type="text"
                required
                value={user.designation}
                //   onChange={(e) =>
                //     setUser({ ...user, designation: e.target.value })
                //   }
                readOnly
              />
            </div>
            <div className="infoOrganization infoRight ">
              <label htmlFor="">Organization</label>
              <input
                type="text"
                required
                value={user.organization}
                //   onChange={(e) =>
                //     setUser({ ...user, organization: e.target.value })
                //   }
                readOnly
              />
            </div>
          {/* </div> */}

          <div className="infoSpeciality ">
            <label htmlFor="">Speciality </label>
            <input
              type="text"
              required
              value={user.speciality}
              // onChange={(e) => setUser({ ...user, speciality: e.target.value })}
              readOnly
            />
          </div>

          <div className="infoInterest ">
            <label htmlFor="">Interest </label>
            <input
              type="text"
              required
              value={user.interests}
              // onChange={(e) => setUser({ ...user, interests: e.target.value })}
              readOnly
            />
          </div>

          {/* <div className="info-submitBtn">
          <button onClick={handleAddInfo}>Submit</button>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default ShowInformation;
