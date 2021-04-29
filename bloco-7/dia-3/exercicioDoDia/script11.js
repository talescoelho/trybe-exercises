// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');

// criando uma função para trocar as vogais minúsculas para uma sequencia de números começando no 1
const removeVowels = (word) => {
  // colocando cada caractere de uma string em um array
  const characters = word.split('');
  // criando o array que vai ser retornado
  const results = [];
  // criando um contador que será inserido seu valor no lugar das vogais
  let count = 1;

  // um for para verificar e trocar cada vogal
  for (let index = 0; index < characters.length; index += 1) {
    // verificar se meu caractere é uma vogal minúscula
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      // inserindo no meu array o valor do contador
      results.push(count);
      // somando +1 para meu contador
      count += 1;
    } else {
      // inserindo as consoantes e as vogaís maiúsculas no meu array
      results.push(characters[index]);
    }
  }
  // retornando meu array o transformando em uma string
  return results.join('');
};

// criando a string que será modificada
const parameter = 'Dayane';
// criando o resultado esperado da minha função
const result = 'D1y2n3';
// verificando se a saída da minha função é a esperada
assert.deepStrictEqual(removeVowels(parameter), result);
