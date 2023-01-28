import React from "react";
import { useNavigate } from "react-router-dom";

const DirectoryContainer = ({ categoryInfo }) => {
  const { title, imageUrl, route } = categoryInfo;
  const navigate = useNavigate();
  const handleNavigateShopCategory = () => {
    navigate(route);
  };
  return (
    <li className="directory-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        className="directory-body-container"
        onClick={handleNavigateShopCategory}
      >
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </li>
  );
};

export default DirectoryContainer;
