import { useState } from "react";

export function GuessInput({ setGuesses, guesses, setFails, fails, word }) {
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
          {isDisabled && (
            <span style={{ color: "gray", fontSize: "12px" }}>
              or hit Enter ⮐
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
