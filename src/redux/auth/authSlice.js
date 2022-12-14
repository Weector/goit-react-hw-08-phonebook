import { createSlice } from '@reduxjs/toolkit';
import {
  currentUser,
  logOutUser,
  refreshCurrentUser,
  signUpUser,
} from './authOperations';

const initialState = {
  user: {},
  token: '',
  loading: false,
  error: null,
  isLoggedIn: false,
};

const handelPending = state => {
  state.loading = true;
  state.error = null;
};

const handelError = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUpUser.pending, handelPending)
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(signUpUser.rejected, handelError)

      .addCase(currentUser.pending, handelPending)
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(currentUser.rejected, handelError)

      .addCase(logOutUser.pending, handelPending)
      .addCase(logOutUser.fulfilled, (state, _) => {
        state.user = {};
        state.token = 'payload.token';
        state.loading = false;
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.rejected, handelError)

      .addCase(refreshCurrentUser.pending, handelPending)
      .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshCurrentUser.rejected, handelError),
});

export default authSlice.reducer;
