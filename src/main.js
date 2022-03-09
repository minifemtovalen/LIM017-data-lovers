import { sortData, filterData, genFilter } from './data.js';
import pokemonData from './data/pokemon/pokemon.js';

const sortPokemon = pokemonData.pokemon;

const showData = document.querySelector('#show-data')
const displayPokemon = (pokemonArr) => {
  showData.innerHTML = "";
  pokemonArr.forEach((pokemon) => {
    const typeList = pokemon.type.map((type) => {
      return `<div class="${type} type-tag">${type}</div>`
    });
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'pokemon-box';
    pokemonDiv.innerHTML = `<img class="pokemon-img" src = ${pokemon.img}>
    <div class="pokemon-num">${pokemon.num}</div>
    <div class="pokemon-name">${pokemon.name}</div>
    <div class="pokemon-type">${typeList.join('')}</div>`
    showData.appendChild(pokemonDiv);
  });
}

displayPokemon(sortPokemon);
const orderSelect = document.querySelector('#order-select');
orderSelect.addEventListener('change', () => {
  if (orderSelect.value === 'all') {
    displayPokemon(sortPokemon)
  } else {
    const orderedResult = sortData(sortPokemon, parseInt(orderSelect.value))
    displayPokemon(orderedResult)
  }
});

// console.log(filterData(pokemonData.pokemon, 'fairy'))


const filterSelect = document.querySelector('#select-type');
filterSelect.addEventListener('change', () => {
  if (filterSelect.value === 'all') {
    displayPokemon(sortPokemon)
  } else {
    const filteredResult = filterData(sortPokemon, filterSelect.value)
    displayPokemon(filteredResult)
  }
});

console.log(genFilter(sortPokemon, 'johto'));
