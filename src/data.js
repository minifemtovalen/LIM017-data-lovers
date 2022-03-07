// Ordenando data alfabéticamente.

export const sortData = (pokemons, order = 1) => {
  const orderedData = pokemons.sort((a, b) =>{
    if (a.name < b.name) {
      return -1 * order;
    }

    if (a.name > b.name) {
        return 1 * order;
    }
    });
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

export const anotherExample = () => {
  return 'OMG';
};

