import React from "react";
import './ShopDetails.css'

function ShopDetails() {
  return (
    <div className="shop__details">
      <img src="" alt="" />
      <div className="shop__info">
        <h4>Test Shop Name</h4>
        <p>
          Shop item categories details. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <p>Location</p>
        <div className="shop__rating">
          <h6>Rating: 4*</h6>
          <p>500+ ratings</p>
        </div>
        <div className="shop__offer">
          <h5>Offers</h5>
          <ul>
            <li>Offer 1</li>
            <li>Offer 1</li>
            <li>Offer 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShopDetails;
