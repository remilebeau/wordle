import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

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
  return <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />;
}
