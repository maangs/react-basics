import { useState } from 'react';
import './App.css';
import { ReduxCounter } from './app/features/counterComponent';
import { UserComponent } from './app/features/userComponent';
import { UserTestComponent } from './app/features/userTestComponent';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <nav>
            <ul>
              <li>
                <Link to={`reduxcounter`}>reduxcounter</Link>
              </li>
              <li>
                <Link to={`localapi`}>localapi</Link>
              </li>
            </ul>
          </nav>
          <h1>React useState hook</h1>
          <div className='card'>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </>
      ),

      errorElement: <h1>Error. so sad =(</h1>,
    },
    {
      path: '/reduxcounter',
      element: <ReduxCounter />,
      children: [
        {
          path: 'redux',
          element: <h1>hej</h1>,
        },
      ],
    },
    {
      path: '/localapi',
      element: <UserTestComponent />,
    },
    {
      path: '/externalapi',
      element: <UserComponent />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
