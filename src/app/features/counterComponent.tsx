import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { Outlet } from 'react-router-dom';

export const ReduxCounter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>REDUX</h1>
      <button onClick={() => dispatch(increment())}>Click +</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Click + 10
      </button>
      <button onClick={() => dispatch(decrement())}>Click -</button>
      <h3>Redux State:{count}</h3>

      <br />
      <h3>Ooutlet:</h3>
      <Outlet />
    </>
  );
};
