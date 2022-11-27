import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


class Add extends Component {
  render() {
    return (
      <>
      <form>
        <div className="layout">
          
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2"/>
        </div>
        <div className="mb-3">
          <label for="mobinenumber" className="form-label">Mobile Number</label>
          <input type="number" className="form-control" id="mobilenum"/>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupFile01">Upload file</label>
          <input type="file" className="form-control" id="inputGroupFile01" />
        </div>
        <div className="input-group mb-3">
          <button type="button" class="btn btn-outline-secondary">Action</button>
          <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">India</a></li>
              <li><a className="dropdown-item" href="#">Canada</a></li>
              <li><a class="dropdown-item" href="#">United States</a></li>
              <li><a className="dropdown-item" href="#"></a>Africa</li>
            </ul>
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
</div>

        {/* <div id="map-container-google-1" className="z-depth-1-half map-container" style="height: 500px">
          <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
          style="border:0" allowfullscreen></iframe>
        </div> */}
        <div className="mb-3">
          <label for="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price"/>
        </div>
        <div className="mb-3">
          <label for="Dimension" className="form-label">Dimension</label>
          <input type="number" className="form-control" id="Dimension"/>
        </div>
                
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="submit" className="btn btn-primary">Reset</button>
        </div>
      </form>

    </>
    );
  }
}

export default Add;