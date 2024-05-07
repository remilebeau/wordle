import { useState } from "react";

export type ColoredLetter = {
  key: string;
  color: string;
};

export type FormattedGuess = {
  letters: ColoredLetter[];
};

export default function useWordle(solution: string) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<FormattedGuess[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = (guess: string): FormattedGuess => {
    const letters = guess.split("").map((letter) => {
      return { key: letter, color: "gray" };
    });

    return {
      letters,
    };
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess: FormattedGuess) => {
    //  TODO
  };

  // handle keyup event and track the current guess
  // if the enter key is pressed, add the new guess
  // clear the current guess
  const handleKeyup = (e: KeyboardEvent) => {
    //  TODO
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyup,
  };
}
