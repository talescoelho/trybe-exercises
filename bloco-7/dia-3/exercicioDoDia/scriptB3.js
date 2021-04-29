// Escreva a função removeMiddle para passar nos testes já implementados.
const assert = require('assert');

// escreva a função removeMiddle aqui
// aqui criamos uma função que remove o item central de um array
// nessa função utilizamos o método de array splice que recebe 2 parâmetros
// o primeiro é o indice de onde será removido o array, e o segundo são
// quantos itens serão retirados do array. Nesta função estaremos retirando o
// item central do array arredondado para baixo e o retornando
const removeMiddle = words => words.splice(Math.floor(words.length / 2), 1);

// aqui estamos criando um array que iremos retirar o item central
const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
// aqui temos o array de como esperamos a saída da função
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
// aqui temos o item que queremos tirar do array
const expectedOutput = ['queen'];
// aqui temos uma constante que recebe o item retirado do array
const output = removeMiddle(words);

// aqui estamos efetuando o teste para verificar se nossa função está retirando o
// item que deveria retirar
assert.deepStrictEqual(output, expectedOutput);
// aqui estamos verificando se o nosso antigo array está com o item central retirado
assert.deepStrictEqual(words, expectedWords);