import React, { useCallback, useState, useEffect, useContext } from "react";
import NavBar from "../../components/molecules/NavBar";
import { withRouter, Link, NavLink, Redirect } from "react-router-dom";
import Footer from "../molecules/Footer";


const ProfilePage = ({ history }) => {
  //   const { currentUser } = useContext(AuthContext);

  //   const [username, setusername] = useState('');
  //   const [email, setemail] = useState('');

  //   useEffect(async () => {
  //       const data = await getUserData(currentUser.uid);
  //       console.log(data);
  //       setusername(data['username']);
  //       setemail(data['email']);
  //   }, []);

  //   if (!currentUser) {
  //     return <Redirect to="/" />;
  //   }

  return (
    <>
      <NavBar />

      <div className="sessionBody">
        <div className="sessionWrapper">
          {/* <div className="headline">
             <h1>Welcome. We exist to show your art to world.</h1>
         </div> */}

          <form className="">
            <div className="profile">
              <div className="user-image">
                <img
                  src="https://airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg"
                  alt="Girl in a jacket"
                  height="150"
                  className="mx-auto"
                />
              </div>
              <div className="sessionForm-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                //   value={email}
                  onChange={() => {}}
                  placeholder="Email"
                  required=""
                />
              </div>

              <div className="sessionForm-group">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                //   value={username}
                  onChange={() => {}}
                  placeholder="Username"
                  required=""
                />
              </div>

              <div className="forget-password">
                <a href="#"></a>
              </div>

              <button type="submit" className="sessionFormBtn">
                EDIT CHANGES
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

// export default withRouter(ProfilePage);
export default ProfilePage;
