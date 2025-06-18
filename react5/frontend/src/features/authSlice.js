import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post('http://localhost:8080/api/auth/login', credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
});

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await axios.post('http://localhost:8080/api/auth/register', userData);
  localStorage.setItem('token', response.data.token);
  return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token');
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export default authSlice.reducer;
