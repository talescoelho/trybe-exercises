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

const data = [
  {
    value: 0,
    color: "#F64225",
    highlight: "#F64225",
    label: "HP",
  },
  {
    value: 0,
    color: "#F08030",
    highlight: "#F08030",
    label: "Attack"
  },
  {
    value: 0,
    color: "#F8D030",
    highlight: "#F8D030",
    label: "Defense"
  },
  {
    value: 0,
    color: "#6890F0",
    highlight: "#6890F0",
    label: "Sp.Atk"
  },
  {
    value: 0,
    color: "#78C850",
    highlight: "#78C850",
    label: "Sp.Def"
  },
  {
    value: 0,
    color: "#F55788",
    highlight: "#F55788",
    label: "Speed"
  }
];

//new Chart(ctx).Doughnut(data);

const pokemonPreview = (url) => {
  const pokemonPreview = document.getElementById('pokemon-preview');
  const myChart = document.getElementById("myChart");
  const main = document.getElementById('main');
  main.appendChild(myChart);
  pokemonPreview.innerHTML = '';
  // console.log(myChart)
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
      pokemonName.innerHTML = `<span>${pokemon.name.split('').map((v, i, arr) => i === 0 ? arr[0].toUpperCase() : v).join('')}</span> <span>${pokemon.id}</span>`;
      const pokemonStatus = document.createElement('span');

      pokemonStatus.className = 'status';
      pokemonStatus.innerHTML = pokemon.stats.map((stats) => `<span class='${stats.stat.name}'>${stats.stat.name.split('').map((v, i, arr) => i === 0 ? arr[0].toUpperCase() : v).join('')}: ${stats.base_stat}</span></br>`).join('');
      const pokemonImage = document.createElement('img');
      pokemonImage.src = `${pokemon.sprites.front_shiny}`;

      data.forEach((element, index) => element.value = pokemon.stats[index].base_stat);
      let ctx = document.getElementById("myChart").getContext("2d");
      new Chart(ctx).Doughnut(data);

      pokemonPreview.appendChild(pokemonDiv);
      pokemonDiv.appendChild(pokemonName);
      pokemonDiv.appendChild(pokemonImage);
      pokemonDiv.appendChild(pokemonStatus);
      pokemonDiv.appendChild(myChart);
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
  pokemonName.innerHTML = `<span>${name.split('').map((v, i, arr) => i === 0 ? arr[0].toUpperCase() : v).join('')}</span> <span>${id}</span>`;
  const pokemonType = document.createElement('span');
  pokemonType.innerText = types.map(({ type }) => ` ${type.name}`);
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
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 15}&limit=15`)
    .then((result) => result.json())
    .then((resultJson) => resultJson.results.forEach(({ url }) => {
      fetch(url)
        .then((resultUrl) => resultUrl.json())
        .then((pokemonJson) => listPokemons.appendChild(createPokemon(pokemonJson)))
        .then(() => listPokemons.childElementCount >= 15 ? listPokemons.style.visibility = 'visible' : '');
    })
    )
}

const passPage = async (number, numPage) => {
  const listPokemons = document.getElementById('list-pokemons');
  listPokemons.innerHTML = '';
  numPage.innerText = Number(numPage.innerText) + number;


  previous.style.visibility = 'hidden';
  next.style.visibility = 'hidden';
  createPokemonList(numPage.innerText)
    .then(() => {
      if (Number(numPage.innerText) <= 0) {
        previous.style.visibility = 'hidden';
      } else {
        previous.style.visibility = 'visible';
      }
    })
    .then(() => {
      if (Number(numPage.innerText) >= 9) {
        next.style.visibility = 'hidden';
      } else {
        next.style.visibility = 'visible';
      }
    });
}

window.onload = () => {
  const next = document.getElementById('next');
  const previous = document.getElementById('previous');
  const numPage = document.getElementById('num-page');
  passPage(0, numPage);

  previous.addEventListener('click', () => passPage(-1, numPage));
  next.addEventListener('click', () => passPage(1, numPage));
}
