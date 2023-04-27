import logo from "../assets/logo.svg";
import { Word } from "./Word";

function Intro() {
  return (
    <p className="highlight">
      The aim of the game is simple! Guess the letters and find the missing word
      or words
    </p>
  );
}

function Rules() {
  return (
    <ol className="rules">
      <li>
        Use your keyboard to guess a letter one at a time, hit{" "}
        <strong className="highlight">Enter ⮐</strong> to lock in your answer
      </li>
      <li>
        If your carefully selected letter exists in the answer, then all places
        in the answer where that letter appear will be revealed
      </li>
      <li>
        Every time you guess a letter wrong Po falls closer and closer to doom.
      </li>
      <li>
        <strong style={{ color: "#000" }}>Careful...</strong> You only get 9
        failed attempts to solve the puzzle... or Po falls to the void
      </li>
    </ol>
  );
}

export function Game() {
  return (
    <div className="rules__wrapper">
      <img src={logo} alt="Save Po the Cat" width={500} />
      <Intro />
      <Rules />
      <Word />
    </div>
  );
}
