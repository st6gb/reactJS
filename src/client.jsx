import './main.scss';
import './images/favicon.ico';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import configureStore from './store/configureStore';
import App from './App';

const { persistor, store } = configureStore();
const app = (
  <App
    Router={BrowserRouter}
    store={store}
    persistor={persistor}
  />
);

hydrate(app, document.getElementById('root'));
