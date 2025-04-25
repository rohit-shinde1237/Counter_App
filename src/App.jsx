import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="border-4 border-amber-700 rounded-3xl p-10 bg-amber-100 shadow-lg w-96 text-center">
        <h1 className="text-4xl font-semibold bg-amber-400 py-2 px-4 rounded-2xl inline-block">
          COUNTER
        </h1>
        <h2 className="my-6 text-5xl font-semibold">{count}</h2>
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <button
            className="font-semibold text-4xl bg-amber-800 text-white w-20 h-20 rounded-full"
            onClick={() => setcount(count + 1)}
          >
            +
          </button>
          <button
            className="font-semibold text-4xl bg-amber-800 text-white w-20 h-20 rounded-full"
            onClick={() => setcount(0)}
          >
            0
          </button>
          <button
            className="font-semibold text-4xl bg-amber-800 text-white w-20 h-20 rounded-full"
            onClick={() => setcount(count - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
