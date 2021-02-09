//  Action creators
export const addCityActionCreator = (city) => {
  return {
    type: 'addCity',
    payload: city,
  };
};

export const removeCityActionCreator = (city) => {
  return {
    type: 'removeCity',
    payload: city,
  };
};
