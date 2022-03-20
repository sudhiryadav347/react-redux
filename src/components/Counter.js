import { useSelector } from 'react-redux';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const counterDisplay = useSelector((state) => state.counter.show);
  const inputAmountRef = useRef();
  const isAuth = useSelector((state) => state.auth.isAuthorized);

  const incrementHandler = () => {
    // dispatch({
    //     type: 'increment'
    // });
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(
      counterActions.increase({
        amount: +inputAmountRef.current.value,
      })
    );
    inputAmountRef.current.value = 0;

    // dispatch({
    //     type: 'increase',
    //     amount: +inputAmountRef.current.value
    // });
  };

  const decrementHandler = () => {
    // dispatch({
    //     type: 'decrement'
    // });
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    // dispatch({
    //     type: 'visibility'
    // });
    dispatch(counterActions.visibility());
  };
  const resetHandler = () => {
    // dispatch({
    //     type: 'reset'
    // });
    dispatch(counterActions.reset());
    inputAmountRef.current.value = 0;
  };

  return (
    <div>
      {isAuth && <div>Welcome user.</div>}
      {!isAuth && <div>Please login.</div>}

      {counterDisplay && (
        <>
          <div>{counter}</div>
          <input type="number" ref={inputAmountRef}></input>
          <button onClick={increaseHandler}>Add amount</button>
          <button onClick={resetHandler}>Reset</button>
          <button onClick={incrementHandler}>+</button>
          <button onClick={decrementHandler}>-</button>
        </>
      )}
      <br />
      <button onClick={toggleCounterHandler}>visibility</button>
    </div>
  );
};

export default Counter;
