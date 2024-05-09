import Wordle from "./components/Wordle";
import fetchSolution from "./lib/fetchSolution.ts";

function App() {
  const solution = fetchSolution();

  return (
    <main className="max-w-4xl mx-auto flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl font-bold">Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </main>
  );
}

export default App;
