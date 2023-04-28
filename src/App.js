import { useState } from "react";
import { Intro } from "./components/Intro";
import { IllustrationWrapper } from "./components/Illustration";
import { Layout } from "./components/Layout";
import "./styles/index.css";
import HangmanGame from "./components/HangmanGame";

const words = ["luna", "hooky", "react", "doggo"];
const guessAttempts = 6;

export default function App() {
  const [guesses, setGuesses] = useState([]);
  const [fails, setFails] = useState(0);

  return (
    <Layout>
      <IllustrationWrapper livesLeft={guessAttempts - fails} />
      <div className="rules__wrapper">
        <Intro guessAttempts={guessAttempts} />
        <HangmanGame
          words={words}
          guesses={guesses}
          guessAttempts={guessAttempts}
          setGuesses={setGuesses}
          fails={fails}
          setFails={setFails}
        />
      </div>
    </Layout>
  );
}
