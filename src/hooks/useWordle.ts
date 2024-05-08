import { useState } from "react";

export type ColoredLetter = {
  key: string;
  color: string;
};

export default function useWordle(solution: string) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<ColoredLetter[][]>([...Array(6)]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = (): ColoredLetter[] => {
    let solutionArray = [...solution];
    let formattedGuess: ColoredLetter[] = [...currentGuess].map((letter) => {
      return {
        key: letter,
        color: "gray",
      };
    });

    // if the letter is correct and in the right place, color it green
    formattedGuess.forEach((letter, position) => {
      if (solutionArray[position] === letter.key) {
        formattedGuess[position].color = "green";
        solutionArray[position] = "";
      }
    });

    // if the letter is correct but in the wrong place, color it yellow
    formattedGuess.forEach((letter, position) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formattedGuess[position].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = "";
      }
    });

    return formattedGuess;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess: ColoredLetter[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setCurrentGuess("");
  };

  // handle keyup event and track the current guess
  // if the enter key is pressed, add the new guess
  // clear the current guess
  const handleKeyup = ({ key }: KeyboardEvent) => {
    const isSingleLetter = key.length === 1 && key.match(/[a-z]/i);
    if (isSingleLetter && currentGuess.length < 5) {
      setCurrentGuess((prevGuess) => prevGuess + key.toUpperCase());
    }
    if (key === "Backspace") {
      setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
    }
    // only add guess if turn <= 5, the guess is not a duplicate, and the guess is 5 letters long
    if (
      key === "Enter" &&
      turn <= 5 &&
      !history.includes(currentGuess) &&
      currentGuess.length === 5
    ) {
      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyup,
  };
}
