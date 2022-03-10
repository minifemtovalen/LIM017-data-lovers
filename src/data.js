// Ordenando data alfabéticamente.
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
    const pokemonName = pokemon.name.toLowerCase();
    if(pokemonName.indexOf(name) !== -1) {
      return pokemon;
    }
  })
}

export const genFilter = (pokemons, gen) => {
  const avoidObjMutation = new Array(...pokemons);
  const genFiltered = avoidObjMutation.filter((pokemon) => pokemon.generation.name.includes(gen));
  return genFiltered;
};



