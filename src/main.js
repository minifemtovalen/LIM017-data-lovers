import { sortData, filterData, searchPokemonByName, /*generationFilter*/ computeStats } from './data.js';
import pokemonData from './data/pokemon/pokemon.js';

const originalData = pokemonData.pokemon;
const modalContainer = document.querySelectorAll('.modal_container')[0];
const close = document.querySelectorAll(".close")[0];
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

//Mostran Info Modal

    document.querySelectorAll('.pokemon-box').forEach((pokemon) => {
    pokemon.addEventListener('click', () => {
    modalContainer.style.opacity = '1';
    modalContainer.style.visibility = 'visible';
    const name = document.querySelectorAll(".name")[0];
    const img = document.querySelectorAll(".img")[0];
    const num = document.querySelectorAll(".num")[0];
    //const type = document.querySelectorAll(".type")[0];
    const height = document.querySelectorAll(".height")[0];
    const weight = document.querySelectorAll(".weight")[0]
    const candy = document.querySelectorAll(".candy")[0]
    const nextEvolution = document.querySelectorAll(".next_evolution")[0]
  
    name.innerHTML = pokemon.name
    img.setAttribute("src", pokemon.img)
    num.innerHTML = pokemon.num
    //type.innerHTML = `TIPO: ${pokemon.type.join(", ")}`,
    height.innerHTML = `HEIGHT: ${pokemon.height}`
    weight.innerHTML = `WEIGHT: ${pokemon.weight}`
    candy.innerHTML = `Candy: ${pokemon.candy}`
    nextEvolution.innerHTML = `NEXT EVOLUTION: ${pokemon['next-evolution'] ? pokemon['next-evolution'].map(evolution => evolution.name).join(", ") : "This is the last evolution"}`
  })
  
});

close.addEventListener('click', () => {
    setTimeout(() => {
    modalContainer.style.opacity = '0';
    modalContainer.style.visibility = 'hidden';
  }, 500)
})

window.addEventListener('click', (e) => {
  if (e.target == modalContainer) {
      setTimeout(() => {
      modalContainer.style.opacity = '0';
      modalContainer.style.visibility = 'hidden';
    }, 300)
  }
});

//Mostrando estadísticas

const statsTable = (pokemon, statsSelect) => {
  
  let stats;
  if (statsSelect === 'attack') {
    stats = 'Attack';
  } else if (statsSelect === 'defense') {
    stats = 'Defense';
  } else if (statsSelect === 'stamina') {
    stats = 'Stamina'
  } else if (statsSelect === 'max-cp') {
    stats = 'Max-Cp'
  } else if (statsSelect === 'max-hp') {
    stats = 'Max-Hp';
  } else {
    displayPokemon(originalData)
    dataState = originalData;
  }

  let frameTable = '';
  frameTable += `<tr><th>NAME</th>
  <th>POKEMON</th>
  <th>TYPE</th>
  <th>TOP TEN ${stats}</th></tr>`;
  for (let i = 0; i < pokemon.length; i ++) {
    frameTable += `
        <tr>
          <td>${pokemon.name}</td>
          <td><img class='image_table_pokemon' src=${pokemon.img}</td>
          <td>${pokemon.type}</td>
          <td>${pokemon.statsTable}</td>`;
  }
  document.getElementById('table_stats').innerHTML = frameTable;
};

// Desplegable de stats

const getTopTen = document.querySelector('#stats_select');
getTopTen.addEventListener('change', () => {
  const topTenSelect = getTopTen.value;
  document.getElementById('table_stats').innerHTML = '';
  statsTable(computeStats(originalData, topTenSelect), topTenSelect);
});