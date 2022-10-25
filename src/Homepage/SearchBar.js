import React from "react";
import "./SearchBar.css";
function SearchBar() {
  return (
    <div className="searchBar">
      <div className="searchBar__container">
        <div className="searchBar__input">
          <input type="search" placeholder="Search product/shop" />
          <img src="/images/header/search.svg" alt="" />
        </div>

        <div className="seacrhBar__filters">
          <h4>
            <div className="searchBar__filters__favourite">Favourite</div>
            <div className="searchBar__filters__relevance">Relevance</div>
            <div className="searchBar__filters__rating">Rating</div>
            <div className="searchBar__filters__filter">Filter</div>
          </h4>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SearchBar;
