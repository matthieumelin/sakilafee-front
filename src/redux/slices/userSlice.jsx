import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data:
      JSON.parse(localStorage.getItem("userData")) ||
      JSON.parse(sessionStorage.getItem("userData")) ||
      "",
    cart: JSON.parse(sessionStorage.getItem("cart")) || [],
  },
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});
