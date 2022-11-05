import React from 'react';
import CheckoutHeader from './CheckoutHeader';
import CheckoutPriceDetails from './CheckoutPriceDetails';
import './OrderSummary.css'
import ProductSummary from './ProductSummary';
import {Link} from 'react-router-dom';

function OrderSummary() {
  return (
    <div>
      <CheckoutHeader />
      <div className="order__summary__container">
        <div className="order__summary__list">
          <ProductSummary />
          <ProductSummary />
          <ProductSummary />
        </div>
        <div className="order__summary__submit">
          <CheckoutPriceDetails />
          <button id="address__submit" type="submit">
            <Link to="/payment">Submit and Continue </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
