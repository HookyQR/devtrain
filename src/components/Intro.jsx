import logo from "../assets/logo.svg";

export function Intro({ guessAttempts }) {
  return (
    <>
      <img src={logo} alt="Save Po the Cat" width={500} />
      <p style={{ fontWeight: 600 }}>
        The aim of the game is simple! Figure out the mystery word and save Po!
      </p>
      <Rules guessAttempts={guessAttempts} />
    </>
  );
}

function Rules({ guessAttempts }) {
  return (
    <ol className="rules">
      <li>Using your keyboard guess a letter one at a time</li>
      <li>
        If your carefully selected letter exists in the answer, then all places
        in the answer where that letter appear will be revealed
      </li>
      <li>
        Every time you guess a letter wrong Po falls closer and closer to his
        doom
      </li>
      <li>
        <strong style={{ color: "#000" }}>Careful...</strong> You only get{" "}
        {guessAttempts} failed attempts to solve the puzzle... or Po falls in to
        the void
      </li>
    </ol>
  );
}
