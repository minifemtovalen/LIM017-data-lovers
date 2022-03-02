/// Ordenando data alfabéticamente
export const sortData = (pokemons) => {
  const orderedData = pokemons.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0;
  })
  return orderedData;
};



export const anotherExample = () => {
  return 'OMG';
};
//test
