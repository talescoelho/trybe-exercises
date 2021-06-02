import React from 'react';

function Button() {
  return (
    <button
      className="pokemon-card-button"
      onClick={(event) => handleCkick(event, url)}
    >
      Sobre
    </button>
  );
}

export default Button;
