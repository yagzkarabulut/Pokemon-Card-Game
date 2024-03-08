import "./App.css";
import Pokecard from "./PokeCard";
import "./Pokecard.css";
import Pokedex from "./Pokedex";
import PokeGame from "./Pokegame";
function App() {
  return (
    <div className="App">
      <h1 className="pokemon-game">Pokemon Go Card Game</h1>
      <PokeGame />
    </div>
  );
}

export default App;
