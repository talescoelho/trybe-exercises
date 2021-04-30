// Escreva a função factorial para passar nos testes já implementados.

const assert = require('assert');
// escreva a função factorial aqui
// criando uma função fatorial com recursividade
const factorial = num => num < 1 ? 1 : factorial(num - 1) * num;
// tentando explicar a recursividade
// quando chamamos a função factorial(4) (irei chamala de 4!) queremos receber 
// como resultado o fatorial do numero inserido neste caso o 4.
// a função faz uma verificação se o número inserido é menor que 1
// se ele for ele vai retornar 1, se não ele vai multiplicar o retorno da função
// fatorial(4 - 1) por 4. Ele irá repetir esses passos até o número ser 1.
// uma maneira mais prática é dizer: 4! = (4 * (3! = (3 * (2! = 2*1))));
// então seus resultados seriam 4! = (4 * (3! = (3 * (2! = 2))))
// 4! = (4 * (3! = (3 * 2))) => 4! = (4 * 6) => 4! = 24

// agora que entendemos como funciona a nossa função vamos efetuar os testes
// aqui vamos testar o 5! que vai retornar 120
const in1 = 5;
const exp1 = 120;

// aqui vamos testar o 9! que vai retornar 362880
const in2 = 9;
const exp2 = 362880;

// aqui vamos testar o 1! que vai retornar 1
const in3 = 1;
const exp3 = 1;

// aqui vamos testar o 0! que vai ter que me retornar 1
const in4 = 0;
const exp4 = 1;

// aqui vamos testar o 3! que vai retornar 6
const in5 = 3;
const exp5 = 6;

// aqui estamos colocando a saída de nossas funções dentro de variáveis
const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

// aqui estamos verificando se nossa saída de função é igual ao que esperamos
assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);