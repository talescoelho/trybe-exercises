import React, { useEffect } from 'react';
import axios from 'axios';
import './pokemon.css';

const handleCkick = async (event, url) => {
  const fetchUrl = await axios(url);
  const data = await fetchUrl.data;
  const { name, types } = data;
  const newName =
    name === 'nidoran-m' ? 'nidoranm' : name === 'mr-mime' ? 'mrmime' : name;
  const parentNode = event.target.parentNode.parentNode.firstElementChild;
  parentNode.innerHTML = `<div class="pokemon-grand-card">
      <div class="pokemon-name-type">
        <span class="pokemon-name">${name}</span>
        ${
          types.length === 1
            ? `<span class="name">${types[0].type.name}</span>`
            : `<span class="name">${types[0].type.name}</span>
              <span class="name">${types[1].type.name}</span>`
        }
      </div>
      <div>
          <img
          class="pokemon-image"
          src="http://play.pokemonshowdown.com/sprites/xyani/${newName}.gif"
          alt=${name}
        />
      </div>
      </br>
      <div class="flex-column">
          <span class="name">${data.stats[0].stat.name}: ${
    data.stats[0].base_stat
  }</span>
          <span class="name">${data.stats[1].stat.name}: ${
    data.stats[1].base_stat
  }</span>
          <span class="name">${data.stats[2].stat.name}: ${
    data.stats[2].base_stat
  }</span>
          <span class="name">${data.stats[3].stat.name}: ${
    data.stats[3].base_stat
  }</span>
          <span class="name">${data.stats[4].stat.name}: ${
    data.stats[4].base_stat
  }</span>
          <span class="name">${data.stats[5].stat.name}: ${
    data.stats[5].base_stat
  }</span>
      </div>
    </div>`;
  parentNode.style.display = 'block';
  console.log(data.stats[0].base_stat);
  // console.log(parentNode);
};

const modalClick = (event) => {
  event.target.style.display = 'none';
};

function Pokemon(props) {
  const { name, url } = props.pokemon;
  const newName =
    name === 'nidoran-m' ? 'nidoranm' : name === 'mr-mime' ? 'mrmime' : name;
  return (
    <div>
      <div className="pokemon-modal" onClick={modalClick}></div>
      <div className="pokemon-card">
        <span className="pokemon-name">{name}</span>
        <div className="pokemon-div-image">
          <img
            className="pokemon-image"
            src={`http://play.pokemonshowdown.com/sprites/xyani/${newName}.gif`}
            alt={name}
          />
        </div>
        <button
          className="pokemon-card-button"
          onClick={(event) => handleCkick(event, url)}
        >
          Sobre
        </button>
      </div>
    </div>
  );
}

export default Pokemon;
