import React from 'react'

const FetchPokemon = (prop) => {
  console.log(prop.state.name);
  return (
    <div>
      <span>{prop.state.name}</span>
    </div>
  )
}

export default FetchPokemon
