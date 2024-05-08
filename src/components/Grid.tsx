import { ColoredLetter } from "../hooks/useWordle";
import Row from "./Row";

type Props = {
  guesses: ColoredLetter[][];
  currentGuess: string;
  turn: number;
};

export default function Grid({ guesses, currentGuess, turn }: Props) {
  return (
    <section id="grid" className="flex flex-col gap-4">
      {guesses.map((row, turn) => (
        <Row key={turn} />
      ))}
    </section>
  );
}
