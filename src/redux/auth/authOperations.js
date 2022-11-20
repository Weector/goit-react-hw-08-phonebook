import { createAsyncThunk } from '@reduxjs/toolkit';

import { Notify } from 'notiflix';
import { phonebookAxiosInstance, token } from 'services/axiosInstance';

export const signUpUser = createAsyncThunk(
  'auth/sign_up',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await phonebookAxiosInstance.post('/users/signup', user);
      token.set(data.token);

      return data;
    } catch (e) {
      Notify.warning(e.response.data.message, {
        position: 'center-top',
      });
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await phonebookAxiosInstance.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (e) {
      console.log(e);
      Notify.warning(`Invalid email or password, ${e.code}`, {
        position: 'center-top',
      });
      return rejectWithValue(e.message);
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
    } catch (e) {
      Notify.failure(e.message, { position: 'center-top' });
      return rejectWithValue(e.message);
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
    } catch (e) {
      Notify.failure(e.message, { position: 'center-top' });
      return rejectWithValue(e.message);
    }
  }
);
