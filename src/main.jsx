import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxStoreProvider } from 'react-redux';
import store from './store';
import { router, routerUsingElements } from './router';

function TestSpinner() {
  return <div>Fallback-Spinner...</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The store can be available to the entire app, or the specific page */}
    <ReduxStoreProvider store={store}>
      <RouterProvider router={router} fallbackElement={<TestSpinner />} />
    </ReduxStoreProvider>
  </React.StrictMode>,
);
