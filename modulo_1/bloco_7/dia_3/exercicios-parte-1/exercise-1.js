const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// 1
assert.strictEqual(sum(4, 5), 9, 'Erro: 4 + 5 é igual a 9');

// 2
assert.strictEqual(sum(0, 0), 0, 'Erro: 0 + 0 é igual a 0')

// 3
assert.throws(() => {sum(4, "5")});

// 4
assert.throws(() => {sum(4, "5")}, /^Error: parameters must be numbers$/);
// assert.strictEqual(sum(4, "5"), "parameters must be numbers");
