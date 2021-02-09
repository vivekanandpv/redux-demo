import { createStore } from 'redux';

//  Action creators
const addCityActionCreator = (city) => {
  return {
    type: 'addCity',
    payload: city,
  };
};

const removeCityActionCreator = (city) => {
  return {
    type: 'removeCity',
    payload: city,
  };
};

//  Reducer
const cityReducer = (state = [], action) => {
  switch (action.type) {
    case 'addCity': {
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    }

    case 'removeCity': {
      return [...state.filter((c) => c !== action.payload)];
    }

    default:
      return state;
  }
};

//  Store
const appStore = createStore(cityReducer);

//  Subscription
appStore.subscribe(() => console.log('App Store', appStore.getState()));

appStore.dispatch(addCityActionCreator('Mumbai'));
appStore.dispatch(addCityActionCreator('Bengaluru'));
appStore.dispatch(addCityActionCreator('Delhi'));
appStore.dispatch(removeCityActionCreator('Mumbai'));
