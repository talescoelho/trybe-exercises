// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const assert = require('assert');
// Função Soma A com B
function sum(a, b) {
  // Verifica se as variaveis 'a' e 'b' não são números
  if (typeof a !== 'number' || typeof b !== 'number') {
    // Lança uma exceção definida pelo programa
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// Verifica se o retorno da função sum(4, 5) é igual em tipo e valor ao valor numérico 9
assert.strictEqual(sum(4, 5), 9, 'Esperado 9');
// Verifica se o retorno da função sum(0, 0) é igual em tipo e valor a valor numérico 0
assert.strictEqual(sum(0, 0), 0, 'Esperado 0');
// Verifica se o programa está tratando minha mensagem de erro quando inserido uma string nos parametros da função
assert.throws(() => sum(4, '5'));