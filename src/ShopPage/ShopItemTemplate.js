import React from "react";
import "./ShopItemTemplate.css";

function ShopItemTemplate() {
  return (
    <div className="item__template">
      <img className="item__image" src="/images/shopImage.jpg" alt="" />
      <div className="item__info">
        <h4 className="item__productName">Product name</h4>
        <h6 className="item__offer">Offers</h6>
        <div className="item__rating">
          <h6>Rating: 4*</h6>
          <p>500+ ratings</p>
        </div>
      </div>
      <div className="item__button">
        <button>ADD TO CART</button>
        <button>BUY NOW</button>
      </div>
      <p>Product Details {">>"} </p>
    </div>
  );
}

export default ShopItemTemplate;
