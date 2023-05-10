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

  const isDisabled = inputLetter.length > 0;

  return (
    <div className="guessinput__wrapper">
      <input
        className="guessinput__input"
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
      />
      <div className="guessinput__submit">
        <button
          className="guessinput__submitbutton"
          onClick={handleGuess}
          disabled={isDisabled ? false : true}
        >
          {isDisabled ? "Lock it in!" : "Type a letter first!"}
        </button>
        {isDisabled && (
          <span className="guessinput__submithelper">or hit Enter ⮐</span>
        )}
      </div>
    </div>
  );
}
