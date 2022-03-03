/// Ordenando Data
export const sortData = (pokemons) => {
  const orderedData = pokemons.sort((a, b) => {
    if (a.name < b.name ) {
      return -1
    }
    if (a.name > b.name) {
      return 1
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

