import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    items: [],
  },
  reducers: {
    setSliderItems: (state, action) => {
      state.items = action.payload;
    },
  },
});
