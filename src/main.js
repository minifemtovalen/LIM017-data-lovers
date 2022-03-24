import { sortData, filterData, searchPokemonByName, genFilter, sortPower, pokemonSeeker} from './data.js';
import pokemonData from './data/pokemon/pokemon.js';

const originalData = pokemonData.pokemon;
let dataState = [...originalData];
const showData = document.querySelector('#show-data')

//Mostrando data completa de pokemons en pantalla principal

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
  modalListener();
}

//Mostrando pokemons ordenados de forma ascendiente y descendiente

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

//Mostrando pokemons filtrados por tipo
 
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

//Buscando pokemons por nombre

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

//Desplegando menú hamburguesa

const hamburgerBtn = document.querySelector('#burger-btn');
const navBar = document.querySelector('.top-nav');
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
  hideElements('view');
})

const johtoRegion = document.querySelector('#johto');
johtoRegion.addEventListener('click', () => {
  const filterByRegion = genFilter(originalData, 'johto');
  displayPokemon(filterByRegion)
  dataState = filterByRegion;
  navBar.classList.toggle('hidden-nav');
  hideElements('view');
})

//Mostrando rankin del TopTen de pokemons

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
  let powerList = `
      <tr>
        <th>Pokedex N°</th>
        <th>Name</th>
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

function hideElements (view) {
  if (view === 'ranking') {
    document.querySelector('#power-data').classList.remove('hide');
    document.querySelector('.card').classList.add('hide');
    document.querySelector('#main-view').classList.add('hide');
    document.querySelector('#show-pokemon').classList.add('hide');
  } else {
    document.querySelector('#power-data').classList.add('hide');
    document.querySelector('.card').classList.remove('hide');
    document.querySelector('#main-view').classList.remove('hide');
    document.querySelector('#show-pokemon').classList.remove('hide');
  }
}

const selectRanking = document.querySelector('#ranking');
selectRanking.addEventListener('click', () => {
  const debugging = sortPower(originalData, 'attack');
  dataRanking(debugging, 'attack');
  navBar.classList.toggle('hidden-nav');
  hideElements('ranking');
});

const sortPowerSelect = document.querySelector('#sort-power');
sortPowerSelect.addEventListener('change', () => {
  const powerSelected = sortPowerSelect.value;
  document.getElementById('ranking-table').innerHTML = '';
  dataRanking(sortPower(originalData, powerSelected), powerSelected);
});


//Mostrando info de pokemons en modal

const modalContainer = document.querySelectorAll('.modal-container')[0];
function modalListener() {
document.querySelectorAll('.pokemon-box').forEach((pokemon) => {
  pokemon.addEventListener('click', () => {
    const num = pokemon.querySelector('.pokemon-num').innerHTML;
    const singleItem = pokemonSeeker(originalData, num)[0];
    modalContainer.style.opacity = '1';
    modalContainer.style.visibility = 'visible';
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML= `
      <section class="infoModal">
        <div class="namePokemon">${singleItem.name.toUpperCase()}</div>
        <div><img class="imgPokemon" src="${singleItem.img}"></div>
        <div class="heightPokemon"> HEIGHT: ${singleItem.size.height}</div>
        <div class="weightPokemon">WEIGHT: ${singleItem.size.weight}</div>
        <div class="typePokemon">TYPE: ${singleItem.type}</div>
        <div class="generationPokemon">GENERATION: ${singleItem.generation.name}</div>
        <div class="evolutionPokemon">NEXT EVOLUTION: ${singleItem.evolution['next-evolution'] ? singleItem.evolution['next-evolution'].map(evolution => evolution.name.toUpperCase()).join(', ') : "This is the last evolution"}</div>
      </section>`;
    })
  })
}

window.addEventListener('click', (e) => {
  if (e.target == modalContainer) {
    setTimeout(() => {
      modalContainer.style.opacity = '0';
      modalContainer.style.visibility = 'hidden';
    }, 300)
  }

});