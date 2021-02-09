import { createStore } from 'redux';
import { appBaseReducer } from '../reducers';
import { addCityActionCreator, removeCityActionCreator } from '../actions/city';
import {
  incrementActionCreator,
  decrementActionCreator,
} from '../actions/counter';

const appStore = createStore(
  appBaseReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//  Subscription
appStore.subscribe(() => console.log('App Store', appStore.getState()));

appStore.dispatch(addCityActionCreator('Mumbai'));
appStore.dispatch(addCityActionCreator('Bengaluru'));
appStore.dispatch(addCityActionCreator('Delhi'));
appStore.dispatch(removeCityActionCreator('Mumbai'));

appStore.dispatch(incrementActionCreator());
appStore.dispatch(incrementActionCreator());
appStore.dispatch(incrementActionCreator());
appStore.dispatch(incrementActionCreator());
appStore.dispatch(decrementActionCreator());
