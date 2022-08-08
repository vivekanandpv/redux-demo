import produce from 'immer';

export const todosReducer = (
  state = {
    todos: [],
    errorMessage: null,
  },
  action
) => {
  switch (action.type) {
    case 'loadTodosSuccess': {
      return produce(state, (d) => {
        d.todos = action.payload;
        d.errorMessage = null;
      });
    }

    case 'loadTodosFailed': {
      return produce(state, (d) => {
        d.todos = [];
        d.errorMessage = action.payload;
      });
    }

    default:
      return state;
  }
};
