import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, show: false };
const initialAuthState = { isAuthorized: false };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload.amount;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    visibility: (state) => {
      state.show = !state.show;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authenticationSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;
export default store;
