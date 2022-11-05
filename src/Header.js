import React from "react";
import "./Header.css";
import "./FontSize.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <h3>
            <Link to="/"> NearCart</Link>
          </h3>
        </div>
        <div className="header__searchBar">
          <input type="search" placeholder="Search product/shop" />
          <img src="/images/header/search.svg" alt="" />
        </div>

        <div className="header__menu">
          <Link to="/login" className="login__link">
            <h5>Login</h5>
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
