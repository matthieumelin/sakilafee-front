import { createSlice } from "@reduxjs/toolkit";

import { products, categories } from "../../data";

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
