import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { setCartCount, setIsCartOpen } from "../../features/cartSlice";
import "./cartIcon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { isCartOpen, cartItemsCount, cartItems } = useSelector(
    (state) => state.cart
  );
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  useEffect(() => {
    const calculatedCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch(setCartCount(calculatedCount));
  }, [cartItems, dispatch]);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
