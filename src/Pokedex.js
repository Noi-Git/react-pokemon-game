import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  // static defaultProps = {
  //   pokemon: [
  //     { id: 1, name: 'Bulbasaur', type: 'Grass', base_experience: 45 },
  //     { id: 2, name: 'Ivysaur', type: 'Poison', base_experience: 60 },
  //     { id: 118, name: 'Goldeen', type: 'Water', base_experience: 45 },
  //     { id: 8, name: 'Wartortle', type: 'Water', base_experience: 59 },
  //     { id: 14, name: 'Kakuna', type: 'Bug', base_experience: 45 },
  //     { id: 25, name: 'Pikachu', type: 'Electric', base_experience: 35 },
  //     { id: 38, name: 'Ninetales', type: 'Fire', base_experience: 73 },
  //     { id: 55, name: 'Golduck', type: 'Water', base_experience: 80 }
  //   ]
  // };

  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Loser Hand</h1>;
    }

    return (
      <div className="Pokedex">
        {title}
        <h3>Total Experience: {this.props.exp} </h3>

        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard
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
