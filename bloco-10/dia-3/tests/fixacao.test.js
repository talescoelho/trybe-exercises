const math = require('../exercicioDeFixacao/math');
jest.mock("../exercicioDeFixacao/math");

test("Faça o mock da funcão subtrair e teste sua chamada.", () => {
  math.subtrair = jest.fn();
  math.subtrair(2, 1);
  expect(math.subtrair).toHaveBeenCalled();
});

test("#multiplicar Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.", () => {
  math.multiplicar = jest.fn().mockReturnValue(10)
  expect(math.multiplicar()).toBe(10);
});

test("#somar Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.", () => {
  math.somar.mockImplementation((a, b) => a + b);
  expect(math.somar(1, 2)).toBe(3);
});

test("#dividir Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.", () => {
  math.dividir = jest.fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  expect(math.dividir()).toBe(2);
  expect(math.dividir()).toBe(5);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);
});
