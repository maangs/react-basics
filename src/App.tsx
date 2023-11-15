import { useState } from 'react';
import './App.css';
import { ReduxCounter } from './app/features/counterComponent';
import { ExternalUsersComponent } from './app/features/externalUsersComponent';
import { LocalUsersComponent } from './app/features/localUsersComponent';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Link to={`reduxcounter`}>
            <button>Redux Counter</button>
          </Link>
          <Link to={`localapi`}>
            <button>Local api</button>
          </Link>
          <Link to={`externalapi`}>
            <button>External api</button>
          </Link>
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
      element: <LocalUsersComponent />,
    },
    {
      path: '/externalapi',
      element: <ExternalUsersComponent />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
