import React from "react";
import logo from "../assets/xyz-logo.png"
const Navbar = () => {
  return (
    <><div className="upper_bg_border"></div>
    <nav class="navbar navbar-expand-lg py-3">
  <div class="container">
    <a class="navbar-brand" href="#">
        <img src={logo}></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link navbar_navlinks me-2 px-3" aria-current="page" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbar_navlinks px-3" href="#">Book Now</a>
        </li>
      </ul>
        <div>
          <h4>(702)-850-1529</h4>
        </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
