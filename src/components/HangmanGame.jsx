import { useState } from "react";

export default function Hangman() {
  const word = "LUNA";

  const [guesses, setGuesses] = useState([]);
  const [fails, setFails] = useState(0);

  const maskedWord = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  const handleGuess = (letter) => {
    if (guesses.includes(letter)) {
      alert(`You already guessed "${letter}"!`);
    } else if (!word.includes(letter)) {
      setFails(fails + 1);
      setGuesses([...guesses, letter]);
    } else {
      setGuesses([...guesses, letter]);
    }
  };

  const isGameOver = fails >= 6 || !maskedWord.includes("_");

  return (
    <div>
      <p className="word">{maskedWord}</p>
      <p>Fails: {fails}</p>
      <Keyboard handleGuess={handleGuess} />
      {!maskedWord.includes("_") && <p>You won!</p>}
      {isGameOver && (
        <div>
          <h2>{fails >= 6 ? "You lose!" : "You win!"}</h2>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      )}
    </div>
  );
}

function Keyboard({ handleGuess }) {
  const keyboardLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <>
      {keyboardLetters.map((letter, index) => (
        <button
          key={index}
          onClick={() => {
            handleGuess(letter);
          }}
        >
          {letter}
        </button>
      ))}
    </>
  );
}
