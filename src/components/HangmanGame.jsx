import { useState } from "react";
import { GuessedLetters } from "./GuessedLetters";
import { GuessInput } from "./GuessInput";

function GameOverScreen({ gameIsLost }) {
  return (
    <>
      <h2>
        {gameIsLost
          ? "You lose... To the void you go Po!"
          : "You saved Po! Yayyyy"}
      </h2>
      <button
        className="button__input"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </>
  );
}

export default function Hangman() {
  const word = "MASHNAY";
  const guessAttempts = 6;

  const [guesses, setGuesses] = useState([]);
  const [fails, setFails] = useState(0);

  const maskedWord = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  const gameIsLost = fails >= guessAttempts;
  const gameIsWon = !maskedWord.includes("_");
  const isGameOver = gameIsLost || gameIsWon;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {!isGameOver ? (
        <GuessInput
          setGuesses={setGuesses}
          guesses={guesses}
          setFails={setFails}
          fails={fails}
          word={word}
        />
      ) : (
        <GameOverScreen gameIsLost={gameIsLost} />
      )}
      <p className="word">{maskedWord}</p>
      <GuessedLetters
        guessAttempts={guessAttempts}
        maskedWord={maskedWord}
        fails={fails}
        guesses={guesses}
      />
    </div>
  );
}
