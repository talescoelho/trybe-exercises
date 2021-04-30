// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
const assert = require('assert');
// função para trocar os divisores de 3 por "fizz", 5 por "buzz" e de ambos por "fizzbuzz"
function myFizzBuzz(num) {
  // verificando se o item enviado não é número
  if (typeof num !== 'number') return false;
  // verificando se o numero enviado é divisivel por 3 e 5 ao mesmo tempo
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  // verificando se o item enviado é divisivel por 3
  if (num % 3 === 0) return 'fizz';
  // verificando se o item enviado é divisivel por 5
  if (num % 5 === 0) return 'buzz';
  // se for um número não divisível por 3 ou 5 está retornando o próprio número
  return num;
}
// implemente seus testes aqui
// verificando se o retorno da minha função passando como parametro o 30 ele retorna o fizzbuzz
assert.deepStrictEqual(myFizzBuzz(30), 'fizzbuzz');
// verificando se o retorno da minha função passando como parametro o 3 ele retorna o fizz
assert.deepStrictEqual(myFizzBuzz(3), 'fizz');
// verificando se o retorno da minha função passando como parametro o 5 ele retorna o buzz
assert.deepStrictEqual(myFizzBuzz(5), 'buzz');
// verificando se eu passar um numero não divisivel por 3 ou 5 ele retorne o próprio número
assert.deepStrictEqual(myFizzBuzz(2), 2);
// verificando se ele passar uma string ele retorna falso
assert.deepStrictEqual(myFizzBuzz('2'), false);
