import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = { counter: 0, show: false   }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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
    }
  }
})

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export default store;




