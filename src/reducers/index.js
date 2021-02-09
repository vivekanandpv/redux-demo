import { combineReducers } from 'redux';
import { cityReducer } from './city';
import { counterReducer } from './counter';

export const appBaseReducer = combineReducers({
  cities: cityReducer,
  counter: counterReducer,
});
