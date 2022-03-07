// Ordenando data alfabéticamente.

export const sortData = (pokemons, order = 1) => {
<<<<<<< HEAD
  const orderedData = pokemons.sort((a, b) => {
    const avoidObjMutation = new Array(...pokemons);
    const orderedData = avoidObjMutation.sort((a, b) =>
=======
  const avoidObjMutation = new Array(...pokemons);
  const orderedData = avoidObjMutation.sort((a, b) => {
>>>>>>> upstream/main
    if (a.name < b.name) {
      return -1 * order;
    });
    return orderedData;
  })
};

<<<<<<< HEAD
//Filtrando Pokemons por Tipo
export const filterData = (pokemons, type) => {
  const filteredData = pokemons.filter((pokemon) => {
    if (pokemon.type.includes(type)) {
=======
export const filterData = (pokemons, type) => {
  const avoidObjMutation = new Array(...pokemons);
  const filteredData = avoidObjMutation.filter((pokemon) => {
    if(pokemon.type.includes(type)){
>>>>>>> upstream/main
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

