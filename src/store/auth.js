import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthorized: false };

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const authActions = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
