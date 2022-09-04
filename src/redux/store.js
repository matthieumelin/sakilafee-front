import { configureStore } from "@reduxjs/toolkit";

import { userReducer, productReducer, errorReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    error: errorReducer
  },
});
