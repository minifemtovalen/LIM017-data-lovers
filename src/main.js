
//import jsonData from './data/pokemon/pokemon.json'
//import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';



const pokemonTest = document.querySelector('#test')
data.pokemon.forEach((pokemon) => {
const img = document.createElement('img');
img.src = pokemon.img;
pokemonTest.appendChild(img);
})
