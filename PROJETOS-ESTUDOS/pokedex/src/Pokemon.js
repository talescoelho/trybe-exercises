import React, { useEffect } from 'react';
import './pokemon.css';

const handleCkick = (url) => {
  console.log(url);
};

function Pokemon(props) {
  const { name, url } = props.pokemon;
  return (
    <div className="pokemon-card">
      <span className="pokemon-name">{name}</span>
      <div className="pokemon-div-image">
        <img
          className="pokemon-image"
          src={`http://play.pokemonshowdown.com/sprites/xyani/${name}.gif`}
          alt={name}
        />
      </div>
      <button className="pokemon-card-button" onClick={() => handleCkick(url)}>
        Sobre
      </button>
    </div>
  );
}

export default Pokemon;
