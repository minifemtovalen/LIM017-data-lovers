import { sortData, filterData, searchPokemonByName, genFilter, sortPower } from './data.js';
import pokemonData from './data/pokemon/pokemon.js';
//modal
const originalData = pokemonData.pokemon;
let dataState = [...originalData];
const showData = document.querySelector('#show-data')
const navBar = document.querySelector('.top-nav');
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
    const filteredResult = filterData(dataState, filterSelect.value)
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

const hamburgerBtn = document.querySelector('#burger-btn');
const toggleMenu = () => {
  navBar.classList.toggle('hidden-nav');
}

hamburgerBtn.addEventListener('click', toggleMenu);

const kantoRegion = document.querySelector('#kanto');

kantoRegion.addEventListener('click', () => {
  const filterByRegion = genFilter(originalData, 'kanto');
  displayPokemon(filterByRegion)
  dataState = filterByRegion;
  navBar.classList.toggle('hidden-nav');
})

const johtoRegion = document.querySelector('#johto');

johtoRegion.addEventListener('click', () => {
  const filterByRegion = genFilter(originalData, 'johto');
  displayPokemon(filterByRegion)
  dataState = filterByRegion;
  navBar.classList.toggle('hidden-nav');
})

const dataRanking = (pokemons, stats) => {
  let power;
  if (stats === 'attack') {
      power = 'Attack';
  } else if (stats === 'defense') {
      power = 'Defense';
  } else if (stats === 'health') {
      power = 'Health';
  } else if (stats === 'max-cp') {
      power = 'Max. CP';
  } else {
      power = 'Max. HP';
  }
  let powerList = '';
  powerList += `
        <tr>
          <th>N° Pokedex</th>
          <th>Nombre</th>
          <th>${power}</th>
        </tr>`;
  for (let i = 0; i < 10; i += 1) {
    powerList += `
    <tr>
      <td>${pokemons[i].num}</td>
      <td><img class='pokeImage' src=${pokemons[i].img}>${pokemons[i].name}</td>`;
    if (stats === 'attack') {
      powerList +=  `<td>${pokemons[i].stats['base-attack']}</td>
      </tr>`;
    } else if (stats === 'defense') {
        powerList += `<td>${pokemons[i].stats['base-defense']}</td>
        </tr>`;
    } else if (stats === 'health') {
        powerList += `
        <td>${pokemons[i].stats['base-stamina']}</td>
      </tr>`;
    } else if (stats === 'max-cp') {
        powerList += `
        <td>${pokemons[i].stats['max-cp']}</td>
      </tr>`;
    } else {
        powerList += `
        <td>${pokemons[i].stats['max-hp']}</td>
      </tr>`;
    }
  }
  document.querySelector('#ranking-table').innerHTML = powerList;
};

const selectRanking = document.querySelector('#ranking');
selectRanking.addEventListener('click', () => {
  document.querySelector('.card').classList.add('hide');
  document.querySelector('#main-view').classList.add('hide');
  document.querySelector('#show-pokemon').classList.add('hide');
  document.querySelector('#power-data').classList.toggle('hide');
  dataRanking(sortPower(originalData, 'attack'), 'attack');
  navBar.classList.toggle('hidden-nav');
});

const sortPowerSelect = document.querySelector('#sort-power');
sortPowerSelect.addEventListener('change', () => {
  const powerSelected = sortPowerSelect.value;
  document.getElementById('ranking-table').innerHTML = '';
  dataRanking(sortPower(originalData, powerSelected), powerSelected);
});
