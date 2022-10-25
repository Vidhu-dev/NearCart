import React from "react";
import "./ShopPage.css";
import SearchBar from "../Homepage/SearchBar";
import Header from "../Header";
import Footer from "../Footer";
import ShopItems from './ShopItems.js';
import ShopDetails from "./ShopDetails";


function ShopPage() {
  return (
    <div>
      <Header />
      <ShopDetails/>
      <SearchBar />
      <ShopItems/>
      <Footer />
    </div>
  );
}

export default ShopPage;
