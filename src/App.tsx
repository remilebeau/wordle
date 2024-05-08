import Wordle from "./components/Wordle";
import { useState, useEffect } from "react";

function App() {
  const [solution, setSolution] = useState("");

  const fetchSolution = async () => {
    const res = await fetch(
      "https://wordle-backend-od4f.onrender.com/api/solutions"
    );
    const data = await res.json();
    setSolution(data.word);
  };

  useEffect(() => {
    fetchSolution();
  }, [setSolution]);

  return (
    <main className="max-w-4xl mx-auto flex flex-col justify-center items-center">
      <h1>Hello World</h1>
      <h2>Solution is {solution}</h2>
      {solution && <Wordle solution={solution} />}
    </main>
  );
}

export default App;
