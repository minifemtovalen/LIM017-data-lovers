export const sortData = (pokemons, order = 1) => {
  const avoidObjMutation = new Array(...pokemons);
  const orderedData = avoidObjMutation.sort((a, b) => {
    if (a.name < b.name) {
      return -1 * order;
    }
    if (a.name > b.name) {
      return 1 * order;
    }
    return 0;
  })
  return orderedData;
};

export const filterData = (pokemons, type) => {
  const filteredData = pokemons.filter((pokemon) => {
    if (pokemon.type.includes(type)) {
      return true;
    }
    else {
      return false;
    }
    
  })
  return filteredData;
};

export const searchPokemonByName = (pokemons, name) => {
  return pokemons.filter((pokemon) => {
    const pokemonName = pokemon.name.toUpperCase();
    if (pokemonName.indexOf(name.toUpperCase()) !== -1) {
      return pokemon;
    }
  })
};

/**
 *
 *if (!name) throw new TypeError('You have not entered any value');
  if (typeof name !== "string") throw new TypeError('The entered value is not text');
  if (typeof pokemons !== "object") throw new TypeError('The value entered is not a valid data');
 */

export const genFilter = (pokemons, gen) => {
  const genFiltered = pokemons.filter((pokemon) => {
    if (pokemon.generation.name.includes(gen)) {
      return true;
    } 
    else {
      return false
    }
  })
  return genFiltered
}

export const sortPower = (pokemons, stats) => {
  let arrPowers = [];
  if (stats === 'attack') {
    arrPowers = pokemons.sort((a, b) => b.stats['base-attack'] - a.stats['base-attack']);
  } else if (stats === 'defense') {
    arrPowers = pokemons.sort((a, b) => b.stats['base-defense'] - a.stats['base-defense']);
  } else if (stats === 'health') {
    arrPowers = pokemons.sort((a, b) => b.stats['base-stamina'] - a.stats['base-stamina']);
  } else if (stats === 'max-cp') {
    arrPowers = pokemons.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
  } else {
    arrPowers = pokemons.sort((a, b) => b.stats['max-hp'] - a.stats['max-hp']);
  }
  return arrPowers;
};

export const searchForID = (pokemonBox, num) => {
  const numPokemon = pokemonBox.find(element => element.num === num);
  return numPokemon;
}