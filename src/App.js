import { Intro } from "./components/Intro";
import { IllustrationWrapper } from "./components/Illustration";
import { Layout } from "./components/Layout";
import "./styles/index.css";
import HangmanGame from "./components/HangmanGame";

const App = () => (
  <Layout>
    <IllustrationWrapper livesLeft={6} />
    <div className="rules__wrapper">
      <Intro />
      <HangmanGame />
    </div>
  </Layout>
);

export default App;
