import React from 'react';
import  './CheckoutPriceDetails.css';


function CheckoutPriceDetails() {
  return (
    <div className="checkout__price__details">
      <h5>PRICE DETAILS</h5>
      <table>
        <tr>
          <td>Price </td>
          <td>$78090</td>
        </tr>
        <tr>
          <td>Delivery Charge</td>
          <td>$90</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td>$70</td>
        </tr>
        <tr>
          <td>
            <hr />
          </td>
          <td>
            <hr />
          </td>
        </tr>
        <tr >
          <td>Total</td>
          <td>$78907</td>
        </tr>
      </table>
    </div>
  );
}

export default CheckoutPriceDetails;
