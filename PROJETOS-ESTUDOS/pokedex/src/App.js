import Pokemon from './Pokemon';
import React, { useEffect } from 'react';
import Data from './data.json';
import './app.css';

function App() {
  const [page, setPage] = React.useState(0);
  const pokemonArr = Array.from(
    { length: 12 },
    (_, i) => Data.results[i + page],
  );
  return (
    <div>
      <div className="pokemon-card-list">
        {pokemonArr.map((pokemon, index) => (
          <Pokemon key={index} pokemon={pokemon} />
        ))}
      </div>
      <div className="buttons" disabled={true}>
        <button disabled={page <= 0 && true} onClick={() => setPage(page - 1)}>
          Anterior
        </button>
        <button
          disabled={page >= 151 && true}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
