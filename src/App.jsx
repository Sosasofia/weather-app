import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl text-slate-500">Vite + React</h1>
      <div className="grid place-items-center">
        <div className="text-6xl text-red-600">{count}</div>
        <button
          className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count+
        </button>
      </div>
    </div>
  );
}

export default App;
