import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction, registerUserAction } from "./authActions";

interface AuthState {
  loginError: string;
  registerError: string;
}

const initialState: AuthState = {
  loginError: "",
  registerError: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.rejected, (state, action) => {
        state.loginError = action.payload as string;
      })
      .addCase(registerUserAction.rejected, (state, action) => {
        state.registerError = action.payload as string;
      });
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authSlice;
