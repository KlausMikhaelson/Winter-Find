import React, { useEffect } from "react";
import NavBar from "../components/molecules/NavBar";
import Footer from "./molecules/Footer";
import PhotoWall from "../components/PhotoWall";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUserDetails } from "./Redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  head: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "150px 0px",
  },
  para: {
    marginTop: "10px",
    width: "50%",
    textAlign: "center",
  },
  photoWall: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "20px 40px",
  },
  item: {
    margin: "10px",
    padding: "3px",
    paddingBottom: "20px",
  },
  heading: {
    fontSize: "90px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
    },
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    fontSize: "20px",
    borderWidth: "3px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      padding: "8px 15px",
    },
  },
  connect: {
    display: "flex",
    justifyContent: "center",
    margin: "40px 50px",
    [theme.breakpoints.down("xs")]: {
      margin: "10px 20px",
    },
  },
  request: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      height: "150px",
    },
  },
  requesth3: {
    fontSize: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  requestBtn: {
    padding: "15px 20px",
    fontSize: "20px",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      padding: "10px 15px",
      marginTop: "15px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.checkAuthReducer);
  console.log(user);

  useEffect(() => {
    dispatch(GetCurrentUserDetails());
  }, []);

  return (
    <>
      <NavBar />

      <div className={classes.root}>
        <div className={classes.head}>
          <h1 className={classes.heading}>XR Studio</h1>

          <div className={classes.para}>
            <p>Visualize and explore unlimited 3D models.</p>
          </div>
        </div>

        <section className={classes.connect}>
          <div className={classes.request}>
            <h3 className={classes.requesth3}>Domains that we focus</h3>
            <h3 className={classes.requesth3}></h3>
            <button className={classes.requestBtn}>Healthcare</button>
            <button className={classes.requestBtn}>Mechanical</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
