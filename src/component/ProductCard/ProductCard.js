import React from "react";
import { useSelector } from "react-redux";
import useAddToCart from "../../hook/useAddToCart";
import Button from "../Button/Button";
import "./productCard.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { cartItems } = useSelector((state) => state.cart);
  const { handleAddToCart } = useAddToCart();

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={"inverted"}
        onClick={() => {
          handleAddToCart({ cartItems, product });
        }}
      >
        ADD TO CARD
      </Button>
    </div>
  );
};

export default ProductCard;
