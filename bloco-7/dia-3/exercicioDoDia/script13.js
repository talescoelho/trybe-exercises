// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');

// uma função que vai retornar o segundo e teceiro menores itens do meu array
function secondThirdSmallest(array) {
    // criando um novo array
    let results = []
    // colocando meu array na ordem crescente com o sort
    // explicando: a função dentro do sort vai verificar qual o item é menor e colocar
    // ele um antes do outro;
    array.sort(function (x, y) {
        // se x for menor que y o resultado é negativo então x se mantem em seu lugar
        // e o y também. Se x for maior que o y então ele troca ambos de posição
        return x - y;
    });
    // o novo array recebe os itens na posição 1 e 2 do array passado ordenado 
    results = [array[1], array[2]];
    // retornando meu novo array
    return results;
};

// criando um array que será verificado
const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
// criando um array que vai ser meu resultado esperado
const result = [5, 6];
// testando se a saída da minha função é a esperada
assert.deepStrictEqual(secondThirdSmallest(parameter), result);
