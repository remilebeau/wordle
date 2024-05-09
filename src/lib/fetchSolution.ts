import solutions from "../../data/solutions.ts";

export const fetchSolution = () => {
  const solution = solutions[Math.floor(Math.random() * solutions.length)];
  return solution;
};

export default fetchSolution;
