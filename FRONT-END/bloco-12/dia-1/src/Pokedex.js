import React from 'react'
import Pokemon from './Pokemon'
import Data from './Data'
import "./pokemon.css";
import SearchType from './SearchType'

const setStates = (setState, setPokemon, el) => {
  setState(Data.filter(type => {
    // console.log(el.type);
    setPokemon(0);
    return type.type === el;
  }))
}

const Pokedex = () => {
  const [state, setState] = React.useState(Data);
  const [pokemon, setPokemon] = React.useState(0)
  const types = Data.map(el => el.type)
  const semRepetidos = [...new Set(types)];
  return (
    <div>
      <h1 className='pokedex-all'>Pokedex</h1>
      <div className='pokedex-all buttons'>
        <SearchType data={'ALL'} click={() => setState(Data.filter(() => true))} />
        { semRepetidos.map((el, i) => <SearchType key={i} data={el} click={() => setStates(setState, setPokemon, el)} />) }
      </div>
      <div className='pokedex-all'>
        <Pokemon data={state[pokemon]} />
      </div>
      <div className='pokedex-all'>
        <button className={'next'} disabled={ state.length <= 1 ? true : false} onClick={() => setPokemon(pokemon < state.length -1 ? pokemon + 1 : 0)}>Next Pokemon</button>
      </div>
    </div>
  )
}

export default Pokedex
