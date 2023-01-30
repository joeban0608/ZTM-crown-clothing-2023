import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../../component/ProductCard/ProductCard";
import Spinner from "../../../component/Spinner/Spinner";
import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesTable, categoriesLoading } = useSelector(
    (state) => state.shop
  );
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesTable[category]);
  }, [category, categoriesTable]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {categoriesLoading? <Spinner />: (
        <div className="category-container">
          {products?.length &&
            products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
