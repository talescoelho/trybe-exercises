// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
// Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.
const assert = require('assert');

// estamos fazendo uma função para pegar o maior número de um array
const getLargestNumber = (array) => {
    // aqui estamos criando uma variavel que vai receber o primeiro item do array
    let largestNumber = array[0];
    // criando um for para percorrer todo o array enviado via parametro
    for (let index = 1; index < array.length; index += 1) {
        // verificando se o item do array é maior que o item em nossa variavel 'largestNumber'
        if (largestNumber < array[index]) {
            // se ele for maior inserimos ele na nossa variavel 'largestNumber'
            largestNumber = array[index];
        }
    }
    // aqui retornamos o maior numero do array
    return largestNumber;
}
// criando um array de numeros
const parameter = [45, 8, 2, 50, 1, 7, 99];
// o resultado esperado da minha função
const result = 99;
// fazendo a verificação se minha função está retornando o valor esperado
assert.deepStrictEqual(getLargestNumber(parameter), result);
