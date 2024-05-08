import { ColoredLetter } from "../hooks/useWordle";

type Props = {
  guess: ColoredLetter[];
};

export default function Row({ guess }: Props) {
  const letterClasses =
    "flex flex-row gap-2 items-center justify-center w-16 h-16 bg-white font-bold text-black text-3xl rounded-md";

  if (guess) {
    return (
      <div id="past-row-container" className="flex flex-row gap-2">
        {guess.map((letter, index) => (
          <div
            key={index}
            id="row"
            className={`${letterClasses} bg-${letter.color}-500`}
          >
            {letter.key}
          </div>
        ))}
      </div>
    );
  }
  // return empty rows
  return (
    <div id="empty-row-container" className="flex flex-row gap-2">
      <div id="row" className={letterClasses}></div>
      <div id="row" className={letterClasses}></div>
      <div id="row" className={letterClasses}></div>
      <div id="row" className={letterClasses}></div>
      <div id="row" className={letterClasses}></div>
    </div>
  );
}
