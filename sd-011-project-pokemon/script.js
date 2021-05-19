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

let click = 0;
let previousId = 0;
let pokes = [];
let teste = 1;
let pb = [];
let pn = [];
let pi = [];

const verifyClick = () => {
  const pokeClass = [];
  pokeClass.push(document.querySelector(`.${pokes[0]}`));
  pokeClass.push(document.querySelector(`.${pokes[1]}`));

  const pokeb = [];
  const poken = [];
  const pokei = [];

  pokeb.push(document.querySelector(`.${pb[0]}`));
  poken.push(document.querySelector(`.${pn[0]}`));
  pokei.push(document.querySelector(`.${pi[0]}`));

  pokeb.push(document.querySelector(`.${pb[1]}`));
  poken.push(document.querySelector(`.${pn[1]}`));
  pokei.push(document.querySelector(`.${pi[1]}`));

  // console.log(Number(pokes[0].split('').splice(1,3).join('')) + 1, Number(pokes[1].split('').splice(1,3).join('')))
  if (Number(pokes[0].split('').splice(1,3).join('')) + 1 === Number(pokes[1].split('').splice(1,3).join(''))
  || Number(pokes[0].split('').splice(1,3).join('')) === Number(pokes[1].split('').splice(1,3).join('')) + 1) {
    // console.log('ee');
    setTimeout(() => {
      pokeClass[1].remove()
      pokeClass[0].remove()
    }, 800);
  } else {
    setTimeout(() => {
      pokeb[1].style.display = "inline-block";
      poken[1].style.display = "none";
      pokei[1].style.display = "none";
    
      pokeb[0].style.display = "inline-block";
      poken[0].style.display = "none";
      pokei[0].style.display = "none";
    }, 800);
  }


  pb = [];
  pn = [];
  pi = [];
  pokes = [];
  click = 0;
  previousId = 0;
  const listPokemons = document.getElementById('list-pokemons');

  setTimeout(() => {
    if (listPokemons.childElementCount < 2) {
      alert('boa');
    }
  }, 1000);
}

const createPokemon = ({ name, id, types, sprites }) => {
  const pokemonDiv = document.createElement('div');
  pokemonDiv.innerHTML = '';
  let tt = id;
  if (teste === 2) {
    teste = 0;
    tt = id + 1;
  }
  pokemonDiv.className = `pokemon-card p${tt}`;
  teste += 1;

  const pokeballImage = document.createElement('img');
  pokeballImage.src = 'pokeball.png';

  pokemonDiv.appendChild(pokeballImage)

  pokemonDiv.style.order = Math.round(Math.random() * 2000);
  const color = types.map((types) => typesColor[types.type.name]);
  if (color.length <= 1) {
    color.push(color[0]);
  }
  pokemonDiv.style.background = `linear-gradient(45deg, ${color[0]}, white, ${color[1]})`;
  const pokemonName = document.createElement('span');
  pokemonName.innerText = `${name.split('').map((v, i, arr) => i === 0 ? arr[0].toUpperCase() : v).join('')}`;
  const pokemonImage = document.createElement('img');
  pokemonImage.src = `${sprites.front_default}`;
  pokemonDiv.appendChild(pokemonName);
  pokemonDiv.appendChild(pokemonImage);

  pokeballImage.className = `b${tt}`;
  pokemonName.className = `n${tt}`;
  pokemonImage.className = `i${tt}`;
  
  pokemonName.style.display = "none";
  pokemonImage.style.display = "none";
  pokemonDiv.addEventListener('click', () => {
    pokeballImage.style.display = "none";
    pokemonName.style.display = "inline-block";
    pokemonImage.style.display = "inline-block";
    
    pb.push(`b${tt}`);
    pn.push(`n${tt}`);
    pi.push(`i${tt}`);

    click += 1;
    pokes.push(`p${tt}`);
    if (click === 2) {
      verifyClick();
    }
  });

  return pokemonDiv;
}

const createPokemonList = () => {
  const listPokemons = document.getElementById('list-pokemons');
  let count = Array.from({ length: 10 }, () => Math.ceil(Math.random() * 151));
  // console.log(count)
  count.forEach((element) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${element}`)
      .then((resultUrl) => resultUrl.json())
      .then((pokemonJson) => {
        listPokemons.appendChild(createPokemon(pokemonJson));
        listPokemons.appendChild(createPokemon(pokemonJson));
      })
  });
}

createPokemonList();
