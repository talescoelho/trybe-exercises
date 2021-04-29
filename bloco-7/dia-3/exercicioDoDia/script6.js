// Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addOne aqui
// função para somar um ao valor de cada item do array
const addOne = myArray => myArray.map(a => a+1);

// criando o array que será somado
const myArray = [31, 57, 12, 5];
// criando o mesmo array para efetuar os testes
const unchanged = [31, 57, 12, 5];
// criando um array com o valor esperado após a soma dos valores
const expected = [32, 58, 13, 6];
// recebendo o nosso array com os values somado em um
const output = addOne(myArray);

// verificando se existe a nossa função
assert.strictEqual(typeof addOne, 'function');
// verificando se o nosso array somado realmente está com cada item somado em um
assert.deepStrictEqual(output, expected);
// verificando se o nosso antigo array não sofreu alterações
assert.deepStrictEqual(myArray, unchanged);
