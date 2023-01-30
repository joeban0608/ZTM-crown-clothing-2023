import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query } from "firebase/firestore";
import { crownClothingDb } from "../utils/firebase/firebase";

export const getCategoriesAndDocThunk = createAsyncThunk(
  "shop/fetchCategories",
  async () => {
    const collectionRef = collection(crownClothingDb, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title?.toLowerCase()] = items;
      return acc;
    }, {});
    // console.log("categoriesMap", categoriesMap);
    return categoriesMap;
  }
);

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
  categoriesTable: {},
  categoriesLoading: false,
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
    // setCategoriesTable: (state, action) => {
    //   state.categoriesTable = action.payload;
    // },
  },
  extraReducers: {
    [getCategoriesAndDocThunk.pending]: (state) => {
      state.categoriesLoading = true;
    },
    [getCategoriesAndDocThunk.fulfilled]: (state, { payload }) => {
      state.categoriesLoading = false;
      state.categoriesTable = payload;
    },
    [getCategoriesAndDocThunk.rejected]: (state) => {
      state.categoriesLoading = false;
      state.categoriesTable = {};
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

// /* categories */
// export const getCategoriesAndDocAsync = async (dispatch) => {
//   try {
//     const collectionRef = collection(crownClothingDb, "categories");
//     const q = query(collectionRef);

//     const querySnapshot = await getDocs(q);
//     const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//       const { title, items } = docSnapshot.data();
//       acc[title?.toLowerCase()] = items;
//       return acc;
//     }, {});
//     dispatch(setCategoriesTable(categoriesMap));
//     // return categoriesMap;
//   } catch (e) {
//     console.log("getCategoriesAndDoc error : ", e);
//     dispatch(setCategoriesTable({}));
//     // return {};
//   }
// };

// Action creators are generated for each case reducer function
export const {
  setIsCartOpen,
  setCartItems,
  setCartCount,
  setCartTotal,
  setCategoriesTable,
} = shopSlice.actions;

export default shopSlice.reducer;
