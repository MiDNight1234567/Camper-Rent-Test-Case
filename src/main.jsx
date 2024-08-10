import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import 'modern-normalize';
import App from './App.jsx';
import { store, persistor } from './redux/store.js';
import { ModalProvider } from '../src/context/ModalContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <HelmetProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
