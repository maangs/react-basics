import { useState } from 'react';
import './App.css';
import { ReduxCounter } from './app/features/counterComponent';
import { UserComponent } from './app/features/userComponent';
import { UserTestComponent } from './app/features/userTestComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React useState hook</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <UserTestComponent />
        <ReduxCounter />

        <UserComponent />
      </div>
    </>
  );
}

export default App;
