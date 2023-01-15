import React from "react";
import CategoryContainer from "./CategoryContainer";

const CategoriesContainer = () => {
  const categoriesInfoList = [
    {
      title: "Hats",
    },
    {
      title: "Jackets",
    },
    {
      title: "Sneakers",
    },
    {
      title: "Women",
    },
    {
      title: "Men",
    },
  ];
  const categoryContainerJSx = categoriesInfoList.map((categoryInfo) => (
    <CategoryContainer key={categoryInfo.title} category={categoryInfo.title} />
  ));

  return <ul className="categories-container">{categoryContainerJSx}</ul>;
};

export default CategoriesContainer;
