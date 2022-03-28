import { sortData, filterData, searchPokemonByName, genFilter, sortPower, pokemonSeeker} from './data.js';
import pokemonData from './data/pokemon/pokemon.js';
//modal import{ sortData, filterData, searchPokemonByName, genFilter, sortPower, searchById}
const originalData = pokemonData.pokemon;
let dataState = [...originalData];
let dataState2 = dataState;
let lastFilter = 'original';

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
  modalListener();
}

displayPokemon(dataState);
const orderSelect = document.querySelector('#order-select');
orderSelect.addEventListener('change', () => {
  if (orderSelect.value === 'all') {
    displayPokemon(originalData)
    dataState = originalData;
  } else {
    const orderedResult = sortData(dataState2, parseInt(orderSelect.value))
    displayPokemon(orderedResult)
    //dataState = orderedResult;
  }
});

const filterSelect = document.querySelector('#select-type');
filterSelect.addEventListener('change', () => {
  if (filterSelect.value === 'all') {
    displayPokemon(originalData)
    dataState = originalData;
  } else {
    const data = lastFilter === 'generation' ? dataState : originalData;
    const filteredResult = filterData(data, filterSelect.value)
    displayPokemon(filteredResult)
    dataState = lastFilter === 'generation' ? dataState : filteredResult;
    dataState2 = filteredResult;
    lastFilter = lastFilter === 'generation' ? lastFilter : 'type';
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
  hideElements('view');
  lastFilter = 'generation'
  dataState2 = filterByRegion;
})

const johtoRegion = document.querySelector('#johto');

johtoRegion.addEventListener('click', () => {
  const filterByRegion = genFilter(originalData, 'johto');
  displayPokemon(filterByRegion)
  dataState = filterByRegion;
  navBar.classList.toggle('hidden-nav');
  hideElements('view');
  lastFilter = 'generation'
  dataState2 = filterByRegion;
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

const modalContainer = document.querySelectorAll('.modal-container')[0];
const close = document.querySelectorAll('.close')[0];

function modalListener () {
  document.querySelectorAll('.pokemon-box').forEach((pokemon) => {
    pokemon.addEventListener('click', () => {
      const num = pokemon.querySelector('.pokemon-num').innerHTML;
      const singleItem = pokemonSeeker(originalData, num)[0];
      modalContainer.style.opacity = '1';
      modalContainer.style.visibility = 'visible';
      const modalContent = document.querySelector('.modal-content');
      modalContent.innerHTML= `
      <section class="info-modal">
      <div class="num-pokemon">${singleItem.num}</div>
      <div class="name-pokemon">${singleItem.name.toUpperCase()}</div>
      <div><img class="img-pokemon" src="${singleItem.img}"></div>
      <div class="generation-pokemon">GENERATION: ${singleItem.generation.name}</div>
      <div class="sub-container">
        <div class="height-pokemon"> HEIGHT: ${singleItem.size.height}</div>
        <div class="weight-pokemon">WEIGHT: ${singleItem.size.weight}</div>
        <div class="type-pokemon">TYPE: ${singleItem.type}</div>
      </div>
      <div class="evo-container">
        <div class="each-evolution">
          ${
            singleItem.evolution['next-evolution'] ? singleItem.evolution['next-evolution']
            .map((evolution) => {
              return `
                <div class="evol">
                  <img class="img-evolution" src="https://www.serebii.net/pokemongo/pokemon/${evolution.num}.png">
                  <p class="evolution-p">#${evolution.num}</p>
                  <p class="p-name">${evolution.name.toUpperCase()}</p>
                </div>
                <h4 class="evolution-h4">Next Evolution</h4>
                ${
                  evolution['next-evolution'] ? evolution['next-evolution'].map((nextEvol) => {
                    return `
                      <div class="evol">
                        <img class="img-evolution" src="https://www.serebii.net/pokemongo/pokemon/${nextEvol.num}.png">
                        <p class="evolution-p">#${nextEvol.num}</p>
                        <p class="p-name">${nextEvol.name.toUpperCase()}</p>
                      </div>
                    `
                  }).join('') : ''
                }
              `
            }).join('') : 'This Pokemon has no further evolutions'
          }
          </div>
        <div class="each-evolution"></div>
      </div>
    </section>`;// console.log(pokemonSeeker(originalData, '001'));
    })
  });
}

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

/*modal no funciona al primer click, quizas es porque cuelga mi pc ya que todos los pokemones cargan.
modal no funciona al filtrar por tipo
modal no funciona en generacion
modal no funciona al ordenar alfabeticamente y descendiente*/

//posibles cuausas -> addEventListeners

// console.log(pokemonSeeker(originalData, '001'));
