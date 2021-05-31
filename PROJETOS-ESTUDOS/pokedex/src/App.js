import Pokemon from './Pokemon';
import React, {useEffect} from 'react';
import axios from 'axios';
import './app.css'

const fetchApi = async (poke) => {
  const result = await axios(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  const data = await result.data;
  return data;
}

function App() {
  const pokeTypes = {
    normal: '#AAABA1',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dark: '#705848',
    dragon: '#7038F8',
    steel: '#B8B8D0',
    fairy: '#F0B6BC'
  }
  const [poke, setPoke] = React.useState([...new Set(Array.from({length: 8}, () => Math.floor(Math.random() * 150)))]);
  const [state, setState] = React.useState([]);

  useEffect(() => {
  for (let index = 0; index <= poke.length; index += 1) {
      const setAsyncState = async () => {
        const par = await fetchApi(poke[index]);
        await setState(() => {
          state.push(par);
          return [...new Set(state)];
        });
      }
      setAsyncState();
    }
  }, [])

  return (
    state.length === 0
      ? <div>Loading...</div>
      : <div className="pokemon-card-list">
        {state.map(st => <Pokemon pokemon={st} element={pokeTypes} key={st.id}/>)}
      </div>
  );
}

export default App;
