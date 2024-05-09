import Wordle from "./components/Wordle";
import fetchSolution from "./lib/fetchSolution.ts";

function App() {
  const solution = fetchSolution();

  return (
    <main className="max-w-4xl mx-auto flex flex-col gap-4 justify-center items-center mt-8">
      <h1 className="text-5xl font-bold">Wordle</h1>
      <h2 className="text-2xl font-bold">Enter a guess and press Enter</h2>
      <p className="text-2xl font-bold">Refresh the page for a new puzzle</p>
      <section id="instructions" className="flex flex-row gap-4">
        <p className="text-2xl text-green-500 font-bold">
          Correct letter and place
        </p>
        <p className="text-2xl text-yellow-500 font-bold">
          Correct letter, wrong place
        </p>
        <p className="text-2xl text-gray-500 font-bold">Incorrect letter</p>
      </section>

      {solution && <Wordle solution={solution} />}
    </main>
  );
}

export default App;
