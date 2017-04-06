import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './components/app_container';
import './assets/index.css';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.store = store;

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    root);
});
