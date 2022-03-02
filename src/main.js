import { sortData } from './data.js';

import pokemonData from './data/pokemon/pokemon.js';

const sortPokemon = pokemonData.pokemon;

//Mostrando data en página principal
const showData = document.querySelector('#show-data')
pokemonData.pokemon.forEach((pokemon) => {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.innerHTML = `<img src = ${pokemon.img}> ${pokemon.num} ${pokemon.name} ${pokemon.type}`
    showData.appendChild(pokemonDiv);
});

const orderedResult = sortData(sortPokemon);
console.log(orderedResult);

