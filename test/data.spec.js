import { sortData, filterData, searchPokemonByName } from '../src/data.js';

describe('sortData', () => {
  it('Es una función', () => {
    expect(typeof sortData).toBe('function');
  })

  it('Debería retornar Data de forma ascendiente', () => {
    const arrayDisordered = [{ name: 'charizard' }, { name: 'squirtle' }, { name: 'butterfree' }];
    const arrayAscendancy = [{ name: 'butterfree' }, { name: 'charizard' }, { name: 'squirtle' }];
    expect(sortData(arrayDisordered,1)).toEqual(arrayAscendancy);
  });

  it('Debería retornar Data de forma descendiente', () => {
    const arrayDisordered = [{ name: 'charizard' }, { name: 'squirtle' }, { name: 'butterfree' }];
    const arrayDescendant = [{ name: 'squirtle' }, { name: 'charizard' }, { name: 'butterfree' }];
    expect(sortData(arrayDisordered,-1)).toEqual(arrayDescendant);
  });

});

describe('filterData', () => {
  it('Es una función', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Debería retornar filtro por tipo', () => {
    const arrayWithoutFilter = [{ name: 'seel', type: 'water' }, { name: 'squirtle', type: 'water' }, { name: 'butterfree', type: 'flying' }];
    const arrayWithFilter = [{ name: 'seel', type: 'water' }, { name: 'squirtle', type: 'water' }];

    expect(filterData(arrayWithoutFilter, 'water')).toEqual(arrayWithFilter);
  });
});

describe('searchPokemonByName', () => {
  it('Is a function', () => {
    expect(typeof searchPokemonByName).toBe('function');
  });

  it('should throw TypeError', () => {
    expect(() => searchPokemonByName()).toThrow(TypeError);
    expect(() => searchPokemonByName(0)).toThrow(TypeError);
    expect(() => searchPokemonByName(null)).toThrow(TypeError);
  });

  it('should return an "squirtle" for "SQUIRTLE', () => {
    const searchedField = [{ name: 'seel'}, { name: 'squirtle' }, { name: 'butterfree' }];
    const foundField = [{ name: 'SQUIRTLE ' }];
    expect(searchPokemonByName(searchedField, 'squirtle')).toBe(foundField);
  });
});
