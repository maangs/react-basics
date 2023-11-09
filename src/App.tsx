import { useState } from "react";
import "./App.css";
import { ReduxCounter } from "./app/features/counterComponent";
import { useGetUsersQuery } from "./app/services/rtkQuery";

function App() {
  const [count, setCount] = useState(0);

  // const { data } = useGetUsersQuery(undefined);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ReduxCounter />
        <br />
        {/* <h1>Users: {JSON.stringify(data)}</h1> */}
      </div>
    </>
  );
}

export default App;
