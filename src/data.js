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

//Filtrando Pokemons por Tipo

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

//Filtrando Pokemons por Generación

export const generationFilter = (pokemons, gen) => {
  const genFiltered = pokemons.filter((pokemon) => {
    if (pokemon.generation.name.includes(gen)) {
      return true;
    }
    else {
      return false;
    }
  })
  return genFiltered;
};


//Buscando Pokemons por Nombre

export const searchPokemonByName = (pokemons, name) => {
  return pokemons.filter((pokemon) => {
    const pokemonName = pokemon.name.toLowerCase();
    if (pokemonName.indexOf(name) !== -1) {
      return pokemon;
    }
  })
}

//Obteniendo estadísticas

 

/*Return {…Pokemon, statSumado: [aqui va la suma]}*/