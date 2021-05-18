const typesColor = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  ice: '#98D8D8',
  fighting: '#C03328',
  poison: '#A14AA1',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F55788',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7568F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#F49AE1',
}

const pokemonPreview = (url) => {
  const pokemonPreview = document.getElementById('pokemon-preview');
  pokemonPreview.innerHTML = '';
  fetch(url)
  .then((result) => result.json())
  .then((pokemon) => {
    // console.log(pokemon)
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'pokemon-card';

    const color = pokemon.types.map((types) => typesColor[types.type.name]);

    if (color.length <= 1) {
      color.push(color[0]);
    }

    pokemonDiv.style.background = `linear-gradient(45deg, ${color[0]}, white, ${color[1]})`;

    const pokemonName = document.createElement('span');
    pokemonName.innerHTML = `<span>${pokemon.name}</span> <span>${pokemon.id}</span>`;
    const pokemonType = document.createElement('span');
    pokemonType.innerText = pokemon.types.map(({type}) => ` ${type.name}`);
    const pokemonImage = document.createElement('img');
    pokemonImage.src = `${pokemon.sprites.front_default}`;

    pokemonPreview.appendChild(pokemonDiv);
    pokemonDiv.appendChild(pokemonName);
    pokemonDiv.appendChild(pokemonImage);
    pokemonDiv.appendChild(pokemonType);
  })
}

const url = 'https://pokeapi.co/api/v2/pokemon/1';
pokemonPreview(url);

const createPokemon = ({ name, id, types, sprites }) => {
  const pokemonDiv = document.createElement('div');
  pokemonDiv.className = 'pokemon-card';

  const color = types.map((types) => typesColor[types.type.name]);

  if (color.length <= 1) {
    color.push(color[0]);
  }

  pokemonDiv.style.background = `linear-gradient(45deg, ${color[0]}, white, ${color[1]})`;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  pokemonDiv.style.order = id;
  pokemonDiv.addEventListener('click', () => pokemonPreview(url));

  const pokemonName = document.createElement('span');
  pokemonName.innerHTML = `<span>${name}</span> <span>${id}</span>`;
  const pokemonType = document.createElement('span');
  pokemonType.innerText = types.map(({type}) => ` ${type.name}`);
  const pokemonImage = document.createElement('img');
  pokemonImage.src = `${sprites.front_default}`;
  pokemonDiv.appendChild(pokemonName);
  pokemonDiv.appendChild(pokemonImage);
  pokemonDiv.appendChild(pokemonType);
  return pokemonDiv;
}

const createPokemonList = (page) => {
  const listPokemons = document.getElementById('list-pokemons');
  listPokemons.style.visibility = 'hidden';
  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page*15}&limit=15`)
    .then((result) => result.json())
    .then((resultJson) => resultJson.results.forEach(({ url }) => {
      fetch(url)
        .then((resultUrl) => resultUrl.json())
        .then((pokemonJson) => listPokemons.appendChild(createPokemon(pokemonJson)))
        .then(() => listPokemons.childElementCount >= 15 ? listPokemons.style.visibility = 'visible' : '');
      })
    )
}

const passPage = (number, numPage) => {
  const listPokemons = document.getElementById('list-pokemons');
  listPokemons.innerHTML = '';
  numPage.innerText = Number(numPage.innerText) + number;
  if (Number(numPage.innerText) <= 0) {
    previous.style.visibility = 'hidden';
  } else {
    previous.style.visibility = 'visible';
  }
  if (Number(numPage.innerText) >= 9) {
    next.style.visibility = 'hidden';
  } else {
    next.style.visibility = 'visible';
  }
  createPokemonList(numPage.innerText);
}

window.onload = () => {
  const next = document.getElementById('next');
  const previous = document.getElementById('previous');
  const numPage = document.getElementById('num-page');
  passPage(0, numPage);
  
  previous.addEventListener('click', () => passPage(-1, numPage));
  next.addEventListener('click', () => passPage(1, numPage));
}
