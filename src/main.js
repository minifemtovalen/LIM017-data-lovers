//import { showData } from './data.js';
import data from './data/pokemon/pokemon.js';
//Mostrando data en página principal

const test = document.querySelector('#test')
data.pokemon.forEach((pokemon) => {
    let pokemonTest = document.createElement("div");
    test.appendChild(pokemonTest);
    pokemonTest.innerHTML = `<img src = ${pokemon.img}> ${pokemon.num} ${pokemon.name} ${pokemon.type}`

});



