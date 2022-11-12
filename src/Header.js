import React, { useEffect } from "react";
import "./Header.css";
import "./FontSize.css";
import { Link } from "react-router-dom";
import { auth, logout } from "./firebase";

function Header() {
  const curUser = auth.currentUser;
  useEffect(() => {
    if (curUser) {

    }
    else {

    }
  });
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <h3>
            <Link className="logo_title" to="/">NearCart</Link>
          </h3>
        </div>
        <div className="header__searchBar">
          <input type="search" placeholder="Search product/shop" />
          <img src="/images/header/search.svg" alt="" />
        </div>

        <div className="header__menu">
          <Link onClick={() => {
            if (curUser) return logout();
          }} to={(curUser) ? "/" : "/login"} className="login__link">
            <h5>
              {(curUser) ? "Logout" : "Login"}
            </h5>
          </Link>
          <Link to='/'></Link>
          <div className="myCart">
            <img
              src="/images/header/mycart.svg"
              className="myCart__image"
              alt=""
            />
            <h6 className="myCart__number">23</h6>
          </div>
          <div className="hamburger">
            <div class="hamburger_lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
