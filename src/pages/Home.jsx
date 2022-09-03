import React, { useState } from "react";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="text-3xl text-slate-500">Vite + React</h1>
      <div className="grid place-items-center">
        <div className="text-6xl text-red-600">{count}</div>
        <button
          className="rounded bg-green-800 px-6 py-2 text-white hover:bg-green-600"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count+
        </button>
      </div>
      <div className="mt-2">
        <ThemeSwitch />
      </div>
    </div>
  );
}
