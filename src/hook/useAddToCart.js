import { useDispatch } from "react-redux";
import {
  addItemToCart,
  setCartItems,
  removeItemToCart,
  clearItemToCart,
} from "../features/shopSlice";

const useAddToCart = () => {
  const dispatch = useDispatch();
  const handleAddToCart = ({ cartItems, product }) => {
    dispatch(setCartItems(addItemToCart(cartItems, product)));
  };

  const handleMinusToCart = ({ cartItems, product }) => {
    dispatch(setCartItems(removeItemToCart(cartItems, product)));
  };
  const handleClearToCart = ({ cartItems, product }) => {
    dispatch(setCartItems(clearItemToCart(cartItems, product)));
  };

  return { handleAddToCart, handleMinusToCart, handleClearToCart };
};
export default useAddToCart;
