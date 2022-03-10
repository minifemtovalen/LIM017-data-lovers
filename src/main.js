import { sortData, filterData, searchPokemonByName} from './data.js';
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
  dataState = searchPokemonByName(originalData, searchInput.value);
  displayPokemon(dataState);
  if(dataState.length === 0) {
    showData.innerHTML += `<div class="search-alert">
    <h3>No Pokémon matched your search.</h3>
    <p>Try the following to find results:</p>
    <ul>
      <li>Reduce the number of search parameters.</li>
      <li>Search for Pokémon types one at a time.</li>
      <li>Try to sort them ascending or descending.</li>
    </ul>
    </div>`
  }
}
searchInput.addEventListener('keyup', searchResult);



/**
 * const searchInput = document.querySelector('#search')
const searchPokeByName = () => {
  const text = searchInput.value.toLowerCase();
  const result = [];
  for (let pokemon of originalData) {
    const name = pokemon.name.toLowerCase();
    if(name.indexOf(text) !== -1){
      result.push(pokemon);
    }
  }
  displayPokemon(result);
  if(result.innerHTML === '') {
    result.innerHTML += `<p>Pokemon no encontrado</p>`
  }
}
searchInput.addEventListener('keyup', searchPokeByName);
 */


//console.log(genFilter(originalData, 'johto'));

//funcion para buscar pokemons

