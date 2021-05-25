// Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');
// escreva a função sumAllNumbers aqui
// função para somar todos os itens do array
const sumAllNumbers = numbers => numbers.reduce((a,b) => a+b);
// criando um array de números
const numbers = [9, 23, 10, 3, 8];
// criando uma variavel com um valor esperado da soma de nosso array
const expected = 53;
// recuperando a saída do nosso array
const output = sumAllNumbers(numbers);

// verificando se nosso array existe
assert.strictEqual(typeof sumAllNumbers, 'function');
// verificando se a saída da nossa função é a esperada
assert.strictEqual(output, expected);
