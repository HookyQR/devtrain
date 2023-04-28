import { useState, useEffect, useMemo } from "react";
import { GuessedLetters } from "./GuessedLetters";
import { GuessInput } from "./GuessInput";

function GameOverScreen({ gameIsLost }) {
  return (
    <>
      <h1>
        {gameIsLost
          ? "You lose... To the void you go Po!"
          : "You saved Po! Yayyyy"}
      </h1>
      <button
        className="button__input"
        onClick={() => window.location.reload()}
      >
        {gameIsLost ? "Try Again" : "Play Again"}
      </button>
    </>
  );
}

export default function Hangman() {
  const words = useMemo(() => ["luna", "hooky", "react", "doggo"], []);

  const guessAttempts = 6;

  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [fails, setFails] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex].toUpperCase());
  }, [words]);

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
      <p
        className="word"
        style={{
          color: gameIsWon ? "white" : "black",
          backgroundColor: gameIsWon ? "green" : "transparent",
          borderColor: gameIsWon ? "green" : "#e0e0e0",
        }}
      >
        {maskedWord}
      </p>
      <GuessedLetters
        guessAttempts={guessAttempts}
        maskedWord={maskedWord}
        fails={fails}
        guesses={guesses}
      />
    </div>
  );
}
