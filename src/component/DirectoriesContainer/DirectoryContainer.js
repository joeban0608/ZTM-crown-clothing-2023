import React from "react";

const DirectoryContainer = ({ categoryInfo }) => {
  const { title, imageUrl } = categoryInfo;
  return (
    <li className="directory-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </li>
  );
};

export default DirectoryContainer;
