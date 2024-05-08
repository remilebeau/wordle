import { ColoredLetter } from "../hooks/useWordle";

type Props = {
  guess?: ColoredLetter[];
  currentGuess?: string;
};

export default function Row({ guess, currentGuess }: Props) {
  const letterClasses =
    "flex flex-row gap-2 items-center justify-center w-16 h-16 bg-white font-bold text-black text-3xl rounded-md";

  if (guess) {
    return (
      <div id="past-row-container" className="flex flex-row gap-2">
        {guess.map((letter, index) => (
          <div
            key={index}
            id="past-letter"
            className={`${letterClasses} bg-${letter.color}-500`}
          >
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div id="current-row-container" className="flex flex-row gap-2">
        {letters.map((letter, index) => (
          <div key={index} id="current-letter" className={`${letterClasses}`}>
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index} id="empty-row" className={`${letterClasses}`}></div>
        ))}
      </div>
    );
  }

  // return empty rows
  return (
    <div id="empty-row-container" className="flex flex-row gap-2">
      <div id="empty-row" className={letterClasses}></div>
      <div id="empty-row" className={letterClasses}></div>
      <div id="empty-row" className={letterClasses}></div>
      <div id="empty-row" className={letterClasses}></div>
      <div id="empty-row" className={letterClasses}></div>
    </div>
  );
}
