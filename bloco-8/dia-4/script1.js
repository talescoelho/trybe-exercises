// Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  let arr = [];
  arrays.forEach(value => value.forEach(element => arr.push(element)));
  return arr;
}

console.log(flatten());

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);