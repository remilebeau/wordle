import { ColoredLetter } from "../hooks/useWordle";

type Props = {
  guess?: ColoredLetter[];
  currentGuess?: string;
  turn: number;
};

export default function Row({ guess, currentGuess }: Props) {
  if (guess) {
    return (
      <div id="past-row-container" className="flex flex-row gap-2">
        {guess.map((letter, index) => {
          const newBgColor = {
            green: "bg-green-500",
            yellow: "bg-yellow-500",
            gray: "bg-gray-500",
          }[letter.color];
          return (
            <div
              key={index}
              id="past-letter"
              className={`flex flex-row gap-2 items-center justify-center w-16 h-16 font-bold text-black text-3xl rounded-md ${newBgColor}`}
            >
              {letter.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div id="current-row-container" className="flex flex-row gap-2">
        {letters.map((letter, index) => (
          <div
            key={index}
            id="current-letter"
            className="flex flex-row gap-2 items-center justify-center w-16 h-16 font-bold text-black text-3xl rounded-md bg-white"
          >
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div
            key={index}
            id="empty-row"
            className="flex flex-row gap-2 items-center justify-center w-16 h-16 font-bold text-black text-3xl rounded-md bg-white"
          ></div>
        ))}
      </div>
    );
  }

  // return empty rows
  return (
    <div id="empty-row-container" className="flex flex-row gap-2">
      <div
        id="empty-row"
        className="flex flex-row gap-2 items-center justify-center w-16 h-16 font-bold text-black text-3xl rounded-md bg-white"
      ></div>
      <div
        id="empty-row"
        className="flex flex-row gap-2 items-center justify-center w-16 h-16 font-bold text-black text-3xl rounded-md bg-white"
      ></div>
      <div
        id="empty-row"
        className="flex flex-row gap-2 items-center justify-center w-16 h-16 font-bold text-black text-3xl rounded-md bg-white"
      ></div>
      <div
        id="empty-row"
        className="flex flex-row gap-2 items-center justify-center w-16 h-16 font-bold text-black text-3xl rounded-md bg-white"
      ></div>
      <div
        id="empty-row"
        className="flex flex-row gap-2 items-center justify-center w-16 h-16 font-bold text-black text-3xl rounded-md bg-white"
      ></div>
    </div>
  );
}
