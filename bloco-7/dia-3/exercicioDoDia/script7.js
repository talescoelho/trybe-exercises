// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui
// função para retornar o tamanho de cada string do nosso array
const wordLengths = words => words.map(a => a.length);

// criando nossa array de strings
const words = ['sun', 'potato', 'roundabout', 'pizza'];
// criando um array com os valores esperados de cada item do nosso array
const expected = [3, 6, 10, 5];

// verificando se minha função existe
assert.strictEqual(typeof wordLengths, 'function');
// criando meu novo array com o tamanho de cada string
const output = wordLengths(words);
// verificando se o tamanho de cada string é do tamanho esperado
assert.deepStrictEqual(output, expected);
