import { applyMiddleware, createStore, compose } from 'redux';
import { appBaseReducer } from '../reducers';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const storeMiddleware = [applyMiddleware(reduxLogger), applyMiddleware(thunk)];

export const appStore = createStore(
  appBaseReducer,
  { cities: [], counter: 0 },
  composeWithDevTools(...storeMiddleware)
);
