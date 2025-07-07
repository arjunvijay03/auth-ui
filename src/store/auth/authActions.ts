import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axiosInstance";
import type {
  AuthCredentialsType,
  UserProfileType,
} from "../../types/auth.type";

export const loginUserAction = createAsyncThunk(
  "auth/loginUser",
  async (credentials: AuthCredentialsType, { rejectWithValue }) => {
    try {
      const response = await axios.post("/login", credentials);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const registerUserAction = createAsyncThunk(
  "auth/registerUser",
  async (userData: UserProfileType, { rejectWithValue }) => {
    try {
      const response = await axios.post("/register", userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
