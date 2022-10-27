import React from "react";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutPriceDetails from "./CheckoutPriceDetails";
import "./Payment.css";

function Payment() {
  return (
    <div className="payment">
      <CheckoutHeader />
      <div className="payment__container">
        <div className="payment__container__left">
          <input
            type="radio"
            id="online"
            name="payment__method"
            value="online"
          />
          <label for="online">Online</label> <br />
          <input type="radio" id="cash" name="payment__method" value="cash" />
          <label for="cash">Cash on Delivery</label>
        </div>
        <div className="payment__container__right">
          <CheckoutPriceDetails />
          <button type="submit">Submit and Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
