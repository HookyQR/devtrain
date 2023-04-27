import { GameDetails } from "./components/GameDetails";
import { IllustrationWrapper } from "./components/Illustration";
import { Layout } from "./components/Layout";
import "./styles/index.css";

const App = () => (
  <Layout>
    <IllustrationWrapper />
    <GameDetails />
  </Layout>
);

export default App;
