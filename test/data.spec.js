import { sortData } from '../src/data.js';

import pokemonData from './data/pokemon/pokemon.js';

describe('sortData', () => {
  it('Debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  })

  it('Debería retornar Data de forma ascendiente', () => {
    const ordenAscendent = pokemonData;
    expect(sortData(pokemonData, "charmander")).toBe(ordenAscendent);
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
