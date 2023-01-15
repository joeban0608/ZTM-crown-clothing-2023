import React from "react";

const CategoryContainer = ({ category }) => {
  return (
    <li className="category-container">
      {/* <img /> */}
      <div className="category-body-container">
        <h2>{category}</h2>
        <p>Shop Now</p>
      </div>
    </li>
  );
};

export default CategoryContainer;
