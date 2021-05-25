const assert = require('assert');

// criando uma função que simula uma máquina de doces, onde recebe 2 parâmetros, sendo
// o primeiro o valor do doce e o segundo a quantidade de dinheiro que vc vai colocar na máquina
function getChange(payable, paid) {
  // criando um array com os valores de troco da máquina
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  // criando um array que vai ser o meu troco
  const change = [];
  // criando uma variavel que vai receber o valor que será o meu troco
  let remaining = paid - payable;
  // verificando se o valor que eu inseri é menor que o preço do doce
  if (remaining < 0) {
    // Lança uma exceção definida pelo programa
    throw Error('paid value is not enough');
  }
  // um for para verificar se o troco é maior que o valor restante
  for (let index = 0; index < coins.length; index += 1) {
    // verifica se o troco restante é maior que o maior valor que meu maior troco
    if (coins[index] <= remaining) {
      // inserindo o troco no novo array criado
      change.push(coins[index]);
      // reduzindo o troco
      remaining -= coins[index];
      // reduzindo o index para efetuar novamente a verificação no mesmo valor de troco
      index -= 1;
    }
  };
  // escreva seu código aqui...
  // retornando o novo array criado com o troco
  return change;
}

// criando uma variavel com o valor enviado e o preço do doce iguais
let result = getChange(1, 1); // no change/coins just an empty array
// criando um array vazio pois é o esperado
let expected = [];
// verificando se o retorno da minha função é um array vazio
assert.deepStrictEqual(result, expected);

// A partir daqui será efetuados varios testes com seus retornos esperados
result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

// aqui estamos capturando o erro gerado ao valor inserido ser menor que o preço do doce
assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);