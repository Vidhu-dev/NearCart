import React from 'react';
import './Category.css'

function Category() {
  return (
    <div className="category">
      <div className="category__content">
        <img
          className="category__content__image"
          src="/images/category.png"
          alt=""
        />
        <h6>Fruits & Vegetable</h6>
      </div>
    </div>
  );
}

export default Category;
