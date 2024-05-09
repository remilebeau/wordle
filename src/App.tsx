import Wordle from "./components/Wordle";
import fetchSolution from "./lib/fetchSolution.ts";

function App() {
  const solution = fetchSolution();

  return (
    <main className="max-w-4xl mx-auto flex flex-col justify-center items-center">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </main>
  );
}

export default App;
