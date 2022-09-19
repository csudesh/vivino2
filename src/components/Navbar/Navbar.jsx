import React from "react";
import "./Navbar.css";
import vivinoLogo from "../../assets/vivino-logo.png";
import user from "../../assets/user.png";
import shoppingCart from "../../assets/shopping-cart.png";
import offerIcon from "../../assets/offer.png";

export default function Navbar() {
  return (
    <div id="navContainer">
      <nav class="navbar navbar-expand-lg">
        <div className="container">
          <a class="navbar-brand" href="#">
            <img src={vivinoLogo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search any wine"
                aria-label="Search"
              />
            </form>
            <div className="clearfx"></div>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ship to
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Australia
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Language
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    English
                  </a>
                </div>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <img className="navLinkImg" src={user} alt="" />
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <img className="navLinkImg" src={shoppingCart} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container" id="navBottomContainer">
        <div style={{ display: "inline-block" }}>
          <div id="navIconDiv">
            <img src={offerIcon} alt="" />
          </div>
          <div id="navIconContent">
            <p>Wines</p>
          </div>
        </div>
        <div style={{ display: "inline-block" }}>
          <div id="navIconDiv">
            <img src={offerIcon} alt="" />
          </div>
          <div id="navIconContent">
            <p>Offers</p>
          </div>
        </div>
        <div style={{ display: "inline-block" }}>
          <div id="navIconDiv">
            <img src={offerIcon} alt="" />
          </div>
          <div id="navIconContent">
            <p>Pairings</p>
          </div>
        </div>
        <div style={{ display: "inline-block" }}>
          <div id="navIconDiv">
            <img src={offerIcon} alt="" />
          </div>
          <div id="navIconContent">
            <p>Grapes</p>
          </div>
        </div>
        <div style={{ display: "inline-block" }}>
          <div id="navIconDiv">
            <img src={offerIcon} alt="" />
          </div>
          <div id="navIconContent">
            <p>Regions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
