// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');
// criando uma função que vai pegar os números do array maior que 10 e os retornar
const greaterThanTen = (array) => {
  // criando um novo array
  let results = [];
  // criando um for com o array que foi enviado
  for (let index = 0; index < array.length; index += 1) {
    // verificando se o item do array é maior que 10
    if (array[index] > 10) {
      // inserindo esse item no meu novo array
      results.push(array[index]);
    }
  }
  // retornando meu novo array
  return results;
};

// criando meu array que será verificado
const parameter = [4, 10, 32, 9, 21];
// criando um array com o meu valor esperado
const result = [32, 21];
// verificando se a saída da minha função é a esperada
assert.deepStrictEqual(greaterThanTen(parameter), result);