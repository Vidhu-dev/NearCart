import React from 'react';
import './Mycart.css';
import ProductSummary from '../Checkout/ProductSummary';
import CheckoutPriceDetails from '../Checkout/CheckoutPriceDetails';
import { Link } from 'react-router-dom';
function Mycart() {
    return (
        <div>     
            <div className="order__summary__container">
                <div className="order__summary__list">
                    <ProductSummary />
                    <ProductSummary />
                    <ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary /><ProductSummary />
                </div>
                <div className="order__summary__submit">
                    <CheckoutPriceDetails />
                    <button id="address__submit" type="submit">
                        <Link to="/payment">BUY NOW</Link>
                    </button>
                </div>
            </div></div>
    )
}

export default Mycart;