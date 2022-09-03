import { configureStore } from "@reduxjs/toolkit";

import { userReducer, productReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer
  },
});
