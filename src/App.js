import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>I should see this</h3> : ''}
    </div>
  );
}

export default App;
