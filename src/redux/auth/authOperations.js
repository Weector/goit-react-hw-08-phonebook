import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastAlert } from 'components';
import { phonebookAxiosInstance, token } from 'services/axiosInstance';

export const signUpUser = createAsyncThunk(
  'auth/sign_up',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await phonebookAxiosInstance.post('/users/signup', user);
      token.set(data.token);

      return data;
    } catch (error) {
      toastAlert(error.response.data.message);
      return rejectWithValue(error.response.data.message);
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
      toastAlert();
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
      toastAlert(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh_user',
  async (_, { rejectWithValue, getState }) => {
    const currentToken = getState().auth.token;

    if (!currentToken) rejectWithValue();

    token.set(currentToken);

    try {
      const { data } = await phonebookAxiosInstance.get('/users/current');
      return data;
    } catch (error) {
      toastAlert(error.message);
      return rejectWithValue(error.message);
    }
  }
);
