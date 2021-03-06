import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ThemeContext from "./context/theme";
import Home from "./routes/Home/Home";
import NotFound from "./routes/NotFound/NotFound";
import Pokemon from "./routes/Pokemon/Pokemon";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`bg-${theme}`} style={{position: "relative"}}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
