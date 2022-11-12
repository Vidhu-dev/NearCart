import React from "react";
import "./App.css";
import Home from "./Homepage/Home.js";
import ShopPage from "./ShopPage/ShopPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login/Login.js";
import Signup from "./Login/Signup.js";
import DeliveryAddress from "./Checkout/DeliveryAddress.js";
import OrderSummary from "./Checkout/OrderSummary";
import Payment from "./Checkout/Payment";


function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/payment" element={<Payment/>}></Route>
          <Route path="/order__summary" element={<OrderSummary />}></Route>
          <Route
            path="/delivery__address"
            element={<DeliveryAddress />}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/shoppage" element={<ShopPage />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
