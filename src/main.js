import { sortData, filterData } from './data.js';

import pokemonData from './data/pokemon/pokemon.js';

const sortPokemon = pokemonData.pokemon;

const showData = document.querySelector('#show-data')
const displayPokemon = (pokemonArr) => {
  showData.innerHTML = "";
  pokemonArr.forEach((pokemon) => {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'pokemon-box';
    pokemonDiv.innerHTML = `<img src = ${pokemon.img}> <div class="pokemon-num">${pokemon.num}</div> ${pokemon.name} ${pokemon.type}`
    showData.appendChild(pokemonDiv);
  });
}

displayPokemon(pokemonData.pokemon);
const orderSelect = document.querySelector('#order-select');
orderSelect.addEventListener('change', () => {
  const orderedResult = sortData(sortPokemon, parseInt(orderSelect.value))
  displayPokemon(orderedResult)
});

//console.table(orderedResult);
