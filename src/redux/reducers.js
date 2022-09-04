import { userSlice } from "./slices/userSlice";
import { productSlice } from "./slices/productSlice";
import { errorSlice } from "./slices/errorSlice";

export const { setToken, setCart } = userSlice.actions;
export const { setProducts, setCategoryItems } = productSlice.actions;
export const { setErrors } = errorSlice.actions;

export const userReducer = userSlice.reducer;
export const productReducer = productSlice.reducer;
export const errorReducer = errorSlice.reducer;