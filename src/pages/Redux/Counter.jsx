import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from '../../store/counter/counterSlice';
import { useState } from "react";

export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1);

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
                        onClick={() => dispatch(increment())}
                    >Increment</button>{' '}
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >Decrement</button>{' '}
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                    />{' '}
                    <button
                        aria-label="Increment by amount"
                        onClick={() => dispatch(incrementByAmount(amount))}
                    >Increment by {amount}</button>
                </div>
            </div>
        </div>
    );
}
