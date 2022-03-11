import { applyMiddleware, createStore, compose } from 'redux';
import { appBaseReducer } from '../reducers';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

const storeMiddleware = [applyMiddleware(reduxLogger), applyMiddleware(thunk)];

export const appStore = createStore(
  appBaseReducer,
  { cities: [], counter: 0 },
  compose(...storeMiddleware)
);
