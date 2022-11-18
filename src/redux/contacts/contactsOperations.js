import { createAsyncThunk } from '@reduxjs/toolkit';

import { toastAlert } from 'components/index';
import { phonebookAxiosInstance } from 'services/axiosInstance';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await phonebookAxiosInstance.get('/contacts');
      return response.data;
    } catch (error) {
      toastAlert(error);
      return thunkAPI.rejectWithValue(error.message);
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
