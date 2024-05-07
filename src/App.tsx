import { FormattedGuess, ColoredLetter } from "./hooks/useWordle";
import useWordle from "./hooks/useWordle";
import Wordle from "./components/Wordle";
import { useState, useEffect } from "react";

function App() {
  const [solution, setSolution] = useState("");

  const fetchSolution = async () => {
    const res = await fetch("http://localhost:3500/solutions");
    const data = await res.json();
    setSolution(data[Math.floor(Math.random() * data.length)].word);
  };

  useEffect(() => {
    fetchSolution();
  }, [setSolution]);

  return (
    <main>
      <h1>Hello World</h1>
      <h2>Solution is {solution}</h2>
      {solution && <Wordle solution={solution} />}
    </main>
  );
}

export default App;
