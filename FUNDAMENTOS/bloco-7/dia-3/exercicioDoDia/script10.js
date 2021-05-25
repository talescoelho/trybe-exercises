// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');
// fazer uma função para colocar uma frase 'Hello' antes de cada string de um array
const greetPeople = (people) => {
  let greeting = 'Hello ';
  // criando um novo array
  let greetings = [];
  // criando um for para inserir a string no array
  for (const person in people) {
    // inserindo a frase no novo array
    greetings.push(greeting + people[person]);
  }
  // retornando o novo array
  return greetings;
};

// criando meu array que vai ser verificado
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// o resultado esperado do retorno da minha função
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
// verificando se o retorno da minha função é como o esperado
assert.deepStrictEqual(greetPeople(parameter), result);
