import React from "react";
import "./ShopTemplate.css";
import {Link} from 'react-router-dom';

function ShopTemplate() {
  return (
    <div className="shopTemplate">
      <img
        className="shopTemplate__shopImage"
        src="/images/shopImage.jpg"
        alt=""
      />
      <div className="shopTemplate__info">
        <h4 className="shopTemplate__shopName">
          <Link to="/shoppage" className="shoppage">Shop name</Link>
        </h4>

        <p className="shopTemplate__categories">Shop item category details</p>
        <h6 className="shopTemplate__rating">Rating</h6>
        <h6 className="shopTemplate__offer">Offers</h6>
      </div>
    </div>
  );
}

export default ShopTemplate;
