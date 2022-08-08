import { combineReducers } from 'redux';
import { cityReducer } from './city';
import { counterReducer } from './counter';
import { todosReducer } from './todos';

export const appBaseReducer = combineReducers({
  cities: cityReducer,
  counter: counterReducer,
  todos: todosReducer,
});
