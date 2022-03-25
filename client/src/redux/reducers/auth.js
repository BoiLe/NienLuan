import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    isLogging: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLogging = true;
    },
    loginSuccess: (state, action) => {
      state.isLogging = false;
      state.token = action.payload;
    },
    loginFailed: (state, action) => {
      state.isLogging = false;
      state.error = action.payload;
    },
    registerFailed: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLogging = false;
      state.token = null;
    },
  },
});
export const {
  login,
  logout,
  loginSuccess,
  loginFailed,
  register,
  registerSuccess,
  registerFailed,
} = userSlice.actions;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsLogging = (state) => state.user.isLogging;
export default userSlice.reducer;
