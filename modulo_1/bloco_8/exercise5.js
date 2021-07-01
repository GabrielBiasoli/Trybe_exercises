const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => 
    acc + curr.split('').reduce((accumulator, current) => {
      return current.toLowerCase() === 'a' ? accumulator + 1 : accumulator;
    }, 0), 0)
}

assert.deepStrictEqual(containsA(), 20);