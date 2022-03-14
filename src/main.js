import { sortData, filterData, searchPokemonByName } from './data.js';
import pokemonData from './data/pokemon/pokemon.js';

const originalData = pokemonData.pokemon;
let dataState = [...originalData];


//Mostrando Pokemons en Pantalla Principal

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

//Ordenando Pokemons de forma ascendiente y descendiente

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

//Filtrando Pokemons por Tipo

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

//Buscando Pokemons por Nombre

const searchInput = document.querySelector('#search');

const searchResult = () => {
  dataState = searchPokemonByName(originalData, searchInput.value);
  displayPokemon(dataState);
  if (dataState.length === 0) {
    showData.innerHTML += `<p>Pokemon no encontrado</p>`
  }
}
searchInput.addEventListener('keyup', searchResult);

//Mostrando características a través de Modal

let close = document.querySelectorAll('.close')[0];
let open = document.querySelectorAll('.pokemon-box')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalContainer = document.querySelectorAll('.container_modal')[0];

open.addEventListener('click', () => {
  modalContainer.style.opacity = '1';
  modalContainer.style.visibility = 'visible';
  modal.classList.toggle('close-modal');
})

close.addEventListener('click', () => {
  modal.classList.toggle('close-modal');
  setTimeout(() => {
    modalContainer.style.opacity = '0';
    modalContainer.style.visibility = 'hidden';
  }, 500)
})

window.addEventListener('click', (e) => {
  if (e.target == modalContainer) {
    modal.classList.toggle('close-modal');
    setTimeout(() => {
      modalContainer.style.opacity = '0';
      modalContainer.style.visibility = 'hidden';
    }, 500)
  }
})





