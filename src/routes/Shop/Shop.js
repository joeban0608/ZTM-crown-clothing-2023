import React from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import SHOP_DATA from "../../config/shopData.json";
import './shop.scss'

const Shop = () => {

  return (
    <div className="products-container">
      {SHOP_DATA.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
      
    </div>
  );
};

export default Shop;
