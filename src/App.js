
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import NotFound from "./routes/NotFound/NotFound";
import Pokemon from "./routes/Pokemon/Pokemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
