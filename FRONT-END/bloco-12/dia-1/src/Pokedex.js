import React from 'react'
import Pokemon from './Pokemon'
import Data from './Data'
import "./pokemon.css";

const Pokedex = () => {
  return (
    <div className='pokedex-all'>
      { Data.map((el) => <Pokemon data={el} />) }
    </div>
  )
}

export default Pokedex
