import { createAsyncThunk } from '@reduxjs/toolkit';

import { toastAlert } from 'components/index';
import { phonebookAxiosInstance, token } from 'services/axiosInstance';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    const currentToken = getState().auth.token;

    if (!currentToken) rejectWithValue();
    token.set(currentToken);
    try {
      const { data } = await phonebookAxiosInstance.get('/contacts');

      return data;
    } catch (error) {
      toastAlert(error);
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await phonebookAxiosInstance.post('/contacts', contact);
      return response.data;
    } catch (error) {
      toastAlert(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await phonebookAxiosInstance.delete(
        `/contacts/${contactId}`
      );
      return response.data;
    } catch (error) {
      toastAlert(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
