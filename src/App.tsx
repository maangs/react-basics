import { useState } from "react";
import "./App.css";
import { ReduxCounter } from "./app/feature/counterComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ReduxCounter />
      </div>
    </>
  );
}

export default App;
