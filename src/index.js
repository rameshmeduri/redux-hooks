import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createReduxStore } from './redux';
import './styles.css';

render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
