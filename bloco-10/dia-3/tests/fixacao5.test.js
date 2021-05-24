const math = require('../exercicioDeFixacao/math');
test("#subtrair Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.", () => {

  // criando o mock e substituindo a implementação para uma subtração
  const mockSubtrair = jest
    .spyOn(math, "subtrair")
    .mockReturnValue(20);

  expect(mockSubtrair(5, 3)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalledTimes(1);

  // restaurando a implementação original
  math.subtrair.mockRestore();
  expect(math.subtrair(5, 2)).toBe(3);
});
