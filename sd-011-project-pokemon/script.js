const createPokemon = ({ name, id, types, sprites }) => {
  const listPokemons = document.getElementById('list-pokemons');
  const pokemonDiv = document.createElement('div');
  pokemonDiv.className = 'pokemon-card';
  const pokemonName = document.createElement('span');
  pokemonName.innerHTML = `<span>${name}</span> <span>${id}</span>`;
  const pokemonType = document.createElement('span');
  pokemonType.innerText = types.map(({type}) => ` ${type.name}`);
  const pokemonImage = document.createElement('img');
  pokemonImage.src = `${sprites.front_default}`;
  const pokemonButton = document.createElement('button');
  pokemonButton.value = 'Mais';
  listPokemons.appendChild(pokemonDiv);
  pokemonDiv.appendChild(pokemonName);
  pokemonDiv.appendChild(pokemonImage);
  pokemonDiv.appendChild(pokemonType);
}

const createPokemonList = (page) => {
  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page*20}&limit=20`)
    .then((result) => result.json())
    .then((resultJson) => resultJson.results.map(({url}) => {
      fetch(url)
        .then((resultUrl) => resultUrl.json())
        .then((pokemonJson) => createPokemon(pokemonJson));
    }));
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
  createPokemonList(numPage.innerText);
}

window.onload = () => {
  const next = document.getElementById('next');
  const previous = document.getElementById('previous');
  const numPage = document.getElementById('num-page');
  passPage(0, numPage);
  
  previous.addEventListener('click', () => passPage(-1, numPage));
  next.addEventListener('click', () => passPage(1, numPage))
}
