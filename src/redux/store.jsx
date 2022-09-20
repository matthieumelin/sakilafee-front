import { configureStore } from "@reduxjs/toolkit";

import { userReducer, productReducer, sliderReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    slider: sliderReducer
  },
});
