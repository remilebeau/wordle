import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

type Props = {
  solution: string;
};

export default function Wordle({ solution }: Props) {
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);
  return (
    <section>
      <p>Current Guess: {currentGuess}</p>
    </section>
  );
}
