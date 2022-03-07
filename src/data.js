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




export const anotherExample = () => {
  return 'OMG';
};

