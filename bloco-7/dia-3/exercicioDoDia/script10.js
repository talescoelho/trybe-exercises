// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let greetings = [];
  for (const person in people) {
    greetings.push(greeting + people[person]);
  }
  return greetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

greetPeople(parameter);

assert.deepStrictEqual(greetPeople(parameter), result);
