import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { counterSlice } from '../store/CounterSlice';

const epic1 = (action$) =>
  action$.pipe(
    ofType('counter/increment'),
    map(() => {
      return counterSlice.actions.customMultiply(5);
    })
  );

export default epic1;
