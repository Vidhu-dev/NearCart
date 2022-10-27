import React from "react";
import CheckoutHeader from "./CheckoutHeader.js";
import CheckoutPriceDetails from "./CheckoutPriceDetails.js";
import "./DeliveryAddress.css";

function DeliveryAddress() {
  return (
    <div>
      <CheckoutHeader />
      <div className="address">
        <form className="address___container">
          <div className="address__sections">
            <p>Name</p>
            <input type="text" name="address__name" />
          </div>
          <div className="address__sections">
            <p>Mobile Number</p>
            <input type="tel" name="address__mobile1" />
          </div>
          <div className="address__sections">
            <p>Pincode</p>
            <input type="number" name="address__pin" />
          </div>
          <div className="address__sections">
            <p>Locality</p>
            <input type="text" name="address__locality" />
          </div>
          <div className="address__sections">
            <p>Address(Area and Street)</p>
            <textarea name="address__area" id="" cols="30" rows="5"></textarea>
          </div>
          <div className="address__sections">
            <p>City/District/Town</p>
            <input type="text" name="address__city" />
          </div>
          <div className="address__sections">
            <p>State</p>
            <input type="text" name="address__state" />
          </div>
          <div className="address__sections">
            <p>Landmark(Optional)</p>
            <input type="text" name="address__landmark" />
          </div>
          <div className="address__sections">
            <p>Alternate Phone</p>
            <input type="text" name="address__mobile2" />
          </div>
          <button type="submit">Submit and Continue</button>
        </form>
        <div lassName="address__details">
          <CheckoutPriceDetails />
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;
