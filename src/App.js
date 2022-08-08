import { useDispatch, useSelector } from 'react-redux';
import { addCityActionCreator } from './actions/city';
import { incrementActionCreator } from './actions/counter';
import { loadTodos } from './actions/todos';

const App = () => {
  const cities = useSelector((state) => state.cities);
  const counter = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todos.todos);
  const todosErrorMessage = useSelector((state) => state.todos.errorMessage);

  const dispatch = useDispatch();

  const list = ['Mumbai', 'Bengaluru', 'Chennai', 'Kanpur'];

  const addAllCities = () => {
    list.forEach((c) => {
      dispatch(addCityActionCreator(c));
    });
  };

  return (
    <div className='container p-5'>
      <h3>Learning Redux | Counter: {counter}</h3>
      <p className='text-danger'>{todosErrorMessage}</p>
      <hr />
      <ul>
        {cities.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <button className='btn btn-primary' onClick={addAllCities}>
        Add All Cities
      </button>
      <button
        className='btn btn-warning ml-3'
        onClick={() => dispatch(incrementActionCreator())}
      >
        Increment
      </button>
      <button
        className='btn btn-info ml-3'
        onClick={() => dispatch(loadTodos())}
      >
        Load Data
      </button>

      <hr />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default App;
