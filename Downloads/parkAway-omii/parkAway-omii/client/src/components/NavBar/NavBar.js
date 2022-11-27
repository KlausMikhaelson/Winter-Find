import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">parkAway</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/pricing">Pricing/Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/addList">Add your spot</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </>      
    )
  }
}

export default NavBar;
