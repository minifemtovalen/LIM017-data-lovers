import { sortData, filterData, searchPokeByName } from './data.js';
import pokemonData from './data/pokemon/pokemon.js';

const originalData = pokemonData.pokemon;
let dataState = [...originalData];
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

displayPokemon(dataState);
const orderSelect = document.querySelector('#order-select');
orderSelect.addEventListener('change', () => {
  if (orderSelect.value === 'all') {
    displayPokemon(originalData)
    dataState = originalData;
  } else {
    const orderedResult = sortData(dataState, parseInt(orderSelect.value))
    displayPokemon(orderedResult)
    dataState = orderedResult;
  }
});

// console.log(filterData(pokemonData.pokemon, 'fairy'))


const filterSelect = document.querySelector('#select-type');
filterSelect.addEventListener('change', () => {
  if (filterSelect.value === 'all') {
    displayPokemon(originalData)
    dataState = originalData;
  } else {
    const filteredResult = filterData(originalData, filterSelect.value)
    displayPokemon(filteredResult)
    dataState = filteredResult;
  }
});

//function for search input

const searchInput = document.querySelector('#search');

const searchResult = () => {
  dataState = searchPokeByName(originalData, searchInput.value);
  console.log(dataState)
  displayPokemon(dataState);
  if(dataState.length === 0) {
    showData.innerHTML += `<p>Pokemon no encontrado</p>`
  }
}
searchInput.addEventListener('keyup', searchResult);

//console.log(genFilter(originalData, 'johto'));

//funcion para buscar pokemons

