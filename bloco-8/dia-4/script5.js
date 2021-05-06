// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.join('').toLowerCase().split('').reduce((acc, value) => value === 'a' ? acc += 1 : acc += 0, 0);
}

// console.log(containsA());

assert.deepStrictEqual(containsA(), 20);