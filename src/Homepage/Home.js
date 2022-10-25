import React from "react";
import Header from "../Header.js";
import Footer from "../Footer.js";
import Recommended from "./Recommended";
import Categories from "./Categories";
import Shops from './Shops.js';

function Home() {
  return (
    <div>
      <Header />
      <Recommended />
      <Categories />
      <Shops/>
      <Footer />
    </div>
  );
}

export default Home;
