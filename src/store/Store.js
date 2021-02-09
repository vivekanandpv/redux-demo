import { applyMiddleware, createStore, compose } from 'redux';
import { dummyLogger } from '../middleware/DummyLogger';
import { appBaseReducer } from '../reducers';

const enhancers = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(dummyLogger),
];

export const appStore = createStore(
  appBaseReducer,
  { cities: [], counter: 0 },
  compose(...enhancers)
);
