import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  reducers: {
   
    createProductRequest: (state, action) => {
      state.data = action.payload;
      state.isLoading = true;
    },
    createProductSuccess: (state, action) => {
      state.isLoading = false;
    },
    createProductFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    deleteProductRequest: (state, action) => {
      state.isLoading = true;
    },
    deleteProductSuccess: (state, action) => {
      state.isLoading = false;
      state = state.filter((item) => item.id !== action.payload)
    },
    deleteProductFailure: (state) => {
      
      state.error = true;
    },
  },
});
export const {
 
  createProductRequest,
  createProductSuccess,
  createProductFailure,
} = AdminSlice.actions;

export default AdminSlice.reducer;
