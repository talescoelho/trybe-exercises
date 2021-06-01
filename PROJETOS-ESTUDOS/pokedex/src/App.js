import Pokemon from './Pokemon';
import React, { useEffect } from 'react';
import axios from 'axios';
import Data from './data.json';
import './app.css';

function App() {
  const pokemonArr = Array.from({ length: 3 }, (_, i) => Data.results[i]);
  console.log(Data.results[0].name);
  return (
    <div className="pokemon-card-list">
      {pokemonArr.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  );
}

export default App;
