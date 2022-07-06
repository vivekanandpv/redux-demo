//  Action creators
import axios from "axios";


export const addCityActionCreator = (city) => {
  // Synchronous variant:

  // return {
  //   type: 'addCity',
  //   payload: city,
  // };

  //  Technique:
  //  Instead of returning the action object, return a function that
  //  takes dispatch as argument. Inside this function, call dispatch
  //  with action after the async action completes.

  //  As such, it is not possible to dispatch async actions. We use
  //  Redux-thunk middleware to do this.

  //  Asynchronous variant 1:
  // return (dispatch) => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: 'addCity',
  //       payload: city,
  //     });
  //   }, 2000);
  // };

  //  Asynchronous variant 2:
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
          dispatch({
            type: 'addCity',
            payload: `${city} --> ${res.data.title}`,
          });
        });
  };
};

export const removeCityActionCreator = (city) => {
  return {
    type: 'removeCity',
    payload: city,
  };
};
