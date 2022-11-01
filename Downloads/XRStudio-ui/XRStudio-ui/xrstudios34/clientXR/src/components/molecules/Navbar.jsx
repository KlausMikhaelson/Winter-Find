import React, { useContext, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Logo from "../../img/xrstudio.png";
// import { AuthContext } from "../../Pages/Auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import Contact from "./Contactus";

import xrLogo from "../../images/dashBoardLogo-image@2x.png";
import { GetCurrentUserDetails, SignOut } from "../Redux/actions";
import "./ClientNavbar.css";
// import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state) => state.checkAuthReducer);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCurrentUserDetails());
  }, []);
  const navigate = useNavigate();

  function renderAuth() {
    if (user?.role === "admin" || user?.role === "user") {
      return (
        <a
          className="linked-client"
          href="/login"
          onClick={() => dispatch(SignOut())}
        >
          Logout
        </a>
      );
    } else {
      return (
        <Link className="linked-client" to="/login">
          Login
        </Link>
      );
    }
  }

  function adminRoute() {
    if (user?.role && user?.role === "admin") {
      return (
        <>
          <div>
            <Link className="linked-client" to="/admin">
              Admin
            </Link>
          </div>
          <div>
            <Link className="linked-client" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="linked-client" to="/user/publicgallery">
              Products
            </Link>
          </div>
          <div>
            <Link
              className="linked-client"
              to={`/user/${user._id && user._id}/custom-case`}
            >
              Use Cases
            </Link>
          </div>
          <div>
            <Link className="linked-client" to="/aboutus">
              About us
            </Link>
          </div>
        </>
      );
    } else if (user?.role && user?.role === "user") {
      return (
        <>
          <div>
            <Link className="linked-client" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="linked-client" to="/user/publicgallery">
              Products
            </Link>
          </div>
          <div>
            <Link
              className="linked-client"
              to={`/user/${user._id && user._id}/custom-case`}
            >
              Use Cases
            </Link>
          </div>
          <div>
            <Link className="linked-client" to="/aboutus">
              About us
            </Link>
          </div>
        </>
      );
    }
  }

  return (
    <div className="client-nav-container">
      <div className="client-nav-left">
        <img src={xrLogo} alt="" />
      </div>
      <div className="client-nav-right">
        {adminRoute()}

        <div>{renderAuth()}</div>
      </div>
    </div>
  );
};

export default NavBar;
