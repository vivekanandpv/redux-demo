import axios from 'axios';

//  This is a thunk
export const loadTodos = () => {
  return (dispatch) => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        //    success action
        dispatch({
          type: 'loadTodosSuccess',
          payload: res.data,
        });
      })
      .catch((error) => {
        //    failed action
        dispatch({
          type: 'loadTodosFailed',
          payload: error.message,
        });
      });
  };
};
