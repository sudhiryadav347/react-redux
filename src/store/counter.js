import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, show: false };

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

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
