// Ordenando data alfabéticamente.
export const sortData = (pokemons, order = 1) => {
  const orderedData = pokemons.sort((a, b) => {
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
    if(pokemon.type.num==type){
      console.log(pokemon.type.num)
      return true;
    }
    else {
      return false;
    }
  })
  return filteredData;
};

