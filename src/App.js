import "the-new-css-reset/css/reset.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import "./Styless/variables.css";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
