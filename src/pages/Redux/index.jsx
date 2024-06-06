// import { Provider as ReduxStoreProvider, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
// import store from '../../store';
import Counter from './Counter';

function AnotherCounter() {
    const count = useSelector(state => state.counter.value);

    return (
        <div style={{
            padding: '8px',
            border: '1px dashed #333'
        }}>
            Read count value in another component : <strong>{count}</strong>
        </div>
    );
}

export default function ReduxIndex() {
    return (
        // <ReduxStoreProvider store={store}>
        <div>
            <h2>Hello Redux</h2>
            <hr />
            <Counter />
            <hr />
            <AnotherCounter />
        </div>
        // </ReduxStoreProvider>
    );
}
