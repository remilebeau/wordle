import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

type Props = {
  solution: string;
};

export default function Wordle({ solution }: Props) {
  const { currentGuess, handleKeyup, guesses, turn } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />;
}
