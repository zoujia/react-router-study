import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxStoreProvider } from 'react-redux';
import store from './store';
import { router, routerUsingElements } from './router';
import { selectCount } from './store/counter/counterSlice';

function TestSpinner() {
  return <div>Fallback-Spinner...</div>;
}

setTimeout(() => {
  store.dispatch({type: 'counter/increment'});
  console.log('>> [main], store: ', store.getState());
  // Not recomended, you'd better to use 'useSelector'
  const count = selectCount(store.getState());
  console.log('>>>> [main] count: ', count);
}, 3000);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The store can be available to the entire app, or the specific page */}
    <ReduxStoreProvider store={store}>
      <RouterProvider router={router} fallbackElement={<TestSpinner />} />
    </ReduxStoreProvider>
  </React.StrictMode>,
);
