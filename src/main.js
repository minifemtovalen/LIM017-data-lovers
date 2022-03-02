//import { showData } from './data.js';
import data from './data/pokemon/pokemon.js';
//Mostrando data en página principal

const showData = document.querySelector('#show-data')
data.pokemon.forEach((pokemon) => {
  const showPokemon = document.createElement("div");
  showPokemon.innerHTML = `<img src = ${pokemon.img}> ${pokemon.num} ${pokemon.name} ${pokemon.type}`
  showData.appendChild(showPokemon);
});


