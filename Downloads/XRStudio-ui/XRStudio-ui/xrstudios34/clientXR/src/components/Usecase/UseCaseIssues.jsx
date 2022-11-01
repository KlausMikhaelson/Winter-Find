import React, { useEffect } from "react";
import LeftSidePanel from "../LeftSidePanel/LeftSidePanel";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Navbar from "../Navbar/Navbar";
import "./UseCaseIssues.css";
import personImg from "../../images/person.svg";
import { useSelector } from "react-redux";

const UseCaseIssues = () => {
  const user = useSelector((state) => state.checkAuthReducer);
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#fff";
  }, []);
  function render() {
    if (user.role && user.role === "admin") {
      return (
        <>
          <div className="issues-container">
            <LeftSidePanel />
            <div className="issues-main-container">
              <Navbar pageName={"Use Case"}></Navbar>
              <div className="searchBar-area">
                <div>
                  <input
                    id="search"
                    type="search"
                    pattern=".*\S.*"
                    required
                    placeholder="Search"
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
              <div className="issues-inbox-heading">
                <h2>New</h2>
              </div>
              <div className="issue-box-container">
                <div className="issues-box">
                  <div className="issues-client-details">
                    <div>
                      <img src={personImg} />
                    </div>
                    <div>
                      <p className="issue-client-name">Chris Henderson </p>
                      <p className="issue-client-country">Netherland</p>
                    </div>
                    <div className="issue-time">10:33</div>
                  </div>
                  <div className="issue-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempus, tincidunt donec consectetur vitae cursus nulla nisl.
                    Aenean odio leo pretium turpis nisi gravida nulla eget. Non
                    platea id vitae fringilla ut quis lectus vel nunc. Proin et
                    consectetur ullamcorper risus, justo urna facilisis. In sit
                    fermentum, orci dui, amet interdum. Id ut at viverra commodo
                    feugiat varius a, quisque. Magnis imperdiet mattis amet,
                    neque turpis mattis tortor. Posuere parturient diam enim eu
                    sollicitudin diam. Aliquet non, ut dui morbi.
                  </div>
                  <button className="issue-solve-btn">Solve</button>
                </div>
                <div className="issues-box">
                  <div className="issues-client-details">
                    <div>
                      <img src={personImg} />
                    </div>
                    <div>
                      <p className="issue-client-name">Chris Henderson </p>
                      <p className="issue-client-country">Netherland</p>
                    </div>
                    <div className="issue-time">10:33</div>
                  </div>
                  <div className="issue-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tempus, tincidunt donec consectetur vitae cursus nulla nisl.
                    Aenean odio leo pretium turpis nisi gravida nulla eget. Non
                    platea id vitae fringilla ut quis lectus vel nunc. Proin et
                    consectetur ullamcorper risus, justo urna facilisis. In sit
                    fermentum, orci dui, amet interdum. Id ut at viverra commodo
                    feugiat varius a, quisque. Magnis imperdiet mattis amet,
                    neque turpis mattis tortor. Posuere parturient diam enim eu
                    sollicitudin diam. Aliquet non, ut dui morbi.
                  </div>
                  <button className="issue-solve-btn">Solve</button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <div>Nothing here</div>;
    }
  }

  return render();
};

export default UseCaseIssues;
