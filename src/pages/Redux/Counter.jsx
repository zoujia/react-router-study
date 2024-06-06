import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, incrementAsync, selectCount } from '../../store/counter/counterSlice';
import { useState } from "react";

export default function Counter() {
    // const count = useSelector(state => state.counter.value);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1);

    const countPlusTwo = useSelector(state => state.counter.value + 2);
    console.log('>> [Counter], countPlusTwo: ', countPlusTwo);

    return (
        <div>
            <h3>Counter Store demos</h3>
            <div>
                <div>
                    Current count: {count}
                </div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => {
                            const addAction = increment();
                            console.log('>> [Counter], addAction: ', addAction);
                            dispatch(addAction);
                        }}
                    >Increment</button>{' '}
                    <button
                        aria-label="Decrement value"
                        onClick={() => {
                            const subtractAction = decrement();
                            console.log('>> [Counter], subtractAction: ', subtractAction);
                            dispatch(subtractAction);
                        }}
                    >Decrement</button>{' '}
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                    />{' '}
                    <button
                        aria-label="Increment by amount"
                        onClick={() => {
                            const amountAction = incrementByAmount(amount);
                            console.log('>> [Counter], amountAction: ', amountAction);
                            dispatch(amountAction);
                        }}
                    >Increment by {amount}</button>{' '}
                    <button
                        onClick={() => dispatch(incrementAsync(amount))}
                    >Increment Async</button>
                </div>
            </div>
        </div>
    );
}
