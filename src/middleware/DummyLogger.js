export const dummyLogger = (store) => (next) => (action) => {
  console.log('Executing dummy logger', action);
  next(action);
};

export const anotherLogger = (store) => (next) => (action) => {
  console.log('Executing another logger', action);
  next(action);
};

// export const dummyLogger1 = function (store) {
//   return function (next) {
//     return function (action) {
//       console.log('Executing dummy logger', action);
//       next(action);
//     };
//   };
// };
