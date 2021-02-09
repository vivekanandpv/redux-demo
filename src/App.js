import { useSelector } from 'react-redux';

const App = () => {
  const cities = useSelector((state) => state.cities);
  const counter = useSelector((state) => state.counter);
  return (
    <div className='container p-5'>
      <h3>Learning Redux | Counter: {counter}</h3>
      <hr />
      <ul>
        {cities.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
