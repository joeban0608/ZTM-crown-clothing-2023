import React from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../../component/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesTable } = useSelector((state) => state.shop);

  return (
    <>
      {Object.keys(categoriesTable).map((title) => {
        const products = categoriesTable[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
