import React, { Component } from "react";
import './Home.css'
import {Link} from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="container-1">
          <h1 className="header">Looking for a parking spot when you're in a new town ?</h1>
          <p className="description">We will help you to get connected with those who already have it covered for you at a very low cost than what others charge you !</p>
          </div>
          <div className="container-2">
            <h2 className="header">or</h2>
            <h1 className="header">Are you looking for earning some cash as a side hustle and you have a parking slot free ?</h1>
            <p className="description">Add your parking slot as a service on our platform and get paid ! you can rent your parking slot hourly, daily or monthly !</p>
          </div>
          <div className="Login-btn">
          <button type="submit" className="btn"><a href="/login">Register yourself</a></button>
          </div>
          
        </div>
      </>
    );
  }
}

export default Home;
