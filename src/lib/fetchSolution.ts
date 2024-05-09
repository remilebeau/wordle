import solutions from "../../data/solutions.ts";

export const fetchSolution = () => {
  const solution = solutions[Math.floor(Math.random() * solutions.length)];
  // log solution during development
  console.log(solution);
  return solution;
};

export default fetchSolution;
