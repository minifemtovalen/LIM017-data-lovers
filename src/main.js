import { sortData, filterData } from './data.js';

import pokemonData from './data/pokemon/pokemon.js';

const sortPokemon = pokemonData.pokemon;
const filterPokemon = pokemonData.pokemon;

//Mostrando data en página principal
const showData = document.querySelector('#show-data')
const displayPokemon = (pokemonArr) => {
    showData.innerHTML = "";
    pokemonArr.forEach((pokemon) => {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.className = 'pokemon-box';
        pokemonDiv.innerHTML = `<img src = ${pokemon.img}> <div class="pokemon-num">${pokemon.num}</div> <div class="pokemon-name">${pokemon.name}</div> <div class="pokemon-type">${pokemon.type}</div>`
        showData.appendChild(pokemonDiv);
    });
}

//Ordenando de forma descendiente y ascendiente
displayPokemon(pokemonData.pokemon);
const orderSelect = document.querySelector('#order_select');
orderSelect.addEventListener("change", () => {
    const orderedResult = sortData(sortPokemon, parseInt(orderSelect.value))
    displayPokemon(orderedResult)
});

//Filtrando Data Pokemon
displayPokemon(pokemonData.pokemon);
const filterSelect = document.querySelector('#select_type');
filterSelect.addEventListener("change", () => {
    const filteredResult = filterData(filterPokemon, parseInt(filterSelect.value))
    displayPokemon(filteredResult);
});

