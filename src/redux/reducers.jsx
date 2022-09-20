import { userSlice } from "./slices/userSlice";
import { productSlice } from "./slices/productSlice";
import { sliderSlice } from "./slices/sliderSlice";

export const { setUserData, setCart } = userSlice.actions;
export const { setProducts, setCategoryItems } = productSlice.actions;
export const { setSliderItems } = sliderSlice.actions;

export const userReducer = userSlice.reducer;
export const productReducer = productSlice.reducer;
export const sliderReducer = sliderSlice.reducer;