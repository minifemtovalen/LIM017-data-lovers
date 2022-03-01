// import { orderData } from './data.js';
import data from './data/pokemon/pokemon.js';
//Mostrando data en página principal

const test = document.querySelector('#test')
data.pokemon.forEach((pokemon) => {
    let pokemonTest = document.createElement("div");
    test.appendChild(pokemonTest);
    pokemonTest.innerHTML = `<img src = ${pokemon.img}> ${pokemon.num} ${pokemon.name} ${pokemon.type}`

});






// Ordenando data alfabéticamente
    /*orderData.sort((a, b) => {
    const namePokemonOne = a.pokemon.name
    const namePokemonTwo = b.pokemon.name
    if (namePokemonOne < namePokemonTwo) {
        return -1
    }
    if (namePokemonOne > namePokemonTwo) {
        return 1
    }
    return 0;
});*/


