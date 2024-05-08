import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

type Props = {
  solution: string;
};

export default function Wordle({ solution }: Props) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log({ guesses, turn, isCorrect });
  }, [guesses, turn, isCorrect]);
  return (
    <>
      <p>Current Guess: {currentGuess}</p>
    </>
  );
}
