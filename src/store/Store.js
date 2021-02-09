import { applyMiddleware, createStore, compose } from 'redux';
import { appBaseReducer } from '../reducers';
import reduxLogger from 'redux-logger';

const enhancers = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxLogger),
];

export const appStore = createStore(
  appBaseReducer,
  { cities: [], counter: 0 },
  compose(...enhancers)
);
