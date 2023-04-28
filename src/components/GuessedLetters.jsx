export function GuessedLetters({ fails, guessAttempts, maskedWord, guesses }) {
  return (
    <>
      <p style={{ margin: "20px 0 0 0" }}>
        {fails >= guessAttempts ? (
          "This cat has no more lives..."
        ) : (
          <>
            You've got <strong>{guessAttempts - fails}</strong> failed attempts
            left!
          </>
        )}
      </p>
      <p
        style={{
          fontSize: "42px",
          marginTop: 0,
          fontFamily: "monospace",
        }}
      >
        {Array.isArray(guesses) &&
          guesses.map((guessedLetter) => (
            <span
              key={guessedLetter}
              style={{
                color: maskedWord.includes(guessedLetter) ? "green" : "red",
              }}
            >
              {guessedLetter}
            </span>
          ))}
      </p>
    </>
  );
}
