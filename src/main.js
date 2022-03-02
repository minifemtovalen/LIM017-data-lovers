import { sortData } from './data.js';

import bigdata from './data/pokemon/pokemon.js';

const sortPokemon = bigdata.pokemon;

//Mostrando data en página principal

const showData = document.querySelector('#show-data')
bigdata.pokemon.forEach((pokemon) => {
    let pokemonData = document.createElement("div");
    pokemonData.innerHTML = `<img src = ${pokemon.img}> ${pokemon.num} ${pokemon.name} ${pokemon.type}`
    showData.appendChild(pokemonData);
});

const orderedResult = sortData(sortPokemon);    
console.log(orderedResult);

