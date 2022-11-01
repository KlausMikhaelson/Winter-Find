import React, { useCallback, useState, useContext } from "react";
import NavBar from "../../components/molecules/NavBar";
import {
  Link,
  NavLink,
  Redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../molecules/Footer";
import { SignIn } from "../Redux/actions";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    if (!user.email) return alert("Enter Email");
    if (!user.password) return alert("Enter Password");
    let gotoProduct = false;
    e.preventDefault();
    if (location.pathname === "/login/view") {
      gotoProduct = true;
    } else {
      gotoProduct = false;
    }
    dispatch(SignIn(user, navigate, gotoProduct));
  };

  return (
    <>
      <NavBar />

      <div className="sessionBody">
        <div className="sessionWrapper">
          <div className="headline">
            <h1>Login</h1>
          </div>

          <form
          // class={forgotpasswd ? "hidden" : "sessionForm"}
          // onSubmit={handleLogin}
          >
            <div className="signin">
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
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <div className="forget-password">
                <div
                  style={{ color: "#F27025" }}
                  // onClick={() => {
                  //   setForgotpasswd(!forgotpasswd);
                  // }}
                >
                  Forget password?
                </div>
              </div>

              <button
                to="/Home"
                onClick={handleSignIn}
                type="submit"
                className="sessionFormBtn loginBtn"
              >
                LOGIN
              </button>
              <div className="account-exist" style={{ color: "#fff" }}>
                Create New a account?{" "}
                <NavLink style={{ color: "#F27025" }} to="/signup">
                  Signup
                </NavLink>
              </div>
            </div>
          </form>
          <form
            className="sessionForm1"
            // class={forgotpasswd ? "sessionForm1" : "hidden"}
            // onSubmit={forgotPassword}
          >
            {/* <div
            // onClick={() => {
            //   setForgotpasswd(!forgotpasswd);
            // }}
            >
              X
            </div> */}
            {/* <div className="sessionForm-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                // onChange={(e) => {
                //   setResetpassword(e.target.value);
                // }}
              />
            </div>
            <input type="submit" /> */}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

// export default withRouter(LoginPage);
export default LoginPage;
