import React, { useEffect, useState } from "react";
import ClientNavbar from "./ClientNavbar";
// import userProfileLogo from "../ProjectImages/userprofileLogo.jpg";
import userProfileLogo from "../../img/singleCaseuserImg.jpg";
import "./CustomCase.css";
import { Link, useParams } from "react-router-dom";
import NavBar from "../molecules/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCasebyId,
  GetCollab,
  GetCurrentUserDetails,
  GetSingleCase,
  GetVR,
  GetMedical,
  GetAR,
  GetCustom,
  GetMR,
  GetOthers,
  deleteCase
} from "../Redux/actions";
import setUseCase from "./CreateCase"
import useCase from "./CreateCase"
import Loader from "../Loader/Loader";
import Footer from "../molecules/Footer";
import { Cases, Category } from "@mui/icons-material";
import axios, { Axios } from "axios";

// const handleFiltersubmit = (e) => {
//   console.log(e.target.value)
// }

const handleSelect = (e) => {
  setUseCase({ ...useCase, category: e.target.value });
  console.log(e.target.value)
};

// function onFilterSelected(filterValue) {

// } 

const CustomCase = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const deleteCases = (id) => {
    dispatch(GetAllCasebyId());
    dispatch(deleteCase(id));
  }
  console.log(id);
  useEffect(() => {
    // console.log(id);
    dispatch(GetAllCasebyId(id));
    dispatch(GetCurrentUserDetails());
    dispatch(GetCollab());
    dispatch(GetVR())
    dispatch(GetMedical());
    dispatch(GetAR())
    dispatch(GetMR())
    dispatch(GetCustom())
    dispatch(GetCollab())
    dispatch(GetOthers())
  }, []);
  const Medical = useSelector((state) => state.MedicalReducer)
  console.log(Medical)
  const VR = useSelector((state) => state.VRReducer);
  console.log(VR)
  const collab = useSelector((state) => state.collabReducer);
  console.log(collab);
  const user = useSelector((state) => state.checkAuthReducer);
  const cases = useSelector((state) => state.caseReducer);
  const AR = useSelector((state) => state.ARReducer);
  const MR = useSelector((state) => state.MRReducer);
  const custom_call = useSelector((state) => state.CustomcallReducer)
  const other = useSelector((state) => state.OthersReducer)
  console.log(cases);

  const [Show, setShow] = useState(false)
  const [Show2, setShow2] = useState(false)
  const [Show3, setShow3] = useState(false)
  const [Show4, setShow4] = useState(false)
  const [Show5, setShow5] = useState(false)
  const [Show6, setShow6] = useState(false)
  const [Show8, setShow8] = useState(false)
  const [Show9, setShow9] = useState(false)




  return (
    <>
      {/* <div className="container"> */}
      <NavBar />
      <div className="custom-case-top">
        {/* <span className="category">
          <select name="" id=""
            className="select-category"
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
        </span> */}
        <span className="create-case">
          <Link to="/user/create-case">
            <button>Create Cases</button>
          </Link>
        </span>
      </div>
      <div className="big-card">

        <div className="custom-case-top">
          <span className="all-cases" onClick={() => setShow(!Show)}>Your Use Cases</span>
        </div>
        <div className="custom-case-mid">
          {Show ?
            <div>
              {cases?.length ? (
                cases.map((userCase) => (
                  <>
                    {" "}
                    <div className="custom-case-today">
                      <div className="custom-case-table">
                        {/* <h2>Today</h2> */}
                        <div>
                          <img src={userProfileLogo} alt="" />
                          <p>{user.userName}</p>
                        </div>
                        <p>{userCase.caseRequirements?.slice(0, 30)}</p>
                        <p style={{ fontWeight: "bold" }}>Update</p>
                        <p className="delete-btn" style={{ fontWeight: "bold" }} onClick={(e) => deleteCases(userCase._id)}>Delete</p>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <div className="no-case">No cases Found ! Create a new Case </div>
              )}
            </div>
            : null}
        </div>
      </div>
      <div className="big-card">

        <div className="custom-case-top">
          <span className="all-cases" onClick={() => setShow2(!Show2)}>Medical use cases</span>
        </div>
        <div className="custom-case-mid">
          {Show2 ?
            <div>
              {Medical?.length ? (
                // collab.filter()
                Medical.map((userCase) => (
                  <>
                    {" "}
                    <div className="custom-case-today">
                      <div className="custom-case-table">
                        {/* <h2>Today</h2> */}
                        <div>
                          <img src={userProfileLogo} alt="" />
                          <p>{userCase.userName}</p>
                        </div>

                        <p>{userCase.caseRequirements?.slice(0, 30)}</p>

                        <Link
                          to={`/explore/${userCase._id}`}
                          style={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "#fff",
                          }}
                        >
                          <p
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            View
                          </p>
                        </Link>
                        {/* <p style={{ fontWeight: "bold" }}>Delete</p> */}
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <div className="no-case">No cases Found ! </div>
              )}
            </div>
            : null}
        </div>
      </div>
      
      <div className="big-card">

        <div className="custom-case-top">
          <span className="all-cases" onClick={() => setShow9(!Show9)}>AR use cases</span>
        </div>
        <div className="custom-case-mid">
          {Show9 ?
            <div>
              {AR?.length ? (
                // collab.filter()
                AR.map((userCase) => (
                  <>
                    {" "}
                    <div className="custom-case-today">
                      <div className="custom-case-table">
                        {/* <h2>Today</h2> */}
                        <div>
                          <img src={userProfileLogo} alt="" />
                          <p>{userCase.userName}</p>
                        </div>

                        <p>{userCase.caseRequirements?.slice(0, 30)}</p>

                        <Link
                          to={`/explore/${userCase._id}`}
                          style={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "#fff",
                          }}
                        >
                          <p
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            View
                          </p>
                        </Link>
                        {/* <p style={{ fontWeight: "bold" }}>Delete</p> */}
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <div className="no-case">No cases Found ! </div>
              )}
            </div>
            : null}
        </div>
      </div>

      <div className="big-card">

        <div className="custom-case-top">
          <span className="all-cases" onClick={() => setShow3(!Show3)}>Virtual Reality use cases</span>
        </div>
        <div className="custom-case-mid">
          {Show3 ?
            <div>
              {VR?.length ? (
                // collab.filter()
                VR.map((userCase) => (
                  <>
                    {" "}
                    <div className="custom-case-today">
                      <div className="custom-case-table">
                        {/* <h2>Today</h2> */}
                        <div>
                          <img src={userProfileLogo} alt="" />
                          <p>{userCase.userName}</p>
                        </div>

                        <p>{userCase.caseRequirements?.slice(0, 30)}</p>

                        <Link
                          to={`/explore/${userCase._id}`}
                          style={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "#fff",
                          }}
                        >
                          <p
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            View
                          </p>
                        </Link>
                        {/* <p style={{ fontWeight: "bold" }}>Delete</p> */}
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <div className="no-case">No cases Found ! </div>
              )}
            </div>
            : null}
        </div>
      </div>

      <div className="big-card">

        <div className="custom-case-top">
          <span className="all-cases" onClick={() => setShow4(!Show4)}>Collab use cases</span>
        </div>
        <div className="custom-case-mid">
          {Show4 ?
            <div>
              {collab?.length ? (
                // collab.filter()
                collab.map((userCase) => (
                  <>
                    {" "}
                    <div className="custom-case-today">
                      <div className="custom-case-table">
                        {/* <h2>Today</h2> */}
                        <div>
                          <img src={userProfileLogo} alt="" />
                          <p>{userCase.userName}</p>
                        </div>

                        <p>{userCase.caseRequirements?.slice(0, 30)}</p>

                        <Link
                          to={`/explore/${userCase._id}`}
                          style={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "#fff",
                          }}
                        >
                          <p
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            View
                          </p>
                        </Link>
                        {/* <p style={{ fontWeight: "bold" }}>Delete</p> */}
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <div className="no-case">No cases Found ! </div>
              )}
            </div>
            : null}
        </div>
      </div>

      <div className="big-card">

<div className="custom-case-top">
  <span className="all-cases" onClick={() => setShow5(!Show5)}>MR (Education/Medical) use cases</span>
</div>
<div className="custom-case-mid">
  {Show5 ?
    <div>
      {MR?.length ? (
        // collab.filter()
        MR.map((userCase) => (
          <>
            {" "}
            <div className="custom-case-today">
              <div className="custom-case-table">
                {/* <h2>Today</h2> */}
                <div>
                  <img src={userProfileLogo} alt="" />
                  <p>{userCase.userName}</p>
                </div>

                <p>{userCase.caseRequirements?.slice(0, 30)}</p>

                <Link
                  to={`/explore/${userCase._id}`}
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    View
                  </p>
                </Link>
                {/* <p style={{ fontWeight: "bold" }}>Delete</p> */}
              </div>
            </div>
          </>
        ))
      ) : (
        <div className="no-case">No cases Found ! </div>
      )}
    </div>
    : null}
</div>
</div>

<div className="big-card">

<div className="custom-case-top">
  <span className="all-cases" onClick={() => setShow6(!Show6)}>Custom call use cases</span>
</div>
<div className="custom-case-mid">
  {Show6 ?
    <div>
      {custom_call?.length ? (
        // collab.filter()
        custom_call.map((userCase) => (
          <>
            {" "}
            <div className="custom-case-today">
              <div className="custom-case-table">
                {/* <h2>Today</h2> */}
                <div>
                  <img src={userProfileLogo} alt="" />
                  <p>{userCase.userName}</p>
                </div>

                <p>{userCase.caseRequirements?.slice(0, 30)}</p>

                <Link
                  to={`/explore/${userCase._id}`}
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    View
                  </p>
                </Link>
                {/* <p style={{ fontWeight: "bold" }}>Delete</p> */}
              </div>
            </div>
          </>
        ))
      ) : (
        <div className="no-case">No cases Found ! </div>
      )}
    </div>
    : null}
</div>
</div>

<div className="big-card">

<div className="custom-case-top">
  <span className="all-cases" onClick={() => setShow8(!Show8)}>Others(Generic Industries)</span>
</div>
<div className="custom-case-mid">
  {Show8 ?
    <div>
      {other?.length ? (
        // collab.filter()
        other.map((userCase) => (
          <>
            {" "}
            <div className="custom-case-today">
              <div className="custom-case-table">
                {/* <h2>Today</h2> */}
                <div>
                  <img src={userProfileLogo} alt="" />
                  <p>{userCase.userName}</p>
                </div>

                <p>{userCase.caseRequirements?.slice(0, 30)}</p>

                <Link
                  to={`/explore/${userCase._id}`}
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    View
                  </p>
                </Link>
                {/* <p style={{ fontWeight: "bold" }}>Delete</p> */}
              </div>
            </div>
          </>
        ))
      ) : (
        <div className="no-case">No cases Found ! </div>
      )}
    </div>
    : null}
</div>
</div>



      <Footer></Footer>
      {/* </div> */}
    </>
  );
};

export default CustomCase;
