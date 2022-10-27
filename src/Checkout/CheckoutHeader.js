import React from "react";
import './CheckoutHeader.css';
function CheckoutHeader() {
  return (
    <div className="checkout__header">
      <h2>NearCart</h2>
      <h5 className="checkout__header__login">Login</h5>
      <h5 className="checkout__header__address">Delivery Address</h5>
      <h5 className="checkout__header__summary">Order Summary</h5>
      <h5 className="checkout__header__payment">Payment</h5>
    </div>
  );
}

export default CheckoutHeader;
