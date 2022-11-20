import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastAlert } from 'components';
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
      toastAlert(error.message);
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
      toastAlert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await phonebookAxiosInstance.delete(
        `/contacts/${contactId}`
      );
      return data;
    } catch (error) {
      toastAlert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ name, number, id }, thunkAPI) => {
    const contact = { name, number };
    console.log('contactOperation', contact);
    console.log('contactIDOperation', id);
    try {
      const { data } = await phonebookAxiosInstance.patch(
        `/contacts/${id}`,
        contact
      );
      return data;
    } catch (error) {
      toastAlert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
