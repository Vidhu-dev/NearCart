import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__section1">
          <img
            className="footer__image footer__logo"
            src="/images/footer/footer__logo.png"
            alt=""
          />
          <img
            className="footer__image"
            src="/images/footer/facebook.svg"
            alt=""
          />
          <img
            className="footer__image"
            src="/images/footer/github.svg"
            alt=""
          />
          <img
            className="footer__image"
            src="/images/footer/linkedin.svg"
            alt=""
          />
          <img
            className="footer__image"
            src="/images/footer/twitter.svg"
            alt=""
          />
        </div>
        <div className="footer__section2">
          <div className="footer__link1">
            <ul className="footer__list">
              <li>Test link</li>
              <li>Test link</li>
              <li>Test link</li>
              <li>Test link</li>
              <li>Test link</li>
            </ul>
          </div>
          <div className="footer__link2">
            <ul className="footer__list">
              <li>Test link</li>
              <li>Test link</li>
              <li>Test link</li>
              <li>Test link</li>
              <li>Test link</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer__bottomLine"/>
    </div>
  );
}

export default Footer;
