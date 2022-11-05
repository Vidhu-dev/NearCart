import React from "react";
import './CheckoutHeader.css';
import {Link} from 'react-router-dom';

function CheckoutHeader() {
  return (
    <div className="checkout__header">
      <h2>
        {" "}
        <Link to="/">NearCart</Link>{" "}
      </h2>
      <h5 className="checkout__header__login">Login</h5>
      <h5 className="checkout__header__address">Delivery Address</h5>
      <h5 className="checkout__header__summary">Order Summary</h5>
      <h5 className="checkout__header__payment">Payment</h5>
    </div>
  );
}

export default CheckoutHeader;
