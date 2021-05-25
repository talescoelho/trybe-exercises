// Escreva a função findTheNeedle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função findTheNeedle aqui
// função que recebe um array e uma string e retorna o index do array que o seu valor seja igual
// a string enviada, se não existir retornar -1
const findTheNeedle = (words, word) => words.findIndex(a => a === word);

// fazendo os testes da minha função
// criando um array de strings
let words = ['house', 'train', 'slide', 'needle', 'book'];
// valor esperado do retorno da minha função findTheNeedle
let expected = 3;
// recebendo o retorno do meu array
let output = findTheNeedle(words, 'needle');
// verificando se a saída do meu array é a esperada
assert.strictEqual(output, expected);

// criando um array de strings
words = ['plant', 'shelf', 'arrow', 'bird'];
// valor esperado do retorno da minha função findTheNeedle
expected = 0;
// recebendo o retorno do meu array
output = findTheNeedle(words, 'plant');
// verificando se a saída do meu array é a esperada
assert.strictEqual(output, expected);

// criando um array de strings
words = ['plant', 'shelf', 'arrow', 'bird'];
// valor esperado do retorno da minha função findTheNeedle
expected = -1;
// recebendo o retorno do meu array
output = findTheNeedle(words, 'plat');
// verificando se a saída do meu array é a esperada
assert.strictEqual(output, expected);