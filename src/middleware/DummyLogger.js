export const dummyLogger = (store) => (next) => (action) => {
  console.log('Executing dummy logger', action);
  next(action);
};
