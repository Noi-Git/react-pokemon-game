import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 1, name: 'Bulbasaur', type: 'Grass', base_experience: 45 },
      { id: 2, name: 'Ivysaur', type: 'Poison', base_experience: 60 },
      { id: 118, name: 'Goldeen', type: 'Water', base_experience: 45 },
      {
        id: 8,
        name: 'Wartortle',
        type: ['Water ', 'Bug'],
        base_experience: 59
      },
      { id: 14, name: 'Kakuna', type: 'Bug', base_experience: 45 },
      { id: 25, name: 'Pikachu', type: 'Electric', base_experience: 35 },
      { id: 38, name: 'Ninetales', type: 'Fire', base_experience: 73 },
      { id: 55, name: 'Golduck', type: 'Water', base_experience: 80 }
    ]
  };

  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];

    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }

    // console.log(hand1);
    // console.log(hand2);

    // calculate score
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}
export default Pokegame;
