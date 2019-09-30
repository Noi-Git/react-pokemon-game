import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';
const POKE_API = 'https://pokeres.bastionbot.org/images/pokemon/';

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokemon-img-card">
          <img className="Pokemon-img" src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
