import React from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../../component/CategoryPreview/CategoryPreview";
import Spinner from "../../../component/Spinner/Spinner";

const CategoriesPreview = () => {
  const { categoriesTable, isLoading } = useSelector(
    (state) => state.category
  );
  
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesTable).map((title) => {
          const products = categoriesTable[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
