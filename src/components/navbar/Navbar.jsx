import React from 'react';
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import logo__small from "../../assets/logo/logo.png";
import profile from "../../assets/profile/user.png";


const Navbar = () => {
  return (
    <>
      <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a class="navbar-brand brand-logo mr-5" href="/">
            <img src={logo} class="mr-2" alt="logo" />
          </a>
          <a class="navbar-brand brand-logo-mini" href={"/"}>
            <img src={logo__small} alt="logo" />
          </a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button
            class="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span class="icon-menu"></span>
          </button>
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item nav-profile dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#!"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img src={profile} className="image-fluid" alt="profile" />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <a href="#!" class="dropdown-item">
                  <i class="ti-settings text-primary"></i>
                  Change Password
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ti-power-off text-primary"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
          <button
            class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span class="icon-menu"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar
