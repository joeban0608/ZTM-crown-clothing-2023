import React from "react";
import CategoryContainer from "./CategoryContainer";

const CategoriesContainer = () => {
  const categoriesList = ['Hats', 'Jackets', 'Sneakers','Women','Men']
  const categoryContainerJSx = categoriesList.map((category) => <CategoryContainer key={category} category={category}/>)
  
  return (
    <ul className="categories-container">
      {categoryContainerJSx}
    </ul>
  );
};

export default CategoriesContainer;
