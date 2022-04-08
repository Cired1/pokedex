import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ThemeContext from "./context/theme";
import Home from "./routes/Home/Home";
import NotFound from "./routes/NotFound/NotFound";
import Pokemon from "./routes/Pokemon/Pokemon";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`bg-${theme}`}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
