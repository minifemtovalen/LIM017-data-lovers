import { filterData, sortData } from '../src/data.js';

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
