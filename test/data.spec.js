import { sortData } from '../src/data.js';

describe('sortData', () => {
  it('Debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });

  it('Debería retornar Data de forma ascendiente', () => {
    expect(sortData('charmander')).toBe('orderedData');
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
