import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

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
    } catch (e) {
      Notify.failure(e.message, { position: 'center-top' });
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await phonebookAxiosInstance.post('/contacts', contact);
      return response.data;
    } catch (e) {
      Notify.failure(e.message, { position: 'center-top' });
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await phonebookAxiosInstance.delete(
        `/contacts/${contactId}`
      );
      Notify.info('Deleted', { position: 'center-top' });
      return data;
    } catch (e) {
      Notify.failure(e.message, { position: 'center-top' });
      return rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ name, number, id }, { rejectWithValue }) => {
    const contact = { name, number };

    try {
      const { data } = await phonebookAxiosInstance.patch(
        `/contacts/${id}`,
        contact
      );
      Notify.success('Done', { position: 'center-top' });
      return data;
    } catch (e) {
      Notify.failure(e.message, { position: 'center-top' });
      return rejectWithValue(e.message);
    }
  }
);
