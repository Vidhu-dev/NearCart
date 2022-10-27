import React from 'react';
import CheckoutHeader from './CheckoutHeader';
import CheckoutPriceDetails from './CheckoutPriceDetails';
import './OrderSummary.css'
import ProductSummary from './ProductSummary';

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
          <button type="submit">Submit and Continue</button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
