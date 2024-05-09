import Wordle from "./components/Wordle";
import solutions from "../data/solutions.ts";
import { useState, useEffect } from "react";

function App() {
  const [solution, setSolution] = useState("");

  const fetchSolution = () => {
    const solution = solutions[Math.floor(Math.random() * solutions.length)];
    setSolution(solution);
    console.log({ solution });
  };

  useEffect(() => {
    fetchSolution();
  }, [setSolution]);

  return (
    <main className="max-w-4xl mx-auto flex flex-col justify-center items-center">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </main>
  );
}

export default App;
