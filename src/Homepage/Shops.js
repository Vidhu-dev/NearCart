import React from 'react';
import './Shops.css';
import ShopTemplate from './ShopTemplate';
import SearchBar from './SearchBar';
import { collection, getFirestore } from 'firebase/firestore';
import { auth, db } from '../firebase';
import collSnap from '../Database/GetShops';

function Shops() {
  return (
    <div className="Shops">
      <SearchBar />
      <div className="shop__template">
        {/* <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate />
        <ShopTemplate /> */}
        {/* {collSnap.forEach((doc) => {
          <ShopTemplate data={doc.data()} />
        })} */}
        <ShopTemplate />
      </div>
    </div>
  );
}

export default Shops;
