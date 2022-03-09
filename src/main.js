import { sortData, filterData, genFilter } from './data.js';
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
  } else {
    const filteredResult = filterData(originalData, filterSelect.value)
    displayPokemon(filteredResult)
    dataState = filteredResult;
  }
});

console.log(genFilter(originalData, 'johto'))

//Búsqueda por Nombre

const searchByName = document.querySelector('#search')
const result = document.querySelector('#show-data')
const searchPokemon = () => {
  result.innerHTML = '';
  const text = searchByName.value.toLowerCase();
  for (let pokemon of originalData) {
    let name = pokemon.name.toLowerCase();
    if(name.indexOf(text) !== -1){
      result.innerHTML += `<img class="pokemon-img" src = ${pokemon.img}>
      <div class="pokemon-num">${pokemon.num}</div>
      <div class="pokemon-name">${pokemon.name}</div>`
    }
  }
  if(result.innerHTML === '') {
    result.innerHTML += `<p>Pokemon no encontrado</p>`
  }
}
searchByName.addEventListener('keyup', searchPokemon)
searchPokemon();
