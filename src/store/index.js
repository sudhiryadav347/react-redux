import { createStore } from "redux";


const initialState = { counter: 0, show: true }

const counterReducer = (state = initialState, action) => {


  // const { type } = action;
  // const { amount } = action;

  switch (action.type) {

    case 'increment':
      return {
        counter: state.counter + 1,
        show: state.show
      }

    case 'increase':
      return {
        counter: state.counter + action.amount,
        show: state.show
      }


    case 'decrement':
      return {
        counter: state.counter - 1,
        show: state.show
      }

    case 'visibility':
      return {
        counter: state.counter,
        show: !state.show
      }

    case 'reset':
      return {
        counter: state.counter = 0,
        show: state.show
      }

    default:
      return state
  }
}

const store = createStore(counterReducer);
export default store;

