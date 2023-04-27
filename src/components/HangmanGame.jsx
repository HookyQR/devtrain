import { useState } from "react";

export default function Hangman() {
  const word = "MASHNAY";
  const guessAmount = 6;

  const [guesses, setGuesses] = useState([]);
  const [fails, setFails] = useState(0);

  const maskedWord = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  const isGameOver = fails >= guessAmount || !maskedWord.includes("_");

  const printLetters = guesses.map((guessedLetter) => (
    <span
      key={guessedLetter}
      style={{
        color: maskedWord.includes(guessedLetter) ? "lightgray" : "red",
      }}
    >
      {guessedLetter}
    </span>
  ));

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
        <>
          <h2>
            {fails >= guessAmount
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
      )}
      <p className="word">{maskedWord}</p>
      <p style={{ margin: "20px 0 0 0" }}>
        You've got <strong>{guessAmount - fails}</strong> failed attempts left!
      </p>
      <p
        style={{
          fontSize: "42px",
          marginTop: 0,
          fontFamily: "monospace",
        }}
      >
        {printLetters}
      </p>
    </div>
  );
}

function GuessInput({ setGuesses, guesses, setFails, fails, word }) {
  const [inputLetter, setInputLetter] = useState("");

  const handleInput = (event) => {
    setInputLetter(event.target.value.toUpperCase().at(-1));
  };

  const handleGuess = () => {
    if (!inputLetter || undefined) {
      alert("Please enter a letter!");
    } else if (guesses.includes(inputLetter)) {
      alert(`You already guessed "${inputLetter}"!`);
    } else if (!word.includes(inputLetter)) {
      setFails(fails + 1);
      setGuesses([...guesses, inputLetter]);
    } else {
      setGuesses([...guesses, inputLetter]);
    }
    setInputLetter("");
  };

  const isDisabled = inputLetter.length > 0 || null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <h3 style={{ fontSize: "22px" }}>I'm going to try the letter...</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <input
          type="text"
          value={inputLetter}
          onChange={handleInput}
          autoFocus={true}
          onBlur={({ target }) => target.focus()}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleGuess();
            } else if (event.key === "Backspace" || event.key === "Delete") {
              setInputLetter("");
            }
          }}
          placeholder="?"
          className="letter__input"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <button
            onClick={handleGuess}
            className="button__input"
            disabled={isDisabled ? false : true}
          >
            {isDisabled ? "Lock it in!" : "Type a letter first!"}
          </button>
          <span style={{ color: "gray", fontSize: "12px" }}>
            or hit Enter ⮐
          </span>
        </div>
      </div>
    </div>
  );
}
