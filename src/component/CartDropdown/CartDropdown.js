import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./cartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
