import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import lockReducer from './reducers/lockReducer';
import openReducer from './reducers/openReducer';

const rootReducer = combineReducers({
  isLocked: lockReducer,
  isClosed: openReducer,
});

const store = createStore(rootReducer);
// now we need to pass this store to any component that needs it
// we start by making our root component aware of the store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
