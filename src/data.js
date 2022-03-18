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
  const avoidObjMutation = new Array(...pokemons);
  const filteredData = avoidObjMutation.filter((pokemon) => {
    if(pokemon.type.includes(type)){
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
    if(pokemonName.indexOf(name.toUpperCase()) !== -1) {
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
  const avoidObjMutation = new Array(...pokemons);
  const genFiltered = avoidObjMutation.filter((pokemon) => pokemon.generation.name.includes(gen));
  return genFiltered;
};


