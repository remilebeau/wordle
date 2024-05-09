import Wordle from "./components/Wordle";
import { useState, useEffect } from "react";

function App() {
  const [errMsg, setErrMsg] = useState("");
  const [solution, setSolution] = useState("");

  const fetchSolution = async () => {
    const res = await fetch(
      "https://wordle-backend-od4f.onrender.com/api/solutions"
    );
    if (!res.ok) {
      setErrMsg("Failed to fetch solution");
    }
    const { solution } = await res.json();
    setSolution(solution);
  };

  useEffect(() => {
    fetchSolution();
  }, [setSolution]);

  return (
    <main className="max-w-4xl mx-auto flex flex-col justify-center items-center">
      <h1>Wordle</h1>
      {errMsg && <p>{errMsg}</p>}
      {solution && <Wordle solution={solution} />}
    </main>
  );
}

export default App;
