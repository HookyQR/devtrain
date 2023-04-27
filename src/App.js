import { Game } from "./components/Game";
import { IllustrationWrapper } from "./components/Illustration";
import { Layout } from "./components/Layout";
import "./styles/index.css";

const App = () => (
  <Layout>
    <IllustrationWrapper />
    <Game />
  </Layout>
);

export default App;
