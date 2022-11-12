import React, { useEffect } from "react";
import Header from "../Header.js";
import Footer from "../Footer.js";
import Recommended from "./Recommended";
import Categories from "./Categories";
import Shops from './Shops.js';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


function Home() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const onLine = navigator.onLine;
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);
  return (
    (!onLine || (loading)) ?
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <h1 className="logo_title" style={{color:"black"}}>NearCart</h1>
        <img alt="" src="/images/loading.gif" />
      </div> : <div>
        <Header />
        <Recommended />
        <Categories />
        <Shops />
        <Footer />
      </div>
  );
}

export default Home;
