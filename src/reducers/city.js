export const cityReducer = (state = [], action) => {
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
