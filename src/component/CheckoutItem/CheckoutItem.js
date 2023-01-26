import React from "react";
import useAddToCart from "../../hook/useAddToCart";
import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem, cartItems }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { handleAddToCart, handleMinusToCart, handleClearToCart } =
    useAddToCart();
  const itemToCartProps = { cartItems, product: cartItem };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity-container">
        <div
          className="arrow"
          onClick={() => {
            handleMinusToCart(itemToCartProps);
          }}
        >
          &#10094;
        </div>
        <span className="quantity"> {quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            handleAddToCart(itemToCartProps);
          }}
        >
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          handleClearToCart(itemToCartProps);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
