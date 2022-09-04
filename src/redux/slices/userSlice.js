import { createSlice } from "@reduxjs/toolkit";

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
