import Wordle from "./components/Wordle";
import { useState, useEffect } from "react";

function App() {
  const [solution, setSolution] = useState("");

  const fetchSolution = async () => {
    const res = await fetch(
      "https://wordle-backend-od4f.onrender.com/api/solutions"
    );
    const { solution } = await res.json();
    console.log({ solution });
    setSolution(solution);
  };

  useEffect(() => {
    fetchSolution();
    console.log({ solution });
  }, [setSolution]);

  return (
    <main className="max-w-4xl mx-auto flex flex-col justify-center items-center">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </main>
  );
}

export default App;
