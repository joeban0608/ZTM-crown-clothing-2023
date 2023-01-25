import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    // action
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setCartCount: (state, action) => {
      state.cartItemsCount = action.payload;
    },
    setCartTotal: (state, action) => {
      state.cartTotal = action.payload;
    },
  },
});

export const addItemToCart = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  // if found increment quantity
  const existingCartItem =
    cartItems.find((cartItem) => {
      return cartItem.id === productToAdd.id;
    }) ?? false;
  if (existingCartItem) {
    const incrementCartItemArr = cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    return incrementCartItemArr;
  }

  // return new array with modified cartItems / new cart item
  const addNewCartItemArr = [...cartItems, { ...productToAdd, quantity: 1 }];
  return addNewCartItemArr;
};

export const removeItemToCart = (cartItems, productToRemove) => {
  // find the cartItem to remove
  const existingCartItem =
    cartItems.find((cartItem) => {
      return cartItem.id === productToRemove.id;
    }) ?? false;

  // if existingItem quantity === 1 && return except existingItem's product
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  // if found existingItem item decrement quantity
  const decrementCartItemArr = cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

  return decrementCartItemArr;
};

export const clearItemToCart = (cartItems, productToRemove) => {
  // 直接回傳不是 productToRemove.id 的 arr
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

// Action creators are generated for each case reducer function
export const { setIsCartOpen, setCartItems, setCartCount, setCartTotal } =
  shopSlice.actions;

export default shopSlice.reducer;
