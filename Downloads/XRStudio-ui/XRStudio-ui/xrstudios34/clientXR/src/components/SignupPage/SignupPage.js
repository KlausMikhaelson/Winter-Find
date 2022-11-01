import React, { useContext, useCallback, useState } from "react";
import NavBar from "../../components/molecules/NavBar";
import { Link, NavLink, Redirect, useNavigate } from "react-router-dom";
import Footer from "../molecules/Footer";
import { useDispatch } from "react-redux";
import "./Signup.css";
// import { auth, generateUserDocument } from "../Firebase";
// import { AuthContext } from "../Auth";
import { SignUp } from "../Redux/actions";
import validator from "email-validator";

const SignupPage = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (user.userName && user.email && user.password && user.confirmPassword) {
      if (user.password.length > 7 && user.confirmPassword.length > 7) {
        if (user.password === user.confirmPassword) {
          if (validator.validate(user.email)) dispatch(SignUp(user, navigate));
        }
      } else {
        alert("passwords dont match");
      }
    }
  };
  

  return (
    <>
      <NavBar />

      <div className="sessionBody">
        <div className="sessionWrapper">
          <div className="headline">
            <h1>Register</h1>
          </div>

          <form
            className="sessionForm"
            // onSubmit={handleLogin}
          >
            <div className="signup">
              <div className="sessionForm-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  required
                  value={user.userName}
                  onChange={(e) =>
                    setUser({ ...user, userName: e.target.value })
                  }
                />
              </div>

              <div className="sessionForm-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="sessionForm-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <div className="sessionForm-group">
                <input
                  type="password"
                  name="cfmpwd"
                  placeholder="Confirm Password"
                  required
                  value={user.confirmPassword}
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="sessionFormBtn"
                onClick={handleSignUp}
              >
                SIGN UP
              </button>

              <div className="account-exist" style={{ color: "#fff" }}>
                Already have an account?{" "}
                <NavLink to="/login" style={{ color: "#F27025" }}>
                  {" "}
                  Login
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignupPage;
