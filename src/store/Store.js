import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { appBaseReducer } from '../reducers';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import { citySlice } from './CitySlice';
import { counterSlice } from './CounterSlice';

const storeMiddleware = [applyMiddleware(reduxLogger), applyMiddleware(thunk)];

export const appStore = configureStore({
  reducer: {
    cities: citySlice.reducer,
    counter: counterSlice.reducer,
  },
  middleware: [reduxLogger, thunk],
});
