import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    getProductRequest: (state) => {state.isLoading = true},
    getProductSuccess: (state, action) => {
      
      state.data = action.payload;
      state.isLoading = false;
    },
    getProductFailure: (state) => {state.isLoading = false},
  },
});
export const { getProductRequest, getProductSuccess, getProductFailure } =
  ProductSlice.actions;
export const selectProduct = (state) => state.data.Products;
export default ProductSlice.reducer;
