import { createAsyncThunk } from '@reduxjs/toolkit';
import { phonebookAxiosInstance, token } from 'services/axiosInstance';

export const signUpUser = createAsyncThunk(
  'auth/sign_up',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await phonebookAxiosInstance.post('/users/signup', user);
      token.set(data.token);
      console.log('create', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await phonebookAxiosInstance.post('/users/login', user);
      token.set(data.token);
      console.log('create', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await phonebookAxiosInstance.post('/users/logout');
      token.unset();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh_user',
  async (_, { rejectWithValue, getState }) => {
    try {
      const currentToken = getState().auth.token;
      token.set(currentToken);

      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
