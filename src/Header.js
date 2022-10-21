import React from 'react';
import './Header.css';
import './FontSize.css';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <h3>NearCart</h3>
        </div>
        <div className="header__searchBar">
          <input type="search" placeholder="Search product/shop" />
          <img src="/search.svg" alt="" />
        </div>
        <div className="header__menu">
          <a href='' className="login">
            <h5>Login</h5>
          </a>
          <div className="myCart">
            <img src='/mycart.svg' className="myCart__image" alt="" />
            <h6 className="myCart__number">23</h6>
          </div>
          <div className="hamburger">
            <div class="hamburger_lines">
              <span ></span>
              <span ></span>
              <span ></span>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
