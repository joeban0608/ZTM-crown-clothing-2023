import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "../../component/CheckoutItem/CheckoutItem";
import { setCartTotal } from "../../features/shopSlice";
import "./checkout.scss";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems, cartTotal } = useSelector((state) => state.shop);
  useEffect(() => {
    const calculatedTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(setCartTotal(calculatedTotal));
  }, [cartItems, dispatch]);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
            cartItems={cartItems}
          />
        );
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
