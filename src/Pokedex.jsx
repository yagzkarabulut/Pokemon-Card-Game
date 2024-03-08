import { Component } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";
import PokeGame from "./Pokegame";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="pokedex-title-w">Winning Player</h1>;
    } else {
      title = <h1 className="pokedex-title-l">Losing Player</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Exprience:{this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
