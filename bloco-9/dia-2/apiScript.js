// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (jokes) => {
  const jokeContainer = document.getElementById('jokeContainer');
  const joke = document.createElement('div');
  joke.innerText = jokes.joke
  jokeContainer.appendChild(joke);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendJoke(data));
};

window.onload = () => fetchJoke();