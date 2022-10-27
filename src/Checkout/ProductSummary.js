import React from "react";
import './ProductSummary.css'

function ProductSummary() {
  return (
    <div className="product__summary">
      <div className="product__summary__left">
        <img className="product__summary__figure" src="" alt="" />
        <div className="product__summary__modification">
            <button>-</button>
            <span>5</span>
            <button>+</button>
        </div>
      </div>
      <div className="product__summary__right">
            <h5>Product Name</h5>
            <p>Product description</p>
            <p>Shop Name</p>
            <p>$670</p><span>40% off</span>
      </div>
    </div>
  );
}

export default ProductSummary;
