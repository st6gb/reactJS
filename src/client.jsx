import './main.scss';
import './images/favicon.ico';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './App';

const { persistor, store } = configureStore();


ReactDOM.hydrate(<App store={store} persistor={persistor} />, document.getElementById('root'));
