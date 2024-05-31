import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { persistor, store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Shop-app">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
