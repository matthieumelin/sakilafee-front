import { userSlice } from "./slices/userSlice";
import { productSlice } from "./slices/productSlice";

export const { setToken, setCart } = userSlice.actions;
export const { setProducts, setCategoryItems } = productSlice.actions;

export const userReducer = userSlice.reducer;
export const productReducer = productSlice.reducer;