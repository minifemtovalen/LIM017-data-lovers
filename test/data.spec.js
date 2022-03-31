
import { sortData, filterData, searchPokemonByName, genFilter, sortPower, pokemonSeeker } from '../src/data.js';

describe('sortData', () => {
  it('Es una función', () => {
    expect(typeof sortData).toBe('function');
  })

  it('Debería retornar Data de forma ascendiente', () => {
    const arrayDisordered = [{ name: 'charizard' }, { name: 'charizard' }, { name: 'squirtle' }, { name: 'butterfree' }];
    const arrayAscendancy = [{ name: 'butterfree' }, { name: 'charizard' }, { name: 'charizard' }, { name: 'squirtle' }];
    expect(sortData(arrayDisordered)).toEqual(arrayAscendancy);
  });

  it('Debería retornar Data de forma descendiente', () => {
    const arrayDisordered = [{ name: 'charizard' }, { name: 'charizard'}, { name: 'squirtle' }, { name: 'butterfree' }];
    const arrayDescendant = [{ name: 'squirtle' }, { name: 'charizard' }, { name: 'charizard' }, { name: 'butterfree' }];
    expect(sortData(arrayDisordered, -1)).toEqual(arrayDescendant);
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

  it('Debería retornar todos los pokemons que contengan pi' , () => {
    const searchedField = [{ name: 'pikachu'}, { name: 'squirtle' }, { name: 'vulpix' }];
    const foundField = [{ name: 'pikachu' }, {name:'vulpix'}];
    expect(searchPokemonByName(searchedField, 'pi')).toEqual(foundField);
  });
});

describe('genFilter', () => {
  it('Es una función', () => {
    expect(typeof genFilter).toBe('function');
  });

  it('Debería retornar filtro por generación johto', () => {
    const arrayGenWithoutFilter = [{ name: 'charmander', generation:{ num: 'generation i' , name: 'kanto'}}, { name: 'chikorita', generation:{ num: 'generation ii' , name: 'johto'} }, { name: 'totodile', generation:{ num: 'generation ii' , name: 'johto'} }];
    const arrayGenWithFilter = [{ name: 'chikorita', generation:{ num: 'generation ii' , name:'johto'} }, { name: 'totodile', generation:{ num: 'generation ii' , name: 'johto'} }];

    expect(genFilter(arrayGenWithoutFilter, 'johto')).toEqual(arrayGenWithFilter);
  });
});

describe('sortPower', () => {
  it('Es una función', () => {
    expect(typeof sortPower).toBe('function');
  })

  it('Debería retornar attack al recibir por parametro attack', () => {
    const statsPokemon = [{ stats: { 'base-attack': '117' } }, { stats: { 'base-attack': '200' } }, { stats: { 'base-attack': '84' } }];
    const sortedStats = [{ stats: { 'base-attack': '200' } }, { stats: { 'base-attack': '117' } }, { stats: { 'base-attack': '84' } }];

    expect(sortPower(statsPokemon, 'attack')).toEqual(sortedStats);
  });

  it('Debería retornar defense al recibir por parametro defense', () => {
    const statsPokemon = [{ stats: { 'base-defense': '117' } }, { stats: { 'base-defense': '200' } }, { stats: { 'base-defense': '84' } }];
    const sortedStats = [{ stats: { 'base-defense': '200' } }, { stats: { 'base-defense': '117' } }, { stats: { 'base-defense': '84' } }];

    expect(sortPower(statsPokemon, 'defense')).toEqual(sortedStats);
  });

  it('Debería retornar health al recibir por parametro health', () => {
    const statsPokemon = [{ stats: { 'base-stamina': '117' } }, { stats: { 'base-stamina': '200' } }, { stats: { 'base-stamina': '84' } }];
    const sortedStats = [{ stats: { 'base-stamina': '200' } }, { stats: { 'base-stamina': '117' } }, { stats: { 'base-stamina': '84' } }];

    expect(sortPower(statsPokemon, 'health')).toEqual(sortedStats);
  });

  it('Debería retornar max-cp al recibir por parametro max cp', () => {
    const statsPokemon = [{ stats: { 'max-cp': '117' } }, { stats: { 'max-cp': '200' } }, { stats: { 'max-cp': '84' } }];
    const sortedStats = [{ stats: { 'max-cp': '200' } }, { stats: { 'max-cp': '117' } }, { stats: { 'max-cp': '84' } }];

    expect(sortPower(statsPokemon, 'max-cp')).toEqual(sortedStats);
  });

  it('Debería retornar max-hp al recibir por parametro max hp', () => {
    const statsPokemon = [{ stats: { 'max-hp': '117' } }, { stats: { 'max-hp': '200' } }, { stats: { 'max-hp': '84' } }];
    const sortedStats = [{ stats: { 'max-hp': '200' } }, { stats: { 'max-hp': '117' } }, { stats: { 'max-hp': '84' } }];

    expect(sortPower(statsPokemon, 'max-hp')).toEqual(sortedStats);
  });
});

describe('pokemonSeeker', () => {
  it('Es una función', () => {
    expect(typeof pokemonSeeker).toBe('function');
  });

  it('Debería retornar filtro por num', () => {
    const pokemonArray = [{ 'num': '001' }, { 'num': '002' }, { 'num': '003' }];
    const pokemonNumber = [{ 'num': '001' }];

    expect(pokemonSeeker(pokemonArray, '001')).toEqual(pokemonNumber);
  });
});