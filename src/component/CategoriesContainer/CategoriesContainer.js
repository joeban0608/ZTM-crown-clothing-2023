import React from "react";
import CategoryContainer from "./CategoryContainer";
import categoriesInfoList from './categories.json'
const CategoriesContainer = () => {
  const categoryContainerJSx = categoriesInfoList.map((categoryInfo) => (
    <CategoryContainer key={categoryInfo.title} categoryInfo={categoryInfo} />
  ));

  return <ul className="categories-container">{categoryContainerJSx}</ul>;
};

export default CategoriesContainer;
