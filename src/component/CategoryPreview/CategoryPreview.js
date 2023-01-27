import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./categoryPreview.scss";

const CategoryPreview = ({ title, products }) => {

  return (
    <div className="category-preview-container">
      {
        // 這邊用 h2 包 span 是為了只點擊 span 區塊, h2 為區塊元素,會整個 width 都點到
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>
      }
      <div className="preview">
        {products.reduce((acc, product, index) => {
          if (index < 4) {
            acc.push(
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          }
          return acc;
        }, [])}
      </div>
    </div>
  );
};

export default CategoryPreview;
