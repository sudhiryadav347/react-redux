import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const counterDisplay = useSelector((state) => state.show);
    const inputAmountRef = useRef();

    const incrementHandler = () => {
        dispatch({
            type: 'increment'
        });
    };
    const increaseHandler = () => {
        dispatch({
            type: 'increase',
            amount: +inputAmountRef.current.value
        });
    };

    const decrementHandler = () => {
        dispatch({
            type: 'decrement'
        });
    };
    const toggleCounterHandler = () => {
        dispatch({
            type: 'visibility'
        });
    };
    const resetHandler = () => {
        dispatch({
            type: 'reset'
        });
        inputAmountRef.current.value = 0;
    }

    console.log(counterDisplay);
    console.log(counter)

    return (
        <div>
            {counterDisplay && (
                <>
                    <div>{counter}</div>
                    <input type='number' ref={inputAmountRef}></input>
                    <button onClick={increaseHandler}>Add amount</button>
                    <button onClick={resetHandler}>Reset</button>
                    <button onClick={incrementHandler}>+</button>
                    <button onClick={decrementHandler}>-</button>
                </>
            )
            }
            <br />
            <button onClick={toggleCounterHandler}>visibility</button>
        </div>
    )

}

export default Counter;