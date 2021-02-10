//  Action creators
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
  //   }, 1000);
  // };

  //  Asynchronous variant 2:
  return (dispatch) => {
    Promise.resolve({
      type: 'addCity',
      payload: city,
    }).then((v) => dispatch(v));
  };
};

export const removeCityActionCreator = (city) => {
  return {
    type: 'removeCity',
    payload: city,
  };
};
