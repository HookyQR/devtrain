export function GuessedLetters({ fails, guessAttempts, maskedWord, guesses }) {
  return (
    <>
      <p className="guessedletters__wrapper">
        {fails >= guessAttempts ? (
          "This cat has no more lives..."
        ) : (
          <>
            You've got <strong>{guessAttempts - fails}</strong> failed attempts
            left!
          </>
        )}
      </p>
      <p className="guessedletters">
        {Array.isArray(guesses) &&
          guesses.map((guessedLetter) => {
            const correctLetter = maskedWord.includes(guessedLetter);
            return (
              <span
                key={guessedLetter}
                style={{
                  color: correctLetter ? "green" : "red",
                }}
              >
                {guessedLetter}
              </span>
            );
          })}
      </p>
    </>
  );
}
