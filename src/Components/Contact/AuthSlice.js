import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,    // true if logged in
  userData: null,   // stores user info
};

const authSlice = createSlice({
  name: "auth",
  initialState, // must be added
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload; // pass userData directly in payload
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
