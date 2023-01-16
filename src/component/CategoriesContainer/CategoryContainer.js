import React from "react";
import './categoriesContainer.scss'

const CategoryContainer = ({ categoryInfo }) => {
  const {title, imageUrl} = categoryInfo;
  return (
    <li className="category-container">
      {/* <img /> */}
      <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </li>
  );
};

export default CategoryContainer;
