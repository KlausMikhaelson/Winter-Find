import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { AddInformation, GetGeneralInfo } from "../Redux/actions";
import ClientNavbar from "../Usecase/ClientNavbar";
import "./Information.css";
const Information = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#181918";
  }, []);
  const [user, setUser] = useState({
    name: "",
    email: "",
    designation: "",
    speciality: "",
    interests: "",
    phone: "",
    organization: "",
  });
  const navigate = useNavigate();

  const handleAddInfo = () => {
    if (
      user.name &&
      user.email &&
      user.designation &&
      user.speciality &&
      user.interests &&
      user.phone &&
      user.organization
    ) {
      let info = {
        name: user.name,
        email: user.email,
        designation: user.designation,
        specialty: user.speciality,
        interests: user.interests,
        phone: user.phone,
        organization: user.organization,
      };
      dispatch(AddInformation(info, id));
      navigate("/");
    }
  };

  const location = useLocation();

  // const info = useSelector((state) => state.caseReducer);
  // console.log(info);
  useEffect(() => {
    // dispatch(GetGeneralInfo(id));
    checkUserInfo();
  }, []);

  async function checkUserInfo() {
    const res = await axios.get(`/user/${id}/info`);
    if (
      res.data.name &&
      res.data.email &&
      res.data.designation &&
      res.data.specialty &&
      res.data.interests &&
      res.data.phone &&
      res.data.organization
    ) {
      navigate("/");
    }
    console.log("sfasf");
  }

  return (
    <>
      <ClientNavbar />
      <div className="information-heading">
        <h2>General Information</h2>
      </div>

      <div className="information-mainContainer">
        <div className="infoName">
          <label htmlFor="">Name</label>
          <input
            type="text"
            required
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>

        {/* <div className="info-email-phone"> */}
        <div className="infoEmail  ">
          <label htmlFor="">Email</label>
          <input
            type="text"
            required
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="infoPhone  ">
          <label htmlFor="">Phone</label>
          <input
            type="text"
            required
            placeholder="Contact Number"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>
        {/* </div> */}

        {/* <div className="info-desig-organization"> */}
        <div className="infoDesig ">
          <label htmlFor="">Designation</label>
          <input
            type="text"
            required
            placeholder="Designation"
            value={user.designation}
            onChange={(e) => setUser({ ...user, designation: e.target.value })}
          />
        </div>
        <div className="infoOrganization  ">
          <label htmlFor="">Organization</label>
          <input
            type="text"
            required
            placeholder="Organization"
            value={user.organization}
            onChange={(e) => setUser({ ...user, organization: e.target.value })}
          />
        </div>
        {/* </div> */}

        <div className="infoSpeciality ">
          <label htmlFor="">Speciality </label>
          <input
            type="text"
            required
            placeholder="Speciality"
            value={user.speciality}
            onChange={(e) => setUser({ ...user, speciality: e.target.value })}
          />
        </div>

        <div className="infoInterest ">
          <label htmlFor="">Interest </label>
          <input
            type="text"
            required
            placeholder="Interest"
            value={user.interests}
            onChange={(e) => setUser({ ...user, interests: e.target.value })}
          />
        </div>

        <div className="info-submitBtn ">
          <button onClick={handleAddInfo}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Information;
