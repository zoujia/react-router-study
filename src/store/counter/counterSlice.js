import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            console.log('>> [incrementByAmount], action: ', action);
            state.value += action.payload;
        }
    }
});

// Action creators
// increment(): { type: 'counter/increment' }
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Thunk: perform a async operation by calling 'dispatch(incrementAsync(10))'
// needs redux-thunk middleware, which added by redux/toolkit automatically.
export const incrementAsync = (amount) => (dispatch, getState) => {
    setTimeout(() => {
        console.log('>> [incrementAsync], getState: ', getState());
        dispatch(incrementByAmount(amount));
    }, 1000);
};

// Thunk: Another async demo
// const fetchUserById = userId => {
//     return async (dispatch, getState) => {
//         try {
//             const user = await userAPI.fetchById(userId);
//             dispatch(userLoaded(user));
//         }
//         catch (e) {
//             console.log(e);
//         }
//     };
// };

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
