import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    allPosts: {
      data: [],
      isLoading: false,
      error: false,
    },
    deletePost: {
      isLoading: false,
      error: null,
      data: [],
    },
    createPost: {
      isLoading: false,
      error: null,
      data: [],
    },
  },
  reducers: {
    getProductRequest: (state) => {
      state.allPosts.isLoading = true;
    },
    getProductSuccess: (state, action) => {
      state.allPosts.data = action.payload;
      state.allPosts.isLoading = false;
    },
    getProductFailure: (state) => {
      state.allPosts.isLoading = false;
      state.allPosts.error = false;
    },
    createProductRequest: (state, action) => {
      state.createPost.data = action.payload;
      state.createPost.isLoading = true;
    },
    createProductSuccess: (state, action) => {
      state.createPost.isLoading = false;
    },
    createProductFailure: (state) => {
      state.createPost.isLoading = false;
      state.createPost.error = true;
    },
    deleteProductRequest: (state, action) => {
      state.deletePost.isLoading = true;
      state.deletePost.data = action.payload;
    },
    
    deleteProductFailure: (state) => {
      state.deletePost.isLoading = false;
      state.deletePost.error = true;
    },
  },
});
export const {
  getProductRequest,
  getProductSuccess,
  getProductFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
 
} = ProductSlice.actions;
export const selectProduct = (state) => state.data.Products;
export default ProductSlice.reducer;
