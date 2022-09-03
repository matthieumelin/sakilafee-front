import { createSlice } from "@reduxjs/toolkit";

import { products, categories } from "../data";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token:
      localStorage.getItem("token") || sessionStorage.getItem("token") || "",
    cart: JSON.parse(sessionStorage.getItem("cart")) || [],
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: products,
    categoryItems: categories[0].title,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setCategoryItems: (state, action) => {
      state.categoryItems = action.payload;
    },
  },
});

export const { setToken, setCart } = userSlice.actions;
export const { setProducts, setCategoryItems } = productSlice.actions;

export const userReducer = userSlice.reducer;
export const productReducer = productSlice.reducer;
